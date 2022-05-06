import React, { useState } from 'react';
import { Modal } from 'react-native';
import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';
import { CityModal } from '../Modal/CityModal';
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
    const [ modalCityVisible, setCityModalVisible ] = useState(false);
  
    function handleOpenSelectStateModal(){
        setStateModalVisible(true);
    }

    function handleCloseSelectStateModal(){
        setStateModalVisible(false);
    }

    function handleOpenSelectCityModal(){
        setCityModalVisible(true);
    }

    function handleCloseSelectCityModal(){
        setCityModalVisible(false);
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

                <Input 
                    placeholder="Rua"
                />
                      
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


                  <FieldStateCity>

                        <Modal 
                            visible={modalCityVisible} 
                            animationType='fade'
                            style={{marginTop: '50%'}}
                        >
                            <CityModal 
                                closeSelectModal={handleCloseSelectCityModal}
                                setCity={() => {}}
                                name="CE"
                            />
                        </Modal>

                        <ButtonCity
                            onPress={handleOpenSelectCityModal}
                        >
                            <TitleButtonCity>
                                Cidade
                            </TitleButtonCity>

                            <IconCity 
                                name="down"
                            />
                        </ButtonCity>

                        <Modal 
                            visible={modalStateVisible} 
                            animationType='fade'
                            style={{marginTop: '50%'}}
                        >
                            <StatesModal 
                                closeSelectModal={handleCloseSelectStateModal}
                                setStates={() => {}}
                                state="CE"
                            />
                            
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