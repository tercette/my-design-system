"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Invoice } from "@/types/invoice.types";
import { DialogEditInvoice } from "./(dialog)";

export default function Home() {
  const router = useRouter();
  const [invoices, setInvoices] = useState<Invoice[]>([]);


  const editInvoice = (updatedInvoice: Invoice) => {
    setInvoices((prevInvoices) =>
      prevInvoices.map((invoice) =>
        invoice.id === updatedInvoice.id ? updatedInvoice : invoice
      )
    );
  };

  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem("invoices") || "null");
    if (storedInvoices) {
      setInvoices(storedInvoices);
    } else {
      const initialInvoices: Invoice[] = [
        { id: "INV001", status: "Pago", method: "Cartão de Crédito", amount: "R$250,00" },
        { id: "INV002", status: "Pendente", method: "PayPal", amount: "R$150,00" },
        { id: "INV003", status: "Não Pago", method: "Transferência Bancária", amount: "R$350,00" },
      ];
      setInvoices(initialInvoices);
      localStorage.setItem("invoices", JSON.stringify(initialInvoices));
    }
  }, []);

  const deleteInvoice = (id: string) => {
    const updatedInvoices = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(updatedInvoices);
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      <Card className="w-full max-w-5xl">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-center w-full">Tabela de Faturas</CardTitle>
          <Button variant="default" onClick={() => router.push("/CreateInvoice")}>
            Criar Nova Fatura
          </Button>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableCaption>Lista de suas faturas recentes.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px] text-center">Fatura</TableHead>
                <TableHead className="w-[150px] text-center">Status</TableHead>
                <TableHead className="w-[180px] text-center">Método</TableHead>
                <TableHead className="w-[120px] text-center">Valor</TableHead>
                <TableHead className="w-[200px] text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium text-foreground border-b border-border px-4 py-3 text-center w-[120px]">
                    {invoice.id}
                  </TableCell>
                  <TableCell className="text-muted-foreground border-b border-border px-4 py-3 text-center w-[150px]">
                    {invoice.status}
                  </TableCell>
                  <TableCell className="text-muted-foreground border-b border-border px-4 py-3 text-center w-[180px]">
                    {invoice.method}
                  </TableCell>
                  <TableCell className="text-center text-foreground border-b border-border px-4 py-3 w-[120px]">
                    {invoice.amount}
                  </TableCell>
                  <TableCell className="border-b border-border px-4 py-3 w-[200px] flex justify-center items-center gap-2">
                    <Button
                      variant="destructive"
                      className="px-3 py-1 rounded-[var(--radius)] shadow-sm"
                      onClick={() => deleteInvoice(invoice.id)}
                    >
                      Apagar
                    </Button>
                    <DialogEditInvoice editInvoice={invoice} editInvoiceFunc={editInvoice} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>

  );
}
