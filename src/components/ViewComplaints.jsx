import React, { useEffect, useRef, useState } from 'react'
import { getComplaintAPI, updateComplaintAPI } from '../services/allServices'
import { Link, useNavigate, useParams } from 'react-router-dom'


function ViewComplaints() {
    const navigate=useNavigate()
    const { name,id } = useParams()
     const { adm } = useParams()
    const [complaintData, setcomplaintData] = useState({})
   const remarkRef=useRef()
   const [visible,setVisible]=useState(true)

    useEffect(() => {
        if (id) {
            console.log(id,name);
            console.log(adm);
            
            
            getDetails(id)
          
            
        }

    }, [])
    const getDetails = async (id) => {
        const userComplaint = await getComplaintAPI(id)
        setcomplaintData(userComplaint.data)
       if(adm){
        setVisible(false)
       } 
        
    }
    const handleComplete= async(statusData)=>{
     
      const updatedData={
        ...complaintData,status:statusData,remark:remarkRef.current.value
      }
      //console.log(updatedData);
      
      setcomplaintData(updatedData)
       await updateDetails(updatedData)
       navigate('/login/admin/admin')
        
       
        
    }
    const updateDetails=async(complaintData)=>{
        const res=await updateComplaintAPI(id,complaintData)
        if(res.status==200){
            alert("updated successfully")
            
        }
    }
    return (
    <>
        <Link 
  to={adm === "admin" ? `/login/admin/${adm}` : `/login/user/${complaintData.userid}`} 
  style={{ textDecoration: 'none' }} 
  className='text-dark fw-bold p-5'
>
  Back
</Link>

        <div style={{ height: '100vh', backgroundImage: 'url("/pan5.jpeg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className='d-flex flex-column gap-5 shadow justify-content-center text-center text-light align-items-center'>

            <div className="d-flex flex-column justify-content-center align-items-center  p-4 mb-4 mtext-white"
                style={{ width: '500px',background: 'rgba(0, 0, 0, 0.5)' }}>

                <h4>Complaint By : <span className='text-success'>{complaintData.userid}</span></h4>
                <h5>Issue :<span className='text-danger'>{complaintData.title}</span></h5>
                <h6>Description :  {complaintData.description}</h6>
                <h6>  Date and Time : {complaintData.time}</h6>
                <img src={complaintData.image} alt="issue"  width={'250px'} height={'250px'}/>
                <h6> <Link to={complaintData.location} className='btn btn-danger m-1'> View Location</Link></h6>
                  <h3>{complaintData.status}</h3>
                  <h6 className='text-success fw-bold' hidden={!visible}>{complaintData.remark}</h6>
                  <label hidden={visible} >Remarks : </label><input type="text" ref={remarkRef} hidden={visible} />
                <button  onClick={()=>handleComplete("completed")} className='btn btn-success m-1' hidden={visible}>Mark as Completed</button>
                <button  onClick={()=>handleComplete("in progress")} className='btn btn-primary m-1'hidden={visible}>Mark as In Prrogress</button>
                
                
            </div>
         
        </div>
        </>

    )
}



export default ViewComplaints
