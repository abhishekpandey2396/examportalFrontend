// import { useEffect, useState } from "react";
// import { Button, Card, CardBody, CardHeader, Col, Container,Form,Input, FormGroup, Label, Row } from "reactstrap";
// import Base from "../components/Base";
// import { isEmail } from "validator";
// import { signUp } from "../services/user-service";
// import {toast} from 'react-toastify';


// function Signup(){

//   const required = (value) => {
//       if (!value) {
//          return (
//         <div className="invalid-feedback d-block">
//            This field is required!
//            </div>
//         );
//        }
//      };

//     const vfname = (value) => {
//     if (value.length < 3 || value.length > 20) {
//       return (
//         <div className="invalid-feedback d-block">
//           The username must be between 3 and 20 characters.
//         </div>
//       );
//     }
//   };
   
//   const vlname = (value) => {
//     if (value.length < 3 || value.length > 20) {
//       return (
//         <div className="invalid-feedback d-block">
//           The username must be between 3 and 20 characters.
//         </div>
//       );
//     }
//   };

//   const vusername = (value) => {
//     if (value.length < 3 || value.length > 20) {
//       return (
//         <div className="invalid-feedback d-block">
//           The username must be between 3 and 20 characters.
//         </div>
//       );
//     }
//   };

//   const validEmail = (value) => {
//     if (!isEmail(value)) {
//       return (
//         <div className="invalid-feedback d-block">
//           This is not a valid email.
//         </div>
//       );
//     }
//   };
   
//   const vpassword = (value) => {
//     if (value.length < 6 || value.length > 40) {
//       return (
//         <div className="invalid-feedback d-block">
//           The password must be between 6 and 40 characters.
//         </div>
//       );
//     }
//   };

//   const vmobile = (value) => {
//     if (value.length < 0 || value.length > 11) {
//       return (
//         <div className="invalid-feedback d-block">
//           The mobile number must be of 10 digits.
//         </div>
//       );
//     }
//   };

//   // react will handle the data comming from user
//   const [formdata,setFormData] = useState({
//     fname:"",
//     lname:"",
//     username:"",
//     password:"",
//     email:"",
//     mobile:""
//   })

//   const [error,setError]=useState({
//     errors:{},
//     isError:false
//   })

//   const [isSubmit,setIsSubmit]=useState(false);

//   //setdata is working asyn,so to check on console we use useEffect
//   useEffect(()=>{
//     console.log(error);
//     if(Object.keys(error).length===0 && isSubmit){
//       console.log(formdata);
//     }
//    },[error,formdata])

//   //handling change
//   function handleChange(event,property){
//     // Dynamically setting the value
//     setFormData({...formdata,[property]:event.target.value})
//   }

//   //Reseting form data to blank
//   const Reset=()=>{
//     setFormData({
//       fname:"",
//       lname:"",
//       username:"",
//       password:"",
//       email:"",
//       mobile:"",
//     })
//   }
  
//   const validate = (values)=>{
//   const error = {};
//    if(!values.fname){
//     error.fname="First name is required"
//     } 
//    if(!values.lname){
//     error.lname="Last name is required"
//     } 
//    if(!values.username){
//     error.username="username is required"
//     } 
//    if(!values.password){
//     error.password="password name is required"
//     } 
//    if(!values.email){
//     error.email="email name is required"
//     } 
    
//    if(!values.mobile){
//     error.mobile="mobile number is required"
//     }

//     return error;
//   }

//   const submitForm=(event)=>{
//     event.preventDefault();

//     //data validation
//     setError(validate(formdata));
//     setIsSubmit(true);

//     //call server api to sent data
//     signUp(formdata).then((resp)=>{
//       console.log(resp)
//       console.log("Success log")
//       if(isSubmit){
//       toast.success("User Registered Successfully!!")
//       }
//       setFormData({
//         fname:"",
//         lname:"",
//         username:"",
//         password:"",
//         email:"",
//         mobile:"",
//       })
//     }).catch((error)=>{
//       console.log(error)
//       console.log("Error log")
//       toast.error("plese provide the valid fields")
//     })
    
//   }

//   return(
//       <Base>
      
//       <Container>

//         <Row className="mt-4">

//           <Col sm={{size:6,offset:3}}>
//           <Card color="dark"  inverse>

//           <CardHeader>
//             <h2 className="text-center">Register here !!</h2>
//           </CardHeader>
//           <CardBody>
//             {/* Creating form */}
//             <Form onSubmit={submitForm}>

//               {/* first name */}
//              <FormGroup>
//               <Label for="fname">Enter First Name</Label>
//               <Input 
//               type="text" 
//               placeholder="First Name" 
//               id="fname"
//               onChange={(e)=>handleChange(e,'fname')}
//               value={formdata.fname}
//               validations={[required, vfname]}
//               />
//               <p style={{ color: 'red' }}>{error.fname}</p>
//              </FormGroup>

//              {/* Last name */}
//              <FormGroup>

//               <Label for="lname">Enter Last Name</Label>
//               <Input type="text"
//                placeholder="Last Name" 
//                id="lname"
//                onChange={(e)=>handleChange(e,'lname')}
//                value={formdata.lname}
//                validations={[required, vlname]}
//                />
//               <p style={{ color: 'red' }}>{error.lname}</p>
//              </FormGroup>

//               {/* username */}
//              <FormGroup>
//               <Label for="username">Enter Username</Label>
//               <Input type="text"
//                placeholder="Username" 
//                id="userName"
//                onChange={(e)=>handleChange(e,'username')}
//                value={formdata.username}
//                validations={[required, vusername]}
//                />
//               <p style={{ color: 'red' }}>{error.username}</p>
//              </FormGroup>

//               {/* Password */}
//              <FormGroup>
//               <Label for="password">Enter Password</Label>
//               <Input type="password"
//                placeholder="Password" 
//                id="password"
//                onChange={(e)=>handleChange(e,'password')}
//                value={formdata.password}
//                validations={[required, validEmail]}
//                />
//                <p style={{ color: 'red' }}>{error.password}</p>
//              </FormGroup>

//               {/* email */}
//              <FormGroup>
//               <Label for="email">Enter Email</Label>
//               <Input type="email" 
//               placeholder="email" 
//               id="email"
//               onChange={(e)=>handleChange(e,'email')}
//               value={formdata.email}
//               validations={[required, vpassword]}
//               />
//               <p style={{ color: 'red' }}>{error.email}</p>
//              </FormGroup>


//               {/* mobile no */}
//              <FormGroup>
//               <Label for="mobile">Enter mobile no</Label>
//               <Input type="number" 
//               placeholder="mobile no" 
//               id="mobile"
//               onChange={(e)=>handleChange(e,'mobile')}
//               value={formdata.mobile}
//               validations={[required, vmobile]}
//               />
//               <p style={{ color: 'red' }}>{error.mobile}</p>
//              </FormGroup>

//              <Container className="text-center">
//               <Button color="dark" >Register</Button>
//               <Button color="secondary" 
//               className="ms-2"
//               onClick={Reset}
//               >Reset</Button>
//              </Container>

//             </Form>

//         </CardBody>
//         </Card>
//         </Col>
//         </Row>
//       </Container>
//       </Base>
//   );
// };
// export default Signup






// 2nd attempt

import { Card, CardBody, CardHeader, Col, Container,Row } from "reactstrap";
import Base from "../components/Base";
import { Form, Button, Checkbox, DatePicker, Input } from "antd";
import { useState } from "react";
import { signUp } from "../services/user-service";
import {toast} from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router";

function Signup () {

  const navigate=useNavigate();

  const [formdata,setFormData] = useState({
        fname:"",
        lname:"",
        username:"",
        password:"",
        email:"",
        mobile:""
      })

  const [error,setError]=useState({
        errors:{},
        isError:false
      })
      
  // const [isSubmit,setIsSubmit]=useState(false);

  function handleChange(event,property){
        // Dynamically setting the value
        setFormData({...formdata,[property]:event.target.value})
      }    

  const submitForm=(event)=>{
        let birthDate = event.dob.toISOString().split('T')[0]
        let payload = {
          fname: event.fname,
          lname:event.lname,
          username:event.userName,
          password:event.password,
          email:event.email,
          mobile:event.mobile,
          dob:birthDate
      }
        //call server api to sent data
        signUp(payload).then((response)=>{
          console.log("hi")
          console.log(response)
          console.log("Success log")
          toast.success("User Registered Successfully!!")
          navigate("/Login")
          // setIsSubmit(true);
          // if(isSubmit){
          // toast.success("User Registered Successfully!!")
          // }
         
        }).catch((error)=>{
          console.log(error)
          console.log("Error log")
          toast.error("please provide the valid fields")
        })
      }

  return (
    <Base>
    <Container>
      <Row className="mt-4 mb-4">
       <Col sm={{size:6,offset:3}}>
       <Card color="dark"  inverse >
       <CardHeader>
        <h2 className="text-center">Register here !!</h2>
       </CardHeader>
        <CardBody>
        <Form
          autoComplete="off"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={submitForm}
          onFinishFailed={(error) => {
          console.log({ error });
          }}
        >
          {/* First Name */ }
          <Form.Item
            name="fname"
            className="form-item"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please enter your first name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          onChange={(e)=>handleChange(e,'fname')}
          value={formdata.fname}
          >
          <Input placeholder="Type your first name" />
          
          </Form.Item>

          {/* Last Name */ }
          <Form.Item
            name="lname"
            className="form-item"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter your last name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
            onChange={(e)=>handleChange(e,'lname')}
            value={formdata.lname}
          >
          <Input placeholder="Type your last name" />
          </Form.Item>
         
          {/* username */ }
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
            value={formdata.username}
          >
          <Input placeholder="Type your username" />
          </Form.Item>

          <Form.Item
            name="email"
            className="form-item"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
           
            onChange={(e)=>handleChange(e,'email')}
            value={formdata.email}
          >
            <Input placeholder="Type your email" />
          </Form.Item>

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
            value={formdata.password}
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            className="form-item"
            label="Confirm Password"
            
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            hasFeedback
           
            onChange={(e)=>handleChange(e,'confirmpassword')}
            value={formdata.confirmpassword}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item
            name="dob"
            className="form-item"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
           
            onChange={(e)=>handleChange(e,'dob')}
            value={formdata.dob}
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            className="form-item"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              {" "}
              Agree to our <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          {/*wrapperCol={{ span: 24 }} */}
          <Form.Item   >
           <Button className="mb-3" style={{backgroundColor:"#08D9D6 ",width:"100%",border:0,color:"white"}} htmlType="submit" onSubmit={submitForm}>
              SignUp
            </Button>
            <br/>
            <Button style={{backgroundColor:"#FF2E63 ",width:"100%",border:0,color:"white"}} htmlType="reset">
              Reset
            </Button>
          </Form.Item>
        </Form>
        
        </CardBody>
       </Card>
       </Col>
      </Row>
    </Container>
    </Base>
    
  );
}

export default Signup




// 3rd attempt
// import React from "react";
// import { Card, CardBody, CardHeader, Col, Container,Row } from "reactstrap";
// import Base from "../components/Base";
// import { Form, Button, Checkbox, DatePicker, Input,Typography} from "antd";
// // import { useState } from "react";
// // import { signUp } from "../services/user-service";
// // import {toast} from 'react-toastify';
// import UseFormDetailes from "../services/utils/apis/UseForm";
// import NOTIFICATION_DETAILS from "../services/utils/contants/constants";
// import showNotification from "../services/utils/views/showNotification";

// function Signup () {

//   // Add onSubmit & handleSubmission functions inside our //ContactForm component
  
  
//   const [form] = Form.useForm();
//   const { Title, Text } = Typography;
  
//   const handleSubmission = React.useCallback(
//       (result) => {
//         if (result.error) {
//           // Handle Error here
//           showNotification("error", NOTIFICATION_DETAILS.error);
//         } else {
//           // Handle Success here
//           showNotification("success", NOTIFICATION_DETAILS.success);
//           form.resetFields();
//         }
//       },
//       [form]
//     );
  
//   const onSubmit = React.useCallback(async () => {
//       let values;
//       try {
//         values = await form.validateFields(); // Validate the form fields
//       } catch (errorInfo) {
//         return;
//       }
//       const result = await UseFormDetailes(values); // Submit the form data to the backend
//       handleSubmission(result); // Handle the submission after the API Call
//     }, [form, handleSubmission]);
  
  
//   return (
//     <Base>
//     <Container>
//       <Row className="mt-4 mb-4">
//        <Col sm={{size:6,offset:3}}>
//        <Card color="dark"  inverse >
//        <CardHeader>
//         <h2 className="text-center">Register here !!</h2>
//        </CardHeader>
//         <CardBody>
//         <Form
//           autoComplete="off"
//           labelCol={{ span: 24 }}
//           wrapperCol={{ span: 24 }}
//           onFinish={(values) => {
//           console.log({ values });
//           }}
//           onFinishFailed={(error) => {
//             console.log({ error });
//           }}
//         >
//           {/* First Name */ }
//           <Form.Item
//             name="firstName"
//             className="form-item"
//             label="First Name"
//             rules={[
//               {
//                 required: true,
//                 message: "Please enter your first name",
//               },
//               { whitespace: true },
//               { min: 3 },
//             ]}
//             hasFeedback
//           id="fname"
//           // onChange={(e)=>handleChange(e,'fname')}
//           // value={formdata.fname}
//           >
//           <Input placeholder="Type your first name" />
          
//           </Form.Item>

//           {/* Last Name */ }
//           <Form.Item
//             name="lName"
//             className="form-item"
//             label="Last Name"
//             rules={[
//               {
//                 required: true,
//                 message: "Please enter your last name",
//               },
//               { whitespace: true },
//               { min: 3 },
//             ]}
//             hasFeedback
//             id="lname"
//             // onChange={(e)=>handleChange(e,'lname')}
//             // value={formdata.lname}
//           >
//           <Input placeholder="Type your last name" />
//           </Form.Item>
         
//           {/* username */ }
//           <Form.Item
//             name="userName"
//             className="form-item"
//             label="UserName"
//             rules={[
//               {
//                 required: true,
//                 message: "Please enter your username",
//               },
//               { whitespace: true },
//               { min: 3 },
//             ]}
//             hasFeedback
//             id="username"
//             // onChange={(e)=>handleChange(e,'username')}
//             // value={formdata.username}
//           >
//           <Input placeholder="Type your username" />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             className="form-item"
//             label="Email"
//             rules={[
//               {
//                 required: true,
//                 message: "Please enter your email",
//               },
//               { type: "email", message: "Please enter a valid email" },
//             ]}
//             hasFeedback
//             id="email"
//             // onChange={(e)=>handleChange(e,'email')}
//             // value={formdata.email}
//           >
//             <Input placeholder="Type your email" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             className="form-item"
//             label="Password"
//             rules={[
//               {
//                 required: true,
//               },
//               { min: 6 },
//               {
//                 validator: (_, value) =>
//                   value && value.includes("A")
//                     ? Promise.resolve()
//                     : Promise.reject("Password does not match criteria."),
//               },
//             ]}
//             hasFeedback
//             id="password"
//             // onChange={(e)=>handleChange(e,'password')}
//             // value={formdata.password}
//           >
//             <Input.Password placeholder="Type your password" />
//           </Form.Item>

//           <Form.Item
//             name="confirmPassword"
//             className="form-item"
//             label="Confirm Password"
            
//             dependencies={["password"]}
//             rules={[
//               {
//                 required: true,
//               },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(
//                     "The two passwords that you entered does not match."
//                   );
//                 },
//               }),
//             ]}
//             hasFeedback
//             id="confirmpassword"
//             // onChange={(e)=>handleChange(e,'confirmpassword')}
//             // value={formdata.confirmpassword}
//           >
//             <Input.Password placeholder="Confirm your password" />
//           </Form.Item>

//           <Form.Item
//             name="dob"
//             className="form-item"
//             label="Date of Birth"
//             rules={[
//               {
//                 required: true,
//                 message: "Please provide your date of birth",
//               },
//             ]}
//             hasFeedback
//             id="dob"
//             // onChange={(e)=>handleChange(e,'dob')}
//             // value={formdata.dob}
//           >
//             <DatePicker
//               style={{ width: "100%" }}
//               picker="date"
//               placeholder="Chose date of birth"
//             />
//           </Form.Item>

//           <Form.Item
//             name="agreement"
//             className="form-item"
//             wrapperCol={{ span: 24 }}
//             valuePropName="checked"
//             rules={[
//               {
//                 validator: (_, value) =>
//                   value
//                     ? Promise.resolve()
//                     : Promise.reject(
//                         "To proceed, you need to agree with our terms and conditions"
//                       ),
//               },
//             ]}
//           >
//             <Checkbox>
//               {" "}
//               Agree to our <a href="#">Terms and Conditions</a>
//             </Checkbox>
//           </Form.Item>

//           {/*wrapperCol={{ span: 24 }} */}
//           <Form.Item   >
//             <Button block type="primary" htmlType="submit" onClick={onSubmit}>
//               SignUp
//             </Button>
//             <br/>
//             <Button block type="primary" htmlType="reset">
//               Reset
//             </Button>
//           </Form.Item>
//         </Form>
//         </CardBody>
//        </Card>
//        </Col>
//       </Row>
//     </Container>
//     </Base>
    
//   );
// }

// export default Signup