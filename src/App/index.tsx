import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchInput from '../components/SearchInput'
import PhotoList from '../components/PhotoList'
import Modal from '../components/Modal'

const App = () => {
    const [data, setData] = useState({ photos: [] })
    const [query, setQuery] = useState('')
    const page = Math.floor(Math.random() * 10)
    const [url, setUrl] = useState(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}&page=${page}&per_page=11&query=african`
    )
    const [isLoading, setIsLoading] = useState(false)
    const [isResultHeader, setResultHeader] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [photoDetails, setPhotoDetails] = useState({
        imgSrc: '',
        imgDetails: {
            name: '',
            location: ''
        }
    })
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const result = await axios(url)
            setData({ photos: result.data })
            setIsLoading(false)
        }
        fetchData()
    }, [url])

    const RenderSearchResultHeader = () => (
        <div className="result-header">
            <p>
                Search Results for <span>"{query}"</span>
            </p>
        </div>
    )

    console.log('Hello, i am here', photoDetails)

    return (
        <div className="app-container">
            <header className="header">
                {isResultHeader ? (
                    <RenderSearchResultHeader />
                ) : (
                    <SearchInput
                        page={page}
                        query={query}
                        setQuery={setQuery}
                        setUrl={setUrl}
                        setResultHeader={setResultHeader}
                    />
                )}
            </header>
            {
                <PhotoList
                    data={data}
                    isLoading={isLoading}
                    setShowModal={setShowModal}
                    setPhotoDetails={setPhotoDetails}
                />
            }
            {showModal && photoDetails && (
                <Modal
                    photoDetails={photoDetails}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    )
}

export default App
