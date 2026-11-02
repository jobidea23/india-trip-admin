"use client";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { listBookings } from "@/lib/firestore";

export default function BookingsPage() {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => { listBookings().then(setRows).catch(() => {}); }, []);
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Booking Management</h1>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">ID</th><th className="text-left p-3">Customer</th><th className="text-left p-3">Driver</th><th className="text-left p-3">Category</th><th className="text-left p-3">Status</th><th className="text-left p-3">Fare</th><th className="text-left p-3">Date</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-semibold">{r.id.slice(0, 8)}</td>
                <td className="p-3">{r.customerName || r.customerId}</td>
                <td className="p-3">{r.driverId || "—"}</td>
                <td className="p-3 capitalize">{r.category}</td>
                <td className="p-3"><Badge color={r.status === "completed" ? "green" : r.status === "cancelled" ? "red" : "blue"}>{r.status}</Badge></td>
                <td className="p-3 font-bold text-brand-green">₹{r.fare}</td>
                <td className="p-3 text-xs">{r.createdAt?.toDate ? r.createdAt.toDate().toLocaleString() : ""}</td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={7} className="p-4 text-center text-gray-500">No bookings</td></tr>}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
