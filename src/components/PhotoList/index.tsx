import React from 'react'
import Card from '../Card'

interface PhotoListProps {
    data: any
    isLoading: boolean
}

const renderSkeletonLoader = (num: number) => {
    const skeleton = [...Array(num)].map(params => <Card />)

    return skeleton
}

const PhotoList = ({ data, isLoading }: PhotoListProps) => (
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
                      />
                  ))}
        </div>
    </section>
)

export default PhotoList
