import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../Chip";
import { Avatar } from "@/components/Avatar/Avatar";
// import PersonIcon from "@mui/icons-material/Person";

const meta: Meta<typeof Chip> = {
  title: "rendar-design-system/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined"],
      description: "칩의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "칩의 크기",
    },
    color: {
      control: "select",
      options: ["default", "primary", "error", "info", "success", "warning"],
      description: "칩의 색상",
    },
    clickable: {
      control: "boolean",
      description: "클릭 가능 여부",
    },
  },
  args: {
    variant: "filled",
    size: "medium",
    color: "primary",
    clickable: true,
    onDelete: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: "테스트",
  },
};

// export const Default: Story = {
//   render: () => (
//     <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//       <Chip label="테스트" />
//       {/* <Chip variant="outlined" label="test" />
//       <Chip clickable variant="outlined" label="test" />
//       <Chip clickable onDelete={() => {}} variant="outlined" label="test" />
//       <Chip
//         avatar={<Avatar src="/api/placeholder/32/32" alt="test" />}
//         onDelete={() => {}}
//         variant="outlined"
//         label="test"
//       />
//       <Chip
//         avatar={<Avatar src="/api/placeholder/32/32" alt="test" />}
//         variant="outlined"
//         label="test"
//       />
//       <Chip
//         // icon={<PersonIcon />}
//         onDelete={() => {}}
//         variant="outlined"
//         label="test"
//       />
//       <Chip label="test" />
//       <Chip label="test" size="medium" />
//       <Chip label="test" size="large" /> */}
//     </div>
//   ),
// };

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
      <Chip label="Large" size="large" />
    </div>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Chip
        avatar={<Avatar src="/api/placeholder/32/32" alt="test" />}
        label="With Avatar"
        variant="outlined"
      />
      <Chip
        avatar={<Avatar src="/api/placeholder/32/32" alt="test" />}
        label="With Avatar and Delete"
        onDelete={() => {}}
        variant="outlined"
      />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Chip label="With Icon" variant="outlined" />
      <Chip
        // icon={
        //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        //     <circle
        //       cx="12"
        //       cy="7"
        //       r="4"
        //       fill="transparent"
        //       stroke="currentColor"
        //       stroke-width="1"
        //     />

        //     <path
        //       d="M6 21v-2a6 6 0 0 1 12 0v2"
        //       fill="transparent"
        //       stroke="currentColor"
        //       stroke-width="1"
        //       stroke-linecap="round"
        //     />
        //   </svg>
        // }
        label="With Icon and Delete"
        onDelete={() => {}}
        variant="outlined"
      />
    </div>
  ),
};

export const Clickable: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Chip label="Clickable" clickable variant="outlined" />
      <Chip
        label="Clickable with Delete"
        clickable
        onDelete={() => {}}
        variant="outlined"
      />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Error" color="error" />
      <Chip label="Info" color="info" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
    </div>
  ),
};
