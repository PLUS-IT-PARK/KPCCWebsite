import React from 'react'
import { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
import bgImg from '../assets/img/bgImg.png'
function ProfileModal({userDetails}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
         <button className='btn fs-6 fw-semibold' onClick={handleShow}>
        View Profile <i className="fa-solid fa-arrow-right ms-3"></i>
      </button>

      <Modal 
     size='lg'
      centered 
       show={show}
        onHide={handleClose}>
       
        <Modal.Body style={{background:`url(${bgImg})`,backgroundPosition:'center',backgroundSize:'cover',color:'white'}}>
        <Modal.Header style={{border:'none'}}   closeButton/>
         <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-4 mb-2">
                    <img src={userDetails?.image} className='img-fluid w-100 rounded-5' alt="" />
                </div>
                <div className="col-lg-8">
                    <h1 className='fw-bold text-uppercase text-light'>{userDetails?.name}</h1>
                    <div className='d-flex flex-column justify-content-end'>
                        <p  className='text-uppercase'>{userDetails?.description}</p>
                        <p  className='text-uppercase m-0'><i class="fa-solid fa-location-dot text-white me-2"></i>{userDetails?.postion}</p>
                        <p className='m-0'><i class="fa-solid fa-phone me-2 "></i>{userDetails?.phone}</p>
                        <p ><i className="fa-solid fa-envelope me-2"></i>{userDetails?.email}</p>
                        <p style={{textAlign:'justify'}} className='w-75'><i class="fa-solid fa-address-book me-2"></i>{userDetails.address}</p>
                    </div>
                </div>
            </div>
         </div>
         <Modal.Footer className='border-0' style={{backgroundColor:'transparent',color:'white'}}>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProfileModal