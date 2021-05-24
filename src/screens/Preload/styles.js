import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient).attrs({
    colors: ['#011526', '#1BACE9']
})`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;