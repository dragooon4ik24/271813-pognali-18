import React from 'react'
import Fade from 'react-reveal/Fade'

import './Companions.scss'
import {companions} from '../../mocks/mocks'
import CardCompanion from './CardCompanion'

export default class Companions extends React.Component {
    render() {
        return (
            <section className="Companions">
                <div className="Container">
                    <Fade right cascade>
                        <div className="Companions-Container">
                            <Fade right cascade>
                                <div className="Companions-Wrapper">
                                    <h2 className="Companions-Title DefaultTitle">Попутчики</h2>
                                    <p className="Companions-Description">
                                        Все мы индивидуальны и у каждого свой взгляд на идеальный отдых. Одному нужен
                                        пляж и коктейль, а другому маршрут для хайкинга.
                                    </p>
                                    <p className="Companions-Text">Теперь можно легко найти единомышленников!</p>
                                </div>
                            </Fade>
                            <ul className="Companions-List">
                                {companions.map(companion => (
                                    <CardCompanion
                                        key={companion.id}
                                        lvl={companion.lvl}
                                        imgs={companion.imgs}
                                        name={companion.name}
                                        isOnline={companion.isOnline}
                                        flags={companion.visitedCountries}
                                        hashtags={companion.hashtags}
                                        transport={companion.transport}
                                    />
                                ))}
                            </ul>
                            <button className="Companions-Button DefaultButton DefaultButton_long" type="button">
                                Показать всех
                            </button>
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}
