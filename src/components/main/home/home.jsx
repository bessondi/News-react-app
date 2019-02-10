import React, {Component} from 'react';

import News from "../news/news";
import Entertainment from "../entertainment/entertainment";
import Places from "../places/places";
import Food from "../food/food";

import mainHomeStyle from './home.module.css';

import ImgSrc from '../../../img/Home.jpg';

class Home extends Component {
    render() {
        // const { pictures, titles, texts, links } = this.state;
        // const gridComponent = pictures.map( (compSrc, i) => <GridFoodComponent key={i} image={compSrc} title={titles[i]} text={texts[i]} hidden='read' link={links[i]} />);

        return (
            <main id='homeSection'>
                <div className={mainHomeStyle.ImgSection}>
                    <img src={ImgSrc} alt='img' className={mainHomeStyle.Img}/>
                </div>

                <h2 className={mainHomeStyle.homeTitle}>НОВОСТИ</h2>
                <News/>

                <h2 className={mainHomeStyle.homeTitle}>РАЗВЛЕЧЕНИЯ</h2>
                <Entertainment/>

                <h2 className={mainHomeStyle.homeTitle}>МЕСТА</h2>
                <Places/>

                <h2 className={mainHomeStyle.homeTitle}>ЕДА</h2>
                <Food/>

            </main>
        );
    }
}

export default Home;