"use client";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import toast from "react-hot-toast";

export default function NotificationsPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const send = () => {
    if (!title || !body) { toast.error("Fill fields"); return; }
    toast.success("Notification sent (demo)");
    setTitle(""); setBody("");
  };
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-navy">Notification Management</h1>
      <Card className="p-4 space-y-3 max-w-lg">
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="w-full border border-gray-200 rounded-xl px-4 py-3" rows={3} placeholder="Message" value={body} onChange={(e) => setBody(e.target.value)} />
        <Button onClick={send}>Send Push Notification</Button>
      </Card>
    </div>
  );
}
