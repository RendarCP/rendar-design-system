import type { Meta, StoryObj } from "@storybook/react";
import { AvatarGroup } from "../AvatarGroup";
import { Avatar } from "../Avatar";

const avatarUrls = [
  "https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso",
  "https://fastly.picsum.photos/id/574/600/400.jpg?hmac=EQ9zsodnVQYwYosJrIVHnQ5Ekp7F9_I05f-21GwANC4",
  "https://fastly.picsum.photos/id/119/600/400.jpg?hmac=83QxaIP9GpgV3_Y4_GdVJW76KdowZbCbjakQqiX56CQ",
  "https://fastly.picsum.photos/id/1074/600/400.jpg?hmac=-mqpWcJSXqmfo8UkPkASvV1o1NXtm6MpwreadzQAu_o",
  "https://fastly.picsum.photos/id/267/600/400.jpg?hmac=WKOJueOyFV6BQONn8kCm7lc3IOjNjFMPP6NDezAPYe0",
];

const meta = {
  title: "rendar-design-system/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
  argTypes: {
    max: {
      control: { type: "number" },
      description: "표시할 최대 아바타 수",
    },
    total: {
      control: { type: "number" },
      description: "총 아바타 수(숨겨진 아바타 포함)",
    },
  },
  args: {
    max: 3,
    total: 5,
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 아바타 그룹
export const Default: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      {Array.from({ length: args.total || 5 }, (_, index) => (
        <Avatar
          key={index}
          src={avatarUrls[index % avatarUrls.length]}
          alt={`User ${index + 1}`}
        />
      ))}
    </AvatarGroup>
  ),
};

// 최대 표시 개수를 2개로 제한
export const MaxTwo: Story = {
  render: (args) => (
    <AvatarGroup {...args} max={2}>
      {Array.from({ length: args.total || 5 }, (_, index) => (
        <Avatar
          key={index}
          src={avatarUrls[index % avatarUrls.length]}
          alt={`User ${index + 1}`}
        />
      ))}
    </AvatarGroup>
  ),
};

// 총 개수 표시
export const WithTotal: Story = {
  render: (args) => (
    <AvatarGroup {...args} total={10}>
      {Array.from({ length: args.total || 10 }, (_, index) => (
        <Avatar
          key={index}
          src={avatarUrls[index % avatarUrls.length]}
          alt={`User ${index + 1}`}
        />
      ))}
    </AvatarGroup>
  ),
};

// 이니셜 사용
export const WithInitials: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      {Array.from({ length: args.total || 5 }, (_, index) => (
        <Avatar key={index}>{`U${index + 1}`}</Avatar>
      ))}
    </AvatarGroup>
  ),
};
