import {React} from 'react';
import Questions from './components/amineqsm';
import './App.css';
import XoGame from './components/xo_game';
import XoGamerandom from './components/xo_random';
import Test from './components/test';


function App() {
  
  return (
    <div className='app'>
      {/* <XoGame/> */}
      {/* <XoGamerandom/> */}
      {/* <Questions/> */}
      <Test/>

    </div>
  );
}

export default App;
