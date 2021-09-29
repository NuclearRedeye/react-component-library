import React from 'react';
import { useState } from 'react';

interface Props {
  id: string,
  label: string,
  initialValue?: number
}

export const Increment = ({id, label, initialValue = 0}: Props) : JSX.Element => {
  const [value, setValue] = useState(initialValue);

  return (
    <div id={id} className='increment'>
      <h1>{label}</h1>
      <div onClick={(): void => setValue(value + 1)}>
        {value}
      </div>
    </div>
  );
};