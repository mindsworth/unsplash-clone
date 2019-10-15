import React from 'react'

interface CardProps {
    classes?: string
    imgSrc: string
    imgDetails: {
        name: string
        location: string
    }
}

const Card = ({ classes, imgSrc, imgDetails }: CardProps) => (
    <div className={`card ${classes}`}>
        <div className="card--image-wrap">
            <img src={imgSrc} alt="Unsplash" />
        </div>
        <div className="card--info">
            <h4>{imgDetails.name}</h4>
            <p>{ imgDetails.location}</p>
        </div>
    </div>
)

export default Card
