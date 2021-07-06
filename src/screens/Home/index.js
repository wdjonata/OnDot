import React, { useMemo, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'

import pt from 'date-fns/locale/pt'
import { format } from 'date-fns';
import { FlatList } from 'react-native'

import HoursDayItem from '../../components/HoursDayItem'
import Background from '../../components/Background'

import { Container,
    HeaderArea,
    HeaderTitle,

    DateTimeArea,
    TimeText,
    DateText,

    ButtonArea,
    Button,
    ButtonText,

    RegisterDayArea,
    RegisterDayTitle,
    RegisterDayTitleArea,

    RecentRegisterArea,
    RecentRegisterTitle,

} from './styles';

export default () => {

    const navigation = useNavigation()

    const handleClickOccurrence = () => {
        navigation.navigate('Occurrence')
    }

    const handleClickPointRegister = () => {
        navigation.navigate('PointRegister')
    }

    const listDataDay = {date:'11/05/2021',
        data:[
            {key:1, time:'08:00'},
            {key:2, time:'12:00'},
        ]
    }

    const listDataRecent = [
        {key:1, date:'11/05/2021', data:[
            {key:1, time:'08:00'},
            {key:2, time:'12:00'},
            {key:3, time:'13:00'},
            {key:4, time:'17:00'},
        ] },
        {key:2, date:'12/05/2021', data: [
            {key:1, time:'08:00'},
            {key:2, time:'12:00'},
            {key:3, time:'13:00'},
            {key:4, time:'18:00'},
            {key:5, time:'19:00'},
            {key:6, time:'22:00'},
        ]},
        {key:3, date:'13/05/2021', data: [
            {key:1, time:'08:00'},
            {key:2, time:'12:05'},
            {key:3, time:'13:00'},
            {key:4, time:'18:00'},
        ]},
    ]

    const [date, setDateTime] = useState(new Date())

    const handleDate = useMemo(
        () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
        [date]
    )

    const handleTime = useMemo(
        () => format(date, "HH:mm", {locale: pt}),
        [date]
    )

    useEffect(() => {
        setInterval(( ) => setDateTime(new Date( )), 60000)
    }, []);

    return(

        <Background>
            <Container>
                <HeaderArea>
                    <HeaderTitle>Home</HeaderTitle>
                </HeaderArea>
                <DateTimeArea>
                    <TimeText>{handleTime}</TimeText>
                    <DateText>{handleDate}</DateText>
                </DateTimeArea>
                <ButtonArea>
                    <Button>
                        <ButtonText
                            onPress={handleClickPointRegister}
                        >Registra Ponto</ButtonText>
                    </Button>
                    <Button>
                        <ButtonText
                            onPress={handleClickOccurrence}
                        >
                        Ocorrência
                        </ButtonText>
                    </Button>

                </ButtonArea>
                <RegisterDayArea>
                    <RegisterDayTitleArea>
                        <RegisterDayTitle>Hoje</RegisterDayTitle>
                    </RegisterDayTitleArea>
                    <HoursDayItem data={listDataDay}/>
                </RegisterDayArea>

                <RecentRegisterArea>
                    <RecentRegisterTitle>Últimos dias</RecentRegisterTitle>
                    <FlatList
                        data={listDataRecent}
                        renderItem={({item}) => (
                            <HoursDayItem data={item}/>
                        )}
                    />
                </RecentRegisterArea>

            </Container>
        </Background>
    )
};