import React from 'react'

import './ContactsDetailed.scss'
import {ReactComponent as PhoneIcon} from '../../assets/images/icons/contacts-phone.svg'
import {ReactComponent as MailIcon} from '../../assets/images/icons/contacts-mail.svg'

export default function ContactsDetailed() {
    return (
        <ul className="ContactsDetailed">
            <li>
                <a className="ContactsDetailed-Link" href="tel:88005558628">
                    <div className="ContactsDetailed-IconBox ContactsDetailed-IconBox_phone">
                        <PhoneIcon className="ContactsDetailed-Icon" width={18} height={18} />
                    </div>
                    <p className="ContactsDetailed-Text">8 800 555-86-28</p>
                </a>
            </li>
            <li>
                <a className="ContactsDetailed-Link" href="mailto:mail@htmlacademy.ru">
                    <div className="ContactsDetailed-IconBox ContactsDetailed-IconBox_mail">
                        <MailIcon className="ContactsDetailed-Icon" width={18} height={13} />
                    </div>
                    <p className="ContactsDetailed-Text">mail@htmlacademy.ru</p>
                </a>
            </li>
        </ul>
    )
}
