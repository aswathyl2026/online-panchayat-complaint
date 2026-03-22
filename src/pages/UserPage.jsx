import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAllComplaintAPI } from '../services/allServices';
import { IoIosCreate } from "react-icons/io";

import ComplaintForm from '../components/ComplaintForm';

function UserPage() {
  
  const { userid } = useParams()
  const [myComplaint, setMyComplaint] = useState([])
  useEffect(() => {
    getMyComplaint()
  }, [])
  const getMyComplaint = async () => {
    const result = await getAllComplaintAPI()
    if (result.status == 200) {
      const filteredData = result.data.filter(
        item => item.userid === userid
      )
      setMyComplaint(filteredData)

    }
  }

  return (
    <>
      <div style={{ height: '100vh', backgroundImage: 'url("/pan5.jpeg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} >
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3">
            <h5 className='m-2'>
              Welcome: <span className="text-success ">{userid?.toUpperCase()}</span>
            </h5>
          </div>

          <div className="col-lg-3">
            <h3 className='m-2'>
            My Complaints
            </h3>
          </div>

          <div className="col-lg-2 text-end">
            <Link to="/" className="text-decoration-none text-danger m-2 fw-bold btn btn-lg">Logout</Link>
            {/*   <Link to={`/view/${name}/${id}`} className="text-decoration-none text-danger fw-bold">view</Link>*/}
          </div>

        </div>

        <div className="d-flex flex-wrap justify-content-center gap-4">

          {
            myComplaint.length > 0 ?
              myComplaint.map((complaint) => (
                <div className="card" style={{ width: "18rem" }} key={complaint.id}>
                  <img src={complaint.image} className="card-img-top" alt="..." />

                  <div className="card-body">
                    <h5 className="card-title">{complaint.title}</h5>
                    <p className="card-text">{complaint.description}</p>
                    <p className={complaint.status == "in progress" ? 'text text-warning' : 'text text-danger'}>{complaint.status}</p>
                    <Link
                      to={`/view/${complaint.userid}/${complaint.id}`}
                      className='btn btn-outline-warning'
                    >
                      Open
                    </Link>

                  </div>

                </div>
              ))
              :
              <div className='text-danger'>No Complaints yet</div>

          }


        </div>
        <ComplaintForm myComplaint={myComplaint} setMyComplaint={setMyComplaint}/>
      </div>
    </>
  )
}

export default UserPage
