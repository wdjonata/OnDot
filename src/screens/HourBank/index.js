import React, { useState } from 'react';
import { FlatList } from 'react-native'

import DateInput from '../../components/DateInput'

import Background from '../../components/Background'
import HourBankItem from '../../components/HoursBankItem'


import { Container, HeaderArea, HeaderTitle, ListArea, TotalArea, TextTotal, TimeTotal } from './styles';

export default () => {

    const flatData = [
        { key:1, date:'11/05/2021', time:'08:00'},
        { key:2, date:'12/05/2021', time:'08:00'},
        { key:3, date:'13/05/2021', time:'08:00'},
        { key:4, date:'14/05/2021', time:'08:00'},
        { key:5, date:'15/05/2021', time:'08:00'},
        { key:6, date:'16/05/2021', time:'08:00'},
        { key:7, date:'17/05/2021', time:'08:00'},
        { key:8, date:'18/05/2021', time:'08:00'},
        { key:9, date:'18/05/2021', time:'08:00'},
        { key:10, date:'18/05/2021', time:'08:00'},
        { key:11, date:'13/05/2021', time:'08:00'},
        { key:12, date:'13/05/2021', time:'08:00'},
        { key:13, date:'13/05/2021', time:'08:00'},
        { key:14, date:'13/05/2021', time:'08:00'},
        { key:15, date:'13/05/2021', time:'08:00'},
        { key:16, date:'13/05/2021', time:'08:00'},
        { key:17, date:'13/05/2021', time:'08:00'},
        { key:18, date:'13/05/2021', time:'08:00'},
        { key:19, date:'13/05/2021', time:'08:00'},
        { key:20, date:'13/05/2021', time:'08:00'},
      
       
    ]

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    return(

    <Background>
        <Container>
            <HeaderArea>
                <HeaderTitle>Banco de Horas</HeaderTitle>
            </HeaderArea>
            <DateInput date={startDate} onChange={setStartDate}/>
            <DateInput date={endDate} onChange={setEndDate}/>
            <ListArea>
                <FlatList data={flatData} renderItem={({item}) => (<HourBankItem>{item}</HourBankItem>)}/>
            </ListArea>
            <TotalArea>
                <TextTotal>Saldo da Busca</TextTotal>
                <TimeTotal>128:00</TimeTotal>
            </TotalArea>
        </Container>
    </Background>
    )
};