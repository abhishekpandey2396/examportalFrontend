import {NavLink as ReactLink} from 'react-router-dom';
import { NavLink } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import { getCurrentUser, isLoggedIn } from '../auth';
import { NavItem } from 'react-bootstrap';
import { useContext } from 'react';
import { MyContext } from '../App';


function CustomNavbar() {

  
  
  let [userValue,satUserValue] = useContext(MyContext);


  const[login,setLogin]=useState(false);
  const[user,setUser]=useState(null);

  useEffect(()=>{

   setLogin(isLoggedIn())
   setUser(getCurrentUser())

  })

  const logouthandler = ()=>{
    localStorage.removeItem("data");
    satUserValue(false)
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand >ExamPortal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink tag={ReactLink} to="/" href="/">Home</NavLink>
            <NavLink tag={ReactLink} to="/About" href="/About">About</NavLink>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Contact us
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Nav>
            <NavItem className='d-flex'>
              
              {
                userValue &&(
                  <>
                
                    <NavLink onClick={logouthandler} >Logout</NavLink>
                    <NavLink>{user?.username} </NavLink>
                
                    </>
                )
              } 

              {
                !userValue &&(
                  <>
                 
                  <NavLink tag={ReactLink} to="/Login">Login</NavLink>
                  <NavLink tag={ReactLink} to="/Signup" >Signup</NavLink>
                  
                
                  </>
                )
              }
              {/* //  login? <NavLink tag={ReactLink} to="/Logout">Logout</NavLink>:<><NavLink tag={ReactLink} to="/Login">Login</NavLink>
              //  <NavLink tag={ReactLink} to="/Signup" href="/Signup">Signup</NavLink></> */}
            
            </NavItem>   
            </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;



