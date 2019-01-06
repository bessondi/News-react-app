import React, { Component } from 'react';
// import '../css/GridComponentStyle.css';
import styled from 'styled-components';
import img from '../img/gcPic.jpg';


const GridStyle = styled.div`
    border: 5px solid red;
    grid-template-column: 500px;  
`;
// grid-column: 1 / 2;
// grid-row: 1 / 2;


 // ${img}
 // ${props => props.img}
 // <Content img={ImagePath} />
 // ${props => props.primary ? 'white' : 'black'}

const PictureImg = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0,0.9)), url(${img}); 

    background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
const TopMargin = styled.div`
    padding: 15px;
    // padding-top: 100px;
`;

class GridComponent extends Component {

    render() {
        return (
            <GridStyle>
               <PictureImg>
                    <TopMargin>
                        <h3>Title of the news</h3>
                        <p>Some text. Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                     </TopMargin>
                </PictureImg>
            </GridStyle>
        )
    }
}

export default GridComponent;