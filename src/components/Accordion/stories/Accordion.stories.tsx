import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../Accordion";

const meta: Meta<typeof Accordion> = {
  title: "rendar-design-system/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["standard", "outlined", "filled"],
      description: "The variant to use",
      defaultValue: "standard",
    },
    disabled: {
      control: "boolean",
      description: "If true, the accordion will be disabled",
    },
    defaultExpanded: {
      control: "boolean",
      description: "If true, expands the accordion by default",
    },
    expanded: {
      control: "boolean",
      description: "If true, expands the accordion (controlled)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// 기본 아코디언
export const Default: Story = {
  render: (args) => (
    <div style={{ width: "600px" }}>
      <Accordion {...args}>
        <Accordion.Summary>Default Accordion</Accordion.Summary>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
    </div>
  ),
};

// 여러 개의 아코디언을 그룹으로 보여주는 예시
export const AccordionGroup: Story = {
  render: () => (
    <div style={{ width: "600px" }}>
      <Accordion>
        <Accordion.Summary>First Accordion</Accordion.Summary>
        <Accordion.Detail>
          <p>Content for the first accordion</p>
        </Accordion.Detail>
      </Accordion>
      <Accordion>
        <Accordion.Summary>Second Accordion</Accordion.Summary>
        <Accordion.Detail>
          <p>Content for the second accordion</p>
        </Accordion.Detail>
      </Accordion>
      <Accordion>
        <Accordion.Summary>Third Accordion</Accordion.Summary>
        <Accordion.Detail>
          <p>Content for the third accordion</p>
        </Accordion.Detail>
      </Accordion>
    </div>
  ),
};

// 다양한 변형 보여주기
export const Variants: Story = {
  render: () => (
    <div
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Accordion variant="standard">
        <Accordion.Summary>Standard Variant</Accordion.Summary>
        <Accordion.Detail>
          <p>This is a standard variant accordion.</p>
        </Accordion.Detail>
      </Accordion>

      <Accordion variant="outlined">
        <Accordion.Summary>Outlined Variant</Accordion.Summary>
        <Accordion.Detail>
          <p>This is an outlined variant accordion.</p>
        </Accordion.Detail>
      </Accordion>

      <Accordion variant="filled">
        <Accordion.Summary>Filled Variant</Accordion.Summary>
        <Accordion.Detail>
          <p>This is a filled variant accordion.</p>
        </Accordion.Detail>
      </Accordion>
    </div>
  ),
};

// 비활성화된 아코디언
export const Disabled: Story = {
  render: () => (
    <div style={{ width: "600px" }}>
      <Accordion disabled>
        <Accordion.Summary>Disabled Accordion</Accordion.Summary>
        <Accordion.Detail>
          <p>
            This content cannot be accessed because the accordion is disabled.
          </p>
        </Accordion.Detail>
      </Accordion>
    </div>
  ),
};

// 기본적으로 펼쳐진 아코디언
export const DefaultExpanded: Story = {
  render: () => (
    <div style={{ width: "600px" }}>
      <Accordion defaultExpanded>
        <Accordion.Summary>Default Expanded Accordion</Accordion.Summary>
        <Accordion.Detail>
          <p>This accordion is expanded by default.</p>
        </Accordion.Detail>
      </Accordion>
    </div>
  ),
};

// 컨트롤드 아코디언 예시
export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (
      _event: React.SyntheticEvent,
      isExpanded: boolean
    ) => {
      setExpanded(isExpanded);
    };

    return (
      <div style={{ width: "600px" }}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{ marginBottom: "1rem" }}
        >
          Toggle Accordion
        </button>
        <Accordion expanded={expanded} onChange={handleChange}>
          <Accordion.Summary>Controlled Accordion</Accordion.Summary>
          <Accordion.Detail>
            <p>This accordion is controlled by external state.</p>
          </Accordion.Detail>
        </Accordion>
      </div>
    );
  },
};
