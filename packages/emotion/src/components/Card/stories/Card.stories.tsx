import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";

const meta: Meta<typeof Card> = {
  title: "rendar-design-system/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

// 링크 카드
export const LinkCard: Story = {
  render: () => (
    <Card component="a" href="https://www.naver.com">
      <Card.Header
        avatar={<Avatar>t</Avatar>}
        action={<div>액션</div>}
        title="Shrimp and Chorizo Paella"
        subtitle="September 14, 2016"
      >
        테스트
      </Card.Header>
      <Card.Content>테스트 콘텐츠</Card.Content>
    </Card>
  ),
};

// 액션이 있는 카드
export const CardWithAction: Story = {
  render: () => (
    <Card>
      <Card.Header
        action={<div>액션</div>}
        title="Shrimp and Chorizo Paella"
        subtitle="September 14, 2016"
      >
        테스트
      </Card.Header>
      <Card.Content>테스트 콘텐츠</Card.Content>
    </Card>
  ),
};

// 기본 카드
export const BasicCard: Story = {
  render: () => (
    <Card>
      <Card.Header
        title="Shrimp and Chorizo Paella"
        subtitle="September 14, 2016"
      >
        테스트
      </Card.Header>
      <Card.Content>테스트 콘텐츠</Card.Content>
    </Card>
  ),
};

// 긴 컨텐츠가 있는 카드
export const LongContentCard: Story = {
  render: () => (
    <Card
      overrideStyles={{
        root: {
          maxWidth: 350,
        },
      }}
    >
      <Card.Header title="Shrimp and Chorizo Paella">테스트</Card.Header>
      <Card.Content>
        <h1>테스트 타이틀입니다</h1>
        <div>
          테스트 콘텐츠테스트 콘텐츠테스트 콘텐츠테스트 콘텐츠테스트
          콘텐츠테스트 콘텐츠테스트 콘텐츠테스트 콘텐츠 테스트 콘텐츠 테스트
          콘텐츠 테스트 콘텐츠 테스트 콘텐츠 테스트 콘텐츠 테스트 콘텐츠 테스트
          콘텐츠 테스트 콘텐츠 테스트 콘텐츠 테스트 콘텐츠 테스트 콘텐츠 테스트
          콘텐츠 테스트 콘텐츠
        </div>
      </Card.Content>
    </Card>
  ),
};

// 이미지가 있는 카드
export const ImageCard: Story = {
  render: () => (
    <Card
      overrideStyles={{
        root: {
          maxWidth: 350,
        },
      }}
    >
      <Card.Header title="Shrimp and Chorizo Paella">테스트</Card.Header>
      <Card.Content full>
        <img
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="card"
        />
      </Card.Content>
    </Card>
  ),
};

// 버튼이 있는 카드
export const CardWithButton: Story = {
  render: () => (
    <Card>
      <Card.Header action={<div>액션</div>} title="Shrimp and Chorizo Paella">
        테스트
      </Card.Header>
      <Card.Content>테스트임</Card.Content>
      <Card.Content padding={8}>
        <Button size="small">테스트</Button>
      </Card.Content>
    </Card>
  ),
};

// 모든 카드 변형 모음
export const AllCards: Story = {
  render: () => (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        overflow: "scroll",
      }}
    >
      <Card component="a" href="https://www.naver.com">
        <Card.Header
          avatar={<Avatar>t</Avatar>}
          action={<div>액션</div>}
          title="Shrimp and Chorizo Paella"
          subtitle="September 14, 2016"
        >
          테스트
        </Card.Header>
        <Card.Content>테스트 콘텐츠</Card.Content>
      </Card>

      <Card>
        <Card.Header
          action={<div>액션</div>}
          title="Shrimp and Chorizo Paella"
          subtitle="September 14, 2016"
        >
          테스트
        </Card.Header>
        <Card.Content>테스트 콘텐츠</Card.Content>
      </Card>

      <Card
        overrideStyles={{
          root: {
            maxWidth: 350,
          },
        }}
      >
        <Card.Header title="Shrimp and Chorizo Paella">테스트</Card.Header>
        <Card.Content>
          <h1>테스트 타이틀입니다</h1>
          <div>
            테스트 콘텐츠테스트 콘텐츠테스트 콘텐츠테스트 콘텐츠테스트
            콘텐츠테스트 콘텐츠테스트 콘텐츠테스트 콘텐츠
          </div>
        </Card.Content>
      </Card>

      <Card>
        <Card.Header action={<div>액션</div>} title="Shrimp and Chorizo Paella">
          테스트
        </Card.Header>
        <Card.Content>테스트임</Card.Content>
        <Card.Content padding={8}>
          <Button size="small">테스트</Button>
        </Card.Content>
      </Card>
    </div>
  ),
};
