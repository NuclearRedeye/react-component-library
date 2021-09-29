import React from 'react';
import { useState } from 'react';

interface Props {
  initialValue?: number
}

export const Increment = ({initialValue = 0}: Props) : JSX.Element => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className='increment' onClick={(): void => setValue(value + 1)}>
      {value}
    </div>
  );
};