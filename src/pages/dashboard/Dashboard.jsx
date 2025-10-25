import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";

export default function Dashboard() {
  // Sample data
  const topProducts = [
    { name: "Wireless Headphones", sold: 320, revenue: 38400 },
    { name: "Smart Watch", sold: 210, revenue: 25200 },
    { name: "Running Shoes", sold: 180, revenue: 16200 },
  ];

  const recentOrders = [
    { id: "#12901", items: 2, total: "$48", time: "2h ago" },
    { id: "#12897", items: 1, total: "$19", time: "4h ago" },
    { id: "#12888", items: 3, total: "$74", time: "1d ago" },
  ];

  const activities = [
    { text: "Order #12901 placed", time: "2h" },
    { text: "Product 'Smart Watch' stock updated", time: "5h" },
    { text: "New customer 'Jane Smith' signed up", time: "1d" },
  ];

  return (
    <div>
      {/* Main Content */}
      <main className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-semibold">Dashboard Overview</h1>
        </div>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Total Sales</div>
                <div className="text-xl font-semibold mt-1">$12,430</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-ac flex items-center justify-center">
                <IoCartOutline size={18} className="text-text" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              +6.2% from last week
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Orders</div>
                <div className="text-xl font-semibold mt-1">1,120</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
                <LuBox size={18} className="text-indigo-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Avg. order value $42.34
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Customers</div>
                <div className="text-xl font-semibold mt-1">3,842</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center">
                <FiUsers size={18} className="text-yellow-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">New this month 320</div>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Conversion</div>
                <div className="text-xl font-semibold mt-1">3.8%</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center">
                <AiOutlineBarChart size={18} className="text-pink-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Improved from last month
            </div>
          </div>
        </section>

        {/* Dashboard Details */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Charts + Top Products */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sales Chart */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Sales (Last 30 days)</h3>
                <div className="text-sm text-gray-500">Updated 2 hours ago</div>
              </div>
              <div className="h-56 flex items-center justify-center text-gray-400">
                [ Chart placeholder — integrate Recharts / Chart.js here ]
              </div>
            </div>

            {/* Top Selling Products */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Top Selling Products</h3>
                <div className="text-sm text-gray-500">This month</div>
              </div>
              <ul className="divide-y">
                {topProducts.map((p, i) => (
                  <li
                    key={i}
                    className="py-3 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-gray-500">
                        {p.sold} sold — ${p.revenue.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-sm text-gray-700">{p.sold}×</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Recent Orders + Activity */}
          <div className="space-y-6">
            {/* Recent Orders */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Recent Orders</h3>
                <button className="text-sm text-bg-btn">View all</button>
              </div>
              <ul className="space-y-3 text-sm">
                {recentOrders.map((o, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{o.id}</div>
                      <div className="text-xs text-gray-500">
                        {o.items} items — {o.total}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{o.time}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activity Feed */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Activity</h3>
                <div className="text-sm text-gray-500">Recent</div>
              </div>
              <ul className="space-y-3 text-sm">
                {activities.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600">
                      {a.time}
                    </div>
                    <div>
                      <div className="text-sm">{a.text}</div>
                      <div className="text-xs text-gray-500">{a.time} ago</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
