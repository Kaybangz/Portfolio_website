import { extendTheme } from '@chakra-ui/react';
import "@fontsource/atkinson-hyperlegible";
import "@fontsource/archivo";
import "@fontsource/assistant";

const theme = extendTheme({
    fonts: {
      heading: `'Atkinson Hyperlegible','Open Sans', sans-serif`,
      body: `'Atkinson Hyperlegible', 'Assistant', sans-serif`,
    },
  })
  
  export default theme;