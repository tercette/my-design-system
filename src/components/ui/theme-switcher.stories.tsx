import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitcher from "./theme-switcher";
import { ThemeProvider } from "next-themes"; // 🔹 Certifique-se de que o provider de tema está disponível

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Design System/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};
