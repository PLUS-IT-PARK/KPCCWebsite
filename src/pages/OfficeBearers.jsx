import React, { useEffect, useState } from 'react'
import BannerOffice from '../components/BannerOffice'
import axios from 'axios'
import url from '../baseUrl'
import ProfileModal from '../components/ProfileModal';

function OfficeBearers() {
    const [getAllData, setGetAllData] = useState([]);
    const [activeButton, setActiveButton] = useState('president'); // Initial active button

    const handleButtonClick = async (category) => {
        setActiveButton(category);
        const result = await axios.get(`${url}/api/admin/get-bearers?category=${category}`);
        setGetAllData(result.data.bearers.reverse());
        // if( category === 'legislativeAssemblyMember'){
        //     //reverse the array
        //     setGetAllData(result.data.bearers.reverse());
        // }    
        
    }
    useEffect(() => {
        handleButtonClick(activeButton)
    },[activeButton]);
    return (
        <section style={{ backgroundColor: '#4267B2', height: '100%', width: '100%' }} >
            <div>
                <BannerOffice />
            </div>
            <div className="container pb-5">
                <div className="row py-5">
                    <div className="col-lg-12 flex-wrap d-flex align-items-center justify-content-evenly mb-5 ">
                        <button onClick={()=>handleButtonClick('president')} className={`btn ${activeButton === 'president' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>PRESIDENT</button>

                        <button onClick={()=>handleButtonClick('workingPresidents')} className={`btn ${activeButton === 'workingPresidents' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>WORKING PRESIDENTS</button>

                        <button onClick={()=>handleButtonClick('legislativeAssemblyMember')}  className={`btn ${activeButton === 'legislativeAssemblyMember' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>MEMBER OF LEGISLATIVE ASSEMBLY</button>

                        <button onClick={()=>handleButtonClick('memberOfParliment')}  className={`btn ${activeButton === 'memberOfParliment' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>MEMBER OF PARLIMENT</button>

                        <button onClick={()=>handleButtonClick('committe')} className={`btn ${activeButton === 'committe' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>COMMITTEE</button>

                        <button onClick={()=>handleButtonClick('dccPresidents')} className={`btn ${activeButton === 'dccPresidents' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>DCC PRESIDENTS</button>

                        <button onClick={()=>handleButtonClick('aiccIncharge')}  className={`btn ${activeButton === 'aiccIncharge' ? 'btn-light text-black' : 'btn-outline-light text-white'} mb-2 fw-bolder mt-3`}>AICC INCHARGE</button>
                    </div>

                </div>
                <div className="row">
                  {getAllData?.length>0 &&
                  getAllData.map((obj, index) =>(
                    <div key={index} className="col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center ">
                   <div className="card rounded-5 shadow bg-primary-subtle card-conatiner" style={{ width: "100%"}}>
                       <img src={obj?.image}  className="card-img-top rounded-5 w-100 img-fluid d-block " alt="..." />
                       <div className="card-body card-text-container">
                           <h6 className="card-title fw-bold ps-3">{obj?.name}</h6>
                          <div className='ps-3'>
                               <p>{obj?.position}</p> 
                               <p>{obj?.phone}</p>
                               <p>{obj?.email}</p>
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

export default OfficeBearers