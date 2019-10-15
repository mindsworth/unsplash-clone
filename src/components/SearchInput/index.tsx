import React from 'react'

interface SearchInputProps {
    page: number
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
    setUrl: React.Dispatch<React.SetStateAction<string>>
    setResultHeader: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchInput = ({
    page,
    query,
    setQuery,
    setUrl,
    setResultHeader
}: SearchInputProps) => (
    <form
        onSubmit={event => {
            event.preventDefault()
            setResultHeader(true)
            setUrl(
                `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}&page=${page}&per_page=11&query=${query}`
            )
        }}
        className="header-form"
    >
        <button type="submit" className="submit-btn">
            <img src="./search.svg" alt="search-icon" width="20" />
        </button>
        <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
            className="form-control"
            placeholder="Search for photo"
        />
    </form>
)

export default SearchInput
