import React from 'react'

import './Connect.scss'
import {ReactComponent as PhoneIcon} from '../../assets/images/icons/topmenu-phone.svg'
import {ReactComponent as MailIcon} from '../../assets/images/icons/topmenu-mail.svg'
import Autorization from './Autorization'

export default function Connect() {
    return (
        <div className="Connect">
            <div className="Connect-Contacts">
                <a
                    className="Connect-Element Connect-Element_phone"
                    href="tel:9017066433"
                    aria-label="Телефон"
                >
                    <PhoneIcon />
                </a>
                <a
                    className="Connect-Element Connect-Element_mail"
                    href="mailto:ashafner@tsconsulting.com"
                    aria-label="Почта"
                >
                    <MailIcon />
                </a>
            </div>
            <Autorization />
        </div>
    )
}
