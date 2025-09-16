import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
    email: string;
    password: string;
}

const RegistrationPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            {...register('email', {
                                required: 'Email is required',
                            })}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.email ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            {...register('password', {
                                required: 'Password is required',
                            })}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.password ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        // disabled={loginMutation.isPending}
                        className="w-full bg-indigo-900 text-white py-2 rounded-lg hover:bg-purple-800 transition font-semibold"
                    >
                        {/* {loginMutation.isPending ? 'Signing In...' : 'Sign In'} */}
                        Sign Up
                    </button>
                </form>

                <Link href="/login">
                    <p className="text-center mt-4 text-sm">
                        Already have an account?
                        <span className="text-indigo-900 font-semibold cursor-pointer underline">
                            Login
                        </span>
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default RegistrationPage;
