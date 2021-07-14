import React , {useState, useEffect} from 'react'
import { Badge, Col, Container, Row} from 'react-bootstrap'
import ReviewList from './ReviewList'

export default function Details(props) {
    const [movie, setMovie] = useState(null)
    const [notFound, setNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    

    useEffect(()=>{
        getMovieDetails()
    }, [])
    
    const getMovieDetails = async() =>{
        try {
            
            let resp = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&i=' + props.match.params.movieId)
            
            if(resp.ok){
                let moviesResp = await resp.json()
                setIsLoading(false)
                setMovie({...moviesResp})
            }
           
        } catch (error) {
            setNotFound(true)
            
        }

    }
    console.log(props.match.params.sectionTitle)
    return (
        <Container>
            <Row>
               <>
               {
                   movie && (
                   <Col>
                    <h6>{props.match.params.sectionTitle}</h6>
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster}></img>
                    {movie.Ratings.map((rating, i ) => (<Badge key={i}>{rating.Value} {rating.Source}</Badge>))}
                    <p>Year: {movie.Year}</p>
                    <ReviewList movieId={props.match.params.movieId}></ReviewList>
                    </Col>)
               }
               </>
            </Row>
        </Container>
    )
}
