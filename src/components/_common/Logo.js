import React from 'react'

import './Logo.scss'
import logoMobileWhite from '../../assets/images/logo-mobile-white@1x.png'
import logoMobileWhite2x from '../../assets/images/logo-mobile-white@2x.png'
import logoMobileBlue from '../../assets/images/logo-mobile-blue@1x.png'
import logoMobileBlue2x from '../../assets/images/logo-mobile-blue@2x.png'
import logoTabletWhite from '../../assets/images/logo-tablet-white@1x.png'
import logoTabletWhite2x from '../../assets/images/logo-tablet-white@2x.png'
import logoTabletBlue from '../../assets/images/logo-tablet-blue@1x.png'
import logoTabletBlue2x from '../../assets/images/logo-tablet-blue@2x.png'
import logoDesktopWhite from '../../assets/images/logo-desktop-white@1x.png'
import logoDesktopWhite2x from '../../assets/images/logo-desktop-white@2x.png'

export default function Logo({isActiveLogo}) {
    return (
        <a className="Logo" href="/">
            <picture>
                <source media="(min-width: 1400px)" srcSet={`${logoDesktopWhite}, ${logoDesktopWhite2x} 2x`} />
                <source
                    media="(min-width: 680px)"
                    srcSet={`${isActiveLogo ? logoTabletBlue : logoTabletWhite}, ${
                        isActiveLogo ? logoTabletBlue2x : logoTabletWhite2x
                    } 2x`}
                />
                <img
                    className="Logo-Img"
                    src={`${isActiveLogo ? logoMobileBlue : logoMobileWhite}`}
                    srcSet={`${isActiveLogo ? logoMobileBlue2x : logoMobileWhite2x} 2x`}
                    width={100}
                    height={19}
                    alt="Pognali"
                />
            </picture>
        </a>
    )
}
