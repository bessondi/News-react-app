import React from 'react';

import mainHomeStyle from './home.module.css';

const Slider = ({property}) => {
    const data = property;
    return (
        <div className={mainHomeStyle.sliderWrapper}>
            <img src={data.picture} alt='img' className={mainHomeStyle.ImgHome}/>
        </div>
    )
};

export default Slider;