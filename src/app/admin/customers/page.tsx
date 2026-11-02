"use client";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { Search } from "lucide-react";
import { listCustomers } from "@/lib/firestore";

export default function CustomersPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState("");
  useEffect(() => { listCustomers().then(setRows).catch(() => {}); }, []);
  const filtered = rows.filter((r) => (r.name || "").toLowerCase().includes(q.toLowerCase()) || (r.phone || "").includes(q) || (r.email || "").toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Customer Management</h1>
      <Card className="p-4 flex items-center gap-3">
        <Search size={18} className="text-gray-400" />
        <Input placeholder="Search customers..." value={q} onChange={(e) => setQ(e.target.value)} className="border-0 focus:ring-0" />
      </Card>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">Name</th><th className="text-left p-3">Email</th><th className="text-left p-3">Phone</th></tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-semibold">{r.name || "—"}</td>
                <td className="p-3">{r.email || "—"}</td>
                <td className="p-3">{r.phone || "—"}</td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan={3} className="p-4 text-center text-gray-500">No customers</td></tr>}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
