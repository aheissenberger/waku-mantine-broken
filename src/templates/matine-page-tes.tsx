
  import '@mantine/core/styles.css';
  import '@mantine/dates/styles.css';
  import { MantineProvider, useMantineTheme } from '@mantine/core';
  import { MantineConsumer } from '../components/MantineConsumer.js';

  export const MantinePage = async () => {

    return (
      <MantineProvider >
        <div>Mantine</div>
          <MantineConsumer />
      </MantineProvider>
    );
  };
