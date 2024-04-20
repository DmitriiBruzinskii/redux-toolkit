import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label='inc' onClick={() => dispatch(increment())} >Inc</button>
        {value}
        <button aria-label='dec' onClick={() => dispatch(decrement())} >Dec</button>
      </div>
    </div>
  )
}

export default Counter;