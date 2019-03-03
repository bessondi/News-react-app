import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import footerStyle from "./footer.module.css";

const Columns = () => {
    return (
        <div className={footerStyle.sectionField}>
            <div className={footerStyle.sectionСolumns}>
                <div className={footerStyle.fourColumns}>
                    <span className={footerStyle.boldStyle}>Рубрикатор</span>
                    <ul>
                        <li><Link to='/news'>Новости</Link></li>
                        <li><Link to='/entertainment'>Развлечения</Link></li>
                        <li><Link to='/places'>Места</Link></li>
                        <li><Link to='/food'>Еда</Link></li>
                    </ul>
                </div>
                <div className={footerStyle.fourColumns}>
                    <span className={footerStyle.boldStyle}>Some name 2</span>
                    <ul>
                        <li><Link to="empty">Text 1</Link></li>
                        <li><Link to="empty">Text 2</Link></li>
                        <li><Link to="empty">Text 3</Link></li>
                        <li><Link to="empty">Text 4</Link></li>
                    </ul>
                </div>
                <div className={footerStyle.fourColumns}>
                    <span className={footerStyle.boldStyle}>Some name 3</span>
                    <ul>
                        <li><Link to="empty">Text 1</Link></li>
                        <li><Link to="empty">Text 2</Link></li>
                        <li><Link to="empty">Text 3</Link></li>
                        <li><Link to="empty">Text 4</Link></li>
                    </ul>
                </div>
                {/*<div className={footerStyle.fourColumns}>*/}
                    {/*<span className={footerStyle.boldStyle}>Some name4</span>*/}
                    {/*<ul>*/}
                        {/*<li><a href="#s">text 1</a></li>*/}
                        {/*<li><a href="#s">text 2</a></li>*/}
                        {/*<li><a href="#s">text 3</a></li>*/}
                        {/*<li><a href="#s">text 4</a></li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
            </div>
        </div>
    )
};

export default Columns;