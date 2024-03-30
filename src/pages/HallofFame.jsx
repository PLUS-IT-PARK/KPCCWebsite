import React from 'react'
import Banner from '../components/Banner'
import dataArray from '../datas/hallofImage.js'
function HallofFame() {
    return (
        <section style={{backgroundColor:'#207BC8'}}>
            <div>
                <Banner />
            </div>
            <div className="container py-5" >
                <div className="row py-5">
                    {dataArray.map(obj=>(
                        <div key={obj?.id} className="col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center " >
                        <div className="card shadow bg-primary-subtle" style={{ width: "18rem",height:'390px' }}>
                            <img src={obj?.image}  className="card-img-top w-100 img-fluid" alt="..." />
                            <div className="card-body">
                                <p className="card-title fw-bold">{obj?.name}</p>
                                <p>{obj?.period}</p>
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