import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import Today from "./date";
import BurgerBtn from './menuBtn/navMenu';

import headerStyle from './header.module.css';

class Header extends Component {
    render() {

        return (
            <header>
                <nav>
                    <div className={headerStyle.headerLeft}>
                        <NavLink to='/' className={headerStyle.homePage}>SPBnews</NavLink>
                    </div>

                    <div className={headerStyle.headerCenter}>
                        <ul>
                            <li><NavLink to='/news' activeClassName={headerStyle.activeLink} className={headerStyle.boxBorder}>НОВОСТИ</NavLink></li>
                            <li><NavLink to='/entertainment' activeClassName={headerStyle.activeLink} className={headerStyle.boxBorder}>РАЗВЛЕЧЕНИЯ</NavLink></li>
                            <li><NavLink to='/city' activeClassName={headerStyle.activeLink} className={headerStyle.boxBorder}>ГОРОД</NavLink></li>
                            <li><NavLink to='/food' activeClassName={headerStyle.activeLink} className={headerStyle.boxBorder}>ЕДА</NavLink></li>
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