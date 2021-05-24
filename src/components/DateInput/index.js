import React, { useState, useMemo } from 'react'

import DatePicker from 'react-native-date-picker'
import pt from 'date-fns/locale/pt'
import { format } from 'date-fns';

import { Container, DateButton, DateText, Picker } from './styles'

import DateIcon from '../../assets/date.svg'

export default ({date, onChange}) => {

    const [opened, setOpened] = useState(false)

    const dateFormatted = useMemo(
        () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}), [date]
    );

    return (
        <Container>
            <DateButton onPress={() => setOpened(!opened)}>
                <DateIcon/>
                <DateText>{dateFormatted}</DateText>
            </DateButton>

            {opened && (
                <Picker>
                    <DatePicker
                        date={date}
                        onDateChange={onChange}
                        androidVariant="iosClone"
                        mode="date"
                    />
                </Picker>
            )}
        </Container>
    )
}


