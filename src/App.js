import React, {Component} from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

import './App.css';

// TODO:
// add different animation to main blocks
// add different main pages
// finished menuBtn
// change social icons

// FIXME:


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;