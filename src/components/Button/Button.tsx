import React from 'react';
import s from './Button.module.css'
export type ButtonType = {
  title: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

export const Button: React.FC<ButtonType> = ({title, onClick, className,disabled } ) => {
  return (
    <button
      disabled={disabled}
      className={`${s.active} ${className ? className: ''}`}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
};

