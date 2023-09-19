import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { plus, minus } from './redux/counter-reducer';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className='app'>
      <h1>Счетчик</h1>
      <p className='result'>{count}</p>
      <button className='btn' onClick={() => dispatch(plus())}>+</button>
      <button className='btn' onClick={() => dispatch(minus())}>-</button>
    </div>
  );
}

export default App;