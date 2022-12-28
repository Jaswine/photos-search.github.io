import React, {useState} from 'react';
import axios from 'axios';
import {MdImageSearch} from 'react-icons/md';
import {AiTwotoneHeart} from   'react-icons/ai';


function Unsplash() {
    const [photos, setPhotos] = useState([]);
    const [photoInfo, setPhotoInfo] = useState([]);
    const [image, setImage] = useState('');
    const [access_Key, setAccess_Key] = useState('')

    // useEffect(() => {
    //     getPhotos()
    // }, [])

    const getPhotos = async (e) => {
        e.preventDefault();
        console.log(image);

       axios.get(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=${access_Key}`)
           .then(res => {
                console.log(res.data);
                setPhotoInfo(res.data);
                setPhotos(res.data.results)
            })
    }

  return (
    <div className='page'>
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
                placeholder='search image'
            />
            <button className='btn' onClick={getPhotos}><MdImageSearch className='btn--icon'/></button>
        </form>
        <div className="page__filters"></div>
        <div className="page__photos">
            {photos? (
                <div className="photos">
                    {photos.map(photo => 
                        <div className="photo" key={photo.id}>
                            <img src={photo.urls.regular} alt={photo.description} />
                            {console.log(photo)}
                            <div className="photo__info">
                                <p>{photo.description}</p>
                                <a className='link photo__link'>{photo.user.name}</a>
                                <h3><AiTwotoneHeart/>{photo.likes}</h3>
                            </div>
                        </div>
                    )}
                </div>
            ): (
                <div className="photos__not__found">
                    <h2>Photos Not Found</h2>
                    <p>Enter Another Request</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default Unsplash