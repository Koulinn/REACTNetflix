import React, { Component } from 'react'
import { Card, } from 'react-bootstrap'
import AddComment from './AddComment'
import AlertComp from './AuxComps/AlertComp'
import ReviewList from './ReviewList'



export default class CardSearch extends Component {
    state = {
        isClicked: false,
        alertDisplay: false,
    }

    isCommentSend = (check, checkSub) =>{
        this.setState({
            isClicked: check,
            alertDisplay: checkSub
        })

        if(checkSub){
            setTimeout(()=>{
                this.setState({
                    isClicked: check,
                    alertDisplay: false
                })
            }, 3000)
        }
        
    }

    commentsDisplay = () =>{
        const {isClicked} = this.state
        this.setState({
            isClicked: !isClicked,
        })
    }



    render() {
        return (
            <Card onMouseLeave={()=> this.setState({ isClicked: false}) } className={"px-1 py-4 m-0 border-0 w-100 " + this.props.responsiveness}>
                <Card.Img onClick={(e)=>this.commentsDisplay()} className="imageFix align-self-center" variant="top" src={this.props.movie.Poster} />
                <div className="position-relative">
                    <Card.Body className={this.state.isClicked ? "d-flex flex-column px-0 justify-content-between w-100 position-absolute bgMod cursorMod" : "d-flex flex-column p-0 justify-content-between w-100 position-absolute"}>
                        {this.state.isClicked && <Card.Title className="mb-2 px-2"> <h6>{this.props.movie.Title}</h6></Card.Title>}
                        {this.state.alertDisplay && <AlertComp text="Review sent. Thanks!" variant="success"></AlertComp>}
                        {this.state.isClicked && <ReviewList movieId={this.props.movie.imdbID} movieReviews={this.props.movie.reviews ? this.props.movie.reviews : [] }></ReviewList>}
                        {this.state.isClicked && <AddComment isCommentSend={this.isCommentSend} movieId={this.props.movie.imdbID}></AddComment>}
                        {this.state.isClicked && <p className="text-center m-0 seeDetails" onClick={() => this.props.history.push(
                            {
                                pathname: '/details/' + this.props.movie.imdbID + "/" + this.props.sectionName,
                                state: { movieDetail: this.props.movie }
                            // '/details/' + this.props.movie.imdbID + "/" + this.props.sectionName
                            })
                        }
                            >See details</p>}
                    </Card.Body>
                </div>
            </Card>
        )
    }
}
