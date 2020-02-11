import React from 'react'

import './Address.scss'
import {ReactComponent as Contacts} from '../../assets/images/icons/contacts-location.svg'

export default function Address() {
    return (
        <section className="Address">
            <div className="Container">
                <div className="Address-Container">
                    <div className="Address-Wrapper">
                        <div className="Address-IconBox">
                            <Contacts className="Address-Icon" width={14} height={22} />
                        </div>
                        <p className="Address-Text">ул. Большая Конюшенная,&nbsp;19/8</p>
                    </div>
                    <a className="Address-Link" href="/" target="_blank" rel="noopener noreferrer">
                        Проложить маршрут
                    </a>
                </div>
            </div>
        </section>
    )
}
