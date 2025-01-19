import React, { useEffect, useRef, useState } from 'react'
import './ReviewSection.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import defaultReviewerImg from '../../assets/default-reviewer.png'
import AddReviewForm from './AddReviewForm/AddReviewForm';
import axios from 'axios';
import loadingImg from '../../assets/Loading.gif';

const ReviewSection = ({checkTestimonial}) => {
  let [reviewAdded,setReviewAdded] = useState(false);
  let [showReviewForm,setShowReviewForm] = useState(false);
  function reviewFormToggle(){
    if(showReviewForm){
      setShowReviewForm(false);
      // checkTestimonial(showReviewForm);
      // document.body.style.overflow='unset';
    }
    else{
      setShowReviewForm(true);
      // checkTestimonial(showReviewForm);
      // document.body.style.overflow='hidden';
    }
  }
  function checkReviewAdded(check){
  if(check){
    setReviewAdded(true);
  }
  }
  const [reviews, setReviews] = useState([]);
    async function getReviews(){
      let response = await axios.get('https://dev-yashdevportfolio.pantheonsite.io/testimonials');
      if(response!=null){
        console.log(response.data);
        setReviews(response.data);
     }
    }
  useEffect(()=>{
    getReviews();
  },[reviewAdded]);
  if(innerWidth>767){
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight:true,
    draggable: true,
    swipe: true,
    lazyLoad: true
  };
}else{
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight:true,
    draggable: true,
    swipe: true,
    lazyLoad: true
  };
}
window.addEventListener('resize',()=>{
  if(innerWidth>767){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight:true,
      draggable: true,
      swipe: true,
      lazyLoad: true
    };
  }else{
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight:true,
      draggable: true,
      swipe: true,
      lazyLoad: true
    };
  }
})
  // let reviews = [{
  //  review: `"Yash Raj is one of the most dedicated developers I’ve had the pleasure of working with. His ability to break down complex tasks into manageable solutions is truly impressive. His enthusiasm for programming , problem-solving and  commitment to helping others is absolutely unmatchable. He not only delivers exceptional work but also ensures the entire team is aligned with the project goals. A great team player and an inspiring mentor for junior developers."`,
  //  reviewerName: 'Diwakar Singh',
  //  role: 'Front-end developer@Douce-Infotech'
  // },
  // {
  //   review: `"Yash Raj’s way of explaining concepts is unique and incredible. He has a knack for breaking down complex ideas into simple, digestible steps that make learning an enjoyable experience. As a student of web development, I’ve learned so much from his structured and practical teaching style.His structured approach makes even the most complex topics feel simple and achievable. Truly an inspiring educator and a highly skilled developer!"`,
  //   reviewerName: 'Rohit Kumar',
  //   role: 'Aspiring Full stack Developer'
  //  }
  // ]
  return (
    <section id='reviews'  className='review-section-wrapper sectionPadding'>
    {/* {showReviewForm && <div className='overlay'></div>} */}
<SectionTitle title='REVIEWS'/>
<div className='grid-bg'>
<h2 data-aos = 'fade-zoom-in'>REVIEWS</h2>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<div className='container'>
<Slider {...settings} style={{color: 'white'}} className='reviews-carousel'>
      {
        reviews ?  reviews.map((item,index)=>{
          return <div key={index} data-aos = 'fade-up' className='review'>
          
          <img src={defaultReviewerImg} loading="lazy" alt='defaultReviewerImg'/>
          
            <h5>{item.reviewer_name}</h5>
            <p>{item.role}</p>
            <div>
{item.review}
            </div>
          </div>
        }) : <img src={loadingImg} alt='loading-img' loading="lazy"/>
      }
    </Slider>
    </div>
   { showReviewForm && <AddReviewForm reviewFormToggleFun={reviewFormToggle} checkReviewAdded={checkReviewAdded}/>}
<div className='container text-center'><button data-aos = 'flip-up' className='review-add-btn btn-hover' onClick={reviewFormToggle}><span><span>&#43;</span> &nbsp; Add your reviews</span></button></div>
{/* <ThankYouMessageAfterReview/> */}
    </section>
  )
}

export default ReviewSection