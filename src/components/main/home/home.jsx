import React, {Component} from 'react';

import News from "../news/news";
import Entertainment from "../entertainment/entertainment";
import Places from "../places/places";
import Food from "../food/food";

import mainHomeStyle from './home.module.css';

import ImgSrc from '../../../img/Home_cr.jpg';

class Home extends Component {
    render() {
        return (
            <main id='homeSection'>
                <div className={mainHomeStyle.ImgSection}>
                    <img src={ImgSrc} alt='img' className={mainHomeStyle.Img}/>
                </div>

                <News/>
                <Entertainment/>
                <Places/>
                <Food/>
            </main>
        );
    }
}

export default Home;