import React from 'react'
import { useParams } from 'react-router-dom'

function AdminDashboard() {
    const {name}=useParams()
  return (
    <div>
      <h4>welcome: <span className='text-success'>{name.toUpperCase()}</span></h4>
    </div>
  )
}

export default AdminDashboard
