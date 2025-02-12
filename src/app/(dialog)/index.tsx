"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Invoice } from "@/types/invoice.types";

type EditDialogProps = {
  editInvoice?: Invoice;
  editInvoiceFunc: (invoice: Invoice) => void;
};

export function DialogEditInvoice({ editInvoice, editInvoiceFunc }: EditDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Invoice>({
    id: "",
    status: "",
    method: "",
    amount: "",
  });

  useEffect(() => {
    if (editInvoice) {
      setFormData(editInvoice);
    } else {
      setFormData({ id: "", status: "", method: "", amount: "" });
    }
  }, [editInvoice]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.id || !formData.status || !formData.method || !formData.amount) {
      alert("Preencha todos os campos!");
      return;
    }

    if (editInvoice) {
      editInvoiceFunc?.(formData);
    } 

    setFormData({ id: "", status: "", method: "", amount: "" });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          {editInvoice ? "Editar Fatura" : "Adicionar Fatura"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editInvoice ? "Editar Fatura" : "Adicionar Nova Fatura"}</DialogTitle>
          <DialogDescription>
            Preencha os detalhes da fatura abaixo e clique em salvar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="id" className="text-right">ID</Label>
              <Input id="id" name="id" value={formData.id} onChange={handleChange} className="col-span-3" required disabled={!!editInvoice} />
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
          </div>
          <DialogFooter>
            <Button type="submit">{editInvoice ? "Salvar Alterações" : "Adicionar Fatura"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
