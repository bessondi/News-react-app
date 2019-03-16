import React, {Component} from 'react';
import headerStyle from './header.module.css';

class Currency extends Component {
    state = {
        uds: undefined,
        eur: undefined
    };

    componentDidMount() {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then( request => request.json() )
            .then( data => {
                this.setState({
                    uds: data.Valute.USD.Value.toFixed(2),
                    eur: data.Valute.EUR.Value.toFixed(2)
                })
            })
    };

    render() {
        return (
            <div className={headerStyle.currency}>
                <p>&#36;{ this.state.uds }</p>
                <p className={headerStyle.eurCurrency}>&#8364;{ this.state.eur }</p>
            </div>
        )
    }
}

export default Currency;