import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography, Popover, Button } from 'antd';
import './favorite.css'
import { IMAGE_BASE_URL } from '../../Config'
const { Title } = Typography;

function FavoritePage() {

    const variables = {
        userFrom: localStorage.getItem('userId')
    }
    const [FavoritedMovies, setFavoritedMovies] = useState([])

    useEffect(() => {
        fetchFavoritedMovies();
    }, [])

    const fetchFavoritedMovies = () => {
        axios.post('/api/favorite/getFavoritedMovie', variables)
            .then(response => {
                if (response.data.success) {
                    setFavoritedMovies(response.data.favorites)
                } else {
                    alert("Failed to get fav vids")
                }
            })
    }

    const onClickRemove = (movieId) => {

        const variable = {
            movieId: movieId,
            userFrom: localStorage.getItem('userId')
        }

        axios.post('/api/favorite/removeFromFavorite', variable)
                .then(response => {
                    if (response.data.success) {
                        fetchFavoritedMovies();
                    } else {
                        alert('Failed to Remove From Favorite')
                    }
                })
    }

    const renderTableBody = FavoritedMovies.map((movie, index) => {


        return <tr key={index}>
            {/* <Popover title={`${movie.movieTitle}`}>
                
            </Popover> */}
            <td>{movie.movieTitle}</td>
            <td>{movie.movieRunTime} mins</td>
            <td><Button onClick={() => onClickRemove(movie.movieId)}>Remove from the Faves</Button></td>
        </tr>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > My Favorite Movies </Title>
            <hr />
        
            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <th>Remove from favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableBody}
                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage
