import React from 'react'
import Carousel from '../components/Carousel'
import History from '../components/History'
import ChiefMinister from '../components/ChiefMinister'
import Infocus from '../components/Infocus'
import CarousalLabel from '../components/CarousalLabel'
import Channel from '../components/Channel'
// import ChatBot from '../components/ChatBot'

function Home() {
  return (
    <div style={{ position: 'relative' }}>
     {/* carousel */}
        <Carousel/>

     {/* chatBot */}
     {/* <div className='bg-white rounded-pill p-3 shadow' style={{ position: 'fixed', top: '18%', right: '20px', zIndex: '9999' }}>
        <ChatBot />
      </div> */}
     {/* history */}
        <History/>

        {/* carousalLabel */}
        <CarousalLabel/>

        {/* Channels or News card */}
        <Channel/>

    {/* chief-minister */}
        <ChiefMinister/>

    {/* infocus */}
        <Infocus/>
  
</div>
  )
}

export default Home