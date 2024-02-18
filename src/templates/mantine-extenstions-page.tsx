import { Title } from '@mantine/core';
import { CodeHighlightDemo } from '../components/CodeHighlightDemo';
import { NotificationsSystemDemo } from '../components/NotificationsSystemDemo';
import { SpotlightDemo } from '../components/SpotlightDemo';
import { CarouselDemo } from '../components/CarouselDemo';
import { DropzoneDemo } from '../components/DropzoneDemo';
import { NavigationProgressDemo } from '../components/NavigationProgressDemo';
import { ModalManagerDemo } from '../components/ModalsManagerDemo';
import { RichTextEditorDemo } from '../components/RichTextEditorDemo';

export const MantineExtentionsPage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <Title order={1}>{data.title}</Title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <CodeHighlightDemo />
      <NotificationsSystemDemo />
      <SpotlightDemo />
      <CarouselDemo />
      <DropzoneDemo />
      <NavigationProgressDemo />
      <ModalManagerDemo />
      <RichTextEditorDemo />
    </div>
  );
};




const getData = async () => {
  const data = {
    title: 'Mantine Extentions Page',
    headline: 'Mantine Extentions Page',
    body: 'Hello world!',
  };

  return data;
};
