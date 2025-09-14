import React, { useState } from "react";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return alert("Enter your email!");
        localStorage.setItem("userEmail", email);
        onLogin(email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    🔐 Login to Insights Dashboard
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
