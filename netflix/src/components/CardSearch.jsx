import React, { Component } from 'react'
import { Card, } from 'react-bootstrap'
import AddComment from './AddComment'
import ReviewList from './ReviewList'



export default class CardSearch extends Component {
    state = {
        isClicked: false,
    }

    commentsDisplay = () =>{
        const {isClicked} = this.state
        this.setState({
            isClicked: !isClicked,
        })
    }


    render() {
        return (
            <Card onMouseLeave={()=> this.setState({ isClicked: false}) } className="px-1 py-4 m-0 border-0 w-100">
                <Card.Img onClick={(e)=>this.commentsDisplay()} className="imageFix align-self-center" variant="top" src={this.props.movie.Poster} />
                <div className="position-relative">
                    <Card.Body className={this.state.isClicked ? "d-flex flex-column px-0 justify-content-between w-100 position-absolute bgMod" : "d-flex flex-column p-0 justify-content-between w-100 position-absolute"}>
                        {this.state.isClicked && <Card.Title className="mb-2 px-2"> <h6>{this.props.movie.Title}</h6></Card.Title>}
                        {this.state.isClicked && <ReviewList movieId={this.props.movie.imdbID}></ReviewList>}
                        {this.state.isClicked && <AddComment movieId={this.props.movie.imdbID}></AddComment>}
                    </Card.Body>
                </div>
            </Card>
        )
    }
}
