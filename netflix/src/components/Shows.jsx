import React from 'react'
import { withRouter } from 'react-router-dom'
import ShowSection from './ShowSection'

function Shows(props) {
    
    return (
        <div>
           <h2 className="px-4">{props.sectionName}</h2>
            {props.genres.map((genre, i)=><ShowSection key={i} genre={genre} history={props.history}></ShowSection>)}
        </div>
    )
}

export default withRouter(Shows)
