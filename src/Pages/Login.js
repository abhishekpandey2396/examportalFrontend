// import { useState } from "react";
// import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
// import Base from "../components/Base";
// import {toast} from 'react-toastify';
// import { loginUser } from "../services/user-service";
// const Login = ()=>{
  
//   const [loginDetails,setLoginDetails] = useState ({
//     username:"",
//     password:""
//   })

//   const handleChange=(event,property)=>{
//     let actualValues = event.target.value
//     setLoginDetails({...loginDetails,[property]:actualValues});
//   }

//   const handleSubmit = (event)=>{
//     event.preventdefault();
//     console.log(event);
//    // validation
//     if(loginDetails.username.trim()===""  || loginDetails.password.trim()===""){
//       toast.error("username or password is required");
//       // return;
//     }

//     //submit data to server
//     loginUser(loginDetails).then((jwtTokenData)=>{
//       console.log("user login : ")
//       console.log(jwtTokenData);
//       toast.success("Login Success")
//     }).catch(error=>{
//       console.log(error)
//       if(error.response.status==400 || error.response.status==404){
//         toast.error(error.response.data.message)
//       }else{
//         toast.error("Something went wrong !!");
//       }
//     })
    
//   }

//   const handleReset=(event)=>{
//     setLoginDetails({
//       username:"",
//       password:""
//     })
//   }

//     return(
//         <Base>
//         <Container>
//           <Row className="mt-4">
//             <Col sm={{size:6,offset:3}}>
//               <Card color="dark" inverse>
//                   <CardHeader>
//                     <h2 className="text-center">Login here!!</h2>
//                      <CardBody >
//                         <Form onSubmit={handleSubmit}>
//                           <FormGroup>
//                             <Label for="userName">Enter your UserName</Label>
//                             <Input type="text"
//                              placeholder="username" 
//                              id="userName"
//                              value={loginDetails.username}
//                              onChange={(e)=>handleChange(e,'username')}/>
//                           </FormGroup>

//                           <FormGroup>
//                             <Label for="password">Enter your Password</Label>
//                             <Input type="password"
//                              placeholder="password"
//                              id="password"
//                              value={loginDetails.password}
//                              onChange={(e)=>handleChange(e,'password')}
//                              />
//                           </FormGroup>

//                           <Container className="text-center">
//                             <Button  color="dark" >Login</Button>
//                             <Button onClick={handleReset} className="" color="secondary" >Reset</Button>
//                           </Container>
//                         </Form>
//                      </CardBody>

//                   </CardHeader>

//                 </Card>
                
//                 </Col>
//             </Row>


//         </Container>

//         </Base>
//     );
// };

// export default Login


// 2nd login

import { useState } from "react";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space, message } from "antd";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Base from "../components/Base";
import {toast} from 'react-toastify';
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import { useContext } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router";
const Login = ()=>{

  const navigate=useNavigate();

  let [userValue,satUserValue] = useContext(MyContext);

  const [loginDetails,setLoginDetails] = useState ({
    username:"",
    password:""
  })

  const handleChange=(event,property)=>{
    let actualValues = event.target.value
    setLoginDetails({...loginDetails,[property]:actualValues});
  }

  const handleSubmit = (event)=>{
    console.log(event)
    let payload = {
      username:event.userName,
      password:event.password,
    }
  
    //submit data to server
    loginUser(payload).then((data)=>{
      console.log("user login : ")
      console.log(data);

     
      doLogin(data,()=>{
        console.log("Login details is stored to Localstorage")
      })
      satUserValue(true)
      toast.success("Login Success")
      navigate("/user/dashbord")
    }).catch(error=>{
      console.log(error)
      if(error.response.status==400 || error.response.status==404){
        toast.error(error.response.data.message)
      }else{
        toast.error("Something went wrong !!");
      }
    })
    
  }

  const handleReset=(event)=>{
    setLoginDetails({
      username:"",
      password:""
    })
  }

    return(
        <Base>
        <Container>
          <Row className="mt-4">
            <Col sm={{size:6,offset:3}}>
              <Card color="dark" inverse>
                  <CardHeader>
                    <h2 className="text-center">Login here!!</h2>
                     <CardBody >
                     <Form
                        autoComplete="off"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        onFinish={handleSubmit}
                        onFinishFailed={(error) => {
                        console.log({ error });
                        }}
                        >
          <Form.Item
            name="userName"
            className="form-item"
            label="UserName"
            rules={[
              {
                required: true,
                message: "Please enter your username",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
           
            onChange={(e)=>handleChange(e,'username')}
            
          >
          <Input placeholder="Type your username" />
          </Form.Item>

          {/* First Name */ }
          <Form.Item
            name="password"
            className="form-item"
            label="Password"
            rules={[
              {
                required: true,
                // pattern : new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),
              
              },
              
              {
                validator: (_, value) =>
                  value && value.includes(value)
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
            ]}
            hasFeedback
            
            onChange={(e)=>handleChange(e,'password')}
           
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Container className="text-center">
          <Form.Item   >
            <Button block type="primary" htmlType="submit" >
              Login
            </Button>
            
          </Form.Item>
          </Container>
        </Form>
          </CardBody>

      </CardHeader>

    </Card>
    
    </Col>
</Row>


        </Container>

        </Base>
    );
};

export default Login