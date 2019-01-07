import React, { Component } from 'react';
import '../css/GridComponentStyle.css';

// import styled from 'styled-components';
// import img from '../img/gcPic.jpg';

 // ${img}
 // ${props => props.img}
 // <Content img={ImagePath} />
 // ${props => props.primary ? 'white' : 'black'}

// const PictureImg = styled.div`
//     // background-image: ${picture};
//     background-position: center;
// 	background-repeat: no-repeat;
//     background-size: cover;
//     display: flex;
//     flex-direction: column;
// `;

// const TopMargin = styled.div`
//     padding: 15px;
//     margin-top: auto;
// `;

// const picture = {props.image};


class GridComponent extends Component {

    render() {
        return (
             <div className="pictureBox">
                <img src={this.props.image} alt="lalala" width="100%" />
                
                <div className="topMargin">
                    <a href={this.props.link}>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.text} Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </a>
                </div>
             </div>
        )
    }
}

export default GridComponent;