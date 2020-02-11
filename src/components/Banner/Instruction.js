import React from 'react'
import Fade from 'react-reveal/Fade'

import './Instruction.scss'

export default function Instruction() {
    return (
        <Fade right cascade>
            <ul className="Instruction">
                <li className="Instruction-Item">
                    Выберите <br />
                    направление
                </li>
                <li className="Instruction-Item">
                    Изучите идеи <br />
                    путешественников
                </li>
                <li className="Instruction-Item">
                    Находите тех, <br />
                    кто похож на вас
                </li>
                <li className="Instruction-Item">
                    Путешествуйте <br />
                    вместе!
                </li>
            </ul>
        </Fade>
    )
}
