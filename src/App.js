import logo from './logo.svg';
import './App.css';
import Users from './pages/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/Users/User';
import Posts from './pages/Posts';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/* Home*/}
        <Route path='/' element={<Home/>} />
        {/* for users */}
        <Route path='/users' element={<Users/>} />
        <Route path='/user/:id' element={<User/>} />
        {/* for posts */}
        <Route path='/posts' element={<Posts/>} />
        <Route path='/post/:id' element={<User/>} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
