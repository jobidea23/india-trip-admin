"use client";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
const rows = [
  { id: "v1", number: "DL 01 AB 1234", category: "bike", driver: "Ramesh Kumar", status: "active" },
  { id: "v2", number: "DL 02 CD 5678", category: "auto", driver: "Suresh Yadav", status: "pending" },
  { id: "v3", number: "DL 03 EF 9012", category: "cab", driver: "Anil Gupta", status: "active" },
];
export default function VehiclesPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Vehicle Management</h1>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">Number</th><th className="text-left p-3">Category</th><th className="text-left p-3">Driver</th><th className="text-left p-3">Status</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-semibold">{r.number}</td>
                <td className="p-3 capitalize">{r.category}</td>
                <td className="p-3">{r.driver}</td>
                <td className="p-3"><Badge color={r.status === "active" ? "green" : "yellow"}>{r.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
