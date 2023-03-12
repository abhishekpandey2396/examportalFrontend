import React from 'react'
import Base from '../../components/Base'
import Sidebar from '../../components/Sidebar'


// const Admindashbord =()=> {
//   return (
//     <Base>
//     <Sidebar>
//     <div> 
//       <h1>This is admindashbord</h1>
//     </div>
//     </Sidebar>
//     </Base>
    
//   )
// }

// export default Admindashbord



import style from "./Dashboard.module.css";
import {useState  , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { privateAxios } from '../../services/helper';

  function Admindashbord()
  {

       const [exam , setExam] = useState("Updating...");
       const [question , setQuestion] = useState("Updating...");
       const [user , setUser] = useState("Updating...");

         useEffect(() => {
             async function getAllExam(){
                 let value  = await privateAxios.get('/exam');
                 setExam("We have total " +value.data.length + " exam");
             }
             getAllExam();


             async function getAllQuestions(){
                 let value  = await privateAxios.get('/question');
                 setQuestion("We have total " +value.data.length + " question");
             }
             getAllQuestions();


             async function getAllUsers(){
                 let value  = await privateAxios.get('/user');
                 setUser("We have total " +value.data.length + " user");
             }
             getAllUsers();
         })

         
         const navigate = useNavigate()
         

         function showExam(){
              navigate("/AdminDashboard/Exam");
         }

         function showQuestions(){
          navigate("/AdminDashboard/Question");
         }

         function showUsers(){
            navigate("/AdminDashboard/StudentList");
         }


      return(
        <Base>
        <Sidebar>
          
        <>
                        <div id={style.displayHeadingBox}> 
                            <h1>Dashboard</h1>     
                        </div>

                         <div id={style.box1}>
                            <p id={style.countOfExam}>{exam}</p>
                                <button onClick={showExam}>View Details</button>
                         </div>

                           <div id={style.box2}>
                               <p  id={style.countOfQuestion}>{question}</p>
                                <button onClick={showQuestions}>View Details</button> 
                           </div>

                           <div id={style.box3}>
                               <p id={style.countOfUser}>{user}</p>
                                 <button onClick={showUsers} >View Details</button>
                           </div>
                          
          </>
        </Sidebar>
        </Base>
      );
  }

  export default Admindashbord;