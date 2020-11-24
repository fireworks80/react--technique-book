import { useState, useCallback, useRef } from 'react';
import produce from 'immer';

function App() {
  const nextID = useRef(1);
  const [form, setForm] = useState({username: '', name: ''});
  const [data, setData] = useState({
    user: [],
    uselessValue: null
  });

  const onChange = useCallback(e => { 
    const { name, value } = e.target;

    // setForm({
    //   ...form,
    //   [name]: [value]
    // });

    // setForm(
    //   produce(form, draft => { 
    //     draft[name] = value;
    //   })
    // )

    setForm(produce(draft => { 
      draft[name] = value;
    }));

  }, []);

  const onSubmit = useCallback(e => { 
    e.preventDefault();
    const { name, username } = form;

    const info = {
      id: nextID.current,
      name,
      username
    };

    // setData({
    //   ...data,
    //   user: data.user.concat(info)
    // });

    // setData(produce(data, draft => { 
    //   draft.user.push(info);
    // }));

    setData(produce(draft => {
      draft.user.push(info);
    }));

    setForm({
      username: '',
      name: ''
    });

    nextID.current += 1;
  }, [form]);

  const onRemove = useCallback(id => { 
    // setData({
    //   ...data,
    //   user: data.user.filter(info => info.id !== id)
    // });

    // setData(produce(data, draft => {
    //   draft.user.splice(draft.user.findIndex(info => info.id === id), 1);
    // }));

    setData(produce(draft => { 
      draft.user.splice(draft.user.findIndex(info => info.id === id), 1);
    }));
  }, []);


  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input type="text" name="name" placeholder="이름" value={form.name} onChange={onChange} />
        <button>등록</button>
      </form>
      <ul>
        {
          data.user.map(info => <li key={info.id} onClick={() => onRemove(info.id)}>{info.username} ({info.name})</li>)
        }
      </ul>
    </>
  );
}

export default App; 
