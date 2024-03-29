import React from 'react'
import Carousel from '../components/Carousel'
import History from '../components/History'
import ChiefMinister from '../components/ChiefMinister'
import Infocus from '../components/Infocus'
import CarousalLabel from '../components/CarousalLabel'
import Channel from '../components/Channel'

function Home() {
  return (
    <div>
    {/* carousel */}
        <Carousel/>

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