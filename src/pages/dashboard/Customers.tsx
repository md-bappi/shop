import { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";

interface Customer {
  name: string;
  email: string;
  status: "Active" | "Inactive";
  joined: string;
}

const sampleCustomers: Customer[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    joined: "2h ago",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Active",
    joined: "1d ago",
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Inactive",
    joined: "3d ago",
  },
  {
    name: "Bob Williams",
    email: "bob@example.com",
    status: "Active",
    joined: "5d ago",
  },
];

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>(sampleCustomers);

  // Counts
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter((c) => c.status === "Active").length;
  const newThisMonth = customers.filter(
    (c) => new Date(c.joined).getMonth() === new Date().getMonth()
  ).length; // Simple placeholder logic

  return (
    <div>
      <main className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Customers Overview</h1>
        </div>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Total Customers</div>
                <div className="text-xl font-semibold mt-1">
                  {totalCustomers}
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <FiUsers size={18} className="text-blue-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              All registered customers
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Active Customers</div>
                <div className="text-xl font-semibold mt-1">
                  {activeCustomers}
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                <FiUsers size={18} className="text-green-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">Currently active</div>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">New This Month</div>
                <div className="text-xl font-semibold mt-1">{newThisMonth}</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center">
                <AiOutlineUserAdd size={18} className="text-yellow-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">Joined this month</div>
          </div>
        </section>

        {/* Recent Customers Table */}
        <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium mb-3">Recent Customers</h3>
          <ul className="space-y-2 text-sm">
            {customers.map((customer, index) => (
              <li key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{customer.name}</div>
                  <div className="text-xs text-gray-500">{customer.email}</div>
                </div>
                <div className="text-xs text-gray-500">{customer.joined}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
