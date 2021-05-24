import React from 'react'
import { View, Text } from 'react-native'

import { InputArea, Input } from './styles'


export default ({placeholder, value, onChangeText, password}) => {
    return (

        <InputArea>
            <Input
                placeholder={placeholder}
                placeholderTextColor='rgba(255, 255, 255, 0.5)'
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}

            />
        </InputArea>
    
    )
}
