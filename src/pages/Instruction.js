import React from 'react';
//! IMAGES
import What from '../assets/images/What.png';
import Begin from '../assets/images/Begin.png';
import Copy from '../assets/images/Copy.png';
import Accept from '../assets/images/Accept.png';
import CreateApplication from '../assets/images/CreateApplication.png';
import GoToDeveloperAPI from '../assets/images/GoToDeveloperAPI.png';
import Join from '../assets/images/Join.png';
import NewApplication from '../assets/images/NewApplication.png';
import UrApps from '../assets/images/UrApps.png';
//! ICONST
import {AiOutlineArrowDown} from 'react-icons/ai'; 

function Instruction() {
  return (
    <div className='page'>
        <h1>Instruction</h1>
        <div className="instruction">
            <h3 >Do u wanna know how to get this token?</h3>
            <img src={What} alt="What" />
            <h3>We need to go in this place <AiOutlineArrowDown className='icon'/> <a href='https://unsplash.com/' className='link'>unsplash officals website</a></h3>
            <img src={Begin} alt="Begin" />
            <h3>U need to create a new accountor or log in</h3>
            <img src={Join} alt="Begin" />
            <h3>U need to click on it</h3>
            <img src={GoToDeveloperAPI} alt="Begin" />
            <img src={UrApps} alt="Begin" />
            <h3>U need to create new application</h3>
            <img src={NewApplication} alt="Begin" />
            <img src={Accept} alt="" />
            <img src={CreateApplication} alt="CreateApplication" />
            <h3>And u need to copy this tag and paste.</h3>
            <img src={Copy} alt="Copy" />
        </div>
    </div>
  )
}

export default Instruction