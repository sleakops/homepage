import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";

const myTheme = extendTheme(theme, {
  colors: { ...theme.colors },
  config: {
    ...theme.config,
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: {
    ...theme.components,
    Button: {
      baseStyle: {
        ...theme.components.Button.baseStyle,
        fontWeight: 600,
        letterSpacing: 1
      }
    },
  },
});

export default myTheme;
