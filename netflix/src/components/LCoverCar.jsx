import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default class LCoverCar extends Component {
    state = {
        movieList: [],
        isLoading: true,
        errorHandle: false
    }

    responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    componentDidMount = async () => {
        try {
            let promisees = []
            let auxList = []

            let movieRes1 = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&s=' + this.props.query1)
            let movieRes2 = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&s=' + this.props.query2)
            let movieRes3 = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&s=' + this.props.query3)
            promisees.push(movieRes1.json())
            promisees.push(movieRes2.json())
            promisees.push(movieRes3.json())


            if (movieRes1.ok && movieRes2.ok && movieRes3.ok) {
                let movies = await Promise.all(promisees)
                movies.forEach((query, i) => {
                    auxList.push(query.Search)
                })

                let sortedList = auxList.map((query) => {

                    return query.sort(function (a, b) {
                        return (a.Year < b.Year) ? -1 : (a.Year > b.Year) ? 1 : 0;
                    }).reverse()
                })

                this.setState({
                    ...this.state,
                    movieList: sortedList.map(query => query.slice(0, 6))

                })

                console.log(this.state)

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
                <h2 className="ml-4"> Trending </h2>
                <Container className="p-0" fluid>

                    <Carousel className="w-100"
                        responsive={this.responsive}
                        itemClass="carousel-item-padding-0-px"
                        centerMode={true}
                    >
                        {this.state.movieList.flat().map(query =>
                            <div className="largeCard position-relative h-100 justify-content-center">
                                <img className="image-card-L h-100 w-100" src={query.Poster} alt="" />
                                <h6 className="position-absolute title-Card-L">{query.Title}</h6>
                            </div>
                        )}

                    </Carousel>
                </Container>
            </>

        )
    }
}