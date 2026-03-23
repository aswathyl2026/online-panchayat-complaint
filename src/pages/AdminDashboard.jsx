import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getAllComplaintAPI } from '../services/allServices';
import ViewComplaints from '../components/ViewComplaints';

function AdminDashboard() {
  const { name } = useParams()
  const [allComplaints, setAllComplaints] = useState([])


  useEffect(() => {
    allComplaintsFun()
    
  }, [])
const allComplaintsFun = async () => {
  const complaints = await getAllComplaintAPI()

  if (complaints.status == 200) {
    const filteredData = complaints.data.filter(
      item => item.status !== "completed"
    )

    setAllComplaints(filteredData)
  }
}
  
  return (
    <div style={{ height: '100%', backgroundImage: 'url("/pan4.jpeg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className="row align-items-center justify-content-between m-3" >

        <div className="col-lg-6">
          <h5 className='m-1'>
            Welcome: <span className="text-success">{name?.toUpperCase()}</span>
          </h5>
        </div>

        <div className="col-lg-2 text-end">
          <Link to="/" className="text-decoration-none text-danger m-2 btn btn-lg fw-bold">Logout</Link>
        </div>


      </div>
      <div className="d-flex flex-wrap justify-content-center gap-4">

        {
          allComplaints.length > 0 ?
            allComplaints.map((complaint) => (
              <div className="card" style={{ width: "18rem" }} key={complaint.id}>
                <img src={complaint.image} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h5 className="card-title">{complaint.title}</h5>
                  <p className="card-text">{complaint.description}</p>
                  <p className={complaint.status=="in progress"?'text text-warning':'text text-danger'}>{complaint.status}</p>
                  <Link
                    to={`/view/${name}/${complaint.name}/${complaint.id}`}
                    className='btn btn-outline-warning'
                  >
                    Open
                  </Link>
                 
                </div>
                {
                  complaint.status=="completed" &&(
                   <button className='btn btn-danger'>Delete</button>
                  )
                }
                 
              </div>
            ))
            :
            <div className='text-danger'>No Complaints yet</div>
            
        }
       

      </div>
        
    </div>
    
  )
}

export default AdminDashboard
