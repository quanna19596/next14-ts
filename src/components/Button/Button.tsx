'use client';

import { TButtonProps } from './Button.d';

import './Button.scss';

const Button: React.FC<TButtonProps> = () => {
  return <button className='Button'>Button client</button>;
};

export default Button;
