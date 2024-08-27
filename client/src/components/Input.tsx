import React, { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({ value, onChange, disabled }) => (
  <div className='w-full'>
    <input
      type='text'
      placeholder='Введіть число'
      value={value}
      onChange={onChange}
      disabled={disabled}
      className='border border-gray-300 p-2 rounded-l-lg w-full outline-none'
    />
  </div>
);

export default Input;
