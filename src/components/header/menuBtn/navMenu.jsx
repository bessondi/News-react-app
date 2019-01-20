import React, {Component} from 'react';

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

                        <li><a href="#s">text1</a></li>
                        <li><a href="#s">text2</a></li>
                        <li><a href="#s">text3</a></li>
                        <li><a href="#s">text4</a></li>
                    </ul>
                </div>

                <div className={headerStyle.burgerBtn}>
                    <a href="#s" className={ this.state.active
                        ? `${navMenuBtnStyle.menuBtn} ${navMenuBtnStyle.menuBtnActive}`
                        : `${navMenuBtnStyle.menuBtn}` }
                       onClick={ this.toggleClass }>
                        <span></span>
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default BurgerBtn;