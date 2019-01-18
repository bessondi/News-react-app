import React from 'react';
import SocialIcons from "./socialIcons";

import footerStyle from "./footer.module.css";

const FooterFlex = () => {
    return (
        <div className={footerStyle.footerFlex}>
            <div className={footerStyle.sectionСolumns}>
                <div className={footerStyle.footerLeft}>
                    <p>SPb-News by DB</p>
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
    )
};

export default FooterFlex;