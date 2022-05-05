import React, { useState } from 'react';
import { Modal } from 'react-native';
import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';
import { StatesModal } from '../Modal/StatesModal';

import {
  Container,
  Content,
  FieldInputs,
  FormInput,
  FormCep,
  Button,
  ButtonText,
  FieldStateCity,
  ButtonState,
  TitleButtonState,
  ButtonCity,
  TitleButtonCity,
  IconCity,
  IconState,
} from './styles';

export function AddAddress(){
    const [ modalStateVisible, setStateModalVisible ] = useState(false);
  
    function handleOpenSelectStateModal(){
        setStateModalVisible(true);
    }

    function handleCloseSelectStateModal(){
        setStateModalVisible(false);
    }


  return (
    <Container>
        <Content>
            <ButtonBack 
                onPress={() => {}}
                title="Adicionar Cartão"
            />
            <FieldInputs>

                      <FormCep>
                          <InputForm 
                              placeholder="CEP"
                          />
                          <Button>
                              <ButtonText>Buscar CEP</ButtonText>
                          </Button>
                      </FormCep>
                      
                 <FormInput>

                    <InputForm 
                          placeholder="Número"
                      />

                      <InputForm 
                          placeholder="Complemento"
                      />    

                </FormInput>   

                <Input 
                      placeholder="Bairro"
                  />

                  <Input 
                      placeholder="Estado"
                  />

                  <FieldStateCity>
                        <ButtonCity>
                            <TitleButtonCity>
                                Cidade
                            </TitleButtonCity>

                            <IconCity 
                                name="down"
                            />
                        </ButtonCity>

                        <Modal visible={false}>
                            
                        </Modal>

                        <ButtonState
                            onPress={handleOpenSelectStateModal}
                        >
                            <TitleButtonState>
                                Estado
                            </TitleButtonState>
                            <IconState 
                                name="down"
                            />
                        </ButtonState>
                  </FieldStateCity>
                  
            </FieldInputs>
        </Content>
    </Container>
  );
}