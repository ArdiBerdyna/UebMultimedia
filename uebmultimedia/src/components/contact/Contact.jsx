import React from "react"
import Back from "../common/back/Back"
import { useEffect, useState} from "react";
import { Link, useHistory } from 'react-router-dom';

import axios from "axios";

import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  const history = useHistory();
  const [Id, setId] = useState("");
        const [name, setName] = useState("");
        const [email, setEamil] = useState("");
        const [message, setMessage] = useState("");
  const handleSubmit =  async(event) => {
    event.preventDefault();
  

  
  

  
  try {
    const response = await axios.post("https://localhost:7051/api/Contacts/PostContact", {
     
      name: name,
      email: email,
      message: message,
   
      
      
      
  
    
    });
    alert("Thenk you for writing us!");
    setMessage(response.data);
        setId("");
        setName("");
        setEamil("");
        setMessage("");
        history.push("/");
        
      
      
  
  
   
  } catch (err) {
    alert(err.response.data);
  }
}
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Peje, Kosova</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@hotmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+38349562001</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input type='text' placeholder='Name'   onChange={(event) => {
                setName(event.target.value);
              }} />
                <input type='email' placeholder='Email'  onChange={(event) => {
                setEamil(event.target.value);
              }}  />
              </div>
              
              <textarea cols='30' rows='10'  onChange={(event) => {
                setMessage(event.target.value);
              }}  placeholder=' Create a message here...'>
               
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
