import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Avatar } from "../Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "rendar-design-system/Avatar",
  component: Avatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ["circular", "rounded", "square"],
      control: { type: "inline-radio" },
    },
    alt: {
      control: { type: "text" },
    },
    src: {
      control: { type: "text" },
    },
    color: {
      options: ["primary", "info", "success", "warning", "error"],
      control: { type: "inline-radio" },
    },
    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onClick: fn(),
    // size: "medium", // 기본 사이즈
    variant: "circular", // 기본 variant
    color: "primary", // 기본 색상
    // fullWidth: false, // 기본 너비 설정
    // loading: false, // 기본 로딩 상태
    // disabled: false, // 기본 비활성화 상태
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "avatar",
    src: "https://example.com/avatar.jpg",
  },
};
