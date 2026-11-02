"use client";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import toast from "react-hot-toast";

const init = [
  { id: "o1", code: "FIRST50", discountPct: 50, maxDiscount: 100, active: true },
  { id: "o2", code: "TRIP20", discountPct: 20, maxDiscount: 60, active: true },
];

export default function OffersPage() {
  const [offers, setOffers] = useState(init);
  const [code, setCode] = useState("");
  const [pct, setPct] = useState("10");
  const add = () => {
    if (!code) return;
    setOffers([...offers, { id: "o" + Date.now(), code, discountPct: Number(pct), maxDiscount: 100, active: true }]);
    setCode("");
    toast.success("Offer added");
  };
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Promo Codes & Offers</h1>
      <Card className="p-4 flex gap-3">
        <Input placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)} />
        <Input placeholder="Discount %" value={pct} onChange={(e) => setPct(e.target.value)} />
        <Button onClick={add}>Add</Button>
      </Card>
      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr><th className="text-left p-3">Code</th><th className="text-left p-3">Discount</th><th className="text-left p-3">Max</th><th className="text-left p-3">Status</th></tr>
          </thead>
          <tbody>
            {offers.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="p-3 font-bold">{o.code}</td>
                <td className="p-3">{o.discountPct}%</td>
                <td className="p-3">₹{o.maxDiscount}</td>
                <td className="p-3"><Badge color={o.active ? "green" : "gray"}>{o.active ? "active" : "inactive"}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
