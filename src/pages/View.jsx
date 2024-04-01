import React from 'react'
import dataArray from '../datas/hallofImage.js'
import { useParams } from 'react-router-dom'

function View() {
    const {id} = useParams()
    const obj = dataArray.find((obj)=>obj.id == id)
  return (
    <section style={{backgroundColor:'#4267B2',height:'100vh'}} className='d-flex align-items-center justify-content-center w-100 py-5'>
        <div className="container">
            <div style={{backgroundColor:'#324E88'}} className="row p-5 rounded-5 d-flex align-items-start">
                <div className="col-lg-4">
                    <img src={obj?.image} style={{height:'300px'}} className="img-fluid rounded-5" alt="" />
                </div>
                <div className="col-lg-8">
                    <h1 className='fw-bold text-white text-uppercase'>{obj?.name}</h1>
                    <div className='my-5'>
                        <h4 className='text-white'>KPCC PRESIDENTS</h4>
                        <p className='text-white '>{obj?.period}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default View