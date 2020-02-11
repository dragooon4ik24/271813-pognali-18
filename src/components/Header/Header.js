import React from 'react'
import cn from 'classnames'

import './Header.scss'
import withActiveToggle from '../_decorators/withActiveToggle'
import Logo from '../_common/Logo'
import Connect from '../_common/Connect'
import DropdownMenu from './DropdownMenu'
import Navigation from './Navigation'
import ButtonMenu from './ButtonMenu'

function Header({isActive, onActiveToggle}) {
    return (
        <header className={cn('Header', {Header_active: isActive})}>
            <div className="Header-Container Container">
                <Logo isActiveLogo={isActive} />
                <Navigation />
                <ButtonMenu isOpenedMenu={isActive} onButtonClick={onActiveToggle} />
                <Connect />
            </div>
            <DropdownMenu isOpenedMenu={isActive} />
        </header>
    )
}

export default withActiveToggle(Header)
