import { useState } from 'react'

import './Home.css'

function Home() {

  return (
    <>
      <div className="Home">
        <Navbar />
        <Hero />
        <Context1 />
        <Context2 />
        <Context3 />
        <Footer />
      </div>
    </>
  )
}

function Navbar() {
  return (
    <nav className='Navbar'>
      <img className='logo' rel="icon" type="image/svg+xml" src="/logoZenGym.svg" />
      <ul className='Nav_ul'>
        <a className='Nav_li' >Home</a>
        <a className='Nav_li'>About</a>
        <a className='Nav_li'>Contact</a>
        <a className='Nav_li'>Plans</a>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <div id='Hero' className='Hero panale'>
          <div className='Hero_txt_content'> 
            <h1>Hi, I'm Hero</h1>
          </div>
          <div className='Hero_L_content'>
          </div>
          <div className='Hero_R_content'>
          </div>
        </div>
  )
}

function Context1() {
  return(
    <div className='Context1 panale'>
    </div>
  )
}

function Context2() {
  return(
    <div className='Context1 panale'>
    </div>
  )
}

function Context3() {
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
        <div className='Sub_pack_Block'>
          <div className='basic'>
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
      {/* MAps */}
        <div className='Footer'>
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
