import React, { ChangeEvent, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { Radio } from "../Radio/Radio";

const meta: Meta<typeof Radio> = {
  title: "rendar-design-system/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// 기본 라디오 그룹
export const Default: Story = {
  render: function DefaultRadio() {
    const [value, setValue] = useState("test1");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <RadioGroup
        label="기본 라디오 그룹"
        value={value}
        onChange={handleChange}
      >
        <Radio value="test1" label="Option 1" />
        <Radio value="test2" label="Option 2" />
        <Radio value="test3" label="Option 3" />
      </RadioGroup>
    );
  },
};

// 다양한 색상
export const Colors: Story = {
  render: function ColorRadio() {
    const [value, setValue] = useState("primary");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <RadioGroup label="색상 옵션" value={value} onChange={handleChange}>
        <Radio value="primary" label="Primary" color="primary" />
        <Radio value="success" label="Success" color="success" />
        <Radio value="error" label="Error" color="error" />
        <Radio value="warning" label="Warning" color="warning" />
        <Radio value="info" label="Info" color="info" />
      </RadioGroup>
    );
  },
};

// 비활성화된 라디오
export const Disabled: Story = {
  render: function DisabledRadio() {
    const [value, setValue] = useState("test1");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <RadioGroup
          label="비활성화된 그룹"
          value={value}
          onChange={handleChange}
          disabled
        >
          <Radio value="test1" label="Option 1" />
          <Radio value="test2" label="Option 2" />
          <Radio value="test3" label="Option 3" />
        </RadioGroup>

        <RadioGroup label="부분 비활성화" value={value} onChange={handleChange}>
          <Radio value="test1" label="Active Option" />
          <Radio value="test2" label="Disabled Option" disabled />
          <Radio value="test3" label="Active Option" />
        </RadioGroup>
      </div>
    );
  },
};

// 라벨 위치
export const WithLabel: Story = {
  render: function LabelRadio() {
    const [value, setValue] = useState("test1");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <RadioGroup
          label="그룹 라벨 예시"
          value={value}
          onChange={handleChange}
        >
          <Radio value="test1" label="라벨이 있는 라디오" />
          <Radio value="test2" label="두 번째 라디오" />
          <Radio value="test3" label="세 번째 라디오" />
        </RadioGroup>
      </div>
    );
  },
};

// 다양한 예시 모음
export const Examples: Story = {
  render: function ExamplesRadio() {
    const [value1, setValue1] = useState("option1");
    const [value2, setValue2] = useState("color1");

    const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
      setValue1(e.target.value);
    };

    const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
      setValue2(e.target.value);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <RadioGroup label="기본 선택지" value={value1} onChange={handleChange1}>
          <Radio value="option1" label="옵션 1" />
          <Radio value="option2" label="옵션 2" />
          <Radio value="option3" label="옵션 3" disabled />
        </RadioGroup>

        <RadioGroup label="다양한 색상" value={value2} onChange={handleChange2}>
          <Radio value="color1" label="Primary Color" color="primary" />
          <Radio value="color2" label="Warning Color" color="warning" />
          <Radio value="color3" label="Info Color" color="info" />
        </RadioGroup>
      </div>
    );
  },
};
