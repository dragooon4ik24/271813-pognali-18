import React from 'react'
import cn from 'classnames'
import Bounce from 'react-reveal/Bounce'

import './BusinessTariffs.scss'

export default function BusinessTariffs({isShown, onButtonClick, businessTariffs}) {
    return (
        <div className={cn('Wrapper', {Wrapper_shown: isShown})} onClick={onButtonClick}>
            <section className="BusinessTariffs">
                <Bounce top>
                    <div className="BusinessTariffs-Container" onClick={event => event.stopPropagation()}>
                        <h2 className="BusinessTariffs-Title DefaultTitle">Бизнес-тарифы</h2>
                        <div className="BusinessTariffs-Wrapper">
                            <table className="BusinessTariffs-Table">
                                <tbody>
                                    {businessTariffs.map(tariff => (
                                        <tr className="BusinessTariffs-TableRow" key={tariff.id}>
                                            <td>{tariff.name}</td>
                                            <td>{tariff.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button className="BusinessTariffs-Button" type="button" onClick={onButtonClick}>
                            Закрыть окно
                        </button>
                    </div>
                </Bounce>
            </section>
        </div>
    )
}
