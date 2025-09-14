import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { getTopCustomers } from "../api";

function TopCustomers() {
    const [data, setData] = useState([]);

    async function loadData() {
        try {
            const res = await getTopCustomers();
            const formatted = res.data.map((c) => ({
                name: c.name || "Unknown",
                spend: c.totalSpend,
            }));
            setData(formatted);
        } catch (err) {
            console.error("Error fetching top customers:", err);
        }
    }

    useEffect(() => {
        loadData();
        const interval = setInterval(loadData, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">👑 Top 5 Customers</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="spend" fill="#4F46E5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TopCustomers;
