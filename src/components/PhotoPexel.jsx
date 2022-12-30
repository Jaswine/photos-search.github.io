import React from 'react';
import {AiTwotoneHeart} from   'react-icons/ai';


function PhotoPexel({photo, index}) {
  return (
    <div className="photo">
        <img src={photo.src.medium} alt={photo.alt} />
        <div className="photo__info">
            <p>
                <a className="photo__url" target='_blank' href={`${photo.url}`} >{photo.alt}</a>
            </p>
            <a className='link photo__link' target='_blank' href={`${photo.photographer_url}`}>{photo.photographer}</a>
        </div>
    </div>
  )
}

export default PhotoPexel