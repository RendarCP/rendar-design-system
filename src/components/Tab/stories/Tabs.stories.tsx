import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../Tabs";
import { Tab } from "../Tab/Tab";

const meta: Meta<typeof Tabs> = {
  title: "rendar-design-system/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "info", "success", "warning", "error"],
      defaultValue: "primary",
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
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
type Story = StoryObj<typeof Tabs>;

// 기본 탭
export const Default: Story = {
  args: {
    color: "primary",
    fullWidth: false,
  },
  render: (args) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Tabs {...args} value={value} onChange={handleChange}>
        <Tab>테스트1</Tab>
        <Tab>테스트2</Tab>
        <Tab>테스트3</Tab>
        <Tab>테스트4</Tab>
      </Tabs>
    );
  },
};

// 아이콘이 있는 탭
export const WithIcon: Story = {
  args: {
    color: "info",
    fullWidth: false,
  },
  render: (args) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Tabs {...args} value={value} onChange={handleChange}>
        <Tab
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
            </svg>
          }
        >
          테스트1
        </Tab>
        <Tab>테스트2</Tab>
        <Tab>테스트3</Tab>
        <Tab>테스트4</Tab>
      </Tabs>
    );
  },
};

// 전체 너비 탭
export const FullWidth: Story = {
  args: {
    color: "primary",
    fullWidth: true,
  },
  render: (args) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Tabs {...args} value={value} onChange={handleChange}>
        <Tab>테스트1</Tab>
        <Tab>테스트2</Tab>
        <Tab>테스트3</Tab>
        <Tab>테스트4</Tab>
      </Tabs>
    );
  },
};

// 문자열 값을 가진 탭
export const StringValues: Story = {
  args: {
    color: "primary",
    fullWidth: true,
  },
  render: (args) => {
    const [value, setValue] = useState("test0");

    const handleChange = (event: any, newValue: string) => {
      setValue(newValue);
    };

    return (
      <Tabs {...args} value={value} onChange={handleChange}>
        <Tab value="test0">테스트0</Tab>
        <Tab value="test1">테스트1</Tab>
        <Tab value="test2">테스트2</Tab>
        <Tab value="test3">테스트3</Tab>
      </Tabs>
    );
  },
};

// 다양한 색상
export const Colors: Story = {
  render: () => {
    const colors = ["primary", "info", "success", "warning", "error"];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {colors.map((color) => {
          const [value, setValue] = useState(0);

          return (
            <Tabs
              key={color}
              color={color as any}
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
            >
              <Tab>{color} 탭 1</Tab>
              <Tab>{color} 탭 2</Tab>
              <Tab>{color} 탭 3</Tab>
            </Tabs>
          );
        })}
      </div>
    );
  },
};
