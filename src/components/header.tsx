import classes from './header.module.css';
import { Container, Group, Burger,Text } from '@mantine/core';


export const Header = () => {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
      <Text size="lg">Large textMantine</Text>
        {/* <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
      </Container>
    </header>
  );
};
