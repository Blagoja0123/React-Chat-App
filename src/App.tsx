import Register from './pages/Register';
import './style.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { ReactNode, useContext } from 'react';
import { AuthContext, AuthUserContext } from './context/AuthContext';
function App(){
  
  interface AuthUser{
    uid: string | null | undefined,
    displayName: string | null | undefined,
    photoURL: string | null | undefined,
};

  const currentUser = useContext(AuthContext);

  const validateUser = (user: any) =>{
    if(user.uid === undefined){
      return false;
    }

    return true;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={validateUser(currentUser) ? <Home/> : <Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
