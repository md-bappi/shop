import React from "react";
import { LuBox } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";

const Orders = () => {
  return (
    <div>
      <main className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-semibold">Orders Overview</h1>
        </div>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Total Orders */}
          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Total Orders</div>
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

          {/* Pending Orders */}
          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Pending Orders</div>
                <div className="text-xl font-semibold mt-1">215</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center">
                <FiUsers size={18} className="text-yellow-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">Needs processing</div>
          </div>

          {/* Shipped Orders */}
          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Shipped Orders</div>
                <div className="text-xl font-semibold mt-1">780</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                <IoCartOutline size={18} className="text-green-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">On the way</div>
          </div>

          {/* Delivered Orders */}
          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Delivered Orders</div>
                <div className="text-xl font-semibold mt-1">1,050</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center">
                <AiOutlineBarChart size={18} className="text-pink-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Completed this month
            </div>
          </div>
        </section>

        {/* Recent Orders Table */}
        <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium mb-3">Recent Orders</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between">
              <div>
                <div className="font-medium">#12901</div>
                <div className="text-xs text-gray-500">2 items — $48</div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </li>

            <li className="flex items-center justify-between">
              <div>
                <div className="font-medium">#12897</div>
                <div className="text-xs text-gray-500">1 item — $19</div>
              </div>
              <div className="text-xs text-gray-500">4h ago</div>
            </li>

            <li className="flex items-center justify-between">
              <div>
                <div className="font-medium">#12888</div>
                <div className="text-xs text-gray-500">3 items — $74</div>
              </div>
              <div className="text-xs text-gray-500">1d ago</div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Orders;
