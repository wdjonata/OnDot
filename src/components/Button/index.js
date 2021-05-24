import React from 'react';
import { Text } from 'react-native';

import { ButtonArea, Button, ButtonText } from './styles';

export default ({text,Icon, ...rest}) => {
    return (
        <ButtonArea>
            <Button 
                {...rest}
            >
                {Icon && 
                    <Icon width={32} height={32} fill={"#FFF"}/>
                }
                <ButtonText>
                    {text}
                </ButtonText>
            </Button>
        </ButtonArea>
    )
  } ;