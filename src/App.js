import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Services from './pages/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import CheckOut from './pages/CheckOut/CheckOut';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/service/:serviceId' element={
      <RequireAuth>
        <CheckOut></CheckOut>
      </RequireAuth>
      }></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>

    </Routes>

    <Footer></Footer>
       
    </div>
  );
}

export default App;
