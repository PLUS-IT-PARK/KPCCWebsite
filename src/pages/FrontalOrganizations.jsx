import React from 'react'
import BannerOrganizations from '../components/BannerOrganizations'
import { Link } from 'react-router-dom'

function FrontalOrganizations() {
  return (
    <section style={{backgroundColor:'#4267B2',height:'100vh',width:'100%'}} >
    <div>
        <BannerOrganizations/>
    </div>
    <div className="container">
        <div className="row py-lg-5 py-sm-3">
            <div className="col-lg-12 flex-wrap d-flex align-items-center justify-content-evenly mb-5">
                <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">INDIAN YOUTH CONGRESS-KERALA</Link>
                <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">KERALA STUDENTS UNION (KSU)</Link>
                <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">KERALA PRADESH MAHILA CONGRESS</Link>
                <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">INTUC</Link>
                <Link  className="btn btn-outline-light mb-2 fw-bolder mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">SEVADAL</Link>

            </div>
        </div>
    </div>

</section>
  )
}

export default FrontalOrganizations