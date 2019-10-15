import React from 'react'
import Card from '../Card'

interface PhotoListProps {
    data: any
}

const PhotoList = ({ data }: PhotoListProps) => (
    (
        <section className="photo-list-container">
            <div className="photo-list">
                {data.photos.results &&
                    data.photos.results.map((photo: any, index: number) => (
                        <Card key={index} imgSrc={photo.urls.regular} imgDetails={photo.user} />
                    ))}
            </div>
        </section>
    )
)

export default PhotoList
