import React from 'react'

const SearchInput = () => (
    <form action="" className="header-form">
        <button type="submit" className="submit-btn">
            <img src="./search.svg" alt="search-icon" width="20" />
        </button>
        <input
            type="text"
            className="form-control"
            placeholder="Search for photo"
        />
    </form>
)

export default SearchInput
