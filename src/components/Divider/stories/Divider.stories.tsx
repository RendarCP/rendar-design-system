import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../Divider";
import { View } from "@/components/View/View";

const meta: Meta<typeof Divider> = {
  title: "rendar-design-system/Divider",
  component: Divider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "구분선 방향",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "구분선 크기",
    },
    labelPosition: {
      control: "select",
      options: ["left", "center", "right"],
      description: "라벨 위치",
    },
  },
  args: {
    orientation: "horizontal",
    size: "medium",
    labelPosition: "center",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "50px", maxWidth: "1200px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Divider />
      <Divider size="medium" />
      <Divider size="large" />
      <Divider size={10} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Divider>Center Label</Divider>
      <Divider labelPosition="left">Left Label</Divider>
      <Divider labelPosition="right">Right Label</Divider>
      <Divider size="large">Large with Label</Divider>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <View style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          display: "flex",
          border: "1px solid gray",
          borderRadius: 8,
          padding: 10,
        }}
      >
        <div>Left Content</div>
        <Divider orientation="vertical" />
        <div>Right Content</div>
      </div>

      <div style={{ display: "flex", height: "50px" }}>
        <div>Left Side</div>
        <Divider orientation="vertical">Vertical Label</Divider>
        <div>Right Side</div>
      </div>
    </View>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          border: "1px solid gray",
          borderRadius: 8,
          padding: 10,
        }}
      >
        <div>Content</div>
        <Divider orientation="vertical" />
        <div>Content</div>
      </div>

      <Divider size="large">Large Size</Divider>
      <Divider labelPosition="right">Right Label</Divider>
      <Divider labelPosition="left">Left Label</Divider>
      <Divider size="medium" />
      <Divider size="large" />
      <Divider size={10} />
      <Divider />
    </div>
  ),
};
