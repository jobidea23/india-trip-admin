"use client";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
const rows = [
  { id: "s1", user: "Amit S.", subject: "Late driver", status: "open" },
  { id: "s2", user: "Priya S.", subject: "Payment issue", status: "resolved" },
];
export default function SupportPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Complaints & Support</h1>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">ID</th><th className="text-left p-3">User</th><th className="text-left p-3">Subject</th><th className="text-left p-3">Status</th><th className="text-left p-3">Action</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-semibold">{r.id}</td>
                <td className="p-3">{r.user}</td>
                <td className="p-3">{r.subject}</td>
                <td className="p-3"><Badge color={r.status === "resolved" ? "green" : "yellow"}>{r.status}</Badge></td>
                <td className="p-3"><Button size="sm" variant="ghost">Resolve</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
