import React from 'react'
import BannerOffice from '../components/BannerOffice'
import { Link } from 'react-router-dom'

function OfficeBearers() {
  return (
    <section style={{backgroundColor:'#4267B2',height:'100%',width:'100%'}} >
        <div>
            <BannerOffice/>
        </div>
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-12 flex-wrap d-flex align-items-center justify-content-evenly mb-5">
                    <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">PRESIDENT</Link>
                    <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">WORKING PRESIDENTS</Link>
                    <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">MEMBER OF LEGISLATIVE ASSEMBLY</Link>
                    <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">MEMBER OF PARLIMENT</Link>
                    <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">COMMITTEE</Link>
                    <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">DCC PRESIDENTS</Link>
                    <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">AICC INCHARGE</Link>

                </div>
            </div>
        </div>

    </section>
  )
}

export default OfficeBearers