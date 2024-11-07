import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "rendar-design-system/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    variant: {
      options: ["contained", "outlined", "text", "unstyled"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["primary", "info", "success", "warning", "error"],
      control: { type: "inline-radio" },
    },
    // leftIcon: {
    //   control: { type: "file", accept: [".png", ".svg", ".jpg"] },
    // },
    // rightIcon: {
    //   control: { type: "file", accept: [".png", ".svg", ".jpg"] },
    // },
    fullWidth: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    size: "medium", // 기본 사이즈
    variant: "contained", // 기본 variant
    color: "primary", // 기본 색상
    fullWidth: false, // 기본 너비 설정
    loading: false, // 기본 로딩 상태
    disabled: false, // 기본 비활성화 상태
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
