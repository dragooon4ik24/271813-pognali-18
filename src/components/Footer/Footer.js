import React from 'react'

import './Footer.scss'
import logoMobile from '../../assets/images/logo-mobile-blue@1x.png'
import logoMobile2x from '../../assets/images/logo-mobile-blue@2x.png'
import logoTablet from '../../assets/images/logo-tablet-blue@1x.png'
import logoTablet2x from '../../assets/images/logo-tablet-blue@2x.png'
import logoDesktop from '../../assets/images/logo-desktop-blue@1x.png'
import logoDesktop2x from '../../assets/images/logo-desktop-blue@2x.png'
import {ReactComponent as LogoHtmlAcademy} from '../../assets/images/icons/htmlacademy.svg'
import Socials from '../_common/Socials'

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="Container">
                <div className="Footer-Container">
                    <a className="Footer-Logo" href="/" rel="noopener noreferrer">
                        <picture>
                            <source
                                media="(min-width:1400px)"
                                srcSet={`${logoDesktop}, ${logoDesktop2x} 2x`}
                            />
                            <source
                                media="(min-width:680px)"
                                srcSet={`${logoTablet}, ${logoTablet2x} 2x`}
                            />
                            <img
                                className="Footer-LogoImg"
                                src={logoMobile}
                                srcSet={`${logoMobile2x} 2x`}
                                alt="logo of the service 'Pognali'"
                            />
                        </picture>
                    </a>
                    <Socials />
                    <a href="/" rel="noopener noreferrer" className="Footer-Developed">
                        <p className="Footer-DevelopedText">Разработано</p>
                        <LogoHtmlAcademy className="Footer-DevelopedLogo" width={27} height={34} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
