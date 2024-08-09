import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../components/Card/Card"; // Import the Cards component
import "./SearchResult.css";

const SearchResult = () => {
    const { query } = useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}&language=en-US`
        )
            .then((res) => res.json())
            .then((data) => setSearchResults(data.results));
    }, [query]);

    return (
        <div className="search-results">
            <h2 className="search-results__title">
                Search Results for: {query}
            </h2>
            <div className="search-results__grid">
                {searchResults.length > 0 ? (
                    searchResults.map((movie) => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No results found for "{query}".</p>
                )}
            </div>
        </div>
    );
};

export default SearchResult;
