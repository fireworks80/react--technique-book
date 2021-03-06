import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';
import Counter from '../Components/Counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />;
};

const mapStateToProps = ({ counter }) => ({
  number: counter,
});
const mapDispatchToProps = {
  increaseAsync,
  decreaseAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
