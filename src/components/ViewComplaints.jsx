import React, { useEffect, useRef, useState } from 'react'
import { getComplaintAPI, updateComplaintAPI } from '../services/allServices'
import { Link, useNavigate, useParams } from 'react-router-dom'


function ViewComplaints() {
    const navigate=useNavigate()
    const { name,id } = useParams()
     const { adm } = useParams()
    const [complaintData, setcomplaintData] = useState({})
   const remarkRef=useRef()

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
  to={adm === "admin" ? `/login/admin/${adm}` : `/login/user/${name}/${id}`} 
  style={{ textDecoration: 'none' }} 
  className='text-warning p-5'
>
  Back
</Link>

        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>

            <div className="d-flex flex-column justify-content-center align-items-center bg-warning p-4 text-white"
                style={{ width: '500px' }}>

                <h4>Complaint By : <span className='text-success'>{complaintData.userid}</span></h4>
                <h5>Issue :<span className='text-danger'>{complaintData.title}</span></h5>
                <h6>Description :  {complaintData.description}</h6>
                <h6>  Date and Time : {complaintData.time}</h6>
                <img src={complaintData.image} alt="issue"  width={'250px'} height={'250px'}/>
                <h6> <Link to={complaintData.location} className='btn btn-danger m-2'> View Location</Link></h6>
                  <h3>{complaintData.status}</h3>
                <button  onClick={()=>handleComplete("completed")} className='btn btn-success'>Mark as Completed</button>
                <button  onClick={()=>handleComplete("in progress")} className='btn btn-secondary m-3'>Mark as In Prrogress</button>
                <input type="text" ref={remarkRef}  />
                
            </div>
         
        </div>
        </>

    )
}



export default ViewComplaints
