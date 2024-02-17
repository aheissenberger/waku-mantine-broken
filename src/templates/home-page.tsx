import { Link } from 'waku';

import { Counter } from '../components/counter.js';
import { NavLeft } from '../components/NavLeft.js';

export const HomePage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>

      <ul>
      <li><Link to="/mantine" className="mt-4 inline-block underline">
        Mantine
      </Link></li>
      <li><NavLeft /></li>
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
