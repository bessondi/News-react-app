import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SocialIcons from "./socialIcons";

import footerStyle from "./footer.module.css";

const FooterFlex = () => {
    return (
        <div className={footerStyle.footerFlex}>
            <div className={footerStyle.sectionСolumns}>
                <div className={footerStyle.footerLeft}>
                    <p><a href="https://github.com/bessondi">SPb-News by Dmitry Bessonov</a></p>
                </div>
                <div className={footerStyle.footerCenter}>
                    <SocialIcons />
                </div>
                <div className={footerStyle.footerRight}>
                    <ul>
                        <li><Link to="/about">О проекте</Link></li>
                        <li><a href="mailto:dmitrybessonov@icloud.com">Обратная связь</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default FooterFlex;