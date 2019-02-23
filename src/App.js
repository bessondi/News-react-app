import React, {Component} from 'react';
import {Route} from "react-router-dom";

import Header from './components/header/header';
import NewsArticles from "./components/main/news/newsArticles";
import Home from "./components/main/home/home";
import News from './components/main/news/news';
import Entertainment from './components/main/entertainment/entertainment';
import Places from './components/main/places/places';
import Food from './components/main/food/food';
import Footer from './components/footer/footer';

import './App.css';


// TODO:
// think about homepage image
// fill texts to the articles
// add animations
// add weather in header
// add map in places


class App extends Component {
    render() {
        return (
                <div className="App">
                    <Header/>
                    <NewsArticles/>

                    <Route exact path='/' component={Home}/>
                    <Route path='/news' component={News}/>
                    <Route path='/entertainment' component={Entertainment}/>
                    <Route path='/places' component={Places}/>
                    <Route path='/food' component={Food}/>
                    <Footer/>
                </div>
        )
    }
}

export default App;