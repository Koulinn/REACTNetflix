import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'


export default class AddComment extends Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
    }
    state = {
        userReview: {
            comment: '',
            rate: 0,
            elementId: this.props.movieId
        }
    };

    isCommentSend = (check, checkSub) =>{
        this.props.isCommentSend(check, checkSub)
    }


    inputHandler = (key, value) => {
        this.setState({
            userReview: {
                ...this.state.userReview,
                [key]: value
            }
        })

    }

    changeRating(newRating) {
        this.setState({
            userReview: {
                ...this.state.userReview,
                rate: newRating
            }
        });
    }


    sendForm = async (e) => {
        e.preventDefault()

        try {
            
            
            let resData = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify(this.state.userReview),
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjUwNTQ5ODIsImV4cCI6MTYyNjI2NDU4Mn0.JwwVnNEQqYHceQ2fscSxdyITJxc4U7GeQFaHsd0Vs0Y",
                    "Content-Type": "application/json"
                }
            })
            
            let res = await resData.json()
            this.isCommentSend(false, true)
        } catch (error) {
            this.isCommentSend(false, 'error')
            
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="d-flex flex-column">

                <h6 className="align-items-center ml-2">Review</h6>
                <Form onSubmit={this.sendForm} className="justify-content-center pb-3 flex-column" inline>
                    <Form.Group className="mb-3 d-flex flex-column justify-content-center w-100 px-3 commentInput" controlId={'comment'+this.props.movieId}>
                        <Form.Control className="w-100" placeholder="Leave a comment here" onChange={(e) => this.inputHandler('comment', e.target.value)} as="textarea" rows={3} />
                    </Form.Group> 

                    <div className="d-flex mb-3">
                        <StarRatings
                            rating={this.state.userReview.rate}
                            starRatedColor="yellow"
                            starHoverColor="yellow"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            starDimension="16px"
                            starSpacing="4px"
                        />
                    </div>
                    <Button type="submit" variant="outline-warning">Add a comment</Button>
                </Form>

            </div>
        )
    }
}
