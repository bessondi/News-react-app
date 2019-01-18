import React, { Component } from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
// import Article from './components/article';
import Footer from './components/footer/footer';

import './App.css';

// TODO:
// бургер меню при <640

// FIXME:


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;