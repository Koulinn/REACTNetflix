import React , {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'

export default function Details(props) {
    const [movie, setMovie] = useState(null)
    const [notFound, setNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(()=>{
        getMovieDetails()
    }, [])
    
    const getMovieDetails = async() =>{
        try {
            
            let resp = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&i=' + props.match.params.movieId)
    
            let moviesResp = await resp.json()
            console.log(moviesResp, "<<<<<<<<<<<details request")
        } catch (error) {
            
        }

    }


    return (
        <Container>
            <h1>Details Page</h1>
        </Container>
    )
}
