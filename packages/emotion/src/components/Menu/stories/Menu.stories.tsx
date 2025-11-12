import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "../Menu";
import { MenuItem } from "../MenuItem/MenuItem";
import { Divider } from "../Divider/Divider";

const meta: Meta<typeof Menu> = {
  title: "rendar-design-system/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20, width: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Menu>;

const PersonIcon = () => {
  return (
    <svg
      style={{ width: 24, height: 24 }}
      fill="currentColor"
      viewBox="0 0 24 24"
      data-testid="PersonIcon"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </svg>
  );
};

// 기본 메뉴
export const Basic: Story = {
  render: () => (
    <Menu>
      <MenuItem>테스트</MenuItem>
      <MenuItem>테스트</MenuItem>
      <MenuItem>테스트</MenuItem>
      <MenuItem>테스트</MenuItem>
    </Menu>
  ),
};

// 아이콘이 있는 메뉴
export const WithIcon: Story = {
  render: () => (
    <Menu>
      <MenuItem icon={<PersonIcon />}>테스트</MenuItem>
      <MenuItem icon={<PersonIcon />}>테스트</MenuItem>
      <MenuItem icon={<PersonIcon />}>테스트</MenuItem>
    </Menu>
  ),
};

// 단축키가 있는 메뉴
export const WithShortcuts: Story = {
  render: () => (
    <Menu>
      <MenuItem rightSection="⌘X">테스트</MenuItem>
      <MenuItem rightSection="⌘C">테스트</MenuItem>
      <MenuItem rightSection="⌘V">테스트</MenuItem>
    </Menu>
  ),
};

// 구분선이 있는 메뉴
export const WithDivider: Story = {
  render: () => (
    <Menu>
      <MenuItem>테스트</MenuItem>
      <MenuItem>테스트</MenuItem>
      <Divider />
      <MenuItem>테스트</MenuItem>
      <MenuItem>테스트</MenuItem>
    </Menu>
  ),
};

// 모든 요소가 포함된 메뉴
export const CompleteMenu: Story = {
  render: () => (
    <Menu>
      <MenuItem>테스트</MenuItem>
      <MenuItem>테스트</MenuItem>
      <MenuItem icon={<PersonIcon />} rightSection="⌘X">
        테스트
      </MenuItem>
      <Divider />
      <MenuItem>테스트</MenuItem>
      <MenuItem>테스트</MenuItem>
      <MenuItem>테스트</MenuItem>
      <MenuItem>테스트</MenuItem>
    </Menu>
  ),
};

// 아이콘과 단축키가 함께 있는 메뉴
export const WithIconAndShortcuts: Story = {
  render: () => (
    <Menu>
      <MenuItem icon={<PersonIcon />} rightSection="⌘A">
        프로필
      </MenuItem>
      <MenuItem icon={<PersonIcon />} rightSection="⌘B">
        설정
      </MenuItem>
      <MenuItem icon={<PersonIcon />} rightSection="⌘C">
        로그아웃
      </MenuItem>
    </Menu>
  ),
};

// 다양한 메뉴 아이템 조합
export const DifferentCombinations: Story = {
  render: () => (
    <Menu>
      <MenuItem>기본 메뉴 아이템</MenuItem>
      <MenuItem icon={<PersonIcon />}>아이콘만 있는 메뉴</MenuItem>
      <MenuItem rightSection="⌘X">단축키만 있는 메뉴</MenuItem>
      <Divider />
      <MenuItem icon={<PersonIcon />} rightSection="⌘Y">
        아이콘과 단축키가 있는 메뉴
      </MenuItem>
    </Menu>
  ),
};
