import React from 'react'

import { Container, DateTimeText } from './styles.js'

export default (props) => {
    return (
        <Container>
            <DateTimeText>{props.children.date}</DateTimeText>
            <DateTimeText>{props.children.time}</DateTimeText>
        </Container>
    )
}
