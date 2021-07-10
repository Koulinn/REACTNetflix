import React, { Component } from 'react'
import { Container, Row, FormControl, Button, Form } from 'react-bootstrap'
import CardSearch from './CardSearch';
import Loading from './Loading';

export default class Search extends Component {

  state = {
    search: {
      searchInput: '',
      movieCollection: [],
      isLoading: false
    }
  };

  searchMovies = async (e) => {
    e.preventDefault()
    try {

      if (e.target.value.length > 1 && e.target.value <= 2) {
        this.setState({
          search: {
            isLoading: true,
            movieCollection: [...this.search.movieCollection]
          }
        })
      } else {

        let resp = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&s=' + e.target.value)
        let moviesResp = await resp.json()
        let movies = moviesResp.Search.filter(moviesWithCover => moviesWithCover.Poster.length > 5)
        let sortedMovies = movies.sort(function(a, b) {
          return (a.Year < b.Year) ? -1 : (a.Year > b.Year) ? 1 : 0;
      }).reverse();
     
        this.setState({
          search: {
            searchInput: e.target.value,
            movieCollection: [...sortedMovies],
            isLoading: false
          }
        }) }
      


    } catch (error) {
      if(e.target.value === ''){
        this.setState({
          search: {
            isLoading: false,
            movieCollection: []
          }
        })
        return
    }
      this.setState({
        search: {
          searchInput: e.target.value,
          movieCollection: [],
          isLoading: true
        }
      })

    }


  }

  render() {
    return (
      <Container className="px-4 mt-5" fluid>
        <Row className="d-flex flex-column">
          <h2 className="px-2 ml-2 align-items-center">Search</h2>
          <Form className="ml-3 mb-4 mt-3" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => this.searchMovies(e)} />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Row>
        <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

          {this.state.search.isLoading && <Loading></Loading>}

          {(this.state.search.movieCollection.map((movie) => <CardSearch key={movie.imdbID} movie={movie}/>))}
        </div>
      </Container>
    );
  }
}

