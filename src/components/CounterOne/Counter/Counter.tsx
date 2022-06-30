import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from '../Button/Button';


export type CounterType = {
  max: string
  start: string
  error: boolean
  count: number
  setCount: (count: number) => void
  isReadyForCount: boolean
}

export const Counter: React.FC<CounterType> = ({max, start, error, count, setCount, isReadyForCount}) => {
  let isDisabled = error || count >= +max
  return (
    <div className={s.wrapper}>
      <div className={`${s.counter} ${isDisabled && s.red}`}>
        {error ?
          <span className={s.error__text}>Incorrect value</span>
          :
          isReadyForCount ?
            <span className={s.count}>{count}</span>
            :
            <span className={s.error__text}>Enter values and press 'SET'</span>
        }
      </div>
      <div className={s.btn__container}>
        <Button
          title={'INC'}
          onClick={() => setCount(count + 1)}
          disabled={isDisabled || !isReadyForCount}
          className={s.btn}
        />
        <Button
          title={'RESET'}
          onClick={() => setCount(+start)}
          disabled={count === +start || !isReadyForCount }
          className={s.btn}
        />
      </div>
    </div>

  );
};

