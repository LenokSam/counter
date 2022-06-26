import React, {useState} from 'react';
import s from'./StartValues.module.css'
import {Button} from '../Button/Button';

export type CollectorOfstartingValuesType={
  addStartValues:(start:string, max:string)=> void
  error:boolean
}


export const CollectorOfStartingValues:React.FC<CollectorOfstartingValuesType> = ({addStartValues, error}) => {
  const [max, setMax] = useState<string>('0')
  const [start, setStart] = useState<string>('0')
  // const [isDisabled, setIsDisabled] = useState<boolean>(false)

  // let error = +max<=0  || +start<=0 || (+max-+start) <=0

  return (

      <div className={s.wrapper}>
        <div className={s.values}>
          <div className={s.values__item}>
            <span>Start value</span>
            <input
              value={start}
              onChange={(e) => setStart(e.currentTarget.value)}
              type="number"/>
          </div>
          <div>
            <span>Max value</span>
            <input
              value={max}
              onChange={(e) => setMax(e.currentTarget.value)}
              type="number"/>
          </div>
        </div>
        <Button
          title={'SET'}
          className={'active'}
          onClick={()=>addStartValues(start,max)}
          disabled={error}
        />
    </div>
  );
};

