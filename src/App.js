import "./styles/output.css";
import {useSelector, useDispatch} from 'react-redux';
import { increaseCounter, decreaseCounter} from './redux/reducers/Counter/counter.actions';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 h-screen w-screen flex items-center justify-around">
      <h3 className="text-white italic">Tailwind CSS</h3>
      <div  className="text-white italic">Count: {counter.count}</div>

      <button onClick={() => dispatch(increaseCounter())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded">Increase Count</button>

      <button onClick={() => dispatch(decreaseCounter())} className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Decrease Count</button>
    </div>
  );
}

export default App;
