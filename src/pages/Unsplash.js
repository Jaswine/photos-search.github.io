import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MdImageSearch} from 'react-icons/md';
import {AiTwotoneHeart} from   'react-icons/ai';
import {TiArrowLeftOutline, TiArrowRightOutline} from 'react-icons/ti';


function Unsplash() {
    const [photos, setPhotos] = useState([]);
    const [photoInfo, setPhotoInfo] = useState([]);
    const [image, setImage] = useState('');
    const [access_Key, setAccess_Key] = useState('')
    const [page, setPage] = useState(1);

    useEffect(() => {
        document.title = "Unsplash";
    }, [])

    console.log(page)

    const getPhotos = () => {
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

    const searchPhotos = async (e) => {
        e.preventDefault();
        getPhotos();
    }

    const left = () => {
        if (page > 1) {
            setPage(page-1)
        }
        getPhotos();
    }
    const right = () => {
        setPage(page+1);
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
                placeholder='search image'
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
            {photos? (
                <div className="photos">
                    {photos.map(photo => 
                        <div className="photo" key={photo.id}>
                            <img src={photo.urls.regular} xalt={photo.description} />
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
        
        {photos.length != 0 ? (
            <div className="paginator">
            <div className="paginator__on__left">
                <button 
                    className="btn"
                    onClick={left}
                    >
                        <TiArrowLeftOutline/>
                </button>
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