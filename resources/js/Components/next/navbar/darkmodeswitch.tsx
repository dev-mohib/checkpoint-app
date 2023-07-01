import React from 'react';
// import {useTheme as useNextTheme} from 'next-themes';
import {Switch, useTheme, createTheme} from '@nextui-org/react';

export const DarkModeSwitch = () => {
   // const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   
   return (
      <Switch
         checked={false}
         onChange={(e : any) => {}}
      />
   );
};
