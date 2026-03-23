import Tooltip from '@mui/material/Tooltip'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"
import issues from '../assets/issues.json'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { MdAddLocationAlt } from "react-icons/md";
import { IoIosRefreshCircle } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { addComplaintAPI } from '../services/allServices'
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
function ComplaintForm({ myComplaint, setMyComplaint, userid }) {
  const msg = "Write a new Complaint"
  const [showModal, setShowModal] = useState(false)// handle modal
  const [loading, setLoading] = useState(false)//handle loadin time for GPS
  const [preview, setPreview] = useState("")//handle image preview
  const [newComplaint, setNewComplaint] = useState({
    title: "",
    status: "pending",
    description: "",
    location: "",
    userid: userid,
    image: "",
    remark: "",
    time: ""
  })
  console.log(newComplaint);





  const handleOlose = () => setShowModal(true)
  const handleClose = () => setShowModal(false)
  //fuction for get location
  const getLocation = () => {
    setLoading(true)
    if (!navigator.geolocation) {
      alert("Geolocation not supported ❌")
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude


        //store Google Maps link
        const locationData = `https://www.google.com/maps?q=${lat},${lng}`

        setNewComplaint(prev => ({
          ...prev,
          location: locationData
        }))
        setLoading(false)
      },
      (error) => {
        alert("Please allow location access ❌")
        setLoading(false)
      }
    )
  }
  //clearing location from input fiels
  const clearLoc = () => {
    setNewComplaint({ ...newComplaint, location: " " })
  }

  //upload image to cloudinary
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_upload_preset");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dfvc0zyxb/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };
  //upload image
  const handleImage = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const previewUrl = URL.createObjectURL(file)
    setPreview(previewUrl)
    try {
      const url = await uploadImage(file);
      setNewComplaint({ ...newComplaint, image: url })
    } catch (err) {
      console.log(err);

    }

  }
  //submit function
  const complaintSubmit = async () => {
    const curTime = new Date().toLocaleString()
    const finalComplaint = {
      ...newComplaint, time: curTime
    }


    if (finalComplaint.title && finalComplaint.description && finalComplaint.location && finalComplaint.image && finalComplaint.time) {
      const res = await addComplaintAPI(finalComplaint)
      if (res.status == 201) {
        setMyComplaint([
          ...myComplaint, finalComplaint
        ])
        alert("Complaint Registered Successfully")
      }

      handleClose()
    } else {
      alert("Fill all details")
    }
  }
  return (
    <div>

      <Tooltip title={msg}>
        <button onClick={() => setShowModal(true)}
          className="btn btn-success d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            borderRadius: "50%",
            width: "65px",
            height: "65px",
            fontSize: "24px",
            boxShadow: "0 4px 10px rgba(6, 6, 6, 0.5)",
            zIndex: 1000,

          }}
        >
          <FaPlus />
        </button>
      </Tooltip>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='d-flex flex-column'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-warning fw-bold'>
            Write To Us
          </Typography>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Choose Category</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={newComplaint.title}
              onChange={e => setNewComplaint({ ...newComplaint, title: e.target.value })}
              label="choose..."
            ><p></p>
              {
                issues.issues.map(issue => (
                  <MenuItem key={issue} value={issue}>
                    <em>{issue}</em>
                  </MenuItem>
                ))
              }



            </Select>
          </FormControl>
          <TextField value={newComplaint.description} onChange={e => setNewComplaint({ ...newComplaint, description: e.target.value })}
            id="standard-basic-name" label="enter the issue" variant="standard" />
          <Button className="m-2"
            variant="contained"
            size="small"
            color="primary"
            onClick={getLocation}
            disabled={loading}
          >
            <MdAddLocationAlt className='m-2 fs-5 text-danger' />{loading ? "Getting...." : "Update Location"}
          </Button>
          <TextField value={newComplaint.location} aria-readonly
            id="standard-basic-name" label="location" variant="standard" /> <IoIosRefreshCircle className='fs-5 text-primary' onClick={clearLoc} />
          <Button
            variant="outlined"
            component="label"
            className="mt-3"
          >
            <FaCloudUploadAlt className='fs-5 m-1 text-primary' /> Upload Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImage}
            />
          </Button>
          {preview && (
            <img
              src={preview}
              alt="preview"
              style={{
                width: "150px",
                marginTop: "10px",
                borderRadius: "10px",
                border: "1px solid #ccc"
              }}
            />
          )}
          <Button className='m-4 btn btn-sm'
            variant="contained"
            color="success"
            onClick={complaintSubmit}
          >
            Create
          </Button>

        </Box>
      </Modal>
    </div>
  )
}

export default ComplaintForm
