import React, { useEffect, useState } from "react";
import MetricsCard from "./MetricsCard";
import OrdersChart from "./OrdersChart";
import TopCustomers from "./TopCustomers";
import { getTotals } from "../api";

function Dashboard({ onLogout }) {
    const [totals, setTotals] = useState({
        totalCustomers: 0,
        totalOrders: 0,
        totalRevenue: 0,
    });

    async function fetchData() {
        try {
            const res = await getTotals();
            setTotals(res.data);
        } catch (err) {
            console.error("Error fetching totals:", err);
        }
    }

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen p-6 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">📊 Insights Dashboard</h1>
                <button
                    onClick={onLogout}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <MetricsCard title="Total Customers" value={totals.totalCustomers} />
                <MetricsCard title="Total Orders" value={totals.totalOrders} />
                <MetricsCard title="Total Revenue" value={`$${totals.totalRevenue}`} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <OrdersChart />
                <TopCustomers />
            </div>
        </div>
    );
}

export default Dashboard;
