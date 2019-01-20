import React, {Component} from 'react';
import moment from 'moment';
import 'moment/min/locales';

class Today extends Component {
    render() {
        moment.locale('ru');
        let todayDate = moment().format('DD MMMM, dd');
        return (
            <span>
                {todayDate}
            </span>
        )
    }
}

export default Today;