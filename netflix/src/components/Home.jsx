// import React from 'react'
import Search from './Search'
import LCoverCar from './LCoverCar'
import Section from './Section'

export default function Home({history}) {
    console.log(history)
    return (
        <>
            <LCoverCar history={history} query1="marvel" query2="batman" query3="toy story"></LCoverCar>
            <Search history={history}></Search>
            <Section history={history} title="Harry Potter"></Section>
            <Section history={history} title="Lord of the Rings"></Section>
            <Section history={history} title="Horror"></Section>

        </>
    )
}
