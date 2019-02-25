import React, {Component} from 'react';
import headerStyle from './header.module.css';

class Weather extends Component {
    state = {
        temperature: undefined,
        description: undefined,
        icon: undefined
    };

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg,RU&lang=ru&appid=17c04b841d77ca2b8ad554e893214405&units=metric')
            .then( data => data.json() )
            .then( data => {
                this.setState({
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon
                })
            })
    };

    render() {
        return (
            <div className={headerStyle.weather}>
                <img className={headerStyle.weatherImg} src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt={`${this.state.description}`} />

                { this.state.temperature <= 0 ?
                <p className={headerStyle.weatherTextColor}>{this.state.temperature}&#8451;</p> :
                <p className={headerStyle.weatherTextColor}>+{this.state.temperature}&#8451;</p>  }
            </div>
        )
    }
}

export default Weather;