import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
Container,
Input,
Icon,
Button
} from './styles';

type Props = TextInputProps;


export function InputPassword({...rest} : TextInputProps){
    const [isActive, setIsActive] = useState(false);
    const [name, setName] = useState('eye');

    function swapName(){
        if(name === 'eye'){
            setName('eye-off');
            setIsActive(false);
        } else {
            setName('eye');
            setIsActive(true);
        }
    }

    
    console.log(isActive);
    
    
  return (
    <Container {...rest} >
        <Input placeholder="Senha" secureTextEntry={isActive}/>

        <Button onPress={swapName}>
            <Icon name={name}/>
        </Button>

    </Container>
        
  );
}