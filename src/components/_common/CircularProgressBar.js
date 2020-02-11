import React from 'react'

import './CircularProgressBar.scss'

export default function CircularProgressBar({lvl, width, height}) {
    const percent = Math.round((176 * lvl) / 100)
    return (
        <svg className={`CircularProgressBar`} viewBox="0 0 60 60" width={width} height={height}>
            <circle
                cy="30"
                cx="30"
                r="28"
                fill="transparent"
                stroke="orange"
                strokeWidth="3"
                strokeDasharray={`${percent} 1000`}
                strokeDashoffset="0"
            ></circle>
        </svg>
    )
}
