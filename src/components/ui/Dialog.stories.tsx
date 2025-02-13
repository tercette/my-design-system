import type { Meta, StoryObj } from "@storybook/react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { useState } from "react";

const meta: Meta<typeof Dialog> = {
    title: "Design System/Dialog",
    component: Dialog,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
              component: `
          ### 💬 **Componente Dialog**
          O **Dialog** é um modal acessível e interativo, utilizado para exibir mensagens, capturar dados do usuário ou solicitar confirmações dentro da aplicação.
          
          ---
          
          ### 🎯 **Características**
          - 📱 **Responsivo:** Se adapta automaticamente a diferentes tamanhos de tela.
          - ♿ **Acessível:** Usa **ARIA roles** corretamente para compatibilidade com leitores de tela.
          - 🎨 **Customizável:** Suporta estilização via **Tailwind CSS** e tokens do Design System.
          - 🔄 **Transições Suaves:** Animações configuráveis para abertura e fechamento.
          
          ---
          
          ### ⚙️ **Funcionamento**
          O **Dialog** é baseado na biblioteca **Radix UI**, garantindo acessibilidade e uma API declarativa. Ele utiliza classes do Tailwind para exibir e ocultar o modal dinamicamente.
          
          #### **📌 Estrutura do componente**
          O Dialog é composto por diferentes partes:
          - **Dialog**: Componente raiz que gerencia o estado do modal.
          - **DialogTrigger**: Elemento que ativa a abertura do modal.
          - **DialogOverlay**: Fundo escurecido para foco no modal.
          - **DialogContent**: Corpo do modal onde a interface principal é renderizada.
          - **DialogHeader** e **DialogFooter**: Cabeçalho e rodapé opcionais para títulos e ações.
          - **DialogClose**: Botão para fechar o modal.
          
          ---
          
          ### 🎨 **Tokens Utilizados**
          - **Cor de fundo:** \`bg-background\`
          - **Texto:** \`text-foreground\`
          - **Borda:** \`border-border\`
          - **Sombra:** \`shadow-lg\`
          - **Transições:** \`data-[state=open]:animate-in\`, \`data-[state=closed]:animate-out\`
          
          ---
          
          ### 🛠 **Exemplo de Uso**
          \`\`\`tsx
          import {
            Dialog,
            DialogTrigger,
            DialogContent,
            DialogHeader,
            DialogTitle,
            DialogDescription,
            DialogFooter,
            DialogClose,
          } from "@/components/ui/dialog";
          import { Button } from "@/components/ui/button";
          
          export default function Example() {
            return (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Abrir Modal</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Exemplo de Modal</DialogTitle>
                    <DialogDescription>Insira suas informações abaixo.</DialogDescription>
                  </DialogHeader>
                  <p>Conteúdo do modal aqui...</p>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Fechar</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            );
          }
          \`\`\`
          
          ---
          
          ### 🧩 **Variações no Storybook**
          | Variante | Descrição |
          |----------|-----------|
          | **\`Default\`** | Modal padrão sem conteúdo adicional. |
          | **\`WithForm\`** | Modal contendo um formulário interativo. |
          | **\`Confirmation\`** | Modal para confirmação de ações, como exclusão de dados. |
          
          ---
          
          📌 **Nota:** O **Dialog** deve ser utilizado dentro da aplicação garantindo um bom fluxo de interação para o usuário. Sempre utilize o **DialogClose** ou um evento externo para garantir que o modal possa ser fechado corretamente.
          
          `,
            },
          },
          
    },
    argTypes: {
        open: {
            control: "boolean",
            description: "Define se o diálogo está aberto ou fechado",
            defaultValue: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" onClick={() => setOpen(true)}>
          Abrir Modal
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmação</DialogTitle>
          <DialogDescription>Deseja confirmar esta ação?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="default" onClick={() => setOpen(false)}>
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const Default: Story = {
  render: () => <DialogExample />,
};
