import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

import Article from "./components/main/singleMainArticle/singleMainArticle";


import './App.css';

// TODO:
// add different main pages


// FIXME:


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>

                    {/*<Article />*/}
                    {/* wrap the articles to one component with .map() */}
                    <Route path='/news/article1' component={Article}/>
                    <Route path='/news/article2' component={Article}/>
                    <Route path='/news/article3' component={Article}/>
                    <Route path='/news/article4' component={Article}/>
                    <Route path='/news/article5' component={Article}/>
                    <Route path='/news/article6' component={Article}/>

                    <Route path='/news' component={Main}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;