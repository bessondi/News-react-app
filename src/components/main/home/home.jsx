import React, {Component} from 'react';

import News from "../news/news";
import Entertainment from "../entertainment/entertainment";
import Places from "../places/places";
import Food from "../food/food";

import mainHomeStyle from './home.module.css';

import homeImg from '../../../img/Home_cr.jpg';


class Home extends Component {
    render() {
        return (
            <main id='homeSection'>
                <div className={mainHomeStyle.ImgSection}>
                    <img src={homeImg} alt='img' className={mainHomeStyle.Img}/>
                </div>

                <News disableBtnAddNews={true} />
                <Entertainment/>
                <Places/>
                <Food/>
            </main>
        );
    }
}

export default Home;