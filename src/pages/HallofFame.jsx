import React from 'react'
import Banner from '../components/Banner'
import dataArray from '../datas/hallofImage.js'
import { Link } from 'react-router-dom'
function HallofFame() {
    return (
        <section style={{backgroundColor:'#4267B2'}}>
            <div>
                <Banner />
            </div>
            <div className="container py-5" >
                <div className="row py-5">
                    {dataArray.map(obj=>(
                        <div key={obj?.id} className="col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center " >
                        <div className="card shadow bg-primary-subtle card-conatiner" style={{ width: "100%"}}>
                            <img src={obj?.image}  className="card-img-top w-100 img-fluid d-block " alt="..." />
                            <div className="card-body card-text-container">
                                <h6 className="card-title fw-bold">{obj?.name}</h6>
                                <p>Period: {obj?.period}</p>
                                <Link to={`/view/${obj?.id}`} style={{textDecoration:'none'}} className='btn  text-black fw-fw-semibold fs-6 '>View Profile <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
 
                    ))
                        }
                </div>
            </div>
        </section>
    )
}

export default HallofFame