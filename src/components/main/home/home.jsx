import React, {Component} from 'react';

import Slider from "./slider";
import ImagesData from './imagesData';

import News from "../news/news";
import Entertainment from "../entertainment/entertainment";
import Places from "../places/places";
import Food from "../food/food";

import mainHomeStyle from './home.module.css';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            property: ImagesData.properties[0]
        }
    }

    prevImg = () => {
        let newIndex = this.state.property.index - 1;
        if (newIndex < 0) {
            this.setState({
                property: ImagesData.properties[5]
            })
        } else {
            this.setState({
                property: ImagesData.properties[newIndex]
            })
        }
    }

    nextImg = () => {
        let newIndex = this.state.property.index + 1;
        if (newIndex < 6) {
            this.setState({
                property: ImagesData.properties[newIndex]
            })
        } else {
            this.setState({
                property: ImagesData.properties[0]
            })
        }
    }

    // componentDidMount() {
    //     this.timer = setInterval( this.nextImg, 2500 )
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer)
    // }

    render() {
        const { property } = this.state;

        return (
            <main id='homeSection'>
                <div className={mainHomeStyle.ImgSection}>
                    <Slider property={property} />
                    <span className={mainHomeStyle.sliderArrows}>
                        <button onClick={ () => this.prevImg() }
                                 // disabled={ property.index === 0 }
                                 className={mainHomeStyle.prevImg}
                        />
                        <button onClick={ () => this.nextImg() }
                                // disabled={ property.index === ImagesData.properties.length - 1 }
                                className={mainHomeStyle.nextImg}
                        />
                    </span>
                </div>

                <News disableBtnAddNews={true} />
                <Entertainment/>
                <Places/>
                <Food/>
            </main>
        )
    }
}

export default Home;