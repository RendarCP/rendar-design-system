import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../Breadcrumbs";
import { View } from "@/components/View/View";

const meta: Meta<typeof Breadcrumbs> = {
  title: "rendar-design-system/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    separator: {
      control: "text",
      description: "Breadcrumbs 구분선",
      defaultValue: "/",
    },
    spacing: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "아이템 간의 간격",
      defaultValue: "medium",
    },
  },
  args: {
    separator: "/",
    spacing: "medium",
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: [<span>Home</span>, <span>Category</span>, <span>Product</span>],
  },
};

// 다양한 구분선
export const DifferentSeparators: Story = {
  render: () => (
    <View style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Breadcrumbs separator="/">
        <span>Home</span>
        <span>Category</span>
        <span>Product</span>
      </Breadcrumbs>
      <Breadcrumbs separator=">">
        <span>Home</span>
        <span>Category</span>
        <span>Product</span>
      </Breadcrumbs>
      <Breadcrumbs separator="•">
        <span>Home</span>
        <span>Category</span>
        <span>Product</span>
      </Breadcrumbs>
      <Breadcrumbs separator="|">
        <span>Home</span>
        <span>Category</span>
        <span>Product</span>
      </Breadcrumbs>
    </View>
  ),
};

// 다양한 간격
export const DifferentSpacing: Story = {
  render: () => (
    <View style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Breadcrumbs spacing="small">
        <span>Home</span>
        <span>Category</span>
        <span>Product</span>
      </Breadcrumbs>
      <Breadcrumbs spacing="medium">
        <span>Home</span>
        <span>Category</span>
        <span>Product</span>
      </Breadcrumbs>
      <Breadcrumbs spacing="large">
        <span>Home</span>
        <span>Category</span>
        <span>Product</span>
      </Breadcrumbs>
    </View>
  ),
};

// 링크와 함께 사용
export const WithLinks: Story = {
  render: () => (
    <Breadcrumbs>
      <a href="#" style={{ color: "blue", textDecoration: "none" }}>
        Home
      </a>
      <a href="#" style={{ color: "blue", textDecoration: "none" }}>
        Category
      </a>
      <span>Current Page</span>
    </Breadcrumbs>
  ),
};

// 긴 경로
export const LongPath: Story = {
  render: () => (
    <Breadcrumbs>
      <span>Home</span>
      <span>Category</span>
      <span>Subcategory</span>
      <span>Product Type</span>
      <span>Product Series</span>
      <span>Current Product</span>
    </Breadcrumbs>
  ),
};

// 커스텀 스타일
export const CustomStyles: Story = {
  render: () => (
    <Breadcrumbs
      separator="→"
      overrideStyles={{
        root: {
          backgroundColor: "#f5f5f5",
          padding: "10px",
          borderRadius: "4px",
        },
        separator: {
          color: "#666",
          fontWeight: "bold",
        },
      }}
    >
      <span style={{ color: "#333" }}>Home</span>
      <span style={{ color: "#333" }}>Category</span>
      <span style={{ color: "#007bff" }}>Current Page</span>
    </Breadcrumbs>
  ),
};
