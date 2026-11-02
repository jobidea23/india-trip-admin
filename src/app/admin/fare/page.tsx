"use client";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAppStore } from "@/store/useAppStore";
import { getFareSettings, saveFareSettings } from "@/lib/firestore";
import toast from "react-hot-toast";

export default function FarePage() {
  const fareSettings = useAppStore((s) => s.fareSettings);
  const setFareSettings = useAppStore((s) => s.setFareSettings);
  const [fs, setFs] = useState(fareSettings);
  useEffect(() => {
    getFareSettings().then((f) => { if (f) { setFs(f as any); setFareSettings(f as any); } }).catch(() => {});
  }, []);

  const save = () => {
    setFareSettings(fs);
    saveFareSettings(fs).then(() => toast.success("Fare settings saved")).catch(() => toast.error("Save failed"));
  };

  const update = (cat: "bike" | "auto" | "cab", field: string, value: string) => {
    setFs({ ...fs, [cat]: { ...fs[cat], [field]: Number(value) } });
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Fare Management</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {(["bike", "auto", "cab"] as const).map((cat) => (
          <Card key={cat} className="p-4 space-y-3">
            <h3 className="font-bold text-brand-navy capitalize">{cat}</h3>
            {["baseFare", "perKm", "perMin", "minFare", "capacity"].map((f) => (
              <div key={f}>
                <label className="text-xs text-gray-500">{f}</label>
                <Input type="number" value={(fs[cat] as any)[f]} onChange={(e) => update(cat, f, e.target.value)} />
              </div>
            ))}
          </Card>
        ))}
      </div>
      <Card className="p-4 space-y-3">
        <h3 className="font-bold text-brand-navy">Global</h3>
        <div className="grid md:grid-cols-4 gap-3">
          {[
            { k: "nightMultiplier", label: "Night multiplier" },
            { k: "waitingPerMin", label: "Waiting per min" },
            { k: "cancellationFee", label: "Cancellation fee" },
            { k: "platformCommissionPct", label: "Commission %" },
          ].map((g) => (
            <div key={g.k}>
              <label className="text-xs text-gray-500">{g.label}</label>
              <Input type="number" value={(fs as any)[g.k]} onChange={(e) => setFs({ ...fs, [g.k]: Number(e.target.value) })} />
            </div>
          ))}
        </div>
      </Card>
      <Button onClick={save}>Save Fare Settings</Button>
    </div>
  );
}
