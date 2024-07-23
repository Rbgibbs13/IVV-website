import ImageGallery from 'react-image-gallery';
import './style.css';

const Gallery = () => {
    const images = [
        {
            original: '../../images/ivv-images/IMG_3197.JPG',
            thumbnail: '../../images/ivv-images/IMG_3197.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3218.JPG',
            thumbnail: '../../images/ivv-images/IMG_3218.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3219.JPG',
            thumbnail: '../../images/ivv-images/IMG_3219.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3222.JPG',
            thumbnail: '../../images/ivv-images/IMG_3222.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3232.JPG',
            thumbnail: '../../images/ivv-images/IMG_3232.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3259.JPG',
            thumbnail: '../../images/ivv-images/IMG_3259.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3262.JPG',
            thumbnail: '../../images/ivv-images/IMG_3262.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3265.JPG',
            thumbnail: '../../images/ivv-images/IMG_3265.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3270.JPG',
            thumbnail: '../../images/ivv-images/IMG_3270.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3271.JPG',
            thumbnail: '../../images/ivv-images/IMG_3271.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3272.JPG',
            thumbnail: '../../images/ivv-images/IMG_3272.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3442.JPG',
            thumbnail: '../../images/ivv-images/IMG_3442.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3446.JPG',
            thumbnail: '../../images/ivv-images/IMG_3446.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3454.JPG',
            thumbnail: '../../images/ivv-images/IMG_3454.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3457.JPG',
            thumbnail: '../../images/ivv-images/IMG_3457.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3461.JPG',
            thumbnail: '../../images/ivv-images/IMG_3461.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3465.JPG',
            thumbnail: '../../images/ivv-images/IMG_3465.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3570.JPG',
            thumbnail: '../../images/ivv-images/IMG_3570.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3573.JPG',
            thumbnail: '../../images/ivv-images/IMG_3573.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3590.JPG',
            thumbnail: '../../images/ivv-images/IMG_3590.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_3592.JPG',
            thumbnail: '../../images/ivv-images/IMG_3592.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_E3222.JPG',
            thumbnail: '../../images/ivv-images/IMG_E3222.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_E3259.JPG',
            thumbnail: '../../images/ivv-images/IMG_E3259.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_E3265.JPG',
            thumbnail: '../../images/ivv-images/IMG_E3265.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_E3456.JPG',
            thumbnail: '../../images/ivv-images/IMG_E3456.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_E3461.JPG',
            thumbnail: '../../images/ivv-images/IMG_E3461.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_E3465.JPG',
            thumbnail: '../../images/ivv-images/IMG_E3465.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_E3475.JPG',
            thumbnail: '../../images/ivv-images/IMG_E3475.JPG',
        },
        {
            original: '../../images/ivv-images/IMG_E3594.JPG',
            thumbnail: '../../images/ivv-images/IMG_E3594.JPG',
        },
        {
            original: '../../images/ivv-images/WKJA1815.JPG',
            thumbnail: '../../images/ivv-images/WKJA1815.JPG',
        },
    ];

    return (
        <div className='img-gallery'>
            <ImageGallery items={images} autoPlay='true' showBullets='false' showIndex='true' slideInterval={5000}/>
        </div>
    )
}

export default Gallery;