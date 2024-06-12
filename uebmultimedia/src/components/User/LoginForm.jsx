import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory  } from 'react-router-dom';
import "./Login.css";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { decodeToken } from './jwtUtils';
import { FormGroup, Button, Container, Col, Row } from 'reactstrap';
import Back from '../common/back/Back';





function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory(); // use useHistory here

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7051/api/User/Login', {
        email,
        password,
      });
      
      const { token } = response.data;
      localStorage.setItem('token', token);
      const role = decodeToken(token).role;
      const id = decodeToken(token).nameid;
      //console.log("idktu", id)
      if (response) {
        setMessage('Login successful');
        if (role === 'admin') {
          history.push("/adminres")
        } else if (role === 'client') {
          history.push('/');
        }


        // Redirect to home page or any other page
      }
    } catch (error) {
      console.log(error.response.data);
      setMessage('Invalid email or password');
    }
  };

  return (
   
     
      <div className=''>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      
      />
         
       
        <br /> <br /> <br />
        
      <Container>
      <div className='loginImage'></div>
            <Row>
           
            <Col  xs="10">
            <br /> <br /> <br />
            
        <form onSubmit={handleSubmit} className='login_form'>
          {message && <div>{message}</div>}
          <p>LOG IN HERE</p>
            
            <FormGroup>
            <label>Email</label>
            <input type="email" placeholder='Enter your Email' class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
          
            <FormGroup>
            <label>Password</label>
            <input type="password" placeholder='Enter Password' class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
          {/* <button class="form-control" type="submit">Log In</button> */}
          <Button>Log In</Button>
          <br></br><br></br>
          <Link to={"/register"}>Don't have an account? Register here</Link>

        </form>
        
        
        </Col>
        
       </Row>
       
        </Container>
        <br /> <br />    <br /> <br />    <br /> <br />     <br /> <br />    <br /> <br />    <br /> <br /> 
        
          
            

      </div>
     
   
  );
}

export default LoginForm;
