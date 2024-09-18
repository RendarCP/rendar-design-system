import React from "react";
import type { Preview } from "@storybook/react";
import { RdProvider } from "../src/theme/core/RdProvider";
import { ColorSchemeProvider } from "../src/theme/core/ColorSchemeProvider";
import { useDarkMode } from "storybook-dark-mode";

const ThemeWrapper = (Story: any) => {
  const colorScheme = useDarkMode() ? "dark" : "light";

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
      <RdProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Story />
      </RdProvider>
    </ColorSchemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeWrapper],
};

export default preview;
