import React from 'react'
import './FlexContainer.css'
const FlexContainer = ({totalItem,children, type='other'}) => {
  
  return (
    <div  className='flex_container'>
    <div className="container">
      <div className="row">
              {
                (type=='projects')?
                (totalItem==1) ? children.map((item,index) =>{
        return <div key={index}>{item}</div>
      }):
      (totalItem == 2) ? children.map((item,index) =>{
        return <div key={index} className='flex-item col-sm-6'>{item}</div>
      }): (totalItem == 3) ? children.map((item,index) =>{
        return <div key={index} className='flex-item col-sm-4'>{item}</div>
      }):  (totalItem == 4) ? children.map((item,index) =>{
        return <div key={index} className='flex-item col-sm-4'>{item}</div>
      }): children.map((item,index) =>{
        return <div key={index} className='flex-item col-sm-4'>{item}</div>
      }):         (totalItem==1) ? children.map((item,index) =>{
        return <div key={index}>{item}</div>
      }):
      (totalItem == 2) ? children.map((item,index) =>{
        return <div key={index} className='flex-item col-sm-6'>{item}</div>
      }): (totalItem == 3) ? children.map((item,index) =>{
        return <div key={index} className='flex-item col-sm-4'>{item}</div>
      }):  (totalItem == 4) ? children.map((item,index) =>{
        return <div key={index} className='flex-item col-sm-3'>{item}</div>
      }): children.map((item,index) =>{
        return <div key={index} className='flex-item col-sm-3'>{item}</div>
      })
       }
      </div>
      </div>
    </div>
  )
}

export default FlexContainer
