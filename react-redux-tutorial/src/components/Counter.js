const Counter = ({number, onIncrease, onDecrease}) => {
  return (
    <div>
      <p><em>{number}</em></p>
      <div>
        <button type="button" onClick={onIncrease}>+1</button>
        <button type="button" onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};
export default Counter;