import React from 'react'
import cn from 'classnames'

import './DropdownMenu.scss'
import Autorization from '../_common/Autorization'
import Navigation from './Navigation'
import ContactsDetailed from '../_common/ContactsDetailed'
import Socials from '../_common/Socials'

export default function DropdownMenu({isOpenedMenu}) {
    return (
        <div className={cn('DropdownMenu', {DropdownMenu_opened: isOpenedMenu}, 'Container')}>
            <Navigation />
            <Autorization />
            <ContactsDetailed />
            <Socials />
        </div>
    )
}
