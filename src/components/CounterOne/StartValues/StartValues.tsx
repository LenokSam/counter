import React, {ChangeEvent, useState} from 'react';
import s from './CollectorOfStartingValues.module.css'
import {Button} from '../Button/Button';

export type CollectorOfstartingValuesType = {
  addStartValues: (start: string, max: string) => void
  error: boolean
  setStart: (start: string) => void
  setMax: (max: string) => void
  max: string
  start: string
}


export const StartValues: React.FC<CollectorOfstartingValuesType> = ({addStartValues,error,setStart,setMax,max,start}) => {

  const setStartOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(e.currentTarget.value)
  }
  const setMaxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(e.currentTarget.value)
  }

  return (

    <div className={s.wrapper}>
      <div className={s.values}>
        <div className={s.values__item}>
          <span className={s.value__name}>Start value:</span>
          <input
            value={start}
            onChange={setStartOnChange}
            type="number"
            className={s.input}
          />
        </div>
        <div className={s.values__item}>
          <span className={s.value__name}>Max value:</span>
          <input
            value={max}
            onChange={setMaxOnChange}
            type="number"
            className={s.input}
          />
        </div>
      </div>
      <Button
        title={'SET'}
        onClick={() => addStartValues(start, max)}
        disabled={error}
      />
    </div>
  );
};

