"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useAppStore } from "@/store/useAppStore";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const setIsAdmin = useAppStore((s) => s.setIsAdmin);
  const setRole = useAppStore((s) => s.setRole);

  const login = () => {
    // Demo admin credentials
    if (email === "admin@indiatrip.in" && password === "admin123") {
      setIsAdmin(true);
      setRole("admin");
      toast.success("Admin logged in");
      router.push("/admin");
    } else {
      toast.error("Invalid credentials (demo: admin@indiatrip.in / admin123)");
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-brand-navy mb-1">Admin Login</h2>
        <p className="text-sm text-gray-500 mb-6">Secured access</p>
        <div className="space-y-3">
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button className="w-full mt-4" onClick={login}>Login</Button>
        <p className="text-xs text-gray-400 mt-3 text-center">Demo: admin@indiatrip.in / admin123</p>
      </Card>
    </div>
  );
}
