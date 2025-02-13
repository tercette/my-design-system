import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { TrashIcon } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
    ### 📌 Componente \`Button\`
    
    O **Button** é um dos elementos fundamentais para interações dentro da aplicação. Ele é altamente customizável, oferecendo diferentes variantes, tamanhos e estados para atender a diversos contextos de uso.
    
    ---
    
    ### 🎯 **Características**
    - **Responsivo** 📱: Se adapta ao layout automaticamente.
    - **Acessível** ♿: Usa ARIA corretamente para melhor experiência.
    - **Customizável** 🎨: Suporte para variantes, tamanhos e estilos personalizados.
    - **Suporte a Ícones** 🔥: Pode conter texto, ícones ou ambos.
    
    ---
    
    ### 🎨 **Tokens Utilizados**
    - **Cor de fundo:** \`bg-primary\`, \`bg-secondary\`, \`bg-destructive\`, \`bg-muted\`
    - **Texto:** \`text-primary-foreground\`, \`text-secondary-foreground\`, \`text-muted-foreground\`
    - **Borda:** \`border-border\`
    - **Sombras:** \`shadow\`, \`shadow-sm\`
    - **Transições:** \`transition-colors\`, \`focus-visible:ring-ring\`
    
    ---
    
    ### ⚙️ **Propriedades (Props)**
    
    | Prop       | Tipo                                          | Descrição |
    |------------|-----------------------------------------------|-----------|
    | \`variant\`  | \`"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"\` | Define a aparência do botão. |
    | \`size\`     | \`"sm" | "default" | "lg" | "icon"\` | Define o tamanho do botão. |
    | \`disabled\` | \`boolean\` | Define se o botão está desativado. |
    | \`children\` | \`ReactNode\` | Conteúdo dentro do botão (texto ou ícone). |
    
    ---
    
    ### 🛠 **Exemplos de Uso**
    
    #### **🔹 Botão Padrão**
    \`\`\`tsx
    <Button variant="default" size="default">Clique Aqui</Button>
    \`\`\`
    
    #### **🔹 Botão Secundário**
    \`\`\`tsx
    <Button variant="secondary" size="lg">Continuar</Button>
    \`\`\`
    
    #### **🔹 Botão com Ícone**
    \`\`\`tsx
    <Button variant="default" size="icon">
      <TrashIcon className="w-5 h-5" />
    </Button>
    \`\`\`
    
    #### **🔹 Botão Desabilitado**
    \`\`\`tsx
    <Button variant="default" size="default" disabled>
      Desativado
    </Button>
    \`\`\`
    
    ---
    📌 **Nota:** Esse botão faz parte do **Design System** e deve seguir os padrões estabelecidos para consistência na aplicação.
        `,
      },
    },
    
},
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
