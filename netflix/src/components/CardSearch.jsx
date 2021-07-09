import React, { Component } from 'react'
import { Card, } from 'react-bootstrap'
import AddComment from './AddComment'
import ReviewList from './ReviewList'



export default class CardSearch extends Component {
    state = {
        showPrice: null,
        btnColor: 'primary',
        cardClass:"px-1 py-4 m-0 border-0 w-100",
        isClicked: false
    }

    commentsDisplay = () =>{
        this.setState({
            showPrice: null,
            btnColor: 'primary',
            cardClass:"px-1 py-4 m-0 border-0 w-100",
            isClicked: !this.state.isClicked
            
        })
    }


    render() {
        return (
            <Card className={this.state.cardClass}>
                <Card.Img onClick={(e)=>this.commentsDisplay()} className="imageFix align-self-center" variant="top" src={this.props.movie.Poster} />
                <div className="position-relative">
                    <Card.Body className="d-flex flex-column pb-0 pt-2 px-0 justify-content-between bgMod w-100 position-absolute">
                        {this.state.isClicked && <Card.Title className="mb-2 px-2"> <h6>{this.props.movie.Title}</h6></Card.Title>}
                        {this.state.isClicked && <ReviewList movieId={this.props.movie.imdbID}></ReviewList>}
                        {this.state.isClicked && <AddComment movieId={this.props.movie.imdbID}></AddComment>}
                    </Card.Body>
                </div>
            </Card>
        )
    }
}
