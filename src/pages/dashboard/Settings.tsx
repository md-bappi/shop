import { useState } from "react";

export default function Settings() {
  const [siteName, setSiteName] = useState("ShopCreate");
  const [adminEmail, setAdminEmail] = useState("admin@shopcreate.com");
  const [currency, setCurrency] = useState("USD");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Settings saved successfully!");
    // Here you can integrate API call to save settings
  };

  return (
    <div>
      <main className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-semibold">Settings</h1>
          <p className="text-gray-500 mt-1">
            Update your store settings and preferences here.
          </p>
        </div>

        {/* Settings Form */}
        <form
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-2xl"
          onSubmit={handleSave}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Site Name
            </label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Admin Email
            </label>
            <input
              type="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Default Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="BDT">BDT</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Settings
          </button>
        </form>
      </main>
    </div>
  );
}
