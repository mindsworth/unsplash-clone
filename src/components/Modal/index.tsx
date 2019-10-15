import React from 'react'

interface ModalProps {
    photoDetails: {
        imgSrc: string
        imgDetails: {
            name: string
            location: string
        }
    }
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ photoDetails, setShowModal }: ModalProps) => {
    return (
        <div className="modal-container">
            <div className="modal-dialogue">
                <div className="modal-dialogue--inner">
                    <div className="modal-dialogue--image">
                        <img src={photoDetails.imgSrc} alt="" />
                    </div>
                    <div className="modal-dialogue--caption">
                        <h4>{photoDetails.imgDetails.name}</h4>
                        <p>{photoDetails.imgDetails.location}</p>
                    </div>
                </div>
                <div
                    className="modal-dialogue--inner--close"
                    onClick={() => setShowModal && setShowModal(false)}
                >
                    X
                </div>
            </div>
        </div>
    )
}

export default Modal
