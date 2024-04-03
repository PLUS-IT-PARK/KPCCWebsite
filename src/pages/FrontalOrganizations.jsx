import React, { useEffect, useState } from 'react'
import BannerOrganizations from '../components/BannerOrganizations'
import axios from 'axios'
import url from '../baseUrl'
import ProfileModal from '../components/ProfileModal';

function FrontalOrganizations() {

    const [presidentData, setPresidentData] = useState([]);
    const [activeButton, setActiveButton] = useState('indianYouthCongressKerala'); // Initial active button

    const handleButtonClick = async (category) => {
        setActiveButton(category);
        const result = await axios.get(`${url}/api/admin/get-organizations?category=${category}`);
        setPresidentData(result.data.organizations);
    }

    useEffect(() => {
        handleButtonClick(activeButton); // Fetch data whenever activeButton changes
    }, [activeButton]);

    return (
        <section style={{ backgroundColor: '#4267B2', width: '100%' }}>
            <div>
                <BannerOrganizations />
            </div>
            <div className="container py-5">
                <div className="row py-lg-5 py-sm-3">
                    <div className="col-lg-12 flex-wrap d-flex align-items-center justify-content-evenly mb-5">
                        <button onClick={() => handleButtonClick('indianYouthCongressKerala')} className={`btn ${activeButton === 'indianYouthCongressKerala' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>INDIAN YOUTH CONGRESS-KERALA</button>
                        <button onClick={() => handleButtonClick('ksu')} className={`btn ${activeButton === 'ksu' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>KERALA STUDENTS UNION (KSU)</button>
                        <button onClick={() => handleButtonClick('kpmc')} className={`btn ${activeButton === 'kpmc' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>KERALA PRADESH MAHILA CONGRESS</button>
                        <button onClick={() => handleButtonClick('intuc')} className={`btn ${activeButton === 'intuc' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>INTUC</button>
                        <button onClick={() => handleButtonClick('sevadal')} className={`btn ${activeButton === 'sevadal' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>SEVADAL</button>
                    </div>
                </div>
                <div className="row">
                    {
                        presidentData?.length > 0 &&
                        presidentData?.map((obj, index) => (
                            <div key={index} className="col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center ">
                                <div className="card shadow bg-primary-subtle card-conatiner" style={{ width: "100%" }}>
                                    <img src={obj?.image} className="card-img-top w-100 img-fluid d-block " alt="..." />
                                    <div className="card-body card-text-container">
                                        <h6 className="card-title fw-bold text-black ps-3">{obj?.name}</h6>
                                        <div className='ps-3'>
                                            <p className='text-black fs-5'>{obj?.postion}</p>
                                            <p className='text-black'>{obj?.phone}</p>
                                            <p className='text-black'>{obj?.email}</p>
                                        </div>
                                        <div>
                                         <ProfileModal userDetails={obj}/>
                                      </div>
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

export default FrontalOrganizations;
