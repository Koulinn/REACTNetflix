import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Loading from './Loading'
import CardSearch from './CardSearch'

export default class Section extends React.Component {
    state = {
        movieList: [],
        isLoading: true,
        errorHandle: false
    }

    componentDidMount = async () => {
        try {

            let movieRes = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&s=' + this.props.title)

            if (movieRes.ok) {

                let movies = await movieRes.json()
                let sortedMovies = movies.Search.sort(function (a, b) {
                    return (a.Year < b.Year) ? -1 : (a.Year > b.Year) ? 1 : 0;
                }).reverse();
                this.setState({
                    movieList: [...sortedMovies],
                    isLoading: false
                })
            } else {
                this.setState({
                    movieList: [],
                    isLoading: false,
                    errorHandle: true
                })
            }

        } catch (err) {
        }
    }

    render() {
        return (
            <>

                <Container className="bodySectionBG px-4 mt-5" fluid>
                    <h2 className="">
                        {this.props.title} Movies
                    </h2>
                    <Row className="row-cols-sm-2 row-cols-md-4 row-cols-lg-6 px-3">
                        {this.state.isLoading && (<Loading></Loading>)}
                        {this.state.movieList.slice(0, 6).map((movie , i) => 
                            i < 2 ? <CardSearch history={this.props.history} responsiveness={'d-flex'} key={movie.imdbID} movie={movie}></CardSearch>
                            :  i < 5 && i > 2 ? <CardSearch history={this.props.history} responsiveness={'d-none d-md-flex'} key={movie.imdbID} movie={movie}></CardSearch>
                            : <CardSearch history={this.props.history} responsiveness={'d-none d-lg-flex'} key={movie.imdbID} movie={movie}></CardSearch>                           
                        )
                    }
                        
                    </Row>
                </Container>
            </>
        )
    }
}