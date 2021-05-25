import React, { useState } from 'react';

import DateInput from '../../components/DateInput'
import Background from '../../components/Background'

import HoursDayItem from '../../components/HoursDayItem'

import { Container, HeaderArea, HeaderTitle, ListArea } from './styles';

export default () => {

    const listData = [
        {date:'11/05/2021', data:[
            {key:1, time:'08:00'},
            {key:2, time:'12:00'},
            {key:3, time:'13:00'},
            {key:4, time:'17:00'},
        ] },
        {date:'12/05/2021', data: [
            {key:1, time:'08:00'},
            {key:2, time:'12:00'},
            {key:3, time:'13:00'},
            {key:4, time:'18:00'},
        ]},
        {date:'13/05/2021', data: [
            {key:1, time:'08:00'},
            {key:2, time:'12:05'},
            {key:3, time:'13:00'},
            {key:4, time:'18:00'},
        ]},
        {date:'14/05/2021', data: [
            {key:1, time:'08:06'},
            {key:2, time:'12:00'},
            {key:3, time:'13:30'},
            {key:4, time:'17:40'},
        ]},
    ]

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
                <ListArea>
                    {listData.map((item, k)=>(
                        <HoursDayItem key={k} data={item}/>
                    ))}
                </ListArea>

            </Container>
        </Background>
    )
};