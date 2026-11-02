"use client";
import Card from "@/components/ui/Card";
const rows = [
  { id: "rt1", from: "Amit S.", to: "Ramesh", stars: 5, comment: "Great ride" },
  { id: "rt2", from: "Ramesh", to: "Amit S.", stars: 4, comment: "Good passenger" },
];
export default function RatingsPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Ratings & Reviews</h1>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">From</th><th className="text-left p-3">To</th><th className="text-left p-3">Stars</th><th className="text-left p-3">Comment</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3">{r.from}</td>
                <td className="p-3">{r.to}</td>
                <td className="p-3">{"⭐".repeat(r.stars)}</td>
                <td className="p-3">{r.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
