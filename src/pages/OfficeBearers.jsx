// import React, { useEffect, useState } from 'react'
// import BannerOffice from '../components/BannerOffice'
// import axios from 'axios'
// import url from '../baseUrl'

// function OfficeBearers() {
//     const [presidentData, setPresidentData] = useState([])
//     const handleWorkingPresidents = (value) => {
//         axios.get(`${url}/api/admin/get-bearers?category=${value}`).then((res) => {
//            setPresidentData(res.data.bearers)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }

//  useEffect(() => {
//     handleWorkingPresidents('WORKING%20PRESIDENT') 
//  },[])
//     return (
//         <section style={{ backgroundColor: '#4267B2', height: '100%', width: '100%' }} >
//             <div>
//                 <BannerOffice />
//             </div>
//             <div className="container">
//                 <div className="row py-5">
//                     <div className="col-lg-12 flex-wrap d-flex align-items-center justify-content-evenly mb-5">
//                         <button className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">PRESIDENT</button>
//                         <button  onClick={()=>handleWorkingPresidents('WORKING%20PRESIDENT')} className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">WORKING PRESIDENTS</button>
//                         <button className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">MEMBER OF LEGISLATIVE ASSEMBLY</button>
//                         <button className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">MEMBER OF PARLIMENT</button>
//                         <button className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">COMMITTEE</button>
//                         <button className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">DCC PRESIDENTS</button>
//                         <button className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">AICC INCHARGE</button>
//                     </div>

//                 </div>
//                 <div className="row">
//                {presidentData?.length>0 ? presidentData?.map((obj,index) => (
//                    <div key={index} className="col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center ">
//                    <div className="card shadow bg-primary-subtle card-conatiner" style={{ width: "100%"}}>
//                        <img src={obj?.image}  className="card-img-top w-100 img-fluid d-block " alt="..." />
//                        <div className="card-body card-text-container">
//                            <h6 className="card-title fw-bold">{obj?.category}</h6>
//                            <p>paragraph</p>
                          
//                        </div>
//                    </div>
//                </div>
//                )): <div>Loading....</div>
//                 }
//                 </div>
//             </div>

//         </section>
//     )
// }

// export default OfficeBearers