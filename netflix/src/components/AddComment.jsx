import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'


export default class AddComment extends Component {

    state = {
        userReview: {
            comment: '',
            rate: undefined,
            elementId: this.props.movieId
        }

    }

    inputHandler = (key, value) => {
        this.setState({
            userReview: {
                ...this.state.userReview,
                [key]: value
            }
        })

    }

    sendForm = async (e) =>{
        e.preventDefault()
       
        let resData = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            body: JSON.stringify(this.state.userReview),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjUwNTQ5ODIsImV4cCI6MTYyNjI2NDU4Mn0.JwwVnNEQqYHceQ2fscSxdyITJxc4U7GeQFaHsd0Vs0Y",
                "Content-Type": "application/json"
            }
        })

        let res = await resData.json()
        console.log(res, '<<<<<POST response')
        

    }
    render() {
        return (
            <div className="ml-2 d-flex flex-column">
                
                    <h6 className="align-items-center">Review</h6>
                    <Form onSubmit={this.sendForm} className="justify-content-center pb-3 flex-column" inline>
                        <Form.Group className="mb-3 d-flex flex-column justify-content-center translateMod" controlId="exampleForm.ControlTextarea1">
                            <Form.Label><h6>Leave a comment</h6></Form.Label>
                            <Form.Control className="w-100" onChange={(e) => this.inputHandler('comment', e.target.value)} as="textarea" rows={3} />
                        </Form.Group>
                        
                       <div className="d-flex">
                            {[1, 2, 3, 4, 5].map((rate) => (
                                <div key={rate} className="mb-3">
                                    <Form.Check
                                        inline
                                        label={rate}
                                        name="group1"
                                        type='radio'
                                        id={`inline-radio-1` + { rate }}
                                        value={rate}
                                        onChange={(e) => this.inputHandler('rate', e.target.value)}
                                    />
                                </div>))}
                            
                       </div>
                        <Button type="submit" variant="outline-success">Add a comment</Button>
                    </Form>
                
            </div>
        )
    }
}
