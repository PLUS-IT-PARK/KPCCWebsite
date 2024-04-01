import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer style={{ backgroundColor: '#207BC8' }} className='w-100 '>
            <div className="container">
                <div className="row py-3 ">
                    <div className="col-lg-12 ">
                        <img style={{ height: '80px' }} src="./src/assets/img/logo.png" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <h4 style={{ color: '#DEFC27' }} className='py-2' >CONTACT US</h4>
                            <p style={{ fontSize: '15px' }} className='text-white'>
                                FRONTAL ORGANIZATIONS,<br />
                                DEPARTMENTS & CELLS,<br />
                                INDIRA BHAVAN,<br />
                                VELLAYAMBALAM-SASTHAMANGALAM ROAD,<br />
                                SASTHAMANGALAM P.O,<br />
                                THIRUVANANTHAPURAMKERALA-PIN 695010, <br />
                                TEL.(O):0471-2721401  , <br />
                                EMAIL : pcckerala@gmail.com
                            </p>
                             {/* Social Media Icons */}
        <div className="d-flex align-items-center justify-content-start gap-3">
          <Link to="https://www.facebook.com/INCKerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="https://i.postimg.cc/85mnDygM/facebook.png" alt="" /></Link>
          <Link to="https://www.instagram.com/inckerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'100px'}} src="https://i.postimg.cc/HnWvLQTK/insta.png" alt="" /></Link>
          <Link to="https://www.youtube.com/@INCKerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="https://i.postimg.cc/8zfKskV1/youtube.png" alt="" /></Link>
          <Link to="https://twitter.com/INCKerala?s=20" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="https://i.postimg.cc/1tmr0sbV/twitter.png" alt="" /></Link>
        </div>
                        </div>
                        <div className="col-lg-9" >
                            <h4 style={{ color: '#DEFC27' }} className='py-2'>FRONTAL ORGANIZATIONS, DEPARTMENTS & CELLS</h4>

                            <div className="row">
                                <div className="col-lg-4">
                                    <p className='text-white' style={{ fontSize: '15px' }}>
                                        Karshaka Congress <br />
                                        Desheeya Kayika Vedhi <br />
                                        Economic And Planning Cell <br />
                                        Leader K Karunakaran Foundation <br />
                                        Small Scale Industries Promotion Cell <br />
                                        Bharathiya Dalith Congress <br />
                                        Ex-Servicemen Congress<br />
                                        KPCC Vichar Vibagh <br />
                                        Indian National Cultural and Arts Society (INCAS) <br />
                                        Sastra Vedi <br />
                                        Indian Overseas Congress (IOC) <br />
                                        Indian Lawyer's Congress <br />
                                        KPCC Leagal Aid Cell  <br />
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='text-white' style={{ fontSize: '15px' }}>
                                        Indian National Congress <br />
                                        KPCC Digital Media Cell  <br />
                                        Priyadarshini Publication <br />
                                        Deshiya Karshaka Thozhilali Federation <br />
                                        Fishermen's Congress <br />
                                        Employees And Pensioners Congress <br />
                                        All India Unorganized Workers Congress <br />
                                        (AIUWC) <br />
                                        Indian Professional Congress <br />
                                        Kerala Pradesh Minority Congress <br />
                                        Samskara Sahithi <br />
                                        Adivasi Congress <br />
                                        Differently Abled People's Congress
                                        (DAPC) <br />
                                        Shastravedhi
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='text-white' style={{ fontSize: '15px' }}>
                                        Kerala State Service Pensioner's <br />
                                        Association (KSSPA) <br />
                                        Rajiv Gandhi Institute of Development Studies
                                        Rajiv Gandhi Panchayati Raj Sangathan <br />
                                        Jawahar Bal Manch <br />
                                        Overseas Indian Cultural Congress <br />
                                        Kerala Pradesh OBC Congress <br />
                                        Panchayatraj Sangathan <br />
                                        Officer's & Services Service Organization  Cell <br />
                                        Kerala Pradesh Transgender's Congress <br />
                                        Pravasi Returnees Congress <br />
                                        Sahakarana Janadhipathya Vedhi <br />
                                        Gandhi Darshan Samithi <br />
                                        KPCC Media Cell
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='text-center text-light pb-4'>
                <p>© KPCCDMC. 2024. All Rights Resevered</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer