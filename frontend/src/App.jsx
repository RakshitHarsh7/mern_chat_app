import react from 'react';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './context/AuthContext';

function App() {

  const {authUser} = useAuthContext();

  return (
    <div className="p-4 flex h-screen items-center justify-center">
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
