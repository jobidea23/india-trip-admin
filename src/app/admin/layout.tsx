"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Truck, Car, Map, Receipt, DollarSign, Percent, CreditCard, Ticket, MessageSquare, Star, BarChart3, Bell, Settings, ShieldCheck } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { useAppStore } from "@/store/useAppStore";

const nav = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/customers", icon: Users, label: "Customers" },
  { href: "/admin/drivers", icon: Truck, label: "Drivers" },
  { href: "/admin/vehicles", icon: Car, label: "Vehicles" },
  { href: "/admin/rides", icon: Map, label: "Live Rides" },
  { href: "/admin/bookings", icon: Receipt, label: "Bookings" },
  { href: "/admin/fare", icon: DollarSign, label: "Fare Settings" },
  { href: "/admin/commission", icon: Percent, label: "Commission" },
  { href: "/admin/payments", icon: CreditCard, label: "Payments" },
  { href: "/admin/cash", icon: DollarSign, label: "Cash Collection" },
  { href: "/admin/offers", icon: Ticket, label: "Offers" },
  { href: "/admin/support", icon: MessageSquare, label: "Support" },
  { href: "/admin/ratings", icon: Star, label: "Ratings" },
  { href: "/admin/reports", icon: BarChart3, label: "Reports" },
  { href: "/admin/notifications", icon: Bell, label: "Notifications" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const isAdmin = useAppStore((s) => s.isAdmin);
  useEffect(() => {
    if (path !== "/admin/login" && !isAdmin) router.replace("/admin/login");
  }, [path, isAdmin, router]);
  if (path === "/admin/login") return <>{children}</>;
  if (!isAdmin) return null;
  return (
    <div className="min-h-screen bg-brand-light flex">
      <aside className="w-60 bg-brand-navy text-white flex flex-col">
        <div className="p-4 border-b border-white/10">
          <Logo size={24} />
          <div className="text-xs text-gray-300 mt-1">Admin Panel</div>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {nav.map((n) => {
            const active = path === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${active ? "bg-brand-green text-white" : "text-gray-300 hover:bg-white/10"}`}
              >
                <n.icon size={16} />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-white/10 text-xs text-gray-400 flex items-center gap-2">
          <ShieldCheck size={14} /> Secured
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
