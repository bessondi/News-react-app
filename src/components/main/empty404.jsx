import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';

import image from '../../img/travolta-crunched.gif';
import image404 from '../../ico/404.svg';


const Page404 = () => {

    const LostPicture = styled.div`
        background: url(${image404}) no-repeat;
        width: 600px;
        max-width: 100%;
        height: 300px;
        max-height: 100%;
        margin: 70px auto 0;
        `;
    const Text404 = styled.p`
        font-family: "Futura PT bold", serif;
        font-size: 1.3rem;
        color: #3f3f41; 
        text-align: center;
        margin: 0 20px 50px;
        `;
    const LostTravolta = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        `;

    return (
        <div>
            <LostPicture/>

            <Text404>
                Кажется, этой страницы еще не существует :(
                <br/><br/> Можете
                <Link to='/' style={{ color: '#000' }}> <strong>вернуться на главную страницу</strong> </Link> или
                <Link to='/news' style={{ color: '#000' }}> <strong>почитать новости</strong> </Link>
                и присмотреть
                <Link to='/food' style={{ color: '#000' }}> <strong>хороший бар на вечер.</strong> </Link>
            </Text404>

            <LostTravolta>
                <img src={image} alt="Oops!" style={{ height: 350 }}/>
            </LostTravolta>
        </div>
    )
};

export default Page404;