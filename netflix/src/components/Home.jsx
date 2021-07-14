import React from 'react'
import Search from './Search'
import LCoverCar from './LCoverCar'
import Section from './Section'

export default function Home() {
    return (
        <>
            <LCoverCar query1="marvel" query2="batman" query3="toy story"></LCoverCar>
            <Search></Search>
            <Section title="Harry Potter"></Section>
            <Section title="Lord of the Rings"></Section>
            <Section title="Horror"></Section>

        </>
    )
}
