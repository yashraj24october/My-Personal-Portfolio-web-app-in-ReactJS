import React from 'react'
import './ContactCard.css'

const ContactCard = ({icon,label,data}) => {
  return (
    <div className='contact-card'>
      <div className='icon' dangerouslySetInnerHTML={{__html:icon}}/>
      <div>
          <div className='title'><p>{label}</p></div>
      <div className="data">
        {
          (data.length>0) ? data.map((item,index)=>{
            return (item.title && item.link && !item.type && !item.text) ? <p key={index} ><a href={item.link}>{item.title}</a></p>
            : (item.title && item.link && item.type == 'contact_number')?<p key={index} ><a href={`tel:${item.link}`}>{item.title}</a></p>: (item.title && item.link && item.type == 'mail')?<p key={index} ><a href={`mailto:${item.link}`}>{item.title}</a></p>:(item.text)&&<p key={index}>{item.text}</p>
          })
          : <p>No data !</p>
        }
      </div>
    </div>
    </div>
  )
}

export default ContactCard
