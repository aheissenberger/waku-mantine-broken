import { Title } from '@mantine/core';
import { DateInput } from '@mantine/dates';


export const MantineDatePage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <Title order={1}>{data.title}</Title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <DateInput />
    </div>
  );
};



const getData = async () => {
  const data = {
    title: 'Mantine Dates Page',
    headline: 'Mantine Dates Page',
    body: 'Hello world!',
  };

  return data;
};
