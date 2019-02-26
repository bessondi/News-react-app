import React, {Component} from 'react';
import ArticlesTemplate from "../articles/articlesTemplate";

import placesImg1 from "../../../img/City1.jpg";
import placesImg2 from "../../../img/City2.jpg";
import placesImg3 from "../../../img/City3.jpg";
import placesImg4 from "../../../img/City4.jpg";
import placesImg5 from "../../../img/City5.jpg";
import placesImg6 from "../../../img/City6.jpg";

export default class PlacesArticles extends Component {

    articlesData = [
        {
            id: 1,
            name: 'Article',
            path: '/places/article1',
            dateOfPublish: '2019, 2, 5, 12, 5',
            title: 'Сквер знаков зодиака.',
            img: placesImg1,
            description: 'Описание к фото',
            firstH2: '12 колонн',
            text1: 'Этот дворик — одна из самых неизвестных, но при этом интересных достопримечательностей Петербурга. Он появился в городе не так давно — в 2010 году в рамках проекта по благоустройству дворов Северной столицы.',
            secondH2: 'Волоколамский пер., 9',
            text2: 'Это достаточно тихое место в Волоколамском переулке. 12 колонн символизируют каждый из знаков зодиака. Туристы любят фотографироваться со своим звёздным символом. Ходят легенды, что, положив руки на свиток и закрыв глаза, вы можете увидеть свою судьбу. Некоторые петербуржцы приходят сюда, чтобы погадать.\n Адрес: '
        },
        {
            id: 2,
            name: 'Article2',
            path: '/places/article2',
            dateOfPublish: '2019, 2, 1, 12, 5',
            title: 'Главпочтамт.',
            img: placesImg2,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            firstH2: 'Стеклянный купол-фонарь и первый атриум Петербурга.',
            text1: 'Если смотреть на центр города с высоты крыш в вечернее время, то взгляд непременно остановится на одном очень любопытном объекте, который навевает ассоциации с древнеегипетской архитектурой, при этом весьма необычной: над Петербургом высится светящаяся пирамида — фонарь-купол Главпочтамта.\n Типичное для петербургского классицизма здание построили в 1782-1789 годы для служб Главного почтамта по проекту выдающегося отечественного зодчего своего времени Н. А. Львова. А инициатором строительства стал Светлейший Князь и фаворит Екатерины II А.А. Безбородко. Сперва здесь расположился лишь «Почтовый стан» — вспомогательные помещения и прочие мало значимые службы. В дальнейшем тут обосновался Главпочтамт, однако сначала строению архитектора Львова предстояло претерпеть ряд метаморфоз, которые превратили и без того прекрасное здание в настоящее украшение города на Неве. Правда, по пути пришлось кое-что потерять.\n Адрес: '
        },
        {
            id: 3,
            name: 'Article3',
            path: '/places/article3',
            dateOfPublish: '2019, 1, 1, 12, 5',
            title: 'Усадьба Демидовых.',
            img: placesImg3,
            description: 'Особняк',
            firstH2: 'Абзац 1',
            text1: 'Архитектурный шедевр с невероятно красивой лестницей, ведущей из бельэтажа прямо в сад, находится в центре Северной столицы. В этой фамильной усадьбе выросло несколько поколений семейства Демидовых. Рассказываем о месте, спрятанном от глаз прохожих.',
            secondH2: 'Особняк в классическом стиле',
            text2: 'Начало династии положил тульский оружейник Никита Демидов, который просил у Петра I в 1702 году казённый Невьянский завод на Урале, после чего обогатился, развивая чёрную металлургию.\n Усадьба Демидовых находится в самом центре Петербурга — на пересечении набережной Мойки и переулка Гривцова. Её построил внук Никиты Демидова Григорий Акинфиевич. Архитектором здания стал Чевакинский С. И., о чём свидетельствует табличка на фасаде. Он создал особняк в классическом стиле с модными в то время элементами барокко: ионическими колоннами с четырёхсторонними капителями и барельефами с женскими и мужскими ликами. Визитная карточка этого строения — огромная решётка веранды с закруглёнными маршами лестниц. \n Это удивительно, но решётка и лестница выполнены из чугуна, что в то время считалось большой роскошью, ведь в основном использовали дерево. В 1830 году главное здание усадьбы Демидовы сдали Английскому клубу, а в одном из флигелей работали классы тогда только что открывшейся Консерватории. В советское же время в главном здании находилось конструкторское бюро, проектировавшее все советские атомные ледоколы. Сейчас особняк для входа закрыт.',
            thirdH2: 'Абзац 3',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur esse facere molestiae nesciunt, reiciendis temporibus voluptates. Ab adipisci alias, aut facere id, illum iste modi optio quis tenetur voluptas.\n Адрес: '
        },
        {
            id: 4,
            name: 'Article4',
            path: '/places/article4',
            dateOfPublish: '2019, 0, 1, 12, 5',
            title: 'Музей-фотоателье Карла Буллы.',
            img: placesImg4,
            description: 'Описание. Lorem ipsum dolor sit amet.',
            text1: 'Это фотоателье существует с 1850 года, буквально со времён появления первых фотографий в России. Если вас интересует жизнь Санкт-Петербурга на рубеже XIX–XX веков, то музей самого известного мастера фотодела того времени Карла Буллы вполне удовлетворит ваш интерес. А об его истории и нынешнем музее — в нашем материале.\n Адрес: '
        },
        {
            id: 5,
            name: 'Article5',
            path: '/places/article5',
            dateOfPublish: '2019, 0, 5, 12, 5',
            title: 'Доходный дом К. И. Розенштейна.',
            img: placesImg5,
            description: 'Описание к фото.',
            text1: 'Это здание, построенное в стиле английского замка, — как частичка Средневековья посреди Петербурга. Чего стоят только симметричные высокие башни и декоративный циферблат со знаками зодиака. В разное время здесь располагались кинотеатры, касса Наркомфина и даже студия Ленинградского телевидения, а сегодня там нашёл свой дом театр «Русская антреприза» имени Андрея Миронова.',
            text2: 'Архитектурная доминанта площади Льва Толстого построена самим владельцем здания, Константином Исаевичем Розенштейном, совместно с архитектором Андреем Белогрудом в стиле историзм. Белогруд в то время увлекался Средневековьем и стилизовал здание под английский замок. В композиции прослеживается смелое сочетание элементов неоренессанса и неоготики.\n Самая яркая часть доходного дома — симметричные шестигранные башни, которые вздымаются над основным массивом здания. Интересно также расположение окон — на третьем и пятом этаже со стороны улицы Льва Толстого они намеренно сдвинуты по отношению к другим этажам. В стене одной из башен расположен декоративный циферблат со знаками зодиака.\n Адрес: '
        },
        {
            id: 6,
            name: 'Article6',
            path: '/places/article6',
            dateOfPublish: '2018, 1, 1, 12, 5',
            title: 'Вокзал станции Новый Петергоф.',
            img: placesImg6,
            description: 'Вокзал.',
            firstH2: 'Шедевр неоготики',
            text1: 'Прибывая на эту станцию, действительно можно почувствовать себя царской особой, ведь сюда не раз приезжала венценосная семья. Именно поэтому вокзал является одним из красивейших в пригороде, выделяясь своими тонкими шпилями, сказочными арками и ажурными балкончиками.',
            secondH2: 'Петергофская железная дорога',
            text2: 'Первоначально железная дорога из Петербурга заканчивалась внутри здания вокзала, но позже, при продолжении путей в сторону Ораниенбаума, западная стена здания была разобрана. С 2010 года здание вокзала не используется, а построены новые пассажирские павильоны и автоматизированная система контроля оплаты проезда с турникетами.\n Здесь же можно увидеть памятник основателю и первому владельцу Петергофской дороги барону А. Л. Штиглицу, стоящий перед зданием вокзала.\n Адрес: '
        }
    ];

    render() {
        return (
            <React.Fragment>
                <ArticlesTemplate articles={this.articlesData} closeArticlePath='/places' />
            </React.Fragment>
        );
    }
}