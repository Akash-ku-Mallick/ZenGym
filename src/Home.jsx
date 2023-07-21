import React, { useState, useEffect } from 'react'
import {
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import '@fullcalendar/react/dist/vdom';
import './Home.css'

import GymLocator from './pages/Components/GymLocator'
import Muscle from '../svgs/muscle'

import { getDocs, collection } from 'firebase/firestore'
import { db } from './database/firebase.jsx';





function Home({ uid, setuid, loginstate }) {
  const [adBarState, setAdBarState] = useState(true);
  const [LocatorState, setGymLocator] = useState(false);
  const [currentSub, setcurrentSub] = useState(null);

  const logout = () => { console.log(LocatorState) }

  return (
      <div className="Home">
        {adBarState?<AdBar />:null}
        {LocatorState?<GymLocator prop={setGymLocator} />:null}
        <Navbar GymlocWin={LocatorState} setGymlocWin={setGymLocator} log={logout} lginStatus={loginstate} lgindetails={uid}/>
        <Hero />
        <Context1 />
        <Context2 />
        <Context3 subedS={currentSub}/>
        <Footer />
      </div>
  )
}

function UserDropDown () {
  return (
    <div className='DropDown UserDropDown'>
      <button>Dashboard</button>
      <button>Sign Out</button>
    </div>
  )
}


function Navbar({GymlocWin, setGymlocWin, log, lginStatus, lgindetails}) {
  const [mouseState, setmouseState] = useState(false)

  const BasicDropDown = () => {
    return (
      <div onMouseLeave={()=>{setmouseState(!mouseState)}} className='DropDown'>
          <Link to='/login/gym'>Owner</Link>
          <Link to='/login/user'>User</Link>
          <Link to='/login/trainer'>Trainer</Link>
          </div>
    )
  }

  return (
    <nav className='Navbar'>
      <img className='logo' rel="icon" type="image/svg+xml" src="/logoZenGym.svg" />
      <ul className='Nav_ul'>
        <button className='Nav_li' >About Us</button>
        <button className='Nav_li' onClick={()=>{setGymlocWin(!GymlocWin)}}>Gym Locator</button>
        <button onClick={log} className='Nav_li'>Shop</button>
      </ul>
      <ul id='loginBtn' className='non-transfer'>
        <div className='Nav_li' onClick={()=>{setmouseState(!mouseState)}}>
        {lginStatus?
        <><p>X</p>{mouseState?null:<p>{lgindetails}</p>}</>:
        <><Muscle />{mouseState?null:<p>Login/SigneUp</p>}</>
        } 
        </div>
        { mouseState ? 
          (
          lginStatus
          ?
          <UserDropDown />
          :
          <BasicDropDown />
          )
          :
          null }
      </ul>

    </nav>
  )
}

function AdBar() {
  return (
    <div className='Navbar AdBar'>
      <div className='AdBar_txt_content'>
        
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div id='Hero' className='Hero panale'>
          <div className='Hero_txt_content'> 
          </div>
          <div className='Hero_L_content' >
            left
          </div>
          <div className='Hero_R_content' >
            right
          </div>
        </div>
  )
}

function Context1() {
  return(
    <div className='Context1 panale'>
      <img className='Hero_img' src='./images/pic3.jpg' />
      <h2>Amenities</h2>
    </div>
  )
}

function Context2() {
  const gymColRef = collection(db, 'Gym')

  
  const Block = (props) => {
    let x = document.createElement('div');
    x.className = 'Gym_Block'
    x.innerHTML = `<p>${props}</p>`
    return x
  }



  useEffect(() => {gyms()}, [])

  const gyms = async () => {
    const Block_container = document.querySelector('.Block_container')
    try{
    const data = await getDocs(gymColRef)
    data.forEach((doc) => {
      console.log(doc.data().name)
      Block_container.appendChild(Block(doc.data().name))
    })
  } catch (e) {
    console.log(e)
  }
  }

  return(
    <div className='Context1 panale'>
      <h2>Our Gyms</h2>
      <div className='Block_container'>
      </div>
    </div>
  )
}

function Context3(subedS) {
  const monthlyPack = {
    basic: 100,
    gold: 200,
    advance: 300
  }
  const feautres = {
    basic: 'Basic',
    gold: 'Gold',
    advance: 'Advance'
  }
  return(
    <div className='Context3 panale'>
      <h3>Plans & Packages</h3>
      <p>Choose your best pans based on your goals</p>
      <div className='Block_container'>
        {(subedS!==null)?
          <div className='Sub_pack_Block'>
            <div className=' basic'>
              <p>{feautres.basic}</p>
              <p>Monthly : {monthlyPack.basic} /-</p>
            </div>
            <p>Basic Package</p>
          </div>
          :null
        }
        <div className='Sub_pack_Block'>
          <div className=' basic'>
            <p>{feautres.basic}</p>
            <p>Monthly : {monthlyPack.basic} /-</p>
          </div>
          <p>Basic Package</p>
        </div>
        <div className='Sub_pack_Block'>
          <div className='Gold'>
            <p>{feautres.gold}</p>
            <p>Monthly : {monthlyPack.gold} /-</p>
          </div>
          <p>Gold Package</p>
        </div>
        <div className='Sub_pack_Block'>
          <div className='Advance'>
            <p>{feautres.advance}</p>
            <p>Monthly : {monthlyPack.advance} /-</p>
          </div>
          <p>Advance Package</p>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='End panale'>
      {/* MAps Reviews */}
        <div className='Footer'>
        <img className='Hero_img' src='./images/pic1.jpg' />
          <div className='Footer_txt_content'> 
            <h1>Hi, I'm Footer</h1>
          </div>
          <div className='Footer_L_content'>
          </div>
          <div className='Footer_R_content'>
          </div>
          <div className='Footer_Base_content'>
          </div>
        </div>
      </div>
  )
}

export default Home
