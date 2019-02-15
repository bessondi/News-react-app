import React, {Component} from 'react';

class Today extends Component {
    render() {
        const date = new Date();
        const day = [ "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота" ];
        const month=[ "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря" ];
        const todayDate = ( date.getDate() + " " + month[date.getMonth()] + ", " + day[date.getDay()] );

        return (
            <span>Сегодня {todayDate}</span>
        )
    }
}

export default Today;