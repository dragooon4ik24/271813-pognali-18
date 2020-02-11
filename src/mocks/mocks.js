import thailandMobile from '../assets/images/thailand-mobile@1x.jpg'
import thailandMobile2x from '../assets/images/thailand-mobile@2x.jpg'
import thailandDesktop from '../assets/images/thailand-desktop@1x.jpg'
import thailandDesktop2x from '../assets/images/thailand-desktop@2x.jpg'
import franceMobile from '../assets/images/france-mobile@1x.jpg'
import franceMobile2x from '../assets/images/france-mobile@2x.jpg'
import franceDesktop from '../assets/images/france-desktop@1x.jpg'
import franceDesktop2x from '../assets/images/france-desktop@2x.jpg'
import czechMobile from '../assets/images/czech-mobile@1x.jpg'
import czechMobile2x from '../assets/images/czech-mobile@2x.jpg'
import czechDesktop from '../assets/images/czech-desktop@1x.jpg'
import czechDesktop2x from '../assets/images/czech-desktop@2x.jpg'

import {ReactComponent as FacebookIcon} from '../assets/images/icons/facebook.svg'
import {ReactComponent as VKIcon} from '../assets/images/icons/vk.svg'
import {ReactComponent as InstagramIcon} from '../assets/images/icons/instagram.svg'

import {ReactComponent as ThailandFlag} from '../assets/images/icons/flag-thailand.svg'
import {ReactComponent as FranceFlag} from '../assets/images/icons/flag-france.svg'
import {ReactComponent as CzechFlag} from '../assets/images/icons/flag-czech.svg'
import {ReactComponent as SriLankaFlag} from '../assets/images/icons/flag-sri-lanka.svg'
import {ReactComponent as SeychellesFlag} from '../assets/images/icons/flag-seychelles.svg'
import {ReactComponent as BelgiumFlag} from '../assets/images/icons/flag-belgium.svg'

import {ReactComponent as Plane} from '../assets/images/icons/plane.svg'
import {ReactComponent as Bus} from '../assets/images/icons/bus.svg'
import {ReactComponent as Bicycle} from '../assets/images/icons/bike.svg'
import {ReactComponent as OnFoot} from '../assets/images/icons/run.svg'

import avatarMobile from '../assets/images/firsova-mobile@1x.jpg'
import avatarMobile2x from '../assets/images/firsova-mobile@2x.jpg'
import avatarTablet from '../assets/images/firsova-tablet@1x.jpg'
import avatarTablet2x from '../assets/images/firsova-tablet@2x.jpg'
import avatarDesktop from '../assets/images/firsova-desktop@1x.jpg'
import avatarDesktop2x from '../assets/images/firsova-desktop@2x.jpg'

import avatar2Mobile from '../assets/images/demin-mobile@1x.jpg'
import avatar2Mobile2x from '../assets/images/demin-mobile@2x.jpg'
import avatar2Tablet from '../assets/images/demin-tablet@1x.jpg'
import avatar2Tablet2x from '../assets/images/demin-tablet@2x.jpg'
import avatar2Desktop from '../assets/images/demin-desktop@1x.jpg'
import avatar2Desktop2x from '../assets/images/demin-desktop@2x.jpg'

const defaultFlag = {
    width: 35,
    height: 24,
    viewBox: '0 0 70 47',
}

const allFlags = {
    'sri-lanka': Object.create(defaultFlag, {
        Component: {
            value: SriLankaFlag,
        },
        name: {
            value: 'Шриланка',
        },
    }),
    seychelles: Object.create(defaultFlag, {
        Component: {
            value: SeychellesFlag,
        },
        name: {
            value: 'Сейшелы',
        },
    }),
    thailand: Object.create(defaultFlag, {
        Component: {
            value: ThailandFlag,
        },
        name: {
            value: 'Таиланд',
        },
    }),
    belgium: Object.create(defaultFlag, {
        Component: {
            value: BelgiumFlag,
        },
        name: {
            value: 'Бельгия',
        },
    }),
    czech: Object.create(defaultFlag, {
        Component: {
            value: CzechFlag,
        },
        name: {
            value: 'Чехия',
        },
    }),
}

const typeOfTransport = {
    plane: {
        name: 'Авиаперелет',
        Component: Plane,
        width: 19,
        height: 21,
    },
    bus: {
        name: 'Автотранспорт',
        Component: Bus,
        width: 17,
        height: 21,
    },
    bicycle: {
        name: 'Велосипед',
        Component: Bicycle,
        width: 24,
        height: 21,
    },
    onFoot: {
        name: 'Пешком',
        Component: OnFoot,
        width: 20,
        height: 21,
    },
}

const typeOfIcons = {
    flag: allFlags,
    transport: typeOfTransport,
}

const socialIcons = [
    {
        id: 1,
        label: 'Facebook',
        href: 'https://www.facebook.com',
        icon: {
            Component: FacebookIcon,
            modifier: 'fb',
            width: 11,
            height: 21,
        },
    },
    {
        id: 2,
        label: 'Вконтакте',
        href: 'https://www.vk.com/feed',
        icon: {
            Component: VKIcon,
            modifier: 'vk',
            width: 23,
            height: 12,
        },
    },
    {
        id: 3,
        label: 'Instagram',
        href: 'https://www.instagram.com',
        icon: {
            Component: InstagramIcon,
            modifier: 'instagram',
            width: 18,
            height: 18,
        },
    },
]

const arrDirections = [
    {
        id: 1,
        country: 'Таиланд',
        description: 'Джунгли зовут!',
        countVisitors: 18321,
        imgs: [thailandMobile, thailandMobile2x, thailandDesktop, thailandDesktop2x],
        flag: ThailandFlag,
    },
    {
        id: 2,
        country: 'Франция',
        description: 'Трэ бьен, манифик!',
        countVisitors: 12518,
        imgs: [franceMobile, franceMobile2x, franceDesktop, franceDesktop2x],
        flag: FranceFlag,
    },
    {
        id: 3,
        country: 'Чехия',
        description: 'Закоулки старой Европы',
        countVisitors: 5326,
        imgs: [czechMobile, czechMobile2x, czechDesktop, czechDesktop2x],
        flag: CzechFlag,
    },
    {
        id: 4,
        country: 'Чехия',
        description: 'Закоулки старой Европы',
        countVisitors: 5326,
        imgs: [czechMobile, czechMobile2x, czechDesktop, czechDesktop2x],
        flag: CzechFlag,
    },
    {
        id: 5,
        country: 'Чехия',
        description: 'Закоулки старой Европы',
        countVisitors: 5326,
        imgs: [czechMobile, czechMobile2x, czechDesktop, czechDesktop2x],
        flag: CzechFlag,
    },
]

const arrCompanions = [
    {
        id: 1,
        lvl: 99,
        isOnline: false,
        imgs: {
            mobile: avatarMobile,
            mobile2x: avatarMobile2x,
            tablet: avatarTablet,
            tablet2x: avatarTablet2x,
            desktop: avatarDesktop,
            desktop2x: avatarDesktop2x,
        },
        visitedCountries: ['sri-lanka', 'thailand', 'seychelles'],
        name: 'Таня Фирсова',
        hashtags: ['ЗОЖ', 'ПП', 'Фитнес', 'пляж', 'авокадо', 'смузи'],
        transport: {
            plane: true,
            bus: false,
            bicycle: false,
            onFoot: false,
        },
    },
    {
        id: 2,
        lvl: 30,
        isOnline: true,
        imgs: {
            mobile: avatar2Mobile,
            mobile2x: avatar2Mobile2x,
            tablet: avatar2Tablet,
            tablet2x: avatar2Tablet2x,
            desktop: avatar2Desktop,
            desktop2x: avatar2Desktop2x,
        },
        visitedCountries: ['belgium', 'czech'],
        name: 'Петя Демин',
        hashtags: ['бургер', 'бар', 'футбол', 'концерт', 'крафт'],
        transport: {
            plane: true,
            bus: true,
            bicycle: false,
            onFoot: true,
        },
    },
]

const arrTariffs = [
    {
        id: 1,
        name: 'Базовое размещение',
        price: 'Бесплатно',
    },
    {
        id: 2,
        name: 'Вывод на первых позициях',
        price: '99 руб./мес',
    },
    {
        id: 3,
        name: 'Кастомный цвет карточки',
        price: '59 руб./мес',
    },
]

const arrBusinessTariffs = [
    {
        id: 1,
        name: 'Реклама у блоггера',
        price: '300 000 руб./пост',
    },
    {
        id: 2,
        name: 'Накрутка подписчиков',
        price: 'от 1 руб./шт',
    },
    {
        id: 3,
        name: 'Лайки от ботов',
        price: 'от 20 коп./лайк',
    },
    {
        id: 4,
        name: 'Ваш продакт-плейсмент',
        price: 'Индивидуально',
    },
]

export {
    arrDirections as directions,
    socialIcons as icons,
    arrCompanions as companions,
    arrTariffs as tariffs,
    arrBusinessTariffs as businessTariffs,
    typeOfIcons,
    typeOfTransport,
    allFlags,
}
