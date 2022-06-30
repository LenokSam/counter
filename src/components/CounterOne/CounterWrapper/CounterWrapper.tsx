import React, {EffectCallback, useEffect, useState} from 'react';
import {Counter} from '../Counter/Counter';
import s from './CounterWrapper.module.css'

import './CounterWrapper.module.css'
import {StartValues} from '../StartValues/StartValues';

export type CountStateType={
  max:string
  start:string
  count:number
  isReadyForCount:boolean
}

export const CounterWrapper = () => {


  const countState: CountStateType= {
    max:'1',
    start:'0',
    count:0,
    isReadyForCount:false,
  }

  const [state, setState] = useState<CountStateType>(countState)

  useEffect(()=>{
    let localStState = localStorage.getItem('counterState')
    localStState && setState(JSON.parse(localStState))
  },[])
  useEffect(()=>{
    localStorage.setItem('counterState', JSON.stringify(state))
  },[state])

  let isNotCorrectValues = +state.max < 0 || +state.start < 0 || (+state.max - +state.start) <= 0 || state.max === state.start

  const addStartValues = (start: string, max: string) => {
    setState({start: start, max: max, count: +start, isReadyForCount: true})

  }

  const setStart = (start: string) => {
    setState({...state, start: start, isReadyForCount: false})
  }
  const setMax = (max: string) => {
    setState({...state, max: max, isReadyForCount: false})
  }

  const setCount = (count: number) => {
    setState({...state, count: count})
  }

  return (
    <div className={s.wrapper}>
      <StartValues
        error={isNotCorrectValues}
        addStartValues={addStartValues}
        setStart={setStart}
        setMax={setMax}
        max={state.max}
        start={state.start}

      />
      <Counter
        error={isNotCorrectValues}
        max={state.max}
        start={state.start}
        count={state.count}
        setCount={setCount}
        isReadyForCount={state.isReadyForCount}
      />
    </div>
  );
};

