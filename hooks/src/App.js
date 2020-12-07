import { useState } from 'react';

import Info from './Info';
function App() {
  const [visible, setVisible] = useState(false);

  const onVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div>
        <button type='button' onClick={onVisible}>
          {visible ? '숨기기' : '보이기'}
        </button>
      </div>
      <div>{visible && <Info />}</div>
    </>
  );
}

export default App;
