import React, { Component } from 'react';
import styled from 'styled-components';
import mainStyle from './main.module.css';

class GridComponent extends Component {
    render() {

        const { image, link, title, text, hidden } = this.props;

        const PictureImg = styled.div`
            background-image: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.7)), url(${image});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            height: 100%;
        `;
        const MarginTop = styled.div`
            padding: 25px;
            margin-top: auto;
        `;

        return (
            <a href={link} className={mainStyle.pictureWrap}>
                <PictureImg>
                    <MarginTop className={mainStyle.colorBlock}>
                        <h2>{title}</h2>
                        <h3>{text}</h3>
                        <h3 className={mainStyle.hidden}>{hidden}</h3>
                    </MarginTop>
                </PictureImg>
            </a>
        )
    }
}

export default GridComponent;