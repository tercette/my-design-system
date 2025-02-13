import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { TrashIcon } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "icon"],
    },
    children: {
      control: "text",
      defaultValue: "Botão Padrão",
    },
    disabled: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Botão Padrão",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Botão Destrutivo",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Botão Outline",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Botão Secundário",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Botão Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    children: "Botão Link",
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Botão Desativado",
    disabled: true,
  },
};

export const IconButton: Story = {
    args: {
      variant: "default",
      size: "icon",
    },
    render: (args) => (
      <Button {...args}>
        <TrashIcon className="w-5 h-5" />
      </Button>
    ),
  };
