import React, { Component } from 'react';
import '../css/header.module.css';


class Header extends Component {
    render() {
        return ( 
            <header>
               <div></div>

                <nav>
                    <div className="header-left"><span className="today">Сегодня</span></div>
                    <div className="header-center">
                        <ul>
                            <li><a href="#s">Text 1</a></li>
                            <li><a href="#s">Text 2</a></li>
                            <li><a href="#s">Text 3</a></li>
                            <li><a href="#s">Text 4</a></li>
                        </ul>
                    </div>
                    <div className="header-right">icons</div>
                </nav>
            </header>
        );
    }
}

export default Header;