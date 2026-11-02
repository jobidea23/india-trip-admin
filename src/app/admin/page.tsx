"use client";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Users, Truck, Map, CheckCircle2, XCircle, IndianRupee, Activity } from "lucide-react";
import { listCustomers, listDrivers, listBookings } from "@/lib/firestore";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>({ customers: 0, drivers: 0, approved: 0, pending: 0, bookings: 0, active: 0, completed: 0, cancelled: 0, revenue: 0 });
  useEffect(() => {
    (async () => {
      try {
        const [customers, drivers, bookings] = await Promise.all([listCustomers(), listDrivers(), listBookings()]);
        setStats({
          customers: customers.length,
          drivers: drivers.length,
          approved: drivers.filter((d: any) => d.status === "approved").length,
          pending: drivers.filter((d: any) => d.status === "pending").length,
          bookings: bookings.length,
          active: bookings.filter((b: any) => b.status === "assigned" || b.status === "started" || b.status === "arriving").length,
          completed: bookings.filter((b: any) => b.status === "completed").length,
          cancelled: bookings.filter((b: any) => b.status === "cancelled").length,
          revenue: bookings.filter((b: any) => b.status === "completed").reduce((s: number, b: any) => s + (b.fare || 0), 0),
        });
      } catch {}
    })();
  }, []);

  const cards = [
    { label: "Total Customers", value: stats.customers, icon: Users, color: "green" },
    { label: "Registered Drivers", value: stats.drivers, icon: Truck, color: "blue" },
    { label: "Approved Drivers", value: stats.approved, icon: CheckCircle2, color: "green" },
    { label: "Pending Drivers", value: stats.pending, icon: Activity, color: "yellow" },
    { label: "Total Bookings", value: stats.bookings, icon: Map, color: "blue" },
    { label: "Active Rides", value: stats.active, icon: Activity, color: "green" },
    { label: "Completed Rides", value: stats.completed, icon: CheckCircle2, color: "green" },
    { label: "Cancelled Rides", value: stats.cancelled, icon: XCircle, color: "red" },
    { label: "Total Revenue", value: "₹" + stats.revenue, icon: IndianRupee, color: "green" },
    { label: "Platform Commission", value: "₹" + Math.round(stats.revenue * 0.15), icon: IndianRupee, color: "blue" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-brand-navy">Dashboard Overview</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {cards.map((s) => (
          <Card key={s.label} className="p-4">
            <div className="flex items-center justify-between">
              <s.icon size={20} className="text-gray-400" />
              <Badge color={s.color as any}>{s.color}</Badge>
            </div>
            <div className="text-2xl font-bold text-brand-navy mt-2">{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
