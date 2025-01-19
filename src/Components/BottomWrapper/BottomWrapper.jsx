import React, { useEffect, useRef } from 'react';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';

const BottomWrapper = () => {
  const bottomSectionRef = useRef(null);

//   useEffect(() => {
// window.addEventListener('scroll',()=>{
// if(Math.floor(scrollY)>6000){
//   bottomSectionRef.current.classList.add('fixed');
// }else{
//   bottomSectionRef.current.classList.remove('fixed');
// }
// })

  // }, []); // Empty dependency array ensures this runs only once

  return (
    <section ref={bottomSectionRef} className="bottom-section">
      <ContactSection />
 
    </section>
  );
};

export default BottomWrapper;
