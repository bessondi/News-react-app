import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import navMenuActive from "./nav.Menu.module.css";
import navMenuBtnStyle from './navMenuBtn.module.css';
import headerStyle from "../header.module.css";

class BurgerBtn extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
    }

    toggleClass = () => {
        let currentState = this.state.active;
        this.setState({active: !currentState});
    };

    render() {
        return (
            <React.Fragment>
                <div className={ this.state.active
                    ? `${navMenuActive.wrapperActive}`
                    : `${navMenuActive.wrapper}` }>

                    <ul className={ this.state.active
                        ? `${navMenuActive.listItemsActive}`
                        : `${navMenuActive.listItems}` }>


                        <li><NavLink to="/news" onClick={ this.toggleClass }>НОВОСТИ</NavLink></li>
                        <li><NavLink to="/entertainment" onClick={ this.toggleClass }>РАЗВЛЕЧЕНИЯ</NavLink></li>
                        <li><NavLink to="/city" onClick={ this.toggleClass }>ГОРОД</NavLink></li>
                        <li><NavLink to="/food" onClick={ this.toggleClass }>ЕДА</NavLink></li>


                        <li className={navMenuActive.mailFont}>
                            <a href="mailto:dmitrybessonov@icloud.com">dmitrybessonov@icloud</a>
                        </li>
                        <li className={navMenuActive.linksSmall}>
                            <a href="https://www.facebook.com/bessondi">FACEBOOK</a>
                            <a href="https://vk.com/bessondi">VK</a>
                            <a href="https://www.instagram.com/bessondi">INSTAGRAM</a>
                        </li>
                    </ul>

                </div>

                <div className={headerStyle.burgerBtn}>
                    <a href="#s" className={ this.state.active
                        ? `${navMenuBtnStyle.menuBtn} ${navMenuBtnStyle.menuBtnActive}`
                        : `${navMenuBtnStyle.menuBtn}` }
                       onClick={ this.toggleClass }>
                        <span/>
                    </a>
                </div>

            </React.Fragment>
        )
    }
}

export default BurgerBtn;