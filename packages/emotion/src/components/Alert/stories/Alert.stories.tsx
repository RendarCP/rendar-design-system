import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../Alert";
import { Button } from "../../Button/Button";

const meta = {
  title: "rendar-design-system/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["standard", "filled", "outlined"],
      control: { type: "inline-radio" },
      description: "Alert의 스타일 변형",
    },
    color: {
      options: ["primary", "success", "warning", "error", "info"],
      control: { type: "inline-radio" },
      description: "Alert의 색상",
    },
    onClose: {
      control: { type: "boolean" },
      description: "닫기 버튼 표시 여부",
    },
  },
  args: {
    variant: "standard",
    color: "primary",
    children: "This is an alert message",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Alert (닫기 버튼 없음)
export const Default: Story = {
  render: (args) => <Alert {...args} />,
};

// 색상별 Alert
export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Alert
        {...args}
        color="primary"
        onClose={args.onClose ? () => console.log("closed") : undefined}
      >
        This is a primary alert
      </Alert>
      <Alert
        {...args}
        color="success"
        onClose={args.onClose ? () => console.log("closed") : undefined}
      >
        This is a success alert
      </Alert>
      <Alert
        {...args}
        color="warning"
        onClose={args.onClose ? () => console.log("closed") : undefined}
      >
        This is a warning alert
      </Alert>
      <Alert
        {...args}
        color="error"
        onClose={args.onClose ? () => console.log("closed") : undefined}
      >
        This is an error alert
      </Alert>
      <Alert
        {...args}
        color="info"
        onClose={args.onClose ? () => console.log("closed") : undefined}
      >
        This is an info alert
      </Alert>
    </div>
  ),
};

// 변형별 Alert
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Alert
        {...args}
        variant="standard"
        onClose={args.onClose ? () => console.log("closed") : undefined}
      >
        This is a standard alert
      </Alert>
      <Alert
        {...args}
        variant="filled"
        onClose={args.onClose ? () => console.log("closed") : undefined}
      >
        This is a filled alert
      </Alert>
      <Alert
        {...args}
        variant="outlined"
        onClose={args.onClose ? () => console.log("closed") : undefined}
      >
        This is an outlined alert
      </Alert>
    </div>
  ),
};

// 닫기 버튼 상태별 Alert
export const CloseButtonStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Alert {...args}>Alert without close button</Alert>
      <Alert {...args} onClose={() => console.log("closed")}>
        Alert with close button
      </Alert>
      <Alert
        {...args}
        action={
          <Button variant="text" color={args.color} size="small">
            UNDO
          </Button>
        }
      >
        Alert with custom action (no close button)
      </Alert>
      <Alert
        {...args}
        onClose={() => console.log("closed")}
        action={
          <Button variant="text" color={args.color} size="small">
            UNDO
          </Button>
        }
      >
        Alert with both close button and custom action
      </Alert>
    </div>
  ),
};

// 커스텀 아이콘이 있는 Alert
export const WithCustomIcon: Story = {
  render: (args) => (
    <Alert
      {...args}
      onClose={args.onClose ? () => console.log("closed") : undefined}
      icon={
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      }
    >
      This is an alert with custom icon
    </Alert>
  ),
};

// 긴 메시지가 있는 Alert
export const WithLongMessage: Story = {
  render: (args) => (
    <Alert
      {...args}
      onClose={args.onClose ? () => console.log("closed") : undefined}
    >
      This is a very long alert message that demonstrates how the alert
      component handles multiple lines of text. It should wrap properly and
      maintain proper spacing with the icon and action areas. The close button
      should remain properly aligned regardless of the content length.
    </Alert>
  ),
};
