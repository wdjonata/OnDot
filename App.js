import React from 'react'

import MainStack from './src/stacks/MainStack'
import { NavigationContainer } from '@react-navigation/native'

export default () => {
  return(
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}