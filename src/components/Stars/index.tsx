import React from 'react';

import {
  ButtonStars,
  IconStarts
} from './styles';


interface Props {
    isActive: boolean;
    selectStar: () => void;
  }

export function Stars({isActive, selectStar } : Props){
  return (
    <ButtonStars onPress={selectStar}>
        <IconStarts
            isActive={isActive}
            name="star"
        />
    </ButtonStars>
  );
}