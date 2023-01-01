import React from 'react';
import {BsArrowsFullscreen} from 'react-icons/bs'; 


function Fullscreen() {
    const fullscreen = () => {
        if (document.documentElement.requestFullscreen()) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }

    return (
        <button className="fullscreen" onClick={fullscreen}>
            <BsArrowsFullscreen className='fullscreen__icon'/>
        </button>
    )
}

export default Fullscreen