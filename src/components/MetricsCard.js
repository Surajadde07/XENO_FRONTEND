import React from "react";

function MetricsCard({ title, value }) {
    return (
        <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-gray-600">{title}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
    );
}

export default MetricsCard;
