import Tooltip from '@mui/material/Tooltip'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import { FaPlus } from "react-icons/fa"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function ComplaintForm({myComplaint, setMyComplaint}) {
    const msg = "Write a new Complaint"
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      
          <Tooltip title={msg}>
            <button onClick={()=>setShowModal(true)}
              className="btn btn-success d-flex justify-content-center align-items-center"
              style={{
                position: "fixed",
                bottom: "25px",
                right: "25px",
                borderRadius: "50%",
                width: "65px",
                height: "65px",
                fontSize: "24px",
                boxShadow: "0 4px 10px rgba(56, 12, 12, 0.5)",
                zIndex: 1000,

              }}
            >
              <FaPlus />
            </button>
          </Tooltip>
          <Modal
  open={showModal}
  onClose={() => setShowModal(false)}
>
  <div style={style}>
    <h4 className="text-center text-warning mb-3">Add Complaint</h4>

    <div className="d-flex flex-column gap-3">
      <input type="text" className="form-control" placeholder="Field 1" />
      <input type="text" className="form-control" placeholder="Field 2" />
      <input type="text" className="form-control" placeholder="Field 3" />
      <input type="text" className="form-control" placeholder="Field 4" />
    </div>

    <button className="btn btn-success w-100 mt-3">Submit</button>
  </div>
</Modal>
    </div>
  )
}

export default ComplaintForm
