import React from 'react'
import './pages/Components/Component.css'
import './index.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className='Login pic2'  ref={parent}>
          
      <div className='Login_container sized flex col spacearound'>
      <label className='head'>Choose your role while setting up</label>
        <div className='flex row'>
        <div onClick={()=>{navigate('/login/user')}} className='blacktxt'>
          <img src='../images/user.png' />
          <label>User</label>
        </div>
        <div onClick={()=>{navigate('/login/trainer')}} className='blacktxt'>
          <img src='../images/coach.png' />
          <label>Coach</label>
        </div>
        <div onClick={()=>{navigate('/login/gym')}} className='blacktxt'>
          <img src='../images/gym.jpg' />
          <label>Gym</label>
        </div>
        </div>
      </div>
    </div>
  )
}
