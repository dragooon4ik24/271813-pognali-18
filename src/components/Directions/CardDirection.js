import React from 'react'
import PropTypes from 'prop-types'

import './CardDirection.scss'

CardDirection.propTypes = {
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    countUsers: PropTypes.number.isRequired,
    imgMobile: PropTypes.string.isRequired,
    imgMobile2x: PropTypes.string.isRequired,
    imgDesktop: PropTypes.string.isRequired,
    imgDesktop2x: PropTypes.string.isRequired,
    Flag: PropTypes.object,
}

export default function CardDirection({
    imgMobile,
    imgMobile2x,
    imgDesktop,
    imgDesktop2x,
    country,
    description,
    countUsers,
    Flag,
}) {
    return (
        <li>
            <article className="CardDirection">
                <picture>
                    <source
                        media="(min-width: 680px)"
                        srcSet={`${imgDesktop}, ${imgDesktop2x} 2x`}
                    />
                    <img
                        className="CardDirection-Img"
                        src={imgMobile}
                        srcSet={`${imgMobile2x} 2x`}
                        alt={country}
                    />
                </picture>
                <div className="CardDirection-Info">
                    <Flag
                        className="CardDirection-FlagImg"
                        width="35"
                        height="24"
                        viewBox="0 0 70 47"
                    />
                    <div className="CardDirection-Wrapper">
                        <h3 className="CardDirection-Title">{country}</h3>
                        <p className="CardDirection-Description">{description}</p>
                    </div>
                    <p className="CardDirection-Count">{countUsers}</p>
                </div>
            </article>
        </li>
    )
}
