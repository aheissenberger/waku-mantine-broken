'use client';

import { useState } from 'react';
//import 'dayjs/locale/de';

import { DateInput } from '@mantine/dates';

export const DateInputDemo = () => {
console.log('DateInputDemo')
  const [value, setValue] = useState<Date | null>(null);
  //return 'DateInputDemo';
  debugger
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}