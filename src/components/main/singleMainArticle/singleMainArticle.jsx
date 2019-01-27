import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

import singleArticle from './singleArticle.module.css';
import SPb1ImgSrc from "../../../img/SPb.jpg";


const PictureArticle = styled.div`
            background-image: url(${SPb1ImgSrc});
        `;

const Article = () => {
    return (
        <article className={singleArticle.mainArticle} >

            <div className={singleArticle.btnWrapper}>
                <NavLink to="/news" className={singleArticle.articleBtn}>
                    <span/>
                </NavLink>
            </div>

            <h1> Заголовок. Название статьи </h1>
            <PictureArticle className={singleArticle.picArticle}/>
            <p>Описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aperiam
                consectetur debitis
                et.</p>
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