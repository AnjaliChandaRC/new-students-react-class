import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Second from './views/Second';

function App() {
  return (
  <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/second-page' element={ <Second/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
