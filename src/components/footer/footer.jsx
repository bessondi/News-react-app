import React, { Component } from 'react';
import SocialIcons from './socialIcons';

import footerStyle from './footer.module.css';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={footerStyle.sectionField}>
                    <ul className={footerStyle.sectionСolumns}>
                        <ul>
                            <li><a href="#s">Name</a></li>
                            <li><a href="#s">text 1</a></li>
                            <li><a href="#s">text 2</a></li>
                            <li><a href="#s">text 3</a></li>
                        </ul>
                        <ul>
                            <li><a href="#s">Name</a></li>
                            <li><a href="#s">text 1</a></li>
                            <li><a href="#s">text 2</a></li>
                            <li><a href="#s">text 3</a></li>
                        </ul>
                        <ul>
                            <li><a href="#s">Name</a></li>
                            <li><a href="#s">text 1</a></li>
                            <li><a href="#s">text 2</a></li>
                            <li><a href="#s">text 3</a></li>
                        </ul>
                        <ul>
                            <li><a href="#s">Name</a></li>
                            <li><a href="#s">text 1</a></li>
                            <li><a href="#s">text 2</a></li>
                            <li><a href="#s">text 3</a></li>
                        </ul>

                    </ul>
                </div>

                <div className={footerStyle.footerFlex}>
                    <div className={footerStyle.sectionСolumns}>


                        <div className={footerStyle.footerLeft}>
                            <p>SPb-News by Dmitry Bessonov</p>
                        </div>

                        <div className={footerStyle.footerCenter}>
                            <SocialIcons />
                        </div>

                        <div className={footerStyle.footerRight}>
                            <ul>
                                <li><a href="#s">Privacy</a></li>
                                <li><a href="#s">Advertisement</a></li>
                                <li><a href="#s">Contact Us</a></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;