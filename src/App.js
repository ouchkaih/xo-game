import {React} from 'react';
import './App.css';
import XoGame from './components/xo_game';
import XoGamerandom from './components/xo_random';


function App() {
  
  return (
    <div className='app'>
      {/* <XoGame/> */}
     <XoGamerandom/>

    </div>
  );
}

export default App;
