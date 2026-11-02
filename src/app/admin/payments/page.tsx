"use client";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
const rows = [
  { id: "p1", booking: "BK1024", amount: 85, method: "online", status: "success", gateway: "Razorpay" },
  { id: "p2", booking: "BK1023", amount: 240, method: "cash", status: "pending", gateway: "—" },
  { id: "p3", booking: "BK1021", amount: 120, method: "online", status: "failed", gateway: "Razorpay" },
];
export default function PaymentsPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Payment Management</h1>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">ID</th><th className="text-left p-3">Booking</th><th className="text-left p-3">Amount</th><th className="text-left p-3">Method</th><th className="text-left p-3">Status</th><th className="text-left p-3">Gateway</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-semibold">{r.id}</td>
                <td className="p-3">{r.booking}</td>
                <td className="p-3 font-bold text-brand-green">₹{r.amount}</td>
                <td className="p-3">{r.method}</td>
                <td className="p-3"><Badge color={r.status === "success" ? "green" : r.status === "failed" ? "red" : "yellow"}>{r.status}</Badge></td>
                <td className="p-3">{r.gateway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
