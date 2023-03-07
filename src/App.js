 //import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Privateroute from './Pages/privateroute';
import Userdashbord from './Pages/userdashbord';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';
import { isLoggedIn } from './auth';

const MyContext = createContext()

function App() {

let islogin = isLoggedIn();
const [userValue,satUserValue] = useState(islogin);

  return (
  <MyContext.Provider value={[userValue,satUserValue]}>
   <div className ="APP">
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/About" element={<Signup/>}/>

    <Route path="/user" element={<Privateroute/>} >
    <Route path='dashbord' element={<Userdashbord/>} />
    </Route>
    
    
    </Routes>
    </BrowserRouter>
   </div>
   </MyContext.Provider>
  );
  
}
export default App;
export {MyContext};

