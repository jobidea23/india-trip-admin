"use client";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAppStore } from "@/store/useAppStore";
import toast from "react-hot-toast";

export default function CommissionPage() {
  const fs = useAppStore((s) => s.fareSettings);
  const setFs = useAppStore((s) => s.setFareSettings);
  const [val, setVal] = useState(fs.platformCommissionPct || 15);
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Commission Management</h1>
      <Card className="p-4 space-y-3 max-w-md">
        <label className="text-sm font-semibold">Platform commission (%)</label>
        <Input type="number" value={val} onChange={(e) => setVal(Number(e.target.value))} />
        <Button onClick={() => { setFs({ ...fs, platformCommissionPct: val }); toast.success("Saved"); }}>Save</Button>
      </Card>
    </div>
  );
}
