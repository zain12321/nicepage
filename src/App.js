import logo from './logo.svg';
import './App.css';
import MainComponents from './components/MainComponents';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainComponents/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
