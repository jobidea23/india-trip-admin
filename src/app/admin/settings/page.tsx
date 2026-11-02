"use client";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Admin Settings</h1>
      <Card className="p-4 space-y-3 max-w-lg">
        <label className="text-sm font-semibold">Platform name</label>
        <Input defaultValue="INDIA TRIP" />
        <label className="text-sm font-semibold">Support email</label>
        <Input defaultValue="support@indiatrip.in" />
        <label className="text-sm font-semibold">Emergency number</label>
        <Input defaultValue="1800-123-456" />
        <Button onClick={() => toast.success("Saved")}>Save Settings</Button>
      </Card>
    </div>
  );
}
