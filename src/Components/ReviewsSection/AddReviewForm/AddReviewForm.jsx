import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import closeIcon from '../../../assets/review-close-btn.png'
import ThankYouMessageAfterReview from './ThankYouMessageAfterReview/ThankYouMessageAfterReview';

const AddReviewForm = ({reviewFormToggleFun,checkReviewAdded}) => {
// https://www.drupal.org/project/drupal/issues/2682341: for uploading image file to drupal and then chatgpt to save image to image field of node
  let [senderData,setSenderData] = useState({
    name: '',
    role: '',
   review: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  async function postReview(e){
    setLoading(true);
    e.preventDefault();
    checkReviewAdded(true);
    if(senderData.name.length!=0 && senderData.role.length!=0 && senderData.review.length!=0){
      // Analysing submitted review data using Google Perspective API
      const API_KEY = "AIzaSyDTqZGBGiF4bN7HehH4TAluZeTZCR_IWQg";
      const url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${API_KEY}`;
  
      const data = {
        comment: { text: senderData.review },
        languages: ["en"],
        requestedAttributes: { TOXICITY: {} },
      };
  
      try {
        const res = await axios.post(url, data);
        // setResult(res.data);
        console.log(res.data);
        let score = res.data.attributeScores.TOXICITY.summaryScore.value;
        if(score < 0.1){
               let response = await axios.post('https://dev-yashdevportfolio.pantheonsite.io/node?_format=json', {
         type:[
          {
            target_id: 'reviews'
          }
         ],
         title: [
          {
            value: senderData.name
          }
         ],
         field_role:[
          {
            value: senderData.role
          }
         ],
         body: [
          {
            value: senderData.review
          }
         ]
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
  }
    else{
      setLoading(false);
      setSuccess(false);
    }
    
     }
        else{
          console.log('Negative words detected!');
        }
      } catch (error) {
        console.error("Error analyzing text:", error);
      }
  
    }}
  return (
    <section className='add-review-form-wrapper'>
    
    <form onSubmit={(e)=>{postReview(e)}} className='add-review-form'>
    <h2 className='text-center' data-aos = 'fade-zoom-in'>Every Word Counts — Your Testimonial Is a Gift.</h2>
    <div className='hr-wrapper'>
    <hr/>
    </div>
    
    <h3>Add Testimonial</h3>
    <button className='review-close-btn ' onClick={reviewFormToggleFun}><img src={closeIcon} loading="lazy" alt='review-close-icon'/></button>
    <div className='form-name'>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder='Enter your name...' onChange={(e)=>setSenderData({...senderData,name:e.target.value})}/>
      </div>
      <div className='form-role'>
      <label htmlFor="role">Profession</label>
      <input type="text" placeholder='Enter your profession...' onChange={(e)=>setSenderData({...senderData,role:e.target.value})}/>
      </div>
      <div className='form-role'>
      <label htmlFor="role">Upload your Image</label>
      <input
          type="file"
          accept="image/*"
        />
        </div>
      <div className='form-review'>
      <label htmlFor="review">Review</label>
      <textarea rows={10} cols={10} placeholder='Enter your review...' onChange={(e)=>setSenderData({...senderData,review:e.target.value})}/>
      </div>

      <div className='form-actions btn-hover'>
<button type="submit" disabled={(success) ? true : false}><span>{(loading)? 'Submitting...' : (success) ? 'Review submitted!' : 'Submit your Review'}</span></button>
      </div>
    </form>
   { success && <ThankYouMessageAfterReview/>}
    </section>
  )
}

export default AddReviewForm
