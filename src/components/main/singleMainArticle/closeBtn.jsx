import React from 'react';
import {NavLink} from "react-router-dom";

import singleArticle from "./newsArticle.module.css";

const CloseBtn = () => {
    return (
        <React.Fragment>
            <NavLink to="/news" className={singleArticle.articleBtn}>
                <span/>
            </NavLink>
        </React.Fragment>
    )
}

export default  CloseBtn;