import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    inputSize: { 
      control: "select",
      options: ["sm", "default", "lg"],
      defaultValue: "default",
    },
    placeholder: {
      control: "text",
      defaultValue: "Digite algo...",
    },
    disabled: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Small: Story = {
  args: {
    inputSize: "sm", 
    placeholder: "Pequeno",
  },
};

export const Default: Story = {
  args: {
    inputSize: "default",
    placeholder: "Padrão",
  },
};

export const Large: Story = {
  args: {
    inputSize: "lg",
    placeholder: "Grande",
  },
};

export const Disabled: Story = {
  args: {
    inputSize: "default",
    placeholder: "Desativado",
    disabled: true,
  },
};
