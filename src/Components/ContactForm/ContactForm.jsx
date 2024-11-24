import React, { useState } from 'react'
import './ContactForm.css'
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm = () => {



  let [senderData,setSenderData] = useState({
    name: '',
    email: '',
   subject: '',
   message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  async function postData(e){
    setLoading(true);
e.preventDefault();
    if(senderData.name.length!=0 && senderData.email.length!=0 && senderData.subject.length!= 0 && senderData.message.length!=0){
      let response = await axios.post('https://dev-yashdevportfolio.pantheonsite.io/webform_rest/submit', {
         webform_id: "contact_us",
         name: senderData.name,
         email: senderData.email,
         subject: senderData.subject,
         message: senderData.message
       },
       {
         headers: {
           'Content-Type': 'application/json' 
         }
       });
       if(response!=null){
        setSuccess(true);
        setLoading(false);
         console.log(response.data);
         toast('Thank you for contacting us! We’re reviewing your message and will respond soon to address your needs!')
       }
    }
    else{
      setLoading(false);
      setSuccess(false);
    }
    
     }



  return (
    <form onSubmit={(e)=>{postData(e)}}>
    <div className='form-name'>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder='Enter your name...' onChange={(e)=>setSenderData({...senderData,name:e.target.value})}/>
      </div>
      <div className='form-email'>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder='Enter your email...' onChange={(e)=>setSenderData({...senderData,email:e.target.value})}/>
      </div>
      <div className='form-subject'>
      <label htmlFor="subject">Subject</label>
      <input type="text" placeholder='Enter subject...' onChange={(e)=>setSenderData({...senderData,subject:e.target.value})}/>
      </div>
      <div className='form-message'>
      <label htmlFor="message">Message</label>
      <textarea rows={10} cols={10} placeholder='Enter your message...' onChange={(e)=>setSenderData({...senderData,message:e.target.value})}/>
      </div>
      <div className='form-actions btn-hover'>
<button type="submit" disabled={(success) ? true : false}><span>{(loading)? 'Submitting...' : (success) ? 'Mail sent!' : 'Send Mail'}</span></button>
      </div>
    </form>
  )
}

export default ContactForm
