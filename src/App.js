import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/header/header';
import News from './components/main/news';
import Footer from './components/footer/footer';

import AllNewsArticles from "./components/main/singleMainArticle/allNewsArticles";

import './App.css';

// TODO:
// add other sections to the site
// fix close btn

// FIXME:


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>

                    <AllNewsArticles/>
                    <Route path='/news' component={News}/>

                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;