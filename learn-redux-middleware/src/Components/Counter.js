const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <>
      <p>
        <em>{number}</em>
      </p>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
};
export default Counter;
