import React from 'react'
import cn from 'classnames'

import './ButtonMenu.scss'

export default function ButtonMenu({isOpenedMenu, onButtonClick}) {
    return (
        <button
            className={cn('ButtonMenu', {ButtonMenu_opened: isOpenedMenu})}
            aria-label={`${isOpenedMenu ? 'Закрыть' : 'Открыть'} меню`}
            onClick={onButtonClick}
        />
    )
}
