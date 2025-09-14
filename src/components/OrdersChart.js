import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { getOrdersByDate } from "../api";

function OrdersChart() {
    const [data, setData] = useState([]);

    async function loadData() {
        try {
            const res = await getOrdersByDate();
            const formatted = res.data.map((o) => ({
                date: new Date(o.createdAt).toLocaleDateString(),
                orders: o._count._all,
                revenue: o._sum.totalPrice,
            }));
            setData(formatted);
        } catch (err) {
            console.error("Error fetching orders by date:", err);
        }
    }

    useEffect(() => {
        loadData();
        const interval = setInterval(loadData, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">📈 Orders by Date</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="orders" stroke="#4F46E5" name="Orders" />
                    <Line type="monotone" dataKey="revenue" stroke="#10B981" name="Revenue" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default OrdersChart;
