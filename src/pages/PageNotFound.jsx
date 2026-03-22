import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center gap-4' style={{height:'75vh'}} >
      <img src="/pnf404.jpeg" alt="pnf" />
      <h3 >Page Not Found</h3>
      <p className='text text-danger'>The page you requested could not be found</p>
      <Link to={'/'} className='btn btn-warning'>Back to Home</Link>
    </div>
  )
}

export default PageNotFound
