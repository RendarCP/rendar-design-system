import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "../Dialog";
import { Button } from "../Button/Button";

const meta: Meta<typeof Dialog> = {
  title: "rendar-design-system/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100vw",
          margin: "0 auto",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "다이얼로그 제목",
    },
    width: {
      control: { type: "number" },
      description: "다이얼로그 너비",
      defaultValue: 440,
    },
    height: {
      control: { type: "text" },
      description: "다이얼로그 높이",
      defaultValue: "auto",
    },
    custom: {
      control: "boolean",
      description: "커스텀 스타일 적용 여부",
      defaultValue: false,
    },
    hideBackdrop: {
      control: "boolean",
      description: "백드롭 숨김 여부",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// 기본 다이얼로그
export const Basic: Story = {
  render: function BasicDialog() {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          title="기본 다이얼로그"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Dialog.Content>기본적인 다이얼로그 내용입니다.</Dialog.Content>
          <Dialog.Actions>
            <Button size="small" onClick={() => setOpen(false)}>
              닫기
            </Button>
          </Dialog.Actions>
        </Dialog>
      </div>
    );
  },
};

// 커스텀 다이얼로그
export const CustomDialog: Story = {
  render: function CustomDialogExample() {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Custom Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)} custom width={500}>
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>커스텀 다이얼로그</h3>
            <p>완전히 커스텀된 내용을 구성할 수 있습니다.</p>
            <Button onClick={() => setOpen(false)}>닫기</Button>
          </div>
        </Dialog>
      </div>
    );
  },
};

// 다양한 크기
export const DifferentSizes: Story = {
  render: function SizesExample() {
    const [openSmall, setOpenSmall] = useState(false);
    const [openMedium, setOpenMedium] = useState(false);
    const [openLarge, setOpenLarge] = useState(false);

    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Button onClick={() => setOpenSmall(true)}>Small Dialog</Button>
        <Button onClick={() => setOpenMedium(true)}>Medium Dialog</Button>
        <Button onClick={() => setOpenLarge(true)}>Large Dialog</Button>

        <Dialog
          title="Small Dialog"
          open={openSmall}
          onClose={() => setOpenSmall(false)}
          width={300}
        >
          <Dialog.Content>작은 크기의 다이얼로그입니다.</Dialog.Content>
          <Dialog.Actions>
            <Button size="small" onClick={() => setOpenSmall(false)}>
              닫기
            </Button>
          </Dialog.Actions>
        </Dialog>

        <Dialog
          title="Medium Dialog"
          open={openMedium}
          onClose={() => setOpenMedium(false)}
          width={500}
        >
          <Dialog.Content>중간 크기의 다이얼로그입니다.</Dialog.Content>
          <Dialog.Actions>
            <Button size="small" onClick={() => setOpenMedium(false)}>
              닫기
            </Button>
          </Dialog.Actions>
        </Dialog>

        <Dialog
          title="Large Dialog"
          open={openLarge}
          onClose={() => setOpenLarge(false)}
          width={700}
        >
          <Dialog.Content>큰 크기의 다이얼로그입니다.</Dialog.Content>
          <Dialog.Actions>
            <Button size="small" onClick={() => setOpenLarge(false)}>
              닫기
            </Button>
          </Dialog.Actions>
        </Dialog>
      </div>
    );
  },
};

// 복잡한 내용
export const ComplexContent: Story = {
  render: function ComplexExample() {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Complex Dialog</Button>
        <Dialog
          title="복잡한 구성의 다이얼로그"
          open={open}
          onClose={() => setOpen(false)}
          width={600}
        >
          <Dialog.Content>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <h4 style={{ margin: "0 0 8px 0" }}>섹션 1</h4>
                <p>첫 번째 섹션의 내용입니다.</p>
              </div>
              <div>
                <h4 style={{ margin: "0 0 8px 0" }}>섹션 2</h4>
                <div style={{ display: "flex", gap: "8px" }}>
                  <Button size="small">옵션 1</Button>
                  <Button size="small">옵션 2</Button>
                </div>
              </div>
              <div
                style={{
                  background: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "4px",
                }}
              >
                <p style={{ margin: 0 }}>추가 정보가 들어가는 박스입니다.</p>
              </div>
            </div>
          </Dialog.Content>
          <Dialog.Actions>
            <Button size="small" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button size="small">확인</Button>
          </Dialog.Actions>
        </Dialog>
      </div>
    );
  },
};

// 백드롭 없는 다이얼로그
export const NoBackdrop: Story = {
  render: function NoBackdropExample() {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open No Backdrop Dialog</Button>
        <Dialog
          title="백드롭 없는 다이얼로그"
          open={open}
          onClose={() => setOpen(false)}
          hideBackdrop
        >
          <Dialog.Content>배경이 투명한 다이얼로그입니다.</Dialog.Content>
          <Dialog.Actions>
            <Button size="small" onClick={() => setOpen(false)}>
              닫기
            </Button>
          </Dialog.Actions>
        </Dialog>
      </div>
    );
  },
};
