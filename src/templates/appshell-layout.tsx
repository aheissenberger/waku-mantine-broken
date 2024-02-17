'use client'

import { ReactNode } from "react";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { NavLeft } from "../components/NavLeft";
import { Link } from "waku";

type RootLayoutProps = { children: ReactNode };

export const AppShellLayout = ({ children }: RootLayoutProps) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <div><Link to="/">Logo</Link></div>
            </AppShell.Header>

            <AppShell.Navbar p="md"><NavLeft /></AppShell.Navbar>

            <AppShell.Main>{ children }</AppShell.Main>
        </AppShell>
    );
};
