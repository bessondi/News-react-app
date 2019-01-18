import React, { Component } from 'react';
import SectionField from './sectionField';
import FooterFlex from './footerFlex';


class Footer extends Component {
    render() {
        return (
            <footer>
                <SectionField />
                <FooterFlex />
            </footer>
        );
    }
}

export default Footer;