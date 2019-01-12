import React from 'react';
import logo1 from '../img/gcPic.jpg'; // Tell Webpack this JS file uses this image

console.log(logo1); // /logo.84287d09.png

function logo() {
    // Import result is the URL of your image
    return <img src = {
        logo1
    }
    alt = "Logo" / > ;
}

export default logo;