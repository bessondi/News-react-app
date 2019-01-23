import React, {Component} from 'react';
import Today from "./date";
import BurgerBtn from './menuBtn/navMenu';

import headerStyle from './header.module.css';

class Header extends Component {
    render() {

        return (
            <header>
                <nav>
                    <div className={headerStyle.headerLeft}><p>SPBnews</p></div>
                    <div className={headerStyle.headerCenter}>
                        <ul>
                            <li><a href="#s">TEXT1</a></li>
                            <li><a href="#s">TEXT2</a></li>
                            <li><a href="#s">TEXT3</a></li>
                            <li><a href="#s">TEXT4</a></li>
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