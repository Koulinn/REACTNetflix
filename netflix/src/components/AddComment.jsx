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
            ratting: 0,
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
                ratting: newRating
            }
        });
    }


    sendForm = async (e) => {
        e.preventDefault()

        try {
            
            
            let resData = await fetch(process.env.REACT_APP_URL_DEV + `/${this.props.movieId}/review`, {
                method: 'POST',
                body: JSON.stringify(this.state.userReview),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            
            // let res = await resData.json()
            this.isCommentSend(false, true)
        } catch (error) {
            this.isCommentSend(false, 'error')
            
        }
    }
    render() {
        return (
            <div className="d-flex flex-column">

                <h6 className="align-items-center ml-2">Review</h6>
                <Form onSubmit={this.sendForm} className="justify-content-center pb-3 flex-column" inline>
                    <Form.Group className="mb-3 d-flex flex-column justify-content-center w-100 px-3 commentInput" controlId={'comment'+this.props.movieId}>
                        <Form.Control className="w-100" placeholder="Leave a comment here" onChange={(e) => this.inputHandler('comment', e.target.value)} as="textarea" rows={3} />
                    </Form.Group> 

                    <div className="d-flex mb-3">
                        <StarRatings
                            rating={this.state.userReview.ratting}
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
