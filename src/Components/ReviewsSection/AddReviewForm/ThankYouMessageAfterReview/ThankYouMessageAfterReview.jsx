import React, { useState } from 'react'

const ThankYouMessageAfterReview = () => {
  let [reviewerEmail,setReviewerEmail] = useState('');
  function handleSubmit(e){
e.preventDefault();
  }
  return (
    <div className='thank-you-message'>
      <h3>Thank You for Your Review!</h3>
      <p>Your feedback is invaluable in helping me grow and improve.</p>
      <h5>🌟 What Happens Next?</h5>
      <ul>
        <li><span>&#10003;</span>Your review has been successfully submitted.</li>
        <li><span>&#10003;</span>Our team will verify the content to ensure it meets our guidelines.</li>
        <li><span>&#10003;</span>Once approved, your review will be proudly displayed here on testimonial section of the website.</li>
      </ul>
      <h5>If you provided your email, you will be notified when it is published.</h5>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
      <div className='form-email'>
      <input type="email" placeholder='Enter your email...' onChange={(e)=>setReviewerEmail(e.target.value)}/>
      </div>
      <div className='form-actions'>
          <button type="btn-hover submit"><span>Submit</span></button>
      </div>
      </form>
    </div>
  )
}

export default ThankYouMessageAfterReview

