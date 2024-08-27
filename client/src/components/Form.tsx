import React, { FormEvent, ChangeEvent } from 'react';

import Input from './Input';
import Button from './Button';

interface FormProps {
  inputValue: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
  disabled: boolean;
  error?: string | null;
}

const Form: React.FC<FormProps> = ({
  inputValue,
  onInputChange,
  onSubmit,
  disabled,
  error,
}) => (
  <>
    <form onSubmit={onSubmit} className='w-full max-w-xs flex flex-row'>
      <Input value={inputValue} onChange={onInputChange} disabled={disabled} />
      <Button disabled={disabled} className=' rounded-r-lg'>
        Перевірити
      </Button>
    </form>
    {error && <p className='text-red-500 text-s mt-1'>{error}</p>}
  </>
);

export default Form;
