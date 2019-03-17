import React, {Component} from 'react';
import ArticlesTemplate from "../articles/articlesTemplate";

import foodImg1 from "../../../img/Food1.jpg";
import foodImg2 from "../../../img/Food2.jpg";
import foodImg3 from "../../../img/Food3.jpg";
import foodImg4 from "../../../img/Food4.jpg";
import foodImg5 from "../../../img/Food5.jpg";
import foodImg6 from "../../../img/Food6.jpg";
import foodImg7 from "../../../img/Food7.jpg";
import foodImg8 from "../../../img/Food8.jpg";
import foodImg9 from "../../../img/Food9.jpg";

export default class NewsArticles extends Component {

    articlesData = [
        {
            id: 1,
            name: 'Article',
            path: '/food/article1',
            dateOfPublish: '2018, 1, 7, 15, 0',
            title: 'Лучшие эклеры Петербурга — от самого дешевого до самого дорогого.',
            img: foodImg1,
            description: 'Фото: web',
            firstH2: 'Как отличить правильные эклеры и где их брать в Петербурге в ценовом диапазоне от 35 до 350 рублей.',
            text1: 'Эклер — один из самых простых и популярных десертов. Придуманная, как сходится большинство историков во Франции начала ХIХ века, трубочка из заварного теста, наполненная кремом, быстро распространилась по всему миру, а оригинальный рецепт получил множество региональных интерпретаций. В Петербурге классическими считаются рецепты двух лучших в советское время городских кондитерских — «Север» и «Метрополь», однако с тех пор, как заведения были объединены, перешли на промышленный способ производства и превратились в сеть, их десерты уже не могут считаться образцовыми.\n Одновременно в городе появилось и продолжает появляться множество новых кондитерских, которые готовят как традиционные эклеры, так и авторские. Интересно, что цены на них могут отличаться в несколько раз. Например, самый дешевый эклер, который удалось обнаружить редакции, готовят в только что открывшейся пекарне «Люди любят хлеб» (улица Некрасова, дом 2; тут он стоит 35 рублей), а самый дорогой — в ресторане «Метрополь», историческом заведении на Садовой, где цена десерта ровно в десять раз выше (350 рублей). \n Мы постарались разобраться в вопросе и отобрал заведения, в которых точно стоит заказывать эклеры, поговорил с шеф-кондитером Аглаей Маджид об их популярности и отличиях, а вдогонку к недавнему материалу о блюдах из тыквы записал отличный сезонный рецепт тыквенного эклера.'
        },
        {
            id: 2,
            name: 'Article2',
            path: '/food/article2',
            dateOfPublish: '2019, 0, 7, 15, 0',
            title: 'Где пить кофе в Петербурге.',
            img: foodImg2,
            description: 'Фото: web',
            text1: 'Места с хорошим кофе в Петербурге — уже давно не редкость: очередная кофейная волна прошла несколько лет назад, в городе десятки заведений, где уверенно готовят напитки на зернах класса спешелти (в мире кофе это означает «высший сорт», который присуждают только 10 процентам арабики). Ну а новым местам приходится соответствовать: например, в большой сети «Буше» повсеместно перешли на новые, более качественные зерна, а популярные «Булочные Вольчека» открыли сеть кофеен и кофестанций «Кофеварим» с собственными блендами и кофе на песке. Сейчас вполне приличный кофе встречается даже в окошках to go у станций метро в спальных районах.'
        },
        {
            id: 3,
            name: 'Article3',
            path: '/food/article3',
            dateOfPublish: '2019, 1, 7, 15, 0',
            title: 'Ход конем: Petrov-Vodkin на Адмиралтейском проспекте.',
            img: foodImg3,
            description: 'Фото: web',
            firstH2: 'Русский ресторан без русского китча для туристов и местных.',
            text1: 'На пересечении Адмиралтейского проспекта и Гороховой улицы, напротив Александровского сада, открылся ресторан Petrov-Vodkin — новый масштабный проект Игоря Мельцера, совладельца ресторанов La Perla и главного в Петербурге пропагандиста отечественных морепродуктов.\n Проект анонсировали давно — еще два года назад, — но из-за сложностей с согласованиями открытие приходилось постоянно переносить. В итоге в жизнь удалось воплотить не все изначальные задумки (не вышло, например, с русской печью, которую планировали установить в одном из залов), но так или иначе ресторан получился красивым и основательным. The Village побывал в заведении и рассказывает, как оно устроено.',
            secondH2: 'Буфет с закусками, домашние настойки и русская классика',
            text2: 'Самая спорная причуда команды — ярлык «russian tapas bar» в названии проекта. Он, как объясняют представители заведения, нужен для удобства: так всем сразу понятно, о чем речь. По задумке, Petrov-Vodkin сочетает в себе просторную закусочную, устроенную по принципу тапас-бара, где готовые закуски ждут гостей в витрине и могут быть сервированы за считаные секунды, и классический ресторан с обслуживанием a la carte. \n За оба направления отвечает шеф-повар Станислав Потемкин, возглавляющий и все три отделения ресторанов La Perla. Для буфетного меню он придумал линейку тапасов на русский манер. В витрине выставлены бутерброды с салом, олютерской сельдью (140 рублей), форшмак с гренками (190 рублей), маринованные белые грибы (280 рублей), соленые грузди (230 рублей), несколько видов икры (140–460 рублей), дальневосточные устрицы, крабы и так далее. Все это предлагается заказывать с классическими алкогольными напитками: во-первых, разнообразными водками и полугарами — их в меню собрали 15 видов (от 125 рублей), — во-вторых, с домашними настойками и наливками (170–250 рублей), но для эстетов есть и подборка вин с акцентом на шампанских и игристых (от 190 рублей).\n Основное меню вышло всеобъемлющим: место в нем нашлось и антикварным рецептам, которые шеф обнаружил в старых кулинарных книгах, и популярным хитам русской и советской кухни, которые были частично переосмыслены. На закуску в Petrov-Vodkin подают заливное из филе стерлядки (650 рублей), фаршированную щуку (350 рублей), вареники с картофелем, белыми грибами и шкварками (380 рублей), классический винегрет с солеными груздями (280 рублей) и жюльен из лесных грибов на картофельных драниках (460 рублей). Есть подборка супов: постные щи с квашенной капустой и грибами (350 рублей), борщ с салом (460 рублей), двойная уха из судака и сига, сваренная по всем правилам на наваристом бульоне из мелкой рыбы (650 рублей), и грибная калья (530 рублей).\n Горячие блюда поделены на несколько разделов. Отдельно пунктом вынесены блюда из коптильни: копченые буженину, стерлядь, сига продают на вес (230–320 рублей за 100 граммов). Также в числе основных блюд — камбала, жаренная на копченом сале (650 рублей), говядина по-строгановски с мускатным пюре (980 рублей), телячьи почки по-русски с солеными огурцами (740 рублей), зажаренный домашний цыпленок с соусом из хрена (560 рублей) и самое необычное блюдо — настоенная на самогоне и томленая в печи гречневая каша со шкварками, луком и зеленью (380 рублей). Чего пока нет — это пирогов и пирожков, но и они скоро появятся, в ресторане как раз подыскали опытного пекаря.',
            thirdH2: 'Сдержанный интерьер с антиквариатом и росписями',
            text3: 'За дизайн интерьера отвечало архитектурное бюро «11» во главе с Анной Дельяго и Николаем Конашенком. Задача была непростая — создать интерьер, который, с одной стороны, оправдывал бы ожидания от русского ресторана, но при этом не раздражал. Пространство сделали очень простым: использовали приглушенные цвета краски для стен (преимущественно серо-голубой и молочный), классическую мебель и стеновые панели из темного натурального дерева, некоторое количество тщательно подобранного и отреставрированного антиквариата, в том числе нарядные зеркала в резных рамах, а в качестве украшения и авантюрного штриха были выбраны росписи на стенах в технике граффити с репродукциями картин Петрова-Водкина и хаотично расставленные по залам разномастные стулья.\n Отдельно можно упомянуть музыкальный фон: русские эмигранты поют русские песни — от народных до романсов. Символичный жест, учитывая, что традиции русских ресторанов долгое время и впрямь сохранялись лишь за границей.'
        },
        {
            id: 4,
            name: 'Article4',
            path: '/food/article4',
            dateOfPublish: '2019, 2, 7, 15, 0',
            title: 'Что такое вермут и как его пить?',
            img: foodImg8,
            description: 'Фото: web',
            firstH2: 'Как разобраться в одном из самых модных напитков 2019 года.',
            text1: 'Вермут берет свое название от немецкого наименования ключевого ингредиента — wermut, wormwood, или полыни — горькой лекарственной травы, которая также является ключевым компонентом абсента. Этот напиток создается путем мацерации — размачивания смеси трав и растений в спирте. Каждый производитель вермутов тщательно охраняет свои рецепты.\nИзначально вермуты делились на два типа: сладкие и сухие, известные как итальянские и французские — соответственно странам, где каждый из них был впервые произведен. В настоящее время есть разные варианты напитка: например экстрасухие белые, сладкие белые (бьянко), янтарные (амбро), розовые и прочие.'
        },
        {
            id: 5,
            name: 'Article5',
            path: '/food/article5',
            dateOfPublish: '2019, 2, 2, 15, 0',
            title: 'Как сварить эспрессо дома.',
            img: foodImg5,
            description: 'Фото: web',
            firstH2: 'Как готовить эспрессо?',
            text1: 'Приготовить чашку кофе дома могут все: кто-то предпочитает варить кофе в турке, кто-то заливает кофе горячей водой во френч-прессе, кому-то нравится посвятить завариванию время и приготовить напиток в воронке V60 или аэропрессе. А вот можно ли дома сварить настоящий эспрессо? \n Мы попросили шеф-бариста сети «Даблби» ответить на этот вопрос и рассказать, какие лайфхаки по приготовлению домашнего эспрессо существуют.',
            secondH2: 'Приготовить эспрессо дома реально?',
            text2: 'Чтобы приготовить дома эспрессо, понадобится эспрессо-машина, эспрессо-кофемолка, весы и кофе. Зерно должно быть обжарено специально под эспрессо. Это важно, поскольку при такой обжарке производители затягивают стадию карамелизации, тем самым снижая кислотность и увеличивая сладость. Эспрессо — достаточно концентрированный по вкусу напиток, поэтому излишняя кислотность ему повредит. Еще есть омни-обжарка, когда кофе готовится сразу и под фильтр, и под эспрессо. Но это всегда риск: можно на выходе получить нормальный фильтр-кофе и не очень вкусный эспрессо. Или наоборот.\n Заваривание эспрессо дома — сложный и кропотливый процесс. Чтобы получился действительно вкусный напиток, потребуются базовые навыки бариста: нужно понимать, как настроить помол, какое количество кофе взять, каким должен быть вкус на выходе. При желании основам можно обучиться. Но, честно говоря, я сам бы не стал заваривать эспрессо дома, поскольку пришлось бы потратить от 50 до 100 грамм кофе только для того, чтобы настроить помол. А делать это нужно каждый раз, потому что свойства зерна меняются со временем после обжарки.'
        },
        {
            id: 6,
            name: 'Article6',
            path: '/food/article6',
            dateOfPublish: '2016, 1, 7, 15, 0',
            title: 'Как сделать десерт «Павлова» дома.',
            img: foodImg6,
            description: 'Фото: web',
            firstH2: 'Красивый и простой десерт своими руками.',
            text1: 'Десерт «Павлова», как ни странно, придумали в Новой Зеландии — в 20-х годах прошлого века там гастролировала русская балерина Анна Павлова, в честь которой и названо блюдо. И хотя австралийцы тоже претендуют на авторство пирожного, новозеландцы все же первыми опубликовали рецепт.\n Готовить десерт не так сложно — нужно просто запастись парой часов свободного времени и терпением. «Павлова» — это нежное хрустящее безе, крем и ягоды, и, хотя вариаций у него множество, именно в таком сочетании он нравится нам больше всего.\n Это любимый десерт нашего редактора раздела «Еда», а рецепт его был подсмотрен у кондитера Саши Ламм.'
        },
        {
            id: 7,
            name: 'Article7',
            path: '/food/article7',
            dateOfPublish: '2019, 0, 7, 15, 0',
            title: 'Рыночные отношения: Остерия Locale во «Владимирском пассаже».',
            img: foodImg7,
            description: 'Фото: web',
            firstH2: 'Демократичный итальянский ресторан с самодельной пастой, созданный усилиями сразу двух успешных холдингов',
            text1: 'В двух шагах от улицы Рубинштейна, в здании «Владимирского пассажа», открылась остерия и бар Locale — масштабный проект двух заметных ресторанных холдингов: Italy Group Михаила Соколова и Тимура Дмитриева («Ателье», Italy) и Dreamteam Алексея Бурова и Павла Коккова («Траппист», Smoke BBQ).\n Сам факт их сотрудничества немного удивляет: и стиль ведения бизнеса, и гастрономические интересы у двух команд до сих пор заметно отличались. Dreamteam известен своими штучными проектами, построенными преимущественно вокруг премиального пива и небанальных концепций (они открыли один из первых пивных бутиков, создали один из лучших бельгийских пабов и первыми привезли в Петербург аутентичный американский брискет). Italy Group преимущественно развивает сетевые заведения: их первый проект — итальянский ресторан Italy — сейчас насчитывает пять точек: четыре в Петербурге и одну в Москве. Также холдинг владеет шестью бельгийскими гастропабами, двумя мясными ресторанами Hitch и курирует заведения на курорте «Охта-парк».\n Так что опыта и идей для того, чтобы освоить пространство на втором этаже универмага, обеим командам наверняка хватило бы. Но это не значит, что никакого эффекта от сотрудничества нет: например, этим летом, пока в помещении будущей остерии шел ремонт, команды запустили одноименный фуд-корт и фермерский рынок на парковке «Владимирского пассажа» со стороны улицы Рубинштейна — и он мгновенно превратился в одну из самых популярных туристических локаций лета. Сам новый ресторан тоже получился примечательным и не похожим ни на один из прежних проектов партнеров. The Village побывал в Locale и рассказывает, как устроено место.'
        },
        {
            id: 8,
            name: '6 новых мест с хорошей пиццей в Петербурге',
            path: '/food/article8',
            dateOfPublish: '2019, 1, 22, 15, 0',
            title: 'Название статьи 8.',
            img: foodImg4,
            description: 'Фото: web',
            firstH2: 'Где, кроме Camorra, «22 сантиметров» и «Форно браво!», искать любимое блюдо',
            text1: 'Пицца — одно из самых популярных в России блюд — переживает новый расцвет. Сетевые итальянские рестораны и пиццерии уступают позиции небольшим заведениям, часто принадлежащим энтузиастам и рассчитанным на своих. Ренессанс новой моды на пиццу в Петербурге несколько лет назад начался с проектов Camorra, «22 сантиметра» и «Форно браво!», которые познакомили горожан с неаполитанской версией блюда и привили всем мысль о том, что пицца может быть вполне гастрономичной едой и подходит для экспериментов. У перечисленных пиццерий все и теперь хорошо, Camorra и «22 сантиметра» успели открыть вторые филиалы в Петербурге (на Новой Голландии и Большой Конюшенной улице) и даже запустились в Москве.\n Одновременно идею качественной пиццы (не обязательно неаполитанской) подхватили другие рестораторы.'
        },
        {
            id: 9,
            name: 'Article9',
            path: '/food/article9',
            dateOfPublish: '2019, 0, 1, 15, 5',
            title: 'Где есть вьетнамский суп фо-бо в Петербурге.',
            img: foodImg9,
            description: 'Фото: web',
            firstH2: 'Модные гастропабы, демократичные кафе, аутентичный ресторан с 18-летней историей и тайная закусочная на рынке.',
            text1: 'Суп фо-бо с тонко нарезанной говядиной и рисовой лапшой придумали на севере Вьетнама в начале ХХ века. Считается, что его появление стало результатом колониального влияния Франции: прежде коровы использовались во Вьетнаме лишь как рабочие животные, и их мясо в пищу не употребляли. Рецепт между тем быстро завоевал популярность и распространился сначала по всей стране, получив в процессе различные региональные разновидности (самый известный вариант — южный фо-бо, со сладким пряным бульоном и зеленью), а после — и по всему миру.\n В Петербурге вслед за Москвой сейчас наблюдается настоящий бум вьетнамской кухни. За последние полгода в городе открылось сразу несколько новых заведений, а сам фо-бо занял место одного из главных похмельных блюд наравне с традиционными солянкой, борщом и, например, кавказским хашем.'
        }
    ];

    render() {
        return (
            <React.Fragment>
                <ArticlesTemplate articles={this.articlesData} closeArticlePath='/food' />
            </React.Fragment>
        );
    }
}