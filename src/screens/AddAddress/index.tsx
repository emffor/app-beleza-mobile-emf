import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { Button } from '../../components/Form/Button';
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
  ButtonCep,
  ButtonText,
  FieldStateCity,
  ButtonState,
  TitleButtonState,
  ButtonCity,
  TitleButtonCity,
  IconCity,
  IconState,
  Footer,
  FieldButtonAdd
} from './styles';

export function AddAddress(){
    const [ modalStateVisible, setStateModalVisible ] = useState(false);
    const [ modalCityVisible, setCityModalVisible ] = useState(false);
    const navigation = useNavigation();

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

    function handleGoBAck(){
        navigation.goBack();
    }

    function handleAddAddress(){
        navigation.navigate('Payment');
        Alert.alert('Cartão e Endereço adicionado com sucesso!');
    }

  return (
    <Container>
        <Content>
            <ButtonBack 
                onPress={handleGoBAck}
                title="Adicionar Endereço"
            />
            <FieldInputs>

                <FormCep>
                    <InputForm 
                        placeholder="CEP"
                    />
                    <ButtonCep>
                        <ButtonText>Buscar CEP</ButtonText>
                    </ButtonCep>
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

        <Footer>        
              <FieldButtonAdd>
                <Button 
                  title="Adicionar Endereço"
                  onPress={handleAddAddress}
                />
              </FieldButtonAdd>
          </Footer>
    </Container>
  );
}