import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import NavBar from './pages/Header/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <Header></Header>
    <Routes>
      <Route to='/home' element={}></Route>
    </Routes>
       
    </div>
  );
}

export default App;
