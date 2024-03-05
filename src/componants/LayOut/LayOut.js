import React, {  useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const LayOut = () => {
  useEffect( ()=>{
      window.addEventListener("scroll" , ()=>{
      if (window.scrollY > 200) {
        setshowScrolleBtn(true)
      } else {
        setshowScrolleBtn(false)
      }
      });
  },[])
 
 const [showScrolleBtn , setshowScrolleBtn]=useState(false)


  return (

    <div  id='up'>
        <NavBar/>
        <Outlet/>
        <Footer/>
        <a href='#up' style={{opacity:showScrolleBtn?1 : 0 , transition:"1s"}}   >
        <button className='scroll-up'  >
          <FontAwesomeIcon  icon={faArrowUp}/>
        </button>
        </a>
    </div>
  )
}

export default LayOut