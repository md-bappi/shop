import { AiOutlineBarChart, AiOutlineLineChart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

export default function Analytics() {
  // Sample metrics
  const metrics = [
    {
      title: "Total Sales",
      value: "$45,230",
      icon: <IoCartOutline size={18} className="text-[var(--accent)]" />,
      bg: "bg-[var(--accent)]/10",
      trend: "+8.2% from last week",
    },
    {
      title: "Total Customers",
      value: "3,842",
      icon: <FiUsers size={18} className="text-yellow-600" />,
      bg: "bg-yellow-50",
      trend: "+2.5% from last month",
    },
    {
      title: "Orders",
      value: "1,120",
      icon: <AiOutlineBarChart size={18} className="text-indigo-600" />,
      bg: "bg-indigo-50",
      trend: "Avg. order value $42.34",
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      icon: <AiOutlineLineChart size={18} className="text-pink-600" />,
      bg: "bg-pink-50",
      trend: "Improved from last month",
    },
  ];

  return (
    <div>
      <main className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-semibold">Analytics Overview</h1>
        </div>

        {/* Metric Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">{metric.title}</div>
                  <div className="text-xl font-semibold mt-1">
                    {metric.value}
                  </div>
                </div>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${metric.bg}`}
                >
                  {metric.icon}
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-2">{metric.trend}</div>
            </div>
          ))}
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Sales (last 30 days)</h3>
              <div className="text-sm text-gray-500">Updated 2 hours ago</div>
            </div>
            <div className="h-60 flex items-center justify-center text-gray-400">
              [ Chart placeholder — integrate Recharts / Chart.js here ]
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Customer Growth</h3>
              <div className="text-sm text-gray-500">Updated today</div>
            </div>
            <div className="h-60 flex items-center justify-center text-gray-400">
              [ Chart placeholder — integrate Recharts / Chart.js here ]
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
