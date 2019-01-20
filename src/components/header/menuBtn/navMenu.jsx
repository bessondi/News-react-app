import React, {Component} from 'react';

import navMenuStyle from './navMenu.module.css';
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
            <div className={headerStyle.burgerBtn}>
                <a href="#s" className={this.state.active
                    ? `${navMenuStyle.menuBtn} ${navMenuStyle.menuBtnActive}`
                    : `${navMenuStyle.menuBtn}`}
                   onClick={this.toggleClass}>
                    <span></span>
                </a>
            </div>


        )
    }
}

export default BurgerBtn;