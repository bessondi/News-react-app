import React, { Component } from 'react';
import headerStyle from '../css/header.module.css';


class Header extends Component {
    render() {
        return (
            <header>
                <div></div>

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
                        <span className={headerStyle.today}>
                            <p>Сегодня</p>
                        </span>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;