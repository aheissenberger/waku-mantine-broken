



import { Autocomplete, Button, ColorPicker, CopyButton, MantineProvider, MultiSelect, TextInput } from '@mantine/core';
import { MantineTestComponet } from '../components/MantineTestComponet.js';
import { DateInputDemo } from '../components/DateInputDemo.js';
import { DateInput } from '@mantine/dates';


export const MantinePage = async () => {
  const data = await getData();

  return (
      <div>
        <title>{data.title}</title>
        <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
        <p>{data.body}</p>
        {/* <Counter /> */}

        <Button variant="filled">Button</Button>
        <TextInput
      label="Input label"
      description="Input description"
      placeholder="Input placeholder"
    /> 

        {/* <DateInput/> */}
        <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
        {/* <DateInputDemo/>  */}

      </div>
  );
};

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};
