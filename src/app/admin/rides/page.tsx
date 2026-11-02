"use client";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
const rows = [
  { id: "r1", customer: "Amit S.", driver: "Ramesh", category: "bike", status: "active", fare: 85 },
  { id: "r2", customer: "Priya S.", driver: "—", category: "cab", status: "searching", fare: 240 },
];
export default function LiveRidesPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Live Ride Monitoring</h1>
      <Card className="p-4">
        <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">Live map of active rides (demo)</span>
        </div>
      </Card>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">Customer</th><th className="text-left p-3">Driver</th><th className="text-left p-3">Category</th><th className="text-left p-3">Status</th><th className="text-left p-3">Fare</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3">{r.customer}</td>
                <td className="p-3">{r.driver}</td>
                <td className="p-3 capitalize">{r.category}</td>
                <td className="p-3"><Badge color={r.status === "active" ? "green" : "blue"}>{r.status}</Badge></td>
                <td className="p-3 font-bold text-brand-green">₹{r.fare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
