import {Spinner} from 'react-bootstrap'

function Loading() {
    return (
        <>
        <Spinner className="loader ml-3" animation="grow" variant="danger" style={{maxWidth:"64px", height:"64px"}} />
        <p className="mb-0 ml-2 align-self-center">Loading...</p>
        </> 
    )
}

export default Loading