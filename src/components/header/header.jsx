import React, {Component} from 'react';
import Today from "./date";
import BurgerBtn from './menuBtn/navMenu';

import headerStyle from './header.module.css';

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
                        <p>Сегодня <Today/></p>
                    </div>
                    <BurgerBtn/>
                </nav>
            </header>
        );
    }
}

export default Header;