import React from 'react';
import img1 from '../../../assets/slide/img2.jpg'
import img2 from '../../../assets/slide/img2 (3).jpg'
import img3 from '../../../assets/slide/img2 (1).jpg'

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" alt='/' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Slider;