import React, { useState, useRef, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthApp } from '../../database/firebase.jsx'
import './Component.css'
import Google from '../../../svgs/google.jsx'
import { db } from '../../database/firebase.jsx'
import { useNavigate, Route } from 'react-router-dom';
import autoAnimate from '@formkit/auto-animate';
import { collection, addDoc } from "firebase/firestore";



const provider = new GoogleAuthProvider;


const handleSubmit = (e) => { 
  e.preventDefault()
}



const SigneUpWithPhone = () => {
  const [phone, setphone] = useState('')

  const clickHandler = (e) => {
    e.preventDefault()
    
  }


  return (<form className='Login_form' onSubmit={(e)=>{handleSubmit(e)}}>
  <div className='form_containt'>
    <label >Phon Number</label>
    <input type='number' placeholder='Phone number' />
  </div>
  <div className='form_containt'>
    <label >OTP</label>
    <input  type='number' placeholder='OTP' />
  </div>
  <div className='lginSnupBtn'>
    <button onClick={(e)=>{clickHandler(e)}} className='Login_button' type='submit'>Sign Up</button>
  </div>
</ form>)
}

const LoginWithPhone = () => {
  const [phone, setphone] = useState('')
  
  const clickHandler = (e) => {
    e.preventDefault()
  }
  return (<form className='Login_form' onSubmit={(e)=>{handleSubmit(e)}}>
  <div className='form_containt'>
    <label >Phon Number</label>
    <input  type='number' placeholder='Phone number' />
  </div>
  <div className='form_containt'>
    <label >OTP</label>
    <input  type='number' placeholder='OTP' />
  </div>
  <div className='lginSnupBtn'>
    <button className='Login_button' type='submit'>Log In</button>
  </div>
</ form>)
}


const LoginWithEmail = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const clickHandler = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(AuthApp, email, password).then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle errors here
      console.log(error.message);
    });
  }

  return(<form className='Login_form' onSubmit={(e)=>{handleSubmit(e)}}>
  <div className='form_containt'>
    <label >Email</label>
    <input onChange={(e)=>{setemail(e.target.value)}} type='mail' placeholder='Enter Your Email Id' />
  </div><div className='form_containt'>
    <label >Password</label>
    <input onChange={(e)=>{setpassword(e.target.value)}} type='password' placeholder='Enter Your Password' />
  </div>
  <div className='lginSnupBtn'>
    <button onClick={(e)=>{clickHandler(e)}} className='Login_button' type='submit'>Log In</button>
  </div>
</ form>)
}

const SignUpWithEmail = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const clickHandler = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(AuthApp, email, password).then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle errors here
      console.log(error.message);
    });
  }

  return(<form className='Login_form' onSubmit={(e)=>{handleSubmit(e)}}>
  <div className='form_containt'>
    <label >Email</label>
    <input onChange={(e)=>{setemail(e.target.value)}} type='mail' placeholder='Enter Your Email Id' />
  </div><div className='form_containt'>
    <label >Password</label>
    <input onChange={(e)=>{setpassword(e.target.value)}} type='password' placeholder='Enter Your Password' />
  </div><div className='form_containt'>
    <label >Re-enter Password</label>
    <input type='password' placeholder='Re-enter Your Password' />
  </div>
  <div className='lginSnupBtn'>
    <button onClick={(e)=>{clickHandler(e)}} className='Login_button' type='submit'>Sign up</button>
  </div>
</ form>)
}

const SetupWithEmail = ({state, setState}) => {
  return (
    <>
      {state?
      <LoginWithEmail />
      :
      <SignUpWithEmail />
      }
      <span>To {state?'Create new account':'Log In to your account'} click on{" "}    
          <span className='spanBtn' onClick={()=>{setState(!state)}}>{state?'Sign up':'Log In'}</span> 
      </span>
    </>
  )
}

const SetupWithPhone = ({state, setState}) => {
  return (
    <>
    {state?
      <LoginWithPhone />
      :
      <SigneUpWithPhone />
      }
      <span>To {state?'Create new account':'Log In to your existing account'} click on{" "}    
        <span className='spanBtn' onClick={()=>{setState(!state)}}>{state?'Sign up':'Log In'}</span> 
      </span>
    </>
  )
}




export default function LoginG({setTypeOfUser,  uid, setuid}) {


  const [state, setState] = useState(true)
  const [phoneoremail, setphoneoremail] = useState(true)
  const [changeOp, setchangeOp] = useState(false)

  
  const parent = useRef(null)

  let token = null

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  

  const typeOfUser = {
    1: ' Gym Owner',
    2: ' User',
    3: ' Trainer',
  }

  

  const linkOfUser = {
    1: '/login/gym',
    2: '/login/trainer',
    3: ' /login/user',
  }

  let otherTypeOfUser = [0, 0]

  const handleBtn = () => {
    setchangeOp(!changeOp)
    if(setTypeOfUser==1){otherTypeOfUser[0]=2; otherTypeOfUser[1]=3}
    else if(setTypeOfUser==2){otherTypeOfUser[0]=1; otherTypeOfUser[1]=3}
    else if(setTypeOfUser==3){otherTypeOfUser[0]=1; otherTypeOfUser[1]=2}
  };
  

  const navigate = useNavigate();

  const addToDatabase = (uid) => {
    const myCollection = db.collection("User");
    myCollection.add({
      Email: uid.email,
      FirstName: uid.firstName,
    }).then((docRef) => {
  console.log("Document written with ID: ", docRef.id);})
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
  }

  const handleGoogle = (e) => {
    e.preventDefault()
    signInWithPopup(AuthApp, provider)
    .then((result) => {
    const user = result.user;
    const tok = result._tokenResponse;
  
    console.log(tok);
    token = tok.email;
    setuid({
      photoUrl : tok.photoUrl,
      fullName : tok.fullName,
      lastName : tok.lastName,
      firstName : tok.firstName,
      email : tok.email })
    addToDatabase(user)
      
  }).then(() => {navigate(`/${linkOfUser[setTypeOfUser]}/${token}`)})
  .catch((error) => {
    console.log(error.message)
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }



  return (
        <div className='Login' ref={parent}>
          
          <div className='Login_container'>
          
          <div className='blacktxt'><span >Setting up as {typeOfUser[setTypeOfUser]}</span>
          {changeOp?<span>
            <span onClick={()=>{navigate(linkOfUser[otherTypeOfUser[0]])}}>{typeOfUser[otherTypeOfUser[0]]}{" "}</span>
            <span onClick={()=>{navigate(linkOfUser[otherTypeOfUser[1]])}}>{typeOfUser[otherTypeOfUser[1]]}{" "}</span>
          </span>:null}</div>

          
          {phoneoremail?
          <SetupWithPhone state={state} setState={setState}/>
          :
          <SetupWithEmail state={state} setState={setState}/>
          }
          <span>To change setting up methode click on{" "}    
          <span className='spanBtn' onClick={()=>{setphoneoremail(!phoneoremail)}}>{phoneoremail?'with Email':'with Phone number'}</span> 
          </span>
          <hr />
          <label> Continue With Google Authentication</label>
          <button className='g_button' onClick={(e)=>{handleGoogle(e)}}><Google /></button>
          </div>
        </div>
  )
}

