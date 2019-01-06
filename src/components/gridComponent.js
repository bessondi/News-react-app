import React, { Component } from 'react';
// import '../css/GridComponentStyle.css';
import styled from 'styled-components';
import img from '../img/gcPic.jpg';

 // ${img}
 // ${props => props.img}
 // <Content img={ImagePath} />
 // ${props => props.primary ? 'white' : 'black'}

const PictureImg = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0,0.9)), url(${img}); 

    background-position: center;
	background-repeat: no-repeat;
    background-size: cover;
    display: flex;
	flex-direction: column;
`;
const TopMargin = styled.div`
    padding: 15px;
    // padding-top: 100px;
    margin-top: auto;

`;
// const H3Margin = styled.h3`
//     margin-top: auto;
// `;

class GridComponent extends Component {

    render() {
        return (
            <PictureImg>
                <TopMargin>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text} Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </TopMargin>
            </PictureImg>
        )
    }
}

export default GridComponent;