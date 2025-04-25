import React from 'react'

export default function MainContent(props) {
    return (
        <main className="main">

            <div className="main-divider">
                <div className="main-img">
                <img src={props.entry.img.src} alt={props.entry.img.alt} />
                
                    
                </div>
                <div className="main-right">
                    <div className="main-top">
                        <span>📍{props.entry.country}</span>
                        <a target="_blank"href={props.entry.googleMapsLink}>View on Google Maps</a>
                    </div>
                    <h2>{props.entry.title}</h2>
                    <h3>{props.entry.date}</h3>
                    <p>{props.entry.text} </p>
                </div>
            </div>
        </main>
    );
}