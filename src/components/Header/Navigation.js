import React from 'react'

import './Navigation.scss'

const links = [
    {id: 1, title: 'о сервисе', href: '/'},
    {id: 2, title: 'направления', href: '/'},
    {id: 3, title: 'попутчики', href: '/'},
]

export default function Navigation() {
    return (
        <nav className="Navigation">
            <ul className="Navigation-List">
                {links.map(link => (
                    <li key={link.id}>
                        <a className="Navigation-Link" href={link.href}>
                            <span data-hover={link.title}>{link.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
