import React from 'react';
import { useNavigation } from '@react-navigation/native'

import Background from '../../components/Background'

import { Container } from './styles';

import Logo from '../../assets/logo.svg'

export default () => {
    const navigation = useNavigation()

    navigation.navigate('MainTab')

    return(
        <Background>
            <Container>
                <Logo width="100%" height="160" />
            </Container>
        </Background>
    )
};