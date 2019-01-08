import React, { Component } from 'react';
import styled from 'styled-components';

class GridComponent extends Component {
    render() {

        const { image, link, title, text } = this.props;

        const PictureImg = styled.div`
            background-image: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8)), url(${image});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
        `;
        const MarginTop = styled.div`
            padding: 25px;
            margin-top: auto;
        `;

        return (
            <PictureImg className="pictureWrap">
                <MarginTop>
                    <a href={link}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </a>
                </MarginTop>
            </PictureImg>
        )
    }
}

export default GridComponent;