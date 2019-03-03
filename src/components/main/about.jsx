import React from 'react';
import styled from 'styled-components';

// import aboutStyles from './about.module.css';


const About = () => {

    const Title = styled.h2`
        font-family: "Futura PT bold", serif;
        font-size: 2rem;
        color: #3f3f41;
        max-width: 600px;
        text-align: left;
        margin: 0 auto 50px;
        padding: 150px 20px 0;
        `;

    const TextAbout = styled.p`
        font-family: "Futura PT regular", serif;
        font-size: 1.3rem;
        color: #3f3f41;
        max-width: 600px;
        text-align: left;
        margin: 0 auto 200px;
        padding: 0 20px;
        `;

    return (
        <React.Fragment>

            <Title>
                Всем привет!
            </Title>
            <TextAbout>
                Если вы читаете это, значит зашли ко мне на страничку чтобы познакомиться с моим проектом и
                кодом.<br/><br/>
                Меня зовут Дмитрий Бессонов, я начинающий фронтенд-разработчик. Данное веб-приложение,
                написанное на React, является частью моего портфолио.<br/><br/>
                Вы можете связаться со мной любым из
                указанных внизу страницы способом.
                {/*а резюме - <a href='https://spb.hh.ru/resume/44c405a9ff066682870039ed1f55396f506234' style={{ color: '#000' }}> <strong>посмотреть здесь.</strong> </a>*/}
                <br/><br/> Хорошего дня!
            </TextAbout>

        </React.Fragment>
    )
};

export default About;