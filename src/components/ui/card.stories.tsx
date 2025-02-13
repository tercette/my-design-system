import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
    ### 📌 Componente \`Card\`
    
    O **Card** é um componente versátil usado para exibir conteúdos de forma organizada. Ele pode conter títulos, descrições, botões e outros elementos para destacar informações importantes.
    
    ---
    
    ### 🎯 **Características**
    - **Responsivo** 📱: Se ajusta ao layout automaticamente.
    - **Acessível** ♿: Usa ARIA corretamente para melhor experiência.
    - **Customizável** 🎨: Pode ser estilizado usando Tailwind e os tokens do Design System.
    - **Estruturado** 🏗: Composto por seções como header, content e footer.
    
    ---
    
    ### 🎨 **Tokens Utilizados**
    - **Cor de fundo:** \`bg-card\`
    - **Texto:** \`text-card-foreground\`
    - **Borda:** \`border-border\`
    - **Sombra:** \`shadow-lg\`
    - **Espaçamento:** \`p-4\`, \`p-6\`, \`sm:p-6\`
    - **Transições:** \`transition-colors\`
    
    ---
    
    ### ⚙️ **Componentes Disponíveis**
    O **Card** é composto por várias subcomponentes para melhor organização:
    
    | Componente          | Descrição |
    |---------------------|-----------|
    | \`Card\`           | Contêiner principal do Card. |
    | \`CardHeader\`     | Cabeçalho do Card, geralmente com um título. |
    | \`CardTitle\`      | Título do Card, destacado. |
    | \`CardContent\`    | Área para conteúdos como textos e imagens. |
    | \`CardFooter\`     | Rodapé do Card, ideal para botões ou informações adicionais. |
    
    ---
    
    ### 🛠 **Exemplos de Uso**
    
    #### **🔹 Card Padrão**
    \`\`\`tsx
    <Card className="w-96 p-4">
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
    \`\`\`
    
    #### **🔹 Card com Descrição**
    \`\`\`tsx
    <Card className="w-96 p-4">
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
    \`\`\`
    
    #### **🔹 Card Destacado**
    \`\`\`tsx
    <Card className="w-96 p-4 bg-primary text-primary-foreground">
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
    \`\`\`
    
    ---
    
    📌 **Nota:** O **Card** faz parte do **Design System** e deve seguir os padrões estabelecidos para manter a consistência visual da aplicação. Use os tokens disponíveis para garantir a harmonia do design.
        `,
      },
    },
    
},
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
