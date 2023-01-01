import React from 'react';
import {AiTwotoneHeart} from   'react-icons/ai';


function PhotoPixebay({photo}) {
  return (
    <div className="photo">
        <img src={photo.largeImageURL} alt="" />
        <div className="photo__info">
            <p>
                <a className="photo__url" target='_blank' href={`${photo.pageURL}`} >Go To Pixebay</a>
            </p>
            <a className='link photo__link'>{photo.user}</a>
            <h3><AiTwotoneHeart/>{photo.likes}</h3>
        </div>
    </div>
  )
}

export default PhotoPixebay