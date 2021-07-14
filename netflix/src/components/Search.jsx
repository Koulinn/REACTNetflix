import React, { Component } from 'react'
import { Container, Row, FormControl, Button, Form } from 'react-bootstrap'
import CardSearch from './CardSearch';
import Loading from './Loading';

export default class Search extends Component {

  state = {
    search: {
      movieCollection: [],
      isLoading: false
    },
    searchInput: '',
    searchError:false
  };

  componentDidUpdate = (prevProps, prevState) =>{
    if(prevState.searchInput !== this.state.searchInput){
      this.searchMovies()
    }

  }

  searchMovies = async () => {
    try {
      if (this.state.searchInput.length <= 2) {
        console.log('just 2 chars')
        this.setState({
          search: {
            isLoading: true,
            movieCollection: [...this.state.search.movieCollection]
          }
        }, () => {
          setTimeout(()=> this.setState({
            searchError:true
          }), 5000)
        })
      } else {
        let resp = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&s=' + this.state.searchInput)
        let moviesResp = await resp.json()
        let movies = moviesResp.Search.filter(moviesWithCover => moviesWithCover.Poster.length > 5)
        let sortedMovies = movies.sort(function(a, b) {
          return (a.Year < b.Year) ? -1 : (a.Year > b.Year) ? 1 : 0;
      }).reverse();
     
        this.setState({
          search: {
            searchInput: this.state.searchInput,
            movieCollection: [...sortedMovies],
            isLoading: false
          }
        }) }
      

    } catch (error) {
      console.log('fell in the catch')
      if(this.state.searchInput === ''){
        this.setState({
          search: {
            isLoading: false,
            movieCollection: [],
            searchError: false
          }
        })
        return
    }



      this.setState({
        search: {
          searchInput: this.state.searchInput,
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
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => this.setState({
                  ...this.state,
                  searchInput: e.target.value
                })} />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Row>
        <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

          {this.state.search.isLoading && <Loading></Loading>}

          {(this.state.search.movieCollection.map((movie) => <CardSearch sectionName={movie.Type} history={this.props.history} key={movie.imdbID} movie={movie}/>))}
        </div>
      </Container>
    );
  }
}

