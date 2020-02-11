import React from 'react'

import {tariffs, businessTariffs} from '../mocks/mocks'
import './App.scss'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import AboutService from './AboutService/AboutService'
import Directions from './Directions/Directions'
import Companions from './Companions/Companions'
import Tariffs from './Tariffs/Tariffs'
import Registration from './Registration/Registration'
import Address from './Address/Address'
import Map from './_common/Map'
import Footer from './Footer/Footer'

export default function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h1 className="VisuallyHidden">Сервис для путешественников "Погнали"</h1>
                <Banner />
                <AboutService />
                <Directions />
                <Companions />
                <Tariffs tariffs={tariffs} businessTariffs={businessTariffs} />
                <Registration />
                <Address />
                <Map />
            </main>
            <Footer />
        </div>
    )
}
