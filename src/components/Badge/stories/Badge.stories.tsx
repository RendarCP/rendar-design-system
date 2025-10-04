import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { View } from "../../View/View";

// children을 동적으로 생성하는 함수
const getChildren = (isBox: boolean, text: React.ReactNode) => {
  if (isBox) {
    return (
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#e0e0e0",
          borderRadius: 4,
        }}
      />
    );
  }
  return text;
};

const meta: Meta<typeof Badge> = {
  title: "rendar-design-system/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "success", "error", "warning", "info"],
      description: "뱃지의 색상을 설정합니다",
      defaultValue: "primary",
    },
    content: {
      control: "text",
      description: "뱃지에 표시될 내용",
    },
    variant: {
      control: "select",
      options: ["standard", "dot"],
      description: "뱃지의 스타일 변형",
      defaultValue: "standard",
    },
    invisible: {
      control: "boolean",
      description: "뱃지의 표시 여부",
      defaultValue: true,
    },
    isBox: {
      control: "boolean",
      description: "박스 형태로 표시 여부",
      defaultValue: false,
    },
    max: {
      control: "number",
      description: "최대 표시 숫자 (초과시 max+ 로 표시)",
      defaultValue: 99,
    },
    anchorOrigin: {
      control: "object",
      description: "뱃지의 위치",
    },
  },
  args: {
    variant: "standard",
    color: "primary",
    invisible: true,
    isBox: false,
    content: "4",
    max: 99,
    children: "test",
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// 기본 스토리 - Toggle 가능
export const Default: Story = {
  render: (args) => (
    <Badge {...args}>{getChildren(args.isBox, args.children)}</Badge>
  ),
};

// 다양한 색상 예시
export const Colors: Story = {
  render: ({ isBox, children }) => (
    <View style={{ display: "flex", gap: 20 }}>
      <Badge content="4" color="primary" invisible>
        {getChildren(isBox, children)}
      </Badge>
      <Badge content="4" color="info" invisible>
        {getChildren(isBox, children)}
      </Badge>
      <Badge content="4" color="success" invisible>
        {getChildren(isBox, children)}
      </Badge>
      <Badge content="4" color="warning" invisible>
        {getChildren(isBox, children)}
      </Badge>
      <Badge content="4" color="error" invisible>
        {getChildren(isBox, children)}
      </Badge>
    </View>
  ),
};

// 최대값 초과
export const MaxValue: Story = {
  args: {
    content: "100",
    max: 99,
    invisible: true,
    children: getChildren(false, "test"),
  },
};

// Dot 변형
export const DotVariant: Story = {
  args: {
    variant: "dot",
    invisible: true,
    children: getChildren(false, "test"),
  },
};

// 다양한 위치
export const DifferentPositions: Story = {
  render: ({ isBox, children }) => (
    <View style={{ display: "flex", gap: 20 }}>
      <Badge
        content="4"
        invisible
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {getChildren(isBox, children)}
      </Badge>
      <Badge
        content="4"
        invisible
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {getChildren(isBox, children)}
      </Badge>
      <Badge
        content="4"
        invisible
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {getChildren(isBox, children)}
      </Badge>
      <Badge
        content="4"
        invisible
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {getChildren(isBox, children)}
      </Badge>
    </View>
  ),
};
