import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './CardCompanion.scss'
import {CallIconComponent} from '../../utils/utils'
import {typeOfTransport, allFlags} from '../../mocks/mocks'
import CircularProgressBar from '../_common/CircularProgressBar'

CardCompanion.propTypes = {
    lvl: PropTypes.number.isRequired,
    imgs: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    flags: PropTypes.array.isRequired,
    hashtags: PropTypes.array.isRequired,
    transport: PropTypes.object.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default function CardCompanion({imgs, name, flags, hashtags, transport, lvl, isOnline}) {
    return (
        <li className="Companions-Card">
            <article className={cn('CardCompanion', {CardCompanion_isOnline: isOnline})}>
                <div className="CardCompanion-Level">
                    <div className="CardCompanion-ProgressBar">
                        <CircularProgressBar lvl={lvl} width={61} height={61} />
                    </div>
                    <p className="CardCompanion-LevelNumber">{lvl}</p>
                    <p className="CardCompanion-LevelText">level</p>
                </div>
                <picture>
                    <source
                        media="(min-width: 680px)"
                        srcSet={`${imgs.desktop}, ${imgs.desktop2x} 2x`}
                    />
                    <img
                        src={imgs.tablet}
                        srcSet={`${imgs.tablet2x} 2x`}
                        alt={`avatar of ${name}`}
                        className="CardCompanion-Img"
                    />
                </picture>
                <ul className="CardCompanion-Countries">
                    {flags.map(flag => (
                        <li
                            key={flag}
                            data-hover={allFlags[flag].name}
                            className="CardCompanion-Flag Cloud"
                        >
                            <CallIconComponent icon={flag} type="flag" />
                        </li>
                    ))}
                </ul>
                <div className="CardCompanion-Wrapper">
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener norefferer"
                        className="CardCompanion-Name"
                    >
                        {name}
                    </a>
                    <div className="CardCompanion-ListHashtags">
                        {hashtags.map(tag => (
                            <span className="CardCompanion-Hashtag" key={tag}>{`#${tag}`}</span>
                        ))}
                    </div>
                    <ul className="CardCompanion-Transport">
                        {Object.keys(typeOfTransport).map(kindTransport => (
                            <li
                                key={kindTransport}
                                aria-label={kindTransport}
                                data-hover={typeOfTransport[kindTransport].name}
                                className={cn('CardCompanion-KindTransport Cloud', {
                                    'CardCompanion-KindTransport_isActive':
                                        transport[kindTransport],
                                })}
                            >
                                <CallIconComponent icon={kindTransport} type="transport" />
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </li>
    )
}
