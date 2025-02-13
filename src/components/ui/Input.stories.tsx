import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
    ### 📌 Componente \`Input\`
    
    O **Input** é um componente de entrada de dados essencial para formulários e interações do usuário. Ele permite capturar diferentes tipos de informações e pode ser personalizado conforme o contexto da aplicação.
    
    ---
    
    ### 🎯 **Características**
    - **Responsivo** 📱: Se ajusta automaticamente ao layout.
    - **Acessível** ♿: Usa ARIA corretamente para melhor experiência.
    - **Customizável** 🎨: Suporta diferentes tamanhos e estilos via Tailwind e tokens do Design System.
    - **Flexível** 🛠: Aceita diferentes tipos de entrada (\`text\`, \`password\`, \`email\`, etc.).
    
    ---
    
    ### 🎨 **Tokens Utilizados**
    - **Cor de fundo:** \`bg-background\`
    - **Texto:** \`text-foreground\`
    - **Borda:** \`border-border\`
    - **Espaçamento interno:** \`px-3 py-1\`
    - **Placeholder:** \`placeholder:text-muted-foreground\`
    - **Transições:** \`focus-visible:ring-1 focus-visible:ring-ring\`
    
    ---
    
    ### ⚙️ **Variações Disponíveis**
    O **Input** pode ser utilizado com diferentes tamanhos e estados.
    
    | Variante      | Descrição |
    |--------------|-----------|
    | \`sm\`       | Input compacto, ideal para espaços menores. |
    | \`default\`  | Tamanho padrão, adequado para formulários regulares. |
    | \`lg\`       | Input maior para campos mais destacados. |
    | \`disabled\` | Estado desativado, impedindo interações. |
    
    ---
    
    ### 🛠 **Exemplos de Uso**
    
    #### **🔹 Input Padrão**
    \`\`\`tsx
    <Input inputSize="default" placeholder="Digite algo..." />
    \`\`\`
    
    #### **🔹 Input Pequeno**
    \`\`\`tsx
    <Input inputSize="sm" placeholder="Pequeno" />
    \`\`\`
    
    #### **🔹 Input Grande**
    \`\`\`tsx
    <Input inputSize="lg" placeholder="Grande" />
    \`\`\`
    
    #### **🔹 Input Desativado**
    \`\`\`tsx
    <Input inputSize="default" placeholder="Desativado" disabled />
    \`\`\`
    
    ---
    
    📌 **Nota:** O **Input** faz parte do **Design System** e deve seguir os padrões estabelecidos para manter a consistência visual da aplicação. Use os tokens disponíveis para garantir a harmonia do design.
        `,
      },
    },
},
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
