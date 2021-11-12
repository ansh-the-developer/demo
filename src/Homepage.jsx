import React from 'react'
import Head from './Header'
import './index.css'
import HData from './HeaderData'
import CarouselP from './Carousels'
import CData from './CarouselData.jsx'
import About from './AboutPage'
import Doctor from './Meet-the-team'
import Services from './services'
import Contact from './Contact-Us-Page'

const Home=()=>{
    return(
        <>
        <Head
        item1={HData[0].item1}
        item2={HData[0].item2}
        item3={HData[0].item3}
        item4={HData[0].item4}
        item5={HData[0].item5}
        item6={HData[0].item6}
        item7={HData[0].item7}
        item8={HData[0].item8}
        item9={HData[0].item9}
        item10={HData[0].item10}
        item11={HData[0].item11}
        item12={HData[0].item12}
        />
        
        <CarouselP
         Image1={CData[0].Image1}
         label1={CData[0].label1}
         description1={CData[0].description1}

         Image2={CData[1].Image2}
         label2={CData[1].label2}
         description2={CData[1].description2}

         Image3={CData[2].Image3}
         label3={CData[2].label3}
         description3={CData[2].description3}
         />

        <About/>
        <br />
        <Doctor/>
        <br />
        <Services/>
        <Contact/>

        </>
    )
}
export default Home;