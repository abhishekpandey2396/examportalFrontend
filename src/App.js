 //import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import About from './Pages/About';

import Userdashbord from './Pages/User/Userdashbord';
import Admindashbord from './Pages/Admin/Admindashbord';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';
import { isLoggedIn } from './auth';
import AdminProfile from './Pages/Admin/AdminProfile';

import AdminCategories from './Pages/Admin/AdminCategories';
import AdminQuizzes from './Pages/Admin/AdminQuizzes';
import AdminAddQuiz from './Pages/Admin/AdminAddQuiz';
import UserProfile from './Pages/User/UserProfile';
import UserCurrentQizz from './Pages/User/UserCurrentQizz';
import UserProtected from './Pages/UserProtected ';
import AdminProtected from './Pages/AdminProtected';

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
    <Route path="/About" element={<About/>}/>

    {/* <Route path="/user" element={<Privateroute/>}/> */}
    <Route path='/admin-dashbord' element={<AdminProtected Component={Admindashbord}/>}/>
    <Route path="/AdminProfile" element={<AdminProtected Component={AdminProfile}/>}/>
    <Route path="/AdminCategories" element={<AdminProtected Component={AdminCategories}/>}/>
    <Route path="/AdminQuizzes" element={<AdminProtected Component={AdminQuizzes}/>}/>
    <Route path="/AdminAddQuiz" element={<AdminProtected Component={AdminAddQuiz}/>}/>
    <Route path='/Userdashbord' element={<UserProtected Component={Userdashbord}/>} />
    <Route path='/UserProfile' element={<UserProtected Component={UserProfile}/>} />
    <Route path='/UserCurrentQuiz' element={<UserProtected Component={UserCurrentQizz}/>} />
    
    
    
    </Routes>
    </BrowserRouter>
   </div>
   </MyContext.Provider>
  );
  
}
export default App;
export {MyContext};

