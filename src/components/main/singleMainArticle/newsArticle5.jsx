import React from 'react';
import styled from 'styled-components';
import CloseBtn from "./closeBtn";

import singleArticle from './newsArticle.module.css';
import SPbImgSrc from "../../../img/SPb5.jpg";

const PictureArticle = styled.div`
            background-image: url(${SPbImgSrc});
        `;

const Article = () => {
    return (
        <article className={singleArticle.mainArticle}>
            <a id="top" className={singleArticle.topScroll}></a>
            <CloseBtn/>

            <h1> Название статьи 5. </h1>
            <PictureArticle className={singleArticle.picArticle}/>

            <p>Описание. Lorem ipsum dolor sit amet.</p>
            <h2>Абзац 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae
                nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis
                tenetur voluptas.</p>
            <h3>Абзац 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae
                nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis
                tenetur voluptas.</p>

        </article>
    )
};

export default Article;