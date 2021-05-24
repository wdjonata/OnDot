import React from 'react';

import { Container, HeaderArea, HeaderTitle } from './styles';
import Background from '../../components/Background'

export default () => {

    return(

        <Background>
            <Container>
                <HeaderArea>
                    <HeaderTitle>Home</HeaderTitle>
                </HeaderArea>
            </Container>
        </Background>
    )
};