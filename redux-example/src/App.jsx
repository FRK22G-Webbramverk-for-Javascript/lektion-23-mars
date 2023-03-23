import './App.css';

import { useDispatch } from 'react-redux';
import { increase } from './actions/counterActions';

import ViewCounter from './ViewCounter';

function App() {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increase(5));
  }

  return (
    <div className="App">
      <ViewCounter />
      <button onClick={ handleIncrease }>Öka</button>
    </div>
  )
}

export default App
