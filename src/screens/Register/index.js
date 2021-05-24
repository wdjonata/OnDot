import React, { useState } from 'react';

import DateInput from '../../components/DateInput'
import Background from '../../components/Background'

import { Container, HeaderArea, HeaderTitle } from './styles';

export default () => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    return(

        <Background>
            <Container>
                <HeaderArea>
                    <HeaderTitle>Registros</HeaderTitle>
                </HeaderArea>
                <DateInput date={startDate} onChange={setStartDate}/>
                <DateInput date={endDate} onChange={setEndDate}/>
            </Container>
        </Background>
    )
};