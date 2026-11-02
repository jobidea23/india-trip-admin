"use client";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import { Search, CheckCircle, XCircle, Ban } from "lucide-react";
import { listDrivers, approveDriver } from "@/lib/firestore";
import toast from "react-hot-toast";

export default function DriversPage() {
  const [data, setData] = useState<any[]>([]);
  const [q, setQ] = useState("");
  const load = async () => { try { setData(await listDrivers()); } catch {} };
  useEffect(() => { load(); }, []);
  const act = async (id: string, status: string) => {
    try { await approveDriver(id, status as any); setData((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r))); toast.success(`Driver ${status}`); }
    catch (e: any) { toast.error(e?.message || "Failed"); }
  };
  const filtered = data.filter((r) => (r.name || "").toLowerCase().includes(q.toLowerCase()) || (r.phone || "").includes(q));
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Driver Management</h1>
      <Card className="p-4 flex items-center gap-3">
        <Search size={18} className="text-gray-400" />
        <Input placeholder="Search drivers..." value={q} onChange={(e) => setQ(e.target.value)} className="border-0 focus:ring-0" />
      </Card>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">Name</th><th className="text-left p-3">Phone</th><th className="text-left p-3">Category</th><th className="text-left p-3">Status</th><th className="text-left p-3">Rating</th><th className="text-left p-3">Rides</th><th className="text-left p-3">Actions</th></tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-semibold">{r.name}</td>
                <td className="p-3">{r.phone}</td>
                <td className="p-3 capitalize">{r.vehicle?.category}</td>
                <td className="p-3"><Badge color={r.status === "approved" ? "green" : r.status === "pending" ? "yellow" : "red"}>{r.status}</Badge></td>
                <td className="p-3">⭐ {r.rating || 0}</td>
                <td className="p-3">{r.completedRides || 0}</td>
                <td className="p-3 flex gap-1">
                  <Button size="sm" variant="ghost" onClick={() => act(r.id, "approved")}><CheckCircle size={14} className="text-green-600" /></Button>
                  <Button size="sm" variant="ghost" onClick={() => act(r.id, "rejected")}><XCircle size={14} className="text-red-600" /></Button>
                  <Button size="sm" variant="ghost" onClick={() => act(r.id, "suspended")}><Ban size={14} className="text-gray-600" /></Button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan={7} className="p-4 text-center text-gray-500">No drivers</td></tr>}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
