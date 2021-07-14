import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import CardSearch from './CardSearch'
import Loading from './Loading'

export default function ShowSection(props) {
    const [series, setSeries] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    console.log(props)
    
    useEffect(() =>  getSeriesDetails(props.genre)
    , [])
    
    const getSeriesDetails = async (genre) => {
        try {
            let resp = await fetch('http://www.omdbapi.com/?apikey=1aad5b7f&s=' + genre + '&type=series')
            if (resp.ok) {
                let serieResp = await resp.json()
                setIsLoading(false)
               setSeries([...serieResp.Search.slice(0,6)])
               console.log(series, '<<<<<<<<<<<<<<<<<<<<<<<<')
            }
        } catch (error) {
            setNotFound(true)
        }
    }
    return (
      
        <Container className="bodySectionBG px-4 mt-5" fluid>
                    <h2 className="">
                        {props.genre}
                    </h2>
                    <Row className="row-cols-sm-2 row-cols-md-4 row-cols-lg-6 px-3">
                        {isLoading && (<Loading></Loading>)}
                        {series.length > 0 && (series.map((movie , i) => 
                            i < 2 ? <CardSearch sectionName={props.title} history={props.history} responsiveness={'d-flex'} key={movie.imdbID} movie={movie}></CardSearch>
                            :  i < 5 && i > 2 ? <CardSearch sectionName={props.title} history={props.history} responsiveness={'d-none d-md-flex'} key={movie.imdbID} movie={movie}></CardSearch>
                            : <CardSearch sectionName={props.genre} history={props.history} responsiveness={'d-none d-lg-flex'} key={movie.imdbID} movie={movie}></CardSearch>                           
                        ))
                    }
                        
                    </Row>
                </Container>
    )
}
