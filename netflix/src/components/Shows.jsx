import React from 'react'
import { withRouter } from 'react-router-dom'
import ShowSection from './ShowSection'

function Shows(props) {
    
    return (
        <div>
           <h2>TV Shows</h2>
            {props.genres.map(genre=><ShowSection genre={genre} history={props.history}></ShowSection>)}
        </div>
    )
}

export default withRouter(Shows)
