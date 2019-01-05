import React, { Component } from 'react';

import Header from './components/header';
import Main from './components/main';
// import Article from './components/article';
import Footer from './components/footer';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        {/* BG img */}
        <Main />

        <Footer />

      </div>
    );
  }
}

export default App;