import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-96 p-4">
      <CardHeader>
        <CardTitle>Card Padrão</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Este é um exemplo de conteúdo dentro do Card.</p>
      </CardContent>
      <CardFooter>
        <p>Rodapé do Card</p>
      </CardFooter>
    </Card>
  ),
};

export const WithDescription: Story = {
  render: (args) => (
    <Card {...args} className="w-96 p-4">
      <CardHeader>
        <CardTitle>Card com Descrição</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Este card contém uma breve descrição abaixo do título.</p>
      </CardContent>
      <CardFooter>
        <p>Rodapé do Card</p>
      </CardFooter>
    </Card>
  ),
};

export const Highlighted: Story = {
  render: (args) => (
    <Card {...args} className="w-96 p-4 bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle>Card Destacado</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Este card tem um fundo primário para se destacar.</p>
      </CardContent>
      <CardFooter>
        <p>Rodapé do Card</p>
      </CardFooter>
    </Card>
  ),
};
