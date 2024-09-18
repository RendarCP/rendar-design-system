import React, { Children, useEffect, useState } from "react";
import { Button } from "../Button";

export default {
  title: "rendar-design-system/button",
  component: Button,
  argTypes: {
    size: {
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    variant: {
      options: ["contained", "outlined", "text", "unstyled"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["primary", "info", "success", "warning", "error"],
      control: { type: "inline-radio" },
    },
    // leftIcon: {
    //   control: { type: "file", accept: [".png", ".svg", ".jpg"] },
    // },
    // rightIcon: {
    //   control: { type: "file", accept: [".png", ".svg", ".jpg"] },
    // },
    fullWidth: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
  },
  args: {
    size: "medium",
    variant: "contained",
    color: "primary",
    fullWidth: false,
    loading: false,
    disabled: false,
    children: "Button",
  },
};

export const Default = {
  args: {
    loading: true,
    disabled: true,
  },
  render: (props: any) => {
    return <Button {...props}>{props.children}</Button>;
  },
};
