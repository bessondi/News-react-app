import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/header/header';
// import AllNewsRoutes from "./components/main/news/singleNewsArticles/allNewsRoutes";
import Home from "./components/main/home/home";
import News from './components/main/news/news';
import Entertainment from './components/main/entertainment/entertainment';
import Places from './components/main/places/places';
import Food from './components/main/food/food';
import Footer from './components/footer/footer';

import './App.css';

// TODO:
// add home page and other sections to the site
// fix close btn

// FIXME:


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    {/*<AllNewsRoutes />*/}

                    <Route exact path='/' component={Home}/>

                    <Route path='/news' component={News}/>
                    <Route path='/entertainment' component={Entertainment}/>
                    <Route path='/places' component={Places}/>
                    <Route path='/food' component={Food}/>

                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;