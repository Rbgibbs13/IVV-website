import ImageGallery from 'react-image-gallery';
import './style.css';

const Gallery = () => {
    const images = [
        {
            original: '../../images/shop-images/leather-bag.webp',
            thumbnail: '../../images/shop-images/leather-bag.webp',
            thumbnailHeight: '20px',
            thumbnailWidth: '20px',
        },
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <div className='img-gallery'>
            <ImageGallery items={images} autoPlay='true' showBullets='true' showIndex='true' slideInterval={5000}/>
        </div>
    )
}

export default Gallery;