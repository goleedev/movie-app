import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config"
import MainImage from "./Sections/MainImage";
import GridCard from "./Sections/GridCard"
import { Typography, Row, Button } from 'antd';
const { Title } = Typography;

function LandingPage() {

    const [Movies, setMovies] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }, [])

    {/* Fetch Movie Data */}
    const fetchMovies = (path) => {
        fetch(path)
            .then(response => response.json())
            .then(response => {
                setMovies([...Movies, ...response.results]);
                setCurrentPage(response.page);
            })
    }

    {/* Handle Click for Load More Button */}
    const handleClick = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`
        fetchMovies(endpoint);
    }

    return (
        <div style={{ width: '100%', margin: '0' }}>
            {/* Movie Main Image */}
            {Movies[0] && 
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${Movies[0].backdrop_path && Movies[0].backdrop_path}`}
                    title={Movies[0].original_title}
                    text={Movies[0].overview}
                />
            }

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>

                <Title className="latest__movies" level={3} > Latest Movies 🍿</Title>
                <hr />
                
                {/* Grid Card */}
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCard
                                image={movie.poster_path && `${IMAGE_BASE_URL}w500${movie.poster_path}`}
                                movieId={movie.id}
                            />
                        </React.Fragment>
                    ))}
                </Row>

                {/* Load More Button */}
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={handleClick} className="loadMore">Load More</Button>
                </div>

            </div>

        </div>
    )
}

export default LandingPage
