import React, { Component } from 'react';
import '../css/footer.css';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="sectionField">
                    <ul className="sectionСolumns">
                        <ul>
                            <li><a href="#">Name</a></li>
                            <li><a href="#">text 1</a></li>
                            <li><a href="#">text 2</a></li>
                            <li><a href="#">text 3</a></li>
                            <li><a href="#">text 4</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Name</a></li>
                            <li><a href="#">text 1</a></li>
                            <li><a href="#">text 2</a></li>
                            <li><a href="#">text 3</a></li>
                            <li><a href="#">text 4</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Name</a></li>
                            <li><a href="#">text 1</a></li>
                            <li><a href="#">text 2</a></li>
                            <li><a href="#">text 3</a></li>
                            <li><a href="#">text 4</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Name</a></li>
                            <li><a href="#">text 1</a></li>
                            <li><a href="#">text 2</a></li>
                            <li><a href="#">text 3</a></li>
                            <li><a href="#">text 4</a></li>
                        </ul>
                        
                    </ul>
                </div>

                <div className="footer-flex">
                    <div className="footer-left"><p>Copyright SPb-News by Dmitry Bessonov</p></div>
                    <div className="footer-center">
                        <ul>
                            <li><a href="#" className="logo1">logo</a></li>
                            <li><a href="#" className="logo2">logo</a></li>
                            <li><a href="#" className="logo3">logo</a></li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <ul>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Advertisement</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;