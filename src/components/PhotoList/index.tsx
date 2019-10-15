import React from 'react'
import Card from '../Card'

interface PhotoListProps {
    data: any
    isLoading: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    setPhotoDetails: React.Dispatch<
        React.SetStateAction<{
            imgSrc: string
            imgDetails: {
                name: string
                location: string
            }
        }>
    >
}

const renderSkeletonLoader = (num: number) => {
    const skeleton = [...Array(num)].map((elm, index) => <Card key={index} />)

    return skeleton
}

const PhotoList = ({
    data,
    isLoading,
    setShowModal,
    setPhotoDetails
}: PhotoListProps) => (
    <section className="photo-list-container">
        <div className="photo-list">
            {isLoading
                ? renderSkeletonLoader(4)
                : data.photos.results &&
                  data.photos.results.map((photo: any, index: number) => (
                      <Card
                          key={index}
                          imgSrc={photo.urls.regular}
                          imgDetails={photo.user}
                          setShowModal={setShowModal}
                          setPhotoDetails={setPhotoDetails}
                      />
                  ))}
        </div>
    </section>
)

export default PhotoList
