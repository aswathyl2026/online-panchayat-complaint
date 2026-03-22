import React from 'react'
import { Link, useParams } from 'react-router-dom';

function UserPage() {
  const { name ,id} = useParams()


  return (
    <>
      <div className="row align-items-center justify-content-between">

        <div className="col-lg-6">
          <h5>
            Welcome: <span className="text-success">{name?.toUpperCase()}</span>
          </h5>
        </div>

        <div className="col-lg-2 text-end">
          <Link to="/" className="text-decoration-none text-danger fw-bold">Logout</Link>
          <Link to={`/view/${name}/${id}`} className="text-decoration-none text-danger fw-bold">view</Link>
        </div>

          
      </div>





      <div style={{ height: '100vh', backgroundImage: 'url("/.jpeg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className='d-flex flex-column gap-5 shadow justify-content-center text-center text-light'>


      </div>

    </>
  )
}

export default UserPage
