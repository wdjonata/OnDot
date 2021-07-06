import React, { useState, useMemo } from 'react'

import DatePicker from 'react-native-date-picker'
import pt from 'date-fns/locale/pt'
import { format } from 'date-fns';

import { Container, DateTimeButton, DateTimeText, Picker } from './styles'

import DateIcon from '../../assets/date.svg'
import TimeIcon from '../../assets/alarm.svg'

export default ({date, onChange, mode}) => {

    const [opened, setOpened] = useState(false)
    
    const dateFormatted = useMemo(
        () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}), [date]
    );
    
    const timeFormatted = useMemo(
        () => format(date, "HH:mm", {locale: pt}), [date]
    );

    return (
        <Container>
            <DateTimeButton onPress={() => setOpened(!opened)}>
                
                {mode=="date" ?
                    <DateIcon/>
                    :
                    <TimeIcon/>
                }
                <DateTimeText>
                    {mode=="date" ?
                        dateFormatted
                        :
                        timeFormatted
                    }
                </DateTimeText>
            </DateTimeButton>

            {opened && (
                <Picker>
                    <DatePicker
                        date={date}
                        onDateChange={onChange}
                        androidVariant="iosClone"
                        mode={mode}
                    />
                </Picker>
            )}
        </Container>
    )
}


