import React, { Component } from 'react';

import Header from './components/header';
import Main from './components/main';
// import Article from './components/article';
import Footer from './components/footer';

import './App.css';

// TODO:
// добавить шрифты
// онфокус на блоки мэйн
// бургер меню

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