import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MdImageSearch} from 'react-icons/md';
import {AiTwotoneHeart} from   'react-icons/ai';
import {TiArrowLeftOutline, TiArrowRightOutline} from 'react-icons/ti';
import PagesFunctions from '../components/PagesFunctions';
import PhotosNotFound from '../components/PhotosNotFound'
import Photo from '../components/Photo';

function Unsplash() {
    const [photos, setPhotos] = useState([]);
    const [photoInfo, setPhotoInfo] = useState('');
    const [image, setImage] = useState('');
    const [access_Key, setAccess_Key] = useState('')
    const [page, setPage] = useState(1);
    const {pageTitle} = PagesFunctions()

    useEffect (() => {
        pageTitle('Unsplash');
      }, []);

    const getPhotos = () => { //TODO: GET PHOTOS WITH AXIOS
        if (page < 1) {
            setPage(1)
        }
        console.log(page)
        axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${image}&client_id=${access_Key}`)
        .then(res => {
                console.log(res.data);
                setPhotoInfo(res.data);
                setPhotos(res.data.results)
            })
    }

    const searchPhotos = async (e) => { //TODO: SEARCH PHOTOS
        e.preventDefault();
        getPhotos();
    }

    //! PAGINATOR FUNCTION
    const left = () => { //TODO: LEFT 
        if (page > 1) { 
            setPage(Number(page)-1)
        }
        getPhotos();
    }
    const right = () => { //TODO: RIGHT
        setPage(Number(page)+1);
        getPhotos();
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
                placeholder='what do you want?'
            />
            <input 
                type='number' 
                className='search__input search__counter' 
                value={page}
                onChange={(e) => setPage(e.target.value)}
             />
            <button className='btn' onClick={searchPhotos}><MdImageSearch className='btn--icon'/></button>
        </form>
        <div className="page__filters"></div>
        <div className="page__photos">
            {photos.length != 0 ? (
                <div className="photos">
                    {photos.map(photo => 
                        <Photo photo={photo} key={photo.id} />  
                    )}
                </div>
            ): (
            <PhotosNotFound/>
            )}
        </div>
        
        {photos.length != 0 ? (
            <div className="paginator">
            <div className="paginator__on__left">
                {page > 1? (
                    <button 
                        className="btn"
                        onClick={left}
                    >
                        <TiArrowLeftOutline/>
                    </button>
                ): (<></>)}
            </div>
            <div className="paginator__on__right">
            <button 
                className="btn"
                onClick={right}
            >
                <TiArrowRightOutline/>
            </button>
            </div>
        </div>
        ): (<></>)}

    </div>
  )
}

export default Unsplash