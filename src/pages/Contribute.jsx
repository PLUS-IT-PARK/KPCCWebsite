import React from 'react'
import donateImgLarge from '../assets/img/donation-QR.png'
import donateImgSmall from '../assets/img/donate-page-mobile.png'
function Contribute() {
  return (
    <section style={{backgroundColor:'#4267B2'}} className='w-100 align-items-center justify-content-center py-5 '>
        <div className="container">
            <div className="row">
                {/* for large devices */}
                <div className="col-lg-12 py-5 large-screen">
                    <img src={donateImgLarge} className='w-100 img-fluid rounded-5' alt="" />
                </div>

                {/* for mobile screens */}
                <div className="col-sm-12 mobile">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={donateImgSmall} className='w-100 img-fluid rounded-5' alt="" />
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contribute