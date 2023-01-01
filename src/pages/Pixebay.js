import React, { useEffect, useState } from 'react'
import PagesFunctions from '../components/PagesFunctions';
import PhotosNotFound from '../components/PhotosNotFound';
import axios from 'axios';
import {MdImageSearch} from 'react-icons/md';
import PhotoPixebay from '../components/PhotoPixebay';

function Pixebay() {
  const [paginator, setPaginator] = useState([]);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState('');
  const [access_Key, setAccess_Key] = useState('')
  const {pageTitle} = PagesFunctions()

  useEffect (() =>  {
    pageTitle('Pixebay')
  }, []);

  const searchPhotos = async (e) => {
    e.preventDefault();

    axios.get(`https://pixabay.com/api/?key=${access_Key}&q=${image}&image_type=photo`)
      .then(res => {
        console.log(res.data);
        setPaginator(res.data);
        setImages(res.data.hits);
      });
  }

  return (
    <div>
      <form action="" className="page__search">
            <input 
                type="text" className='search__input'
                value={access_Key} 
                onChange={(e) => setAccess_Key(e.target.value)}
                placeholder='ur access key'
            />
            <input 
                type="text" className='search__input'
                value={image} 
                onChange={(e) => setImage(e.target.value)}
                placeholder='what do you want?'
            />
            <button className='btn' onClick={searchPhotos}><MdImageSearch className='btn--icon'/></button>
        </form>
        <div className="page__filters"></div>
        <div className="page__photos">
            {images ? (
                <div className="photos">
                    {images.map((photo, index) => 
                      <PhotoPixebay photo={photo} key={index} />
                    )}
                </div>
            ): (
              <PhotosNotFound/>
            )}
        </div>
    </div>
  )
}

export default Pixebay