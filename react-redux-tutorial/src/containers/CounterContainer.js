import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ number: state.counter.number });

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

function CounterContainer({ number, increase, decrease }) {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
