import React from 'react'
import Fade from 'react-reveal/Fade'

import './Banner.scss'
import Connect from '../_common/Connect'
import Instruction from './Instruction'

export default function Banner() {
    return (
        <section className="Banner">
            <Fade right cascade>
                <div className="Banner-Container Container">
                    <h2 className="VisuallyHidden">Баннер</h2>
                    <div className="Banner-Wrapper">
                        <p className="Banner-Title">
                            В путешествие <br />с крутыми <br />
                            попутчиками!
                        </p>
                        <Connect />
                        <div className="Banner-Feedback">
                            <p className="Banner-FeedbackText">&laquo;Лучшее приложение, что я видел в жизни!&raquo;</p>
                            <p className="Banner-FeedbackAuthor">
                                Мурат Эльтазин главный&nbsp;редактор газеты &laquo;гаджетлайф&raquo;
                            </p>
                        </div>
                    </div>
                    <Instruction />
                </div>
            </Fade>
        </section>
    )
}
