import React, { useState, useEffect } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import AddComment from './AddComment'
import ReviewList from './ReviewList'

export default function Details(props) {
    const [movie, setMovie] = useState(props.location.state.movieDetail)
    const [notFound, setNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [newComment, setNewComment] = useState(false)


    // Need to do a whole logic for the comment section of this section
    const isCommentSend = () =>{
        // setNewComment(true)
        console.log(newComment)
    }


    // useEffect(() => {
    //     getMovieDetails()
    // }, [])

    // useEffect(() => {
    //     getMovieDetails()
    // }, [newComment])

    // const getMovieDetails = async () => {
    //     try {

    //         let resp = await fetch(process.env.REACT_APP_URL_DEV + `/${props.match.params.movieId}`)

    //         if (resp.ok) {
    //             let moviesResp = await resp.json()
    //             setIsLoading(false)
    //             setMovie({ ...moviesResp })
    //         }

    //     } catch (error) {
    //         setNotFound(true)

    //     }

    // }
    // console.log(movie, '<<<<<<<<<<<<<<<<<')
    return (
        <Container id="details">
            <Row>
                <>
                    {
                        movie && (
                            <Col className="d-flex flex-column justify-content-center text-center align-content-center">
                                <h6 className="firstToUppercase">{props.match.params.sectionTitle}</h6>
                                <h3>{movie.Title}</h3>
                                <img className="maxHeight" src={movie.Poster} alt=""></img>
                                {/* <div className={movie.Ratings ? "d-block" : 'd-none'}>{movie.Ratings ? movie.Ratings.map((rating, i) => (<Badge key={i} variant="warning">{rating.Value} {rating.Source}</Badge>)) : ''}</div> */}
                                <p>Year: {movie.Year}</p>
                                <ReviewList movieId={props.match.params.movieId} movieReviews={props.location.state.movieDetail.reviews ? props.location.state.movieDetail.reviews : []}></ReviewList>
                                <AddComment movieId={movie.imdbID} isCommentSend={isCommentSend}></AddComment>
                            </Col>)
                    }
                </>
            </Row>
        </Container>
    )
}
