import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-[1220px] mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img  src="https://i.ibb.co/y6pKk3J/martin-engel-crblx-Cm-Cns-unsplash.jpg" className="w-full h-[400px]" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Hz41JfR/hal-gatewood-Wc-Yei-HMex-R0-unsplash.jpg" className="w-full h-[400px]" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/pPD3cMX/jonah-pettrich-V-dfc-Nnb9-OU-unsplash.jpg" className="w-full h-[400px]" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    );
};

export default Banner;
