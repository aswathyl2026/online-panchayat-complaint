
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div style={{ height: '100vh', backgroundImage: 'url("/image.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className='d-flex justify-content-center align-items-center'>
                <div className="row container-fluid  ">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 rounded shadow p-5 text-center text-light" style={{ background: 'rgba(128, 81, 54,0.7)' }}>
                        <p className='fs-5'> <b>The Online Complaint Management System</b> for Panchayat is a web-based application developed to provide an efficient platform for citizens to report local issues and complaints directly to the Panchayat authorities. In many rural and local areas, citizens face problems such as road damage, water supply issues, waste management problems, and street light failures. Traditionally, these complaints are reported manually by visiting the Panchayat office, which can be time-consuming and inefficient.</p>

                        <Link to={"/login"} className='btn btn-dark'>Login</Link>


                    </div>
                    <div className="col-lg-2"></div>

                </div>
            </div>
            <div className="container mb-5 b p-5 mt-5" style={{backgroundColor:'black'}}>
                <h1 className="text-center my-5 text-light fw-bold">ARATTUPUZHA</h1>
                <div className="row align-items-center">


                    <div className="row">
                        <div className="col-lg-3">
                            <img className='w-100 p-2 ' src="/pan6.jpeg" alt="testimony" height={'300px'} />
                        </div>
                        <div className="col-lg-3">
                            <img className='w-100 p-2' src="/gallery4.jpeg" alt="testimony" height={'300px'} />
                        </div>
                        <div className="col-lg-3">
                            <img className='w-100 p-2' src="/gallery3.jpeg" alt="testimony" height={'300px'} />
                        </div>
                        <div className="col-lg-3">
                            <img className='w-100 p-2' src="/gallery2.jpeg" alt="testimony" height={'300px'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <img className='w-100 p-2 ' src="/pan2.jpeg" alt="testimony" height={'300px'} />
                        </div>
                        <div className="col-lg-3">
                            <img className='w-100 p-2' src="/pan3.jpeg" alt="testimony" height={'300px'} />
                        </div>
                        <div className="col-lg-3">
                            <img className='w-100 p-2' src="/pan4.jpeg" alt="testimony" height={'300px'} />
                        </div>
                        <div className="col-lg-3">
                            <img className='w-100 p-2' src="/pan5.jpeg" alt="testimony" height={'300px'} />
                        </div>
                    </div>



                </div>
            </div>
            <div style={{
                height: '100vh', backgroundImage: 'url("/pan1.jpeg")',
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed'
            }} className='d-flex justify-content-center align-items-center'>

                <div className="col-lg-8 rounded shadow p-5 text-center text-light" style={{ background: 'rgba(6, 6, 6, 0.9)' }}>
                    <p className='fs-5'> <b>Arattupuzha Grama Panchayat</b> is a local self-government body located in the Alappuzha district of Kerala, India. It is situated in the Karthikappally Taluk and falls under the Muthukulam Block Panchayat. The panchayat is unique for its geography, as it is a coastal village bordered by the Arabian Sea and the Kayamkulam Kayal (backwaters)</p>

                   <h3 className='text-warning'>Key Administrative Details</h3> 
                   <ul style={{listStyle:'none'}}>
                    <li>Wards: The panchayat is divided into 19 wards.</li>
                    <li>Population: Approximately 29,264.</li>
                    <li>Current President: Maimoonath Fahad.</li> 
                    <li> Representative Authority: It falls under the Haripad Assembly constituency (MLA: Ramesh Chennithala) and the Alappuzha Lok Sabha constituency (MP: A.M. Ariff).</li>
                   </ul>
                  


                </div>

            </div>
        </>
    )
}

export default Home
