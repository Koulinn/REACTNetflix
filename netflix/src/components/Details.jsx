import React, { useState, useEffect } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import ReviewList from './ReviewList'

export default function Details(props) {
    const [movie, setMovie] = useState(null)
    const [notFound, setNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getMovieDetails()
    }, [])

    const getMovieDetails = async () => {
        try {

            let resp = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&i=' + props.match.params.movieId)

            if (resp.ok) {
                let moviesResp = await resp.json()
                setIsLoading(false)
                setMovie({ ...moviesResp })
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
                            <Col className="d-flex flex-column justify-content-center">
                                <h6 className="firstToUppercase">{props.match.params.sectionTitle}</h6>
                                <h3>{movie.Title}</h3>
                                <img className="maxHeight" src={movie.Poster} alt=""></img>
                                <div>{movie.Ratings.map((rating, i) => (<Badge key={i}>{rating.Value} {rating.Source}</Badge>))}</div>
                                <p>Year: {movie.Year}</p>
                                <ReviewList movieId={props.match.params.movieId}></ReviewList>
                            </Col>)
                    }
                </>
            </Row>
        </Container>
    )
}
