import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './ContactSection.css'
import ContactForm from '../ContactForm/ContactForm'
import ContactCard from '../ContactCard/ContactCard'
import Footer from '../Footer/Footer'
const ContactSection = () => {

  let contactData = [
    {
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>',
      label: 'Contact on phone',
      data: [
        {title: '9122733522',
          link: '9122733522',
          type: 'contact_number'
        }
      ]
    },
    {
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>',
      label: 'Contact on mail',
      data: [
        {
          title: 'yashraj24october@gmail.com',
          link: 'yashraj24october@gmail.com',
          type: 'mail'
        },
        {title: 'yashprojects123@gmail.com',
          link: 'yashprojects123@gmail.com',
          type: 'mail'
        }
        ]
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="navIcon" style={{borderRadius:"0px"}} viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>',
      label: 'Connect on Linked-in',
      data: [
        {title: 'Yash Raj',
          link: 'https://www.linkedin.com/in/yash-raj-8a758323b'
        }
        ]
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="navIcon"  viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>',
      label: 'Connect on Facebook',
      data: [
        {title: 'Yash Raj',
          link: 'https://www.facebook.com/chandra.kishore.5477'
        }
        ]
    },
    {
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>',
      label: 'Contact address',
      data: [
          {
            text: 'Bhagwanpur, Muzaffarpur, Bihar, India'
          }
      ],
      
    }

  ]
  return (
    <div id='Contact' className='contact-section-wrapper sectionPadding'>
<SectionTitle title='CONTACT US'/>
<div className='grid-bg'>
<h2>CONTACT</h2>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<div className='container'>
<div className='row'>
  <div className="col-md-4 col-12 contact-info">
  <h4 className='contact-info-heading'>Contact Information</h4>
  <p>Let’s connect and start crafting something unique and impactful.<br/><br/> <strong style={{color:'#fff'}}>Turn Your Vision into Reality!</strong><br/>Whether you’re looking to build a website, solve a tech challenge, or brainstorm a fresh design, I’m here to help. Drop a message, and let’s get started!</p>
  
{
  contactData && contactData.map((item,index)=>{
 return <ContactCard key={index} icon={item.icon} label={item.label} data={item.data}/>
  })
}
  </div>
  <div className="col-md-8 col-12 contact-form"><ContactForm/></div>
</div>
</div>
<Footer/>
    </div>
  )
}

export default ContactSection
