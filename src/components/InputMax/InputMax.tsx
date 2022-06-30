import React, {useState} from 'react';
import {Button} from '../Button/Button';
import './InputMax.css'

export type InputMaxType = {
  enterMax: (value: string) => void
}

export const InputMax: React.FC<InputMaxType> = ({enterMax}) => {
  const [value, setValue] = useState<string>('')
  let text = value ? `Maximum value: ${value}` : 'Enter maximum value'

  return (
    <div className={'input__wrapper'}>
      <span>{text}</span>
      <div className={'row'}>
        <input
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          className={'count__input'}
        />
        <Button
          title={'Enter'}
          className={'active'}
          onClick={() => enterMax(value)}
          disabled={false}
        />
      </div>
    </div>
  );
};

