import React from 'react'

import { Container, DateArea, DateText, Line, TimeArea } from './styles.js'

export default ({data}) => {
    console.log(data.date)
    return (
        <Container>
            <DateArea>
                <DateText>{data.date}</DateText>
            </DateArea>
            <TimeArea>
                <Line></Line>
            </TimeArea>
            
        </Container>
    )
}