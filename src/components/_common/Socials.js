import React from 'react'

import './Socials.scss'
import {icons} from '../../mocks/mocks'

export default function Socials() {
    return (
        <ul className="Socials">
            {icons.map(({id, href, label, icon}) => (
                <li className="Socials-Item" key={id}>
                    <a
                        href={href}
                        className="Socials-Link"
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <icon.Component
                            className={`Socials-Icon Socials-Icon_${icon.modifier}`}
                            width={icon.width}
                            height={icon.height}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}
