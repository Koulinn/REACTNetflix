import React, { Component } from 'react'
import {format} from 'date-fns'
import {Spinner} from 'react-bootstrap'

export default class ReviewList extends Component {  

    state= {
        commentList: [],
        isLoading: true,
    }



    componentDidMount = async () =>{
        try {
                   
            let res = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.movieId,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
                }
            })
            let comments = await res.json()

            this.setState({
                commentList: [...comments],
                isLoading: false
            })
        } catch (error) {
            this.setState({
                commentList: [],
                isLoading: false
            })
            
        }
    }

    render() {
        return (
            <div className="mb-2 px-2 fade">
                {this.state.isLoading ? <Spinner animation="border" variant="danger" size='sm'/> : ''}
                {this.state.commentList.length === 0 &&<p className="fontMod">Write the first comment for this movie</p>}

                {this.state.commentList.map((comment, i)=> (
                <div className="my-2" key={i}>
                    <p className="m-0"> Author: {comment.author}</p>
                    <p className="m-0"> Comment: {comment.comment}</p>
                    <p className="m-0 fontMod">Posted at: {format(new Date(comment.createdAt), 'dd-MM-yyyy')}</p>
                </div>))}
            </div>
        )
    }
}
