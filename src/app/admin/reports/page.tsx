"use client";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
export default function ReportsPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Reports & Analytics</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {["Daily rides", "Revenue", "Driver performance", "Customer growth", "Cancellation rate", "Payment split"].map((r) => (
          <Card key={r} className="p-4">
            <h3 className="font-bold text-brand-navy">{r}</h3>
            <div className="h-24 bg-gray-50 rounded-xl mt-2 flex items-center justify-center text-xs text-gray-400">Chart (demo)</div>
            <Button size="sm" variant="ghost" className="mt-2">Export CSV</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
