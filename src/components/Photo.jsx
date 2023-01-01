import React from 'react';
import {AiTwotoneHeart} from   'react-icons/ai';

function Photo({photo}) {
  return (
    <div className="photo">
        <img src={photo.urls.regular} xalt={photo.description} />
        <div className="photo__info">
            <p>{photo.description}</p>
            <a className='link photo__link'>{photo.user.name}</a>
            <h3><AiTwotoneHeart/>{photo.likes}</h3>
        </div>
    </div>
  )
}

export default Photo