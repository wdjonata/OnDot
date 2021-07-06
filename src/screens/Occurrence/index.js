import React, { useState } from 'react';
import { FlatList } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import DateTimeInput from '../../components/DateTimeInput'

import Background from '../../components/Background'
import OccurrenceModal from '../../components/OccurrenceModal'

import IconAdd from '../../assets/add.svg'
import IconArrowBack from '../../assets/arrow_back.svg'


import { Container, HeaderArea, HeaderTitle, ListArea, DateTimeArea, AddButton, BackButton } from './styles';

export default () => {

    const navigation = useNavigation()
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
    const [showModal, setShowModal] = useState(false)

    const handleOccurrenceModal = () => {
        setShowModal(true)
    }

    const handleBack = () => {
        navigation.goBack()
    }

    return(

    <Background>
        <Container>
            <HeaderArea>
                <BackButton>
                    <IconArrowBack onPress={handleBack}/>
                </BackButton>
                <HeaderTitle>Ocorrência</HeaderTitle>
            </HeaderArea>
            <DateTimeArea>
                <DateTimeInput date={startDate} onChange={setStartDate} mode="date" />
            </DateTimeArea>
            <DateTimeArea>
                <DateTimeInput date={endDate} onChange={setEndDate} mode="date" />
            </DateTimeArea>
           
            <AddButton onPress={handleOccurrenceModal}>
                <IconAdd width="30" height="30" />
            </AddButton>

            <OccurrenceModal
                show={showModal}
                setShow={setShowModal}
            >

            </OccurrenceModal>

        </Container>
    </Background>
    )
};