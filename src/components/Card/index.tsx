import React from 'react'

interface CardProps {
    classes?: string
    imgSrc?: string
    imgDetails?: {
        name: string
        location: string
    }
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>
    setPhotoDetails?: React.Dispatch<
        React.SetStateAction<{
            imgSrc: string
            imgDetails: {
                name: string
                location: string
            }
        }>
    >
}

interface dataType {
    imgSrc: string
    imgDetails: object | undefined
}

const Card = ({
    classes,
    imgSrc,
    imgDetails,
    setShowModal,
    setPhotoDetails
}: CardProps) => {
    const handleShowModal = (
        imgSrc: string,
        imgDetails: {
            name: string
            location: string
        }
    ) => {
        const data = {
            imgSrc,
            imgDetails
        }
        setShowModal && setShowModal(true)
        setPhotoDetails && setPhotoDetails(data)
    }

    return (
        <div
            className={`card ${classes}`}
            onClick={() => handleShowModal(imgSrc!, imgDetails!)}
        >
            {imgSrc && (
                <div className="card--image-wrap">
                    <img src={imgSrc} alt="Unsplash" />
                </div>
            )}
            {imgDetails && (
                <div className="card--info">
                    <h4>{imgDetails.name}</h4>
                    <p>{imgDetails.location}</p>
                </div>
            )}
        </div>
    )
}

export default Card
