import React from 'react';
import {NavLink} from "react-router-dom";

import closeBtnStyle from "./closeArticleBtn.module.css";


const CloseBtn = (props) => {
    return (
        <React.Fragment>
            <NavLink to={props.path} className={closeBtnStyle.articleBtn}>
                <button className={closeBtnStyle.ArticleBtnClose}/>
                <span/>
            </NavLink>
        </React.Fragment>
    )
};

export default CloseBtn;