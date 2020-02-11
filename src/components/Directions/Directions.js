import React from 'react'
import Flip from 'react-reveal/Flip'
import cn from 'classnames'

import './Directions.scss'

import {directions} from '../../mocks/mocks'
import CardDirection from './CardDirection'

export default class Directions extends React.Component {
    state = {
        cards: directions.slice(0, 3),
        haveHiddenCards: directions.length > 3 ? true : false,
    }

    handleButtonClick = () => {
        this.setState({cards: directions.slice(0), haveHiddenCards: false})
    }
    render() {
        return (
            <section className="Directions">
                <div className="Container">
                    <Flip top cascade>
                        <div className="Directions-Container">
                            <div className="Directions-Wrapper">
                                <h2 className="Directions-Title DefaultTitle">Направления</h2>
                                <p className="Directions-Description">
                                    Мы не продаем туры и&nbsp;ничего&nbsp;не рекламируем. Люди&nbsp;сами пишут о
                                    странах, куда хотели бы отправиться и&nbsp;чем можно там заняться.
                                </p>
                            </div>
                            <ul
                                className={cn('Directions-ListCards', {
                                    'Directions-ListCards_partialList': this.state.haveHiddenCards,
                                })}
                            >
                                {this.state.cards.map(direction => (
                                    <Flip top key={direction.id}>
                                        <CardDirection
                                            country={direction.country}
                                            description={direction.description}
                                            countUsers={direction.countVisitors}
                                            imgMobile={direction.imgs[0]}
                                            imgMobile2x={direction.imgs[1]}
                                            imgDesktop={direction.imgs[2]}
                                            imgDesktop2x={direction.imgs[3]}
                                            Flag={direction.flag}
                                        />
                                    </Flip>
                                ))}
                            </ul>
                            {this.state.haveHiddenCards ? (
                                <button
                                    className="Directions-Button DefaultButton DefaultButton_long"
                                    type="button"
                                    onClick={this.handleButtonClick}
                                >
                                    Показать все
                                </button>
                            ) : (
                                ''
                            )}
                        </div>
                    </Flip>
                </div>
            </section>
        )
    }
}
