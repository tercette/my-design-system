"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Invoice } from "@/types/invoice.types";

export default function CreateInvoice() {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CreateInvoiceContent router={router} />
    </Suspense>
  );
}

function CreateInvoiceContent({ router }: { router: ReturnType<typeof useRouter> }) {
  const searchParams = useSearchParams();
  const invoiceId = searchParams.get("id");

  const [formData, setFormData] = useState<Invoice>({
    id: "",
    status: "",
    method: "",
    amount: "",
  });

  useEffect(() => {
    if (invoiceId) {
      const storedInvoices = JSON.parse(localStorage.getItem("invoices") || "[]");
      const invoiceToEdit = storedInvoices.find((invoice: Invoice) => invoice.id === invoiceId);
      if (invoiceToEdit) {
        setFormData(invoiceToEdit);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        id: generateNextInvoiceId(),
      }));
    }
  }, [invoiceId]);

  const generateNextInvoiceId = () => {
    const storedInvoices = JSON.parse(localStorage.getItem("invoices") || "[]");

    if (storedInvoices.length === 0) {
      return "INV001";
    }

    const lastInvoice = storedInvoices[storedInvoices.length - 1];
    const lastIdNumber = parseInt(lastInvoice.id.replace("INV", ""), 10) || 0;
    
    return `INV${String(lastIdNumber + 1).padStart(3, "0")}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.status || !formData.method || !formData.amount) {
      alert("Preencha todos os campos!");
      return;
    }

    const storedInvoices = JSON.parse(localStorage.getItem("invoices") || "[]");

    if (invoiceId) {
      const updatedInvoices = storedInvoices.map((invoice: Invoice) =>
        invoice.id === invoiceId ? formData : invoice
      );
      localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    } else {
      const updatedInvoices = [...storedInvoices, formData];
      localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    }

    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-center">{invoiceId ? "Editar Fatura" : "Criar Nova Fatura"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="id" className="text-right">ID</Label>
              <Input id="id" name="id" value={formData.id} className="col-span-3" required disabled />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">Status</Label>
              <Input id="status" name="status" value={formData.status} onChange={handleChange} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="method" className="text-right">Método</Label>
              <Input id="method" name="method" value={formData.method} onChange={handleChange} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">Valor</Label>
              <Input id="amount" name="amount" value={formData.amount} onChange={handleChange} className="col-span-3" required />
            </div>
            <div className="flex justify-between mt-4">
              <Button type="button" variant="outline" onClick={() => router.push("/")}>
                Cancelar
              </Button>
              <Button type="submit">{invoiceId ? "Salvar Alterações" : "Salvar Fatura"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
