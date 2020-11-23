import {useState, useCallback, useRef} from 'react';

function App() {
  const nextID = useRef(1);
  const [form, setForm] = useState({name: '', username: ''});
  const [data, setData] = useState({array: [], uselessValue: null});

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: [value]
    });
  }, [form]);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    const {name, username} = form;
    const info = {
      id: nextID.current,
      name: name,
      username: username
    };

    setData({
      ...data,
      array: data.array.concat(info)
    });

    setForm({
      name: '',
      username: ''
    });

    nextID.current += 1;
  }, [data, form.name, form.username]);

  const onRemove = useCallback(id => {
    setData({
      ...data,
      array: data.array.filter(info => info.id !== id)
    });
  }, [data]);


  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input type="text" name="name" placeholder="이름" value={form.name} onChange={onChange} />
        <button>등록</button>
      </form>
      <ul>
        {data.array.map(info => (
          <li key={info.id} onClick={() => onRemove(info.id)}>{info.username} ({info.name})</li>
        ))}
      </ul>
    </>
  );
}

export default App;
