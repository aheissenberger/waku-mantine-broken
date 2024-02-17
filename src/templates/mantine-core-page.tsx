



import { AspectRatio, Autocomplete, Box, Button, Center, ColorPicker, Container, CopyButton, MantineProvider, MultiSelect, TextInput, Title } from '@mantine/core';
import { MantineTestComponet } from '../components/MantineTestComponet.js';
import { DateInputDemo } from '../components/DateInputDemo.js';
import { DateInput } from '@mantine/dates';


export const MantineCorePage = async () => {
  const data = await getData();

  return (
      <div>
        <title>{data.title}</title>
        <Title order={1}>{data.title}</Title>
        <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
        <p>{data.body}</p>
        {/* <Counter /> */}

        <Title order={2}>Layout</Title>

        <Title order={3}>AspectRatio</Title>
        <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
        alt="Panda"
      />
    </AspectRatio>
    <Title order={3}>Center</Title>
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
    <ContainerDemo />
      </div>
  );
};

function ContainerDemo() {
    const demoProps = {
      bg: 'var(--mantine-color-blue-light)',
      h: 50,
      mt: 'md',
    };
  
    return (
      <>
        <Container {...demoProps}>Default Container</Container>
  
        <Container size="xs" {...demoProps}>
          xs Container
        </Container>
  
        <Container px={0} size="30rem" {...demoProps}>
          30rem Container without padding
        </Container>
      </>
    );
  }

const getData = async () => {
  const data = {
    title: 'Mantine Core Page',
    headline: 'Mantine Core Page',
    body: 'Hello world!',
  };

  return data;
};
