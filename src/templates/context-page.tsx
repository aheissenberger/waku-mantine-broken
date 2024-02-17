import { TestConsumer } from "../components/TestConsumer";

export const ContextPage = async () => {
    const data = await getData();
    return (
        <div>
<title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
            
                <div>Context Page</div>
                <TestConsumer />
            
            </div>
    );
};

const getData = async () => {
    const data = {
      title: 'ContextPage',
      headline: 'ContextPage',
      body: 'Hello world!',
    };
  
    return data;
  };
  