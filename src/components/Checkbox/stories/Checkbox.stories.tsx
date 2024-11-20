import React, { ChangeEvent, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "rendar-design-system/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "success", "error", "warning", "info"],
      description: "체크박스의 색상을 설정합니다",
      defaultValue: "primary",
    },
    checked: {
      control: "boolean",
      description: "체크박스의 체크 상태",
    },
    disabled: {
      control: "boolean",
      description: "체크박스의 비활성화 상태",
      defaultValue: false,
    },
    label: {
      control: "text",
      description: "체크박스의 라벨",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 기본 체크박스
export const Default: Story = {
  render: () => <Checkbox />,
};

// 상태 제어 체크박스
export const Controlled: Story = {
  render: function ControlledCheckbox() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return <Checkbox checked={checked} onChange={handleChange} />;
  },
};

// 라벨이 있는 체크박스
export const WithLabel: Story = {
  render: () => <Checkbox label="Checkbox Label" />,
};

// 비활성화된 체크박스
export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Checkbox disabled />
      <Checkbox disabled checked label="Disabled Checked" />
    </div>
  ),
};

// 다양한 색상
export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Checkbox checked color="primary" label="Primary" />
      <Checkbox checked color="success" label="Success" />
      <Checkbox checked color="error" label="Error" />
      <Checkbox checked color="warning" label="Warning" />
      <Checkbox checked color="info" label="Info" />
    </div>
  ),
};

// 모든 상태
export const AllStates: Story = {
  render: function AllCheckboxStates() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <Checkbox label="Default" />
          <Checkbox
            checked={checked}
            onChange={handleChange}
            label="Controlled"
          />
          <Checkbox checked label="Checked" />
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Checkbox disabled label="Disabled" />
          <Checkbox disabled checked label="Disabled Checked" />
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {["primary", "success", "error", "warning", "info"].map((color) => (
            <Checkbox
              key={color}
              checked
              color={
                color as "primary" | "success" | "error" | "warning" | "info"
              }
              label={color}
            />
          ))}
        </div>
      </div>
    );
  },
};

// 컴포넌트 사용 예시
export const Examples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3>기본 사용</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <Checkbox />
          <Checkbox label="With Label" />
        </div>
      </div>

      <div>
        <h3>비활성화 상태</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <Checkbox disabled />
          <Checkbox disabled checked label="Disabled Checked" />
        </div>
      </div>

      <div>
        <h3>다양한 색상</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <Checkbox checked color="primary" label="Primary" />
          <Checkbox checked color="success" label="Success" />
          <Checkbox checked color="error" label="Error" />
        </div>
      </div>
    </div>
  ),
};
