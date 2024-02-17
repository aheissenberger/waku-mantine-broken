'use client';
import {MantineThemeContext, useMantineTheme} from '@mantine/core'
import { useContext } from 'react';

export const MantineConsumer = () => {
    //const themeIrig=useContext(MantineThemeContext)
   
    //return (<div>Theme: {`${themeIrig?.primaryColor}`}</div>);
    const theme = useMantineTheme();
    return (<div>Theme: {`${theme?.primaryColor}`}</div>);
}