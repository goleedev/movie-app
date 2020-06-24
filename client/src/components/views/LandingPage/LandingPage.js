import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config"
import MainImage from "./Sections/MainImage";

function LandingPage() {

    const [movies, setMovies] = useState([]);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setMovies([response.results]);
                setMainImage(response.results[0]);
            })
    }, [])

    return (
        <div style={{ width: '100%', margin: '0' }}>
            {mainImage && 
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${mainImage.backdrop_path}`}
                    title={mainImage.original_title}
                    text={mainImage.overview}
                />
            }

            <div style={{ width: '85%', margin: '1rem auto' }}>

                <h2>Movies by Latest</h2>
                <hr/>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="loadMore">Load More</button>
                </div>

            </div>

        </div>
    )
}

export default LandingPage
