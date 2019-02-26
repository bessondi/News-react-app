import React, {Component} from 'react';
import {Route} from "react-router-dom";
import CloseArticleBtn from "./closeArticleBtn";
import DiffPublishDates from "./diffPublishDates";

import styled from 'styled-components';
import singleArticle from "./article.module.css";


export default class ArticlesTemplate extends Component {

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    render() {
        const { articles, closeArticlePath } = this.props;

        const ArticleTemplate = articles.map( (article, id) => {

            const PictureArticle = styled.div`
            background-image: url(${article.img});
            `;

            const component = () => {
                return (
                    <article className={singleArticle.mainArticle}>
                        <CloseArticleBtn path={closeArticlePath}/>

                        <h1> {article.title} </h1>
                        <PictureArticle className={singleArticle.picArticle}/>
                        <span className={singleArticle.description}> {article.description} </span>

                        <h2> {article.firstH2} </h2>
                        {   this.props.text1 ?
                            <p> {article.text1} </p> :
                            article.text1 !== undefined ?
                            article.text1.split('\n').map( text => <p>{text}</p>) :
                            null }

                        <h3> {article.secondH2} </h3>
                        {   this.props.text2 ?
                            <p> {article.text2} </p> :
                            article.text2 !== undefined ?
                            article.text2.split('\n').map( text => <p>{text}</p>) :
                            null }

                        <h3> {article.thirdH2} </h3>
                        {   this.props.text3 ?
                            <p> {article.text3} </p> :
                            article.text3 !== undefined ?
                            article.text3.split('\n').map( text => <p>{text}</p>) :
                            null }

                        <br/>
                        <time className={singleArticle.publish}>
                            <span>Опубликовано <DiffPublishDates date={article.dateOfPublish}/></span>
                        </time>
                    </article>
                )
            };
            return (
                <Route path={article.path} key={id} component={component}/>
            )
        });

        return (
            <React.Fragment>
                {ArticleTemplate}
            </React.Fragment>
        );
    }
}