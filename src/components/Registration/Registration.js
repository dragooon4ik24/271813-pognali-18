import React from 'react'
import Typist from 'react-typist'
import Reveal from 'react-reveal/Reveal'

import './Registration.scss'
import ContactsDetailed from '../_common/ContactsDetailed'

export default class Registration extends React.Component {
    state = {
        isTypingText: false,
    }
    render() {
        return (
            <section className="Registration">
                <div className="Container">
                    <div className="Registration-Container">
                        <h2 className="VisuallyHidden">Регистрация</h2>
                        <p className="Registration-Title DefaultTitle">Заинтересовались?</p>
                        <p className="Registration-Text Registration-Text_instructions">
                            Зарегистрируйтесь, это&nbsp;быстро&nbsp;и&nbsp;бесплатно! <br />
                            Уже зарегистрированы? Тогда скорее&nbsp;
                            <a href="/" target="_blank" className="Registration-Link">
                                авторизуйтесь
                            </a>
                            .
                        </p>
                        <form className="Registration-Form" action="/" method="POST">
                            <input className="Registration-Email" type="email" placeholder="E-mail" />
                            <button className="Registration-Button" type="submit">
                                Регистрация
                            </button>
                        </form>

                        <Reveal
                            onReveal={() => {
                                this.setState({isTypingText: true})
                            }}
                        >
                            {this.state.isTypingText ? (
                                <Typist avgTypingDelay={100} cursor={{show: false}}>
                                    <p className="Registration-Text Registration-Text_questions">
                                        Остались вопросы? Да нам всё равно!
                                        <Typist.Backspace count={17} delay={200} />
                                        <Typist.Delay ms={1000} />
                                        Мы&nbsp;с&nbsp;радостью&nbsp;на&nbsp;них&nbsp;ответим!
                                    </p>
                                </Typist>
                            ) : (
                                ''
                            )}
                        </Reveal>

                        <ContactsDetailed />
                    </div>
                </div>
            </section>
        )
    }
}
