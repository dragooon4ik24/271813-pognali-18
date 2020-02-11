import React from 'react'

import './Map.scss'

export default function Map() {
    return (
        <section className="Map">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d999.3036747002755!2d30.32255387305332!3d59.93865737753265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1580203539119!5m2!1sru!2sru"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{border: 0}}
                allowFullScreen=""
            ></iframe>
        </section>
    )
}
