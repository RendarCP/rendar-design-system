import React, { useEffect } from "react";
import type { Preview } from "@storybook/react";
import { RdProvider } from "../src/theme/core/RdProvider";
import { ColorSchemeProvider } from "../src/theme/core/ColorSchemeProvider";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import "./preview.css"; // CSS 파일 추가

const ThemeWrapper = (Story: any, context: any) => {
  const isDarkMode = useDarkMode();
  console.log("isDarkMode", isDarkMode);
  const colorScheme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    // body에 dark 클래스 토글
    document.body.classList.toggle("dark", isDarkMode);

    // 배경색 변경
    if (context?.parameters?.backgrounds) {
      context.parameters.backgrounds.default = isDarkMode ? "dark" : "light";
    }

    // 클래스를 통한 스타일 적용
    const frame = document.querySelector(".docs-story");
    const storyCanvas = document.querySelector("#storybook-preview-iframe")
      ?.contentDocument?.body;

    if (storyCanvas) {
      storyCanvas.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }
    if (frame) {
      frame.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode, context]);

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
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.light },
      classTarget: "html",
      current: "light",
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#FFFFFF",
        },
        {
          name: "dark",
          value: "#1A1A1A",
        },
      ],
    },
  },
  decorators: [(Story, context) => ThemeWrapper(Story, context)],
};

export default preview;
