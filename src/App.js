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
import AdminProfile from './Pages/Admin/AdminProfile';
import AdminCategories from './Pages/Admin/AdminCategories';
import AdminQuizzes from './Pages/Admin/AdminQuizzes';
import AdminAddQuiz from './Pages/Admin/AdminAddQuiz';
import UserProfile from './Pages/User/UserProfile';
import UserCurrentQizz from './Pages/User/UserCurrentQizz';
import Protected from './Pages/Protected';
import UserProvider from './context/UserProvider';


function App() {

  return (  
    <UserProvider> 
    <div className ="APP">
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path='/admin-dashbord' element={<Protected Component={Admindashbord}/>}/>
    <Route path="/AdminProfile" element={<Protected Component={AdminProfile}/>}/>
    <Route path="/AdminCategories" element={<Protected Component={AdminCategories}/>}/>
    <Route path="/AdminQuizzes" element={<Protected Component={AdminQuizzes}/>}/>
    <Route path="/AdminAddQuiz" element={<Protected Component={AdminAddQuiz}/>}/>
    <Route path='/Userdashbord' element={<Protected Component={Userdashbord}/>} />
    <Route path='/UserProfile' element={<Protected Component={UserProfile}/>} />
    <Route path='/UserCurrentQuiz' element={<Protected Component={UserCurrentQizz}/>} />
    </Routes>
    </BrowserRouter>
   </div>
   </UserProvider>
  );
  
}
export default App;


