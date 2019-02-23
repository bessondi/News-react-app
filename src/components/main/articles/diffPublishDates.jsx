import React from 'react';

const DiffPublishDates = (props) => {

        const arrayString = props.date;
        const toNum = arrayString.split(', ');
        const numDatesArray = toNum.map( item => +item );

                                // год,  месяц, день, час, минута
                                // 2018,  0,  13,  15,  0
        const pubDate = new Date(numDatesArray[0], numDatesArray[1], numDatesArray[2], numDatesArray[3], numDatesArray[4]);
        const dateNow = new Date();

        const diffDays = Math.round( dateNow.getDate() - pubDate.getDate() );
        const diffHours = Math.round( dateNow.getHours() - pubDate.getHours() );
        const diffMinutes = Math.round( dateNow.getMinutes() - pubDate.getMinutes() );
        const diffMonths = Math.round( dateNow.getMonth() - pubDate.getMonth() );
        const diffYears = Math.round( dateNow.getFullYear() - pubDate.getFullYear() );

        const result =
            // годы
            ( diffYears === 1 || diffYears === 21) ? diffYears + ' год назад' : // 1, 21
            ( (diffYears > 21 && diffYears < 25) || (diffYears > 1 && diffYears < 5) ) ? diffYears + ' года назад' : // 2-4, 22-24
            ( diffYears > 4 && diffYears < 21 ) ? diffYears + ' лет назад' : // 5-20,
            // месяцы - 12
            ( diffMonths === 1 ) ? diffMonths + ' месяц назад' : // 1
            ( diffMonths > 1 && diffMonths < 5 ) ? diffMonths + ' месяца назад' : // 2-4
            ( diffMonths > 4 && diffMonths < 12 ) ? diffMonths + ' месяцев назад' : // 5-12,
            // дни - 31
            ( diffDays === 1 || diffDays === 21 ) ? diffDays + ' день назад' : // 1, 21
            ( (diffDays > 21 && diffDays < 25) || (diffDays > 1 && diffDays < 5) ) ? diffDays + ' дня назад' : // 2-4, 22-24
            ( (diffDays > 24 && diffDays <= 31) || (diffDays > 4 && diffDays < 21) ) ? diffDays + ' дней назад' : // 5-20, 25-30
            // часы - 24
            ( diffHours === 1 || diffHours === 21 ) ? diffHours + ' час назад' : // 1, 21
            ( ((diffHours > 21 && diffHours < 24) || (diffHours > 1 && diffHours < 5)) ) ? diffHours + ' часа назад' : // 2-4, 22-23
            ( diffHours > 4 && diffHours < 21 ) ? diffHours + ' часов назад' : // 5-20
            // минуты - 60
            (diffMinutes === 51 || diffMinutes === 41 || diffMinutes === 31 || diffMinutes === 21 || diffMinutes === 1) ? diffMinutes + ' минута назад' :
            ( (diffMinutes > 51 && diffMinutes < 55) || (diffMinutes > 41 && diffMinutes < 45) || (diffMinutes > 31 && diffMinutes < 35) || (diffMinutes > 21 && diffMinutes < 25) || (diffMinutes <= 4 && diffMinutes > 1) ) ? diffMinutes + ' минуты назад' :
            (diffMinutes >= 5 && diffMinutes <= 59) ? diffMinutes + ' минут назад' :
            null;

        return (
            <div>
                <span>{result}</span>
            </div>
        )
};

export default DiffPublishDates;