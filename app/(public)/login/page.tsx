'use client';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
        // Here you can call your API for login
        redirect('/dashboard');
    };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        Login
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-900 text-white py-2 rounded-lg hover:bg-purple-800 transition font-semibold cursor-pointer "
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Don't have an account?{' '}
                        <a
                            href="/register"
                            className="text-indigo-900 hover:underline"
                        >
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
