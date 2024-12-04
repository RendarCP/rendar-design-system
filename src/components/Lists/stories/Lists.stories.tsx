import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Lists } from "../Lists";
import { Avatar } from "@/components/Avatar/Avatar";
import { Button } from "@/components/Button/Button";

const CancelIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      style={{ width: "1rem", height: "1rem" }}
    >
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
    </svg>
  );
};

const meta: Meta<typeof Lists> = {
  title: "rendar-design-system/Lists",
  component: Lists,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Lists>;

export const Basic: Story = {
  render: () => (
    <Lists>
      <Lists.Item>안녕하세요 </Lists.Item>
      <Lists.Item>안녕하세요 </Lists.Item>
      <Lists.Item>안녕하세요 </Lists.Item>
      <Lists.Item>안녕하세요 </Lists.Item>
      <Lists.Item>안녕하세요 </Lists.Item>
    </Lists>
  ),
};

export const WithPadding: Story = {
  render: () => (
    <Lists>
      <Lists.Item>안녕하세요 </Lists.Item>
      <Lists.Item>안녕하세요 </Lists.Item>
      <Lists.Item>안녕하세요 </Lists.Item>
      <Lists.Item>안녕하세요 </Lists.Item>
      <Lists.Item withPadding>안녕하세요 </Lists.Item>
    </Lists>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Lists>
      <Lists.Item
        endIcon={
          <Button variant="unstyled" size="small">
            <CancelIcon />
          </Button>
        }
      >
        <Avatar />
        <Lists.Text title="test" subtitle="테스트임" />
      </Lists.Item>
      <Lists.Item>
        <Lists.Text title="test" />
      </Lists.Item>
      <Lists.Item>
        <Lists.Text title="test" />
      </Lists.Item>
    </Lists>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Lists>
      <Lists.Item
        endIcon={
          <Button variant="unstyled" size="small">
            <CancelIcon />
          </Button>
        }
      >
        <Lists.Button>
          <Avatar />
          <Lists.Text title="test" subtitle="테스트임" />
        </Lists.Button>
      </Lists.Item>
      <Lists.Item>
        <Lists.Button>
          <Lists.Text title="test" />
        </Lists.Button>
      </Lists.Item>
      <Lists.Item>
        <Lists.Button>
          <Lists.Text title="test" />
        </Lists.Button>
      </Lists.Item>
    </Lists>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <>
      {[Basic, WithPadding, WithAvatar, WithButton].map((Story, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <Story.render />
        </div>
      ))}
    </>
  ),
};
