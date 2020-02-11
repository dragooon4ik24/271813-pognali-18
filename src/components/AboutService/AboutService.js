import React from 'react'
import Fade from 'react-reveal/Fade'

import './AboutService.scss'

export default function AboutService() {
    return (
        <section className="AboutService">
            <div className="AboutService-Container Container">
                <Fade right cascade>
                    <div className="AboutService-Wrapper">
                        <h2 className="AboutService-Title DefaultTitle">О сервисе</h2>
                        <p className="AboutService-Description">
                            Любое путешествие веселее с&nbsp;попутчиками, которые на одной волне с&nbsp;тобой! Делитесь
                            своими идеями путешествий и черпайте вдохновение в&nbsp;чужих.
                        </p>
                        <p className="AboutService-Text">
                            А если найдете кого-то близкого по духу &mdash; скорее зовите&nbsp;в&nbsp;совместный трип!
                        </p>
                        <a href="/" className="AboutService-Button DefaultButton">
                            Подробнее
                        </a>
                    </div>
                </Fade>
            </div>
        </section>
    )
}
