import React, { Component } from 'react';

import SI1imgSrc from "../../ico/facebook.svg";
import SI2imgSrc from "../../ico/telegram.svg";
import SI3imgSrc from "../../ico/instagram.svg";

class SocialIcons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            icons: [
                SI1imgSrc,
                SI2imgSrc,
                SI3imgSrc,
            ],
            links: [
                "https://www.facebook.com/bessondi",
                "https://t.me/bessondi",
                "https://www.instagram.com/bessondi"
            ]
        }
    }

    render() {
        const { icons, links } = this.state;

        return (
            <div className="socialIcons">
                <ul>
                    {
                        icons.map((icoSrc, i) =>
                            <li key={i}>
                                <a href={links[i]}>
                                    <img src={icoSrc} alt="social logo" width="25" height="25"></img>
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default SocialIcons;