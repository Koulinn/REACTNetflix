import React from 'react'

export default function Details(props) {
    console.log(props, props.match.params.movieId)
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    )
}
