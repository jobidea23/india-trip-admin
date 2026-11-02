"use client";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
const rows = [
  { id: "c1", driver: "Ramesh Kumar", amount: 450, status: "collected", date: "2026-11-02" },
  { id: "c2", driver: "Anil Gupta", amount: 320, status: "pending", date: "2026-11-01" },
];
export default function CashPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Cash Collection Management</h1>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">ID</th><th className="text-left p-3">Driver</th><th className="text-left p-3">Amount</th><th className="text-left p-3">Status</th><th className="text-left p-3">Date</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-semibold">{r.id}</td>
                <td className="p-3">{r.driver}</td>
                <td className="p-3 font-bold text-brand-green">₹{r.amount}</td>
                <td className="p-3"><Badge color={r.status === "collected" ? "green" : "yellow"}>{r.status}</Badge></td>
                <td className="p-3">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
