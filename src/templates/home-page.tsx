import { Link } from 'waku';

import { Counter } from '../components/counter.js';
import { Button, TextInput } from '@mantine/core';
import { MantineTestComponet } from '../components/MantineTestComponet.js';
export const HomePage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Counter />
      <Button variant="filled">Button</Button>
      <TextInput
      label="Input label"
      description="Input description"
      placeholder="Input placeholder"
    />

{/* Error: @mantine/core: MantineProvider was not found in component tree, make sure you have it in your app */}
    <MantineTestComponet/>



      {/* <DateInputDemo/> */}
      <ul>
      <li><Link to="/about" className="mt-4 inline-block underline">
        About
      </Link></li>
        <li><Link to="/dir/dist" className="mt-4 inline-block underline">
        Directory RSC (Server Side Rendered)
      </Link></li>
      <li><Link to="/about" className="mt-4 inline-block underline">
        Learn more
      </Link></li>
      </ul>
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
