import {useState, useCallback, useRef} from 'react';

function App() {
  const nextID = useRef(1);
  const [form, setForm] = useState({username: '', name: ''});
  const [data, setData] = useState({
    user: [],
    uselessValue: null
  });

  const onChange = useCallback(e => { 
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: [value]
    });

  }, [form]);

  const onSubmit = e => { 
    e.preventDefault();
    const { name, username } = form;

    const info = {
      id: nextID.current,
      name,
      username
    };

    setData({
      ...data,
      user: data.user.concat(info)
    });

    setForm({
      username: '',
      name: ''
    });

    nextID.current += 1;
  };

  const onRemove = id => { 
    setData({
      ...data,
      user: data.user.filter(info => info.id !== id)
    });
  };


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
