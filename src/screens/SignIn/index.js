import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import Logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Background from '../../components/Background'

import { Container, LogoArea } from './styles';

export default () => {

    const navigation = useNavigation()

    const [company, setCompany] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleSignClick = () => {
        navigation.reset({
            routes: [{name: 'MainTab'}]
        });
    }

    return(
        <Background>
            <Container>
                <LogoArea>
                    <Logo width="100%" height="160" />
                </LogoArea>
                <Input
                    placeholder="Empresa"
                    value={company}
                    onChangeText={ text => setCompany(text)}

                />
                <Input
                    placeholder="Usuário"
                    value={user}
                    onChangeText={ text => setUser(text)}

                />
                <Input
                    placeholder="Senha"
                    value={password}
                    onChangeText={ text => setPassword(text)}

                />
                <Button 
                    onPress={handleSignClick} 
                    text="Login"
                />
            </Container>
        </Background>
    )
};