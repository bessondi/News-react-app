import React, { Component } from 'react';
import footerStyle from '../css/footer.module.css';


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
                            <li><a href="#s">text 4</a></li>
                        </ul>
                        <ul>
                            <li><a href="#s">Name</a></li>
                            <li><a href="#s">text 1</a></li>
                            <li><a href="#s">text 2</a></li>
                            <li><a href="#s">text 3</a></li>
                            <li><a href="#s">text 4</a></li>
                        </ul>
                        <ul>
                            <li><a href="#s">Name</a></li>
                            <li><a href="#s">text 1</a></li>
                            <li><a href="#s">text 2</a></li>
                            <li><a href="#s">text 3</a></li>
                            <li><a href="#s">text 4</a></li>
                        </ul>
                        <ul>
                            <li><a href="#s">Name</a></li>
                            <li><a href="#s">text 1</a></li>
                            <li><a href="#s">text 2</a></li>
                            <li><a href="#s">text 3</a></li>
                            <li><a href="#s">text 4</a></li>
                        </ul>
                        
                    </ul>
                </div>

                <div className={footerStyle.footerFlex}>
                    <div className={footerStyle.footerLeft}><p>Copyright SPb-News by Dmitry Bessonov</p></div>
                    <div className={footerStyle.footerCenter}>
                        <ul>
                            <li><a href="#s" className={footerStyle.logo1}>logo</a></li>
                            <li><a href="#s" className={footerStyle.logo2}>logo</a></li>
                            <li><a href="#s" className={footerStyle.logo3}>logo</a></li>
                        </ul>
                    </div>
                    <div className={footerStyle.footerRight}>
                        <ul>
                            <li><a href="#s">Privacy</a></li>
                            <li><a href="#s">Advertisement</a></li>
                            <li><a href="#s">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;