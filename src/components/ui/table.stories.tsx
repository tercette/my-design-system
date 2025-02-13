import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table";

interface InvoiceData {
    id: string;
    status: string;
    method: string;
    amount: string;
  }

const TableWrapper = ({ data }: { data: InvoiceData[] }) => (
  <Table>
    <TableCaption>Lista de Faturas</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Método</TableHead>
        <TableHead>Valor</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.length > 0 ? (
        data.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={4} className="text-center text-muted-foreground">
            Nenhum dado disponível
          </TableCell>
        </TableRow>
      )}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell>
          {data.length > 0
            ? `R$${data.reduce((sum, item) => sum + parseFloat(item.amount.replace("R$", "").replace(",", ".")), 0).toFixed(2)}`
            : "R$0,00"}
        </TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

const meta: Meta<typeof TableWrapper> = {
  title: "Design System/Table",
  component: TableWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof TableWrapper>;

export const Default: Story = {
    args: {
      data: [
        { id: "INV001", status: "Pago", method: "Cartão de Crédito", amount: "R$250,00" },
        { id: "INV002", status: "Pendente", method: "PayPal", amount: "R$150,00" },
      ] as InvoiceData[],
    },
  };

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const WithManyRows: Story = {
    args: {
      data: [
        { id: "INV003", status: "Não Pago", method: "Transferência", amount: "R$350,00" },
        { id: "INV004", status: "Pago", method: "Boleto", amount: "R$100,00" },
        { id: "INV005", status: "Pendente", method: "Pix", amount: "R$220,00" },
      ] as InvoiceData[],
    },
  };
