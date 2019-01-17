import React, { Component } from 'react';

import headerStyle from './header.module.css';
import Today from "./date";

class Header extends Component {
    render() {

        return (
            <header>
                <nav>
                    <div className={headerStyle.headerLeft}></div>
                    <div className={headerStyle.headerCenter}>
                        <ul>
                            <li><a href="#s">Text 1</a></li>
                            <li><a href="#s">Text 2</a></li>
                            <li><a href="#s">Text 3</a></li>
                            <li><a href="#s">Text 4</a></li>
                        </ul>
                    </div>
                    <div className={headerStyle.headerRight}>
                        <p>Сегодня <Today /></p>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;