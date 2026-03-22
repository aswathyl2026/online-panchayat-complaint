import React from 'react'
import { FaFacebook,FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

import { GoHeartFill } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    
    <div className='d-flex flex-column justify-content-center align-items-center text-white pt-4' style={{height:'125px',backgroundColor:'#1c100a'}}>
     <h3 className='pb-3'>Contact Us</h3>
     <div className='pb-0'> <MdAttachEmail/> arattupuzhagp@gmail.com
      <p className='text-center'><FaPhoneAlt /> 145125425</p> 
    </div>
    
   
    
    </div>
    
  )
}

export default Footer
