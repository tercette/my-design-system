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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-center">Tabela de Faturas</CardTitle>
          <Button variant="default" onClick={() => router.push("/CreateInvoice")}>
            Criar Nova Fatura
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Lista de suas faturas recentes.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Fatura</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Método</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                  <TableCell className="flex items-center justify-between gap-2">
                    <Button variant="destructive" onClick={() => deleteInvoice(invoice.id)}>
                      Apagar
                    </Button>
                    <DialogEditInvoice editInvoice={invoice} editInvoiceFunc={editInvoice}  />
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
