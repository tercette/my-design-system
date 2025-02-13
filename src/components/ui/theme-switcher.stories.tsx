import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitcher from "./theme-switcher";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Design System/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};
