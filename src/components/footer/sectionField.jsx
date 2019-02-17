import React from 'react';
import footerStyle from "./footer.module.css";
import { HashLink as Link } from 'react-router-hash-link';

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
                    <span className={footerStyle.boldStyle}>Name</span>
                    <ul>
                        <li><a href="/news">text 1</a></li>
                        <li><a href="/entertainment">text 2</a></li>
                        <li><a href="/places">text 3</a></li>
                        <li><a href="/food">text 3</a></li>
                    </ul>
                </div>
                <div className={footerStyle.fourColumns}>
                    <span className={footerStyle.boldStyle}>Name</span>
                    <ul>
                        <li><a href="#s">text 1</a></li>
                        <li><a href="#s">text 2</a></li>
                        <li><a href="#s">text 3</a></li>
                        <li><a href="#s">text 3</a></li>
                    </ul>
                </div>
                {/*<div className={footerStyle.fourColumns}>*/}
                    {/*<span className={footerStyle.boldStyle}>Name</span>*/}
                    {/*<ul>*/}
                        {/*<li><a href="#s">text 1</a></li>*/}
                        {/*<li><a href="#s">text 2</a></li>*/}
                        {/*<li><a href="#s">text 3</a></li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
            </div>
        </div>
    )
};

export default Columns;