import { Title } from '@mantine/core';
import { FormDemo } from '../components/FormDemo';


export const MantineFormPage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <Title order={1}>{data.title}</Title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <FormDemo />
    </div>
  );
};




const getData = async () => {
  const data = {
    title: 'Mantine Form Page',
    headline: 'Mantine Form Page',
    body: 'Hello world!',
  };

  return data;
};
