import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'


export default class AlertComp extends Component {
    render() {
        return (
            <Alert className="p-2 text-center" variant={this.props.variant}>
                <p className="text-dark m-0">{this.props.text}</p>
            </Alert>
        )
    }
}
