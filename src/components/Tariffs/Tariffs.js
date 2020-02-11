import React from 'react'
import Rotate from 'react-reveal/Rotate'

import './Tariffs.scss'
import BusinessTariffs from './BusinessTariffs'
import withActiveToggle from '../_decorators/withActiveToggle'

function Tariffs({isActive, onActiveToggle, tariffs, businessTariffs}) {
    return (
        <section className="Tariffs">
            <div className="Container">
                <Rotate cascade bottom left>
                    <div className="Tariffs-Container">
                        <h2 className="VisuallyHidden">Тарифы</h2>
                        <p className="Tariffs-Title DefaultTitle">Добавьте свой профиль</p>
                        <Rotate bottom left cascade>
                            <div className="Tariffs-Wrapper">
                                <table className="Tariffs-Table">
                                    <tbody>
                                        {tariffs.map(tariff => (
                                            <tr className="Tariffs-TableRow" key={tariff.id}>
                                                <td>{tariff.name}</td>
                                                <td>{tariff.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button onClick={onActiveToggle} className="Tariffs-Button" type="button">
                                    Показать тарифы для бизнеса
                                </button>
                            </div>
                        </Rotate>
                    </div>
                </Rotate>
            </div>
            <BusinessTariffs isShown={isActive} onButtonClick={onActiveToggle} businessTariffs={businessTariffs} />
        </section>
    )
}

export default withActiveToggle(Tariffs)
