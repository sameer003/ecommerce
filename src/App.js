import Header from './components/header/header';
import Main from './components/main/main';
import {useSelector, useDispatch} from 'react-redux';
import { increaseCounter, decreaseCounter} from './redux/reducers/Counter/counter.actions';
import './App.css';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom';
import Checkout from './components/checkout/checkout';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <Header/>
      {/* <Main/> */}
      <BrowserRouter>
      <Routes >
              <Route exact path='/' element={<Main/>} />
              <Route exact path='/checkout' element={<Checkout/>} />
          </Routes >
    </BrowserRouter>
      {/* <h3 className="text-black italic">Tailwind CSS</h3>
      <div  className="text-black italic">Count: {counter.count}</div>

      <button onClick={() => dispatch(increaseCounter())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded">Increase Count</button>

      <button onClick={() => dispatch(decreaseCounter())} className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Decrease Count</button> */}
    </div>
  );
}

export default App;
