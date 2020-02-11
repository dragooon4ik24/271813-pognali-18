import React from 'react'

import {typeOfIcons} from '../mocks/mocks'

const CallIconComponent = ({icon, type}) => {
    const Icon = typeOfIcons[type][icon]
    return <Icon.Component width={Icon.width} height={Icon.height} viewBox={Icon.viewBox} />
}

export {CallIconComponent}
