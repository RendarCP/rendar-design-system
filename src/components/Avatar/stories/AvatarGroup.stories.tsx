import type { Meta, StoryObj } from "@storybook/react";
import { AvatarGroup } from "../AvatarGroup";
import { Avatar } from "../Avatar";

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
  // 기본 args 설정
  args: {
    max: 3,
    total: 5,
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// render 함수를 사용하여 스토리 정의
export const Default: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar src="https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso" />
      <Avatar src="https://fastly.picsum.photos/id/574/600/400.jpg?hmac=EQ9zsodnVQYwYosJrIVHnQ5Ekp7F9_I05f-21GwANC4" />
      <Avatar src="https://fastly.picsum.photos/id/119/600/400.jpg?hmac=83QxaIP9GpgV3_Y4_GdVJW76KdowZbCbjakQqiX56CQ" />
      <Avatar src="https://fastly.picsum.photos/id/1074/600/400.jpg?hmac=-mqpWcJSXqmfo8UkPkASvV1o1NXtm6MpwreadzQAu_o" />
      <Avatar src="https://fastly.picsum.photos/id/267/600/400.jpg?hmac=WKOJueOyFV6BQONn8kCm7lc3IOjNjFMPP6NDezAPYe0" />
    </AvatarGroup>
  ),
};

// 최대 표시 개수를 2개로 제한한 스토리
export const MaxTwo: Story = {
  render: (args) => (
    <AvatarGroup {...args} max={2}>
      <Avatar src="https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso" />
      <Avatar src="https://fastly.picsum.photos/id/574/600/400.jpg?hmac=EQ9zsodnVQYwYosJrIVHnQ5Ekp7F9_I05f-21GwANC4" />
      <Avatar src="https://fastly.picsum.photos/id/119/600/400.jpg?hmac=83QxaIP9GpgV3_Y4_GdVJW76KdowZbCbjakQqiX56CQ" />
      <Avatar src="https://fastly.picsum.photos/id/1074/600/400.jpg?hmac=-mqpWcJSXqmfo8UkPkASvV1o1NXtm6MpwreadzQAu_o" />
    </AvatarGroup>
  ),
};

// 총 개수를 지정한 스토리
export const WithTotal: Story = {
  render: (args) => (
    <AvatarGroup {...args} total={10}>
      <Avatar src="https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso" />
      <Avatar src="https://fastly.picsum.photos/id/574/600/400.jpg?hmac=EQ9zsodnVQYwYosJrIVHnQ5Ekp7F9_I05f-21GwANC4" />
      <Avatar src="https://fastly.picsum.photos/id/119/600/400.jpg?hmac=83QxaIP9GpgV3_Y4_GdVJW76KdowZbCbjakQqiX56CQ" />
      <Avatar src="https://fastly.picsum.photos/id/1074/600/400.jpg?hmac=-mqpWcJSXqmfo8UkPkASvV1o1NXtm6MpwreadzQAu_o" />
    </AvatarGroup>
  ),
};

// 이니셜을 사용한 스토리
export const WithInitials: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar>JD</Avatar>
      <Avatar>AB</Avatar>
      <Avatar>YZ</Avatar>
      <Avatar>WX</Avatar>
    </AvatarGroup>
  ),
};
