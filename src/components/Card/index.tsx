import React from 'react'

interface CardProps {
    classes?: string
    imgSrc: string
}

const Card = ({ classes, imgSrc }: CardProps) => (
    <div className={`card ${classes}`}>
        <div className="card--image-wrap">
            <img src={imgSrc} alt="Unsplash" />
        </div>
        <div className="card--info">
            <h4>Chigoziem Nwaiwu</h4>
            <p>London, United Kingdom</p>
        </div>
    </div>
)

export default Card
