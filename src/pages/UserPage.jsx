import React from 'react'
import { useParams } from 'react-router-dom';

function UserPage() {
  const {name}=useParams()
  
  
  return (
    <>
    <h4>welcome: <span className='text-success'>{name.toUpperCase()}</span></h4>
    
    <div style={{ height:'100vh' ,backgroundImage: 'url("/.jpeg")', backgroundSize: 'cover', backgroundAttachment: 'fixed'}} className='d-flex flex-column gap-5 shadow justify-content-center text-center text-light'>
     
      
    </div>
  
    </>
  )
}

export default UserPage
