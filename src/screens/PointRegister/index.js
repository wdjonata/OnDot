import React, { useMemo, useState, useEffect } from 'react';
import pt from 'date-fns/locale/pt'
import { format } from 'date-fns';

import Background from '../../components/Background'
import FingerPrintIcon from '../../assets/fingerPrint.svg'
import Button from '../../components/Button'

import { 
    Container,
    HeaderArea,
    HeaderTitle,
    AreaAvatar,
    Avatar,
    DateTimeArea,
    TimeText,
    DateText
} from './styles';


export default () => {

    const [date, setDateTime] = useState(new Date())

    const handleRegister = () => {

    }

    const handleDate = useMemo(
        () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
        [date]
    )

    const handleTime = useMemo(
        () => format(date, "HH:mm", {locale: pt}),
        [date]
    )

    useEffect(() => {
        let timer = setInterval(( ) => setDateTime(new Date( )), 60000)
    }, []);

    return(

        <Background>
            <Container>
                <HeaderArea>
                    <HeaderTitle>Registro de Ponto</HeaderTitle>
                </HeaderArea>
                <AreaAvatar>
                    <Avatar/>
                </AreaAvatar>
                <DateTimeArea>
                    <TimeText>{handleTime}</TimeText>
                    <DateText>{handleDate}</DateText>
                </DateTimeArea>
                <Button
                    onPress={handleRegister} 
                    text="Registrar Ponto"
                    Icon={FingerPrintIcon}
                />
            </Container>
        </Background>
    )
};