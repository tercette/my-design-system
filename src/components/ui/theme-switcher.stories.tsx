import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitcher from "./theme-switcher";
import { ThemeProvider } from "next-themes";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Design System/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
### 🌗 **Componente ThemeSwitcher**

O **ThemeSwitcher** é um botão que permite alternar entre os temas **claro** e **escuro** dinamicamente na aplicação.

---

### 🎯 **Características**
- **Dinamicamente Atualizável** 🔄: A alternância do tema ocorre em tempo real.
- **Persistência de Tema** 💾: O tema escolhido é armazenado e reaplicado na próxima visita.
- **Acessível** ♿: Implementa mudanças de classe corretamente para compatibilidade com Tailwind.

---

### ⚙️ **Funcionamento**
Este componente usa a biblioteca **next-themes** para gerenciar as classes de tema no elemento \`<html>\`. Ele verifica o tema salvo no armazenamento do usuário e aplica a classe **"dark"** ou **"light"** no \`document.documentElement\`.

---

### 🎨 **Tokens Utilizados**
- **Cor de fundo:** \`bg-background\`
- **Texto:** \`text-foreground\`
- **Borda:** \`border-border\`
- **Botão:** \`bg-primary text-primary-foreground\`

---

### 🛠 **Exemplo de Uso**
\`\`\`tsx
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export default function Example() {
  return <ThemeSwitcher />;
}
\`\`\`

---

### 🧩 **Variações do Storybook**
| Variante | Descrição |
|----------|-----------|
| **\`Default\`** | Exibe o botão que alterna entre os temas claro e escuro. |

---

📌 **Nota:** Este componente deve ser usado dentro de um **ThemeProvider** para garantir que a mudança de tema funcione corretamente em toda a aplicação.

        `,
      },
    },
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
