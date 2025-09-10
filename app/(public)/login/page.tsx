'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useLogin, LoginPayload } from '@/hooks/useAuth';

interface IFormInput {
    email: string;
    password: string;
}

const Login = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();
    const loginMutation = useLogin(); // full mutation object

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        loginMutation.mutate(data as LoginPayload, {
            onSuccess: (response) => {
                localStorage.setItem('blog-token', response?.data?.token);
                localStorage.setItem(
                    'user',
                    JSON.stringify(response.data?.userData)
                );
                toast.success(`Welcome ${response.data?.userData?.name}`);
                // Get last visited path or fallback to /dashboard
                const lastVisited =
                    localStorage.getItem('lastVisitedPath') || '/dashboard';
                router.replace(lastVisited);
            },
            onError: (error: any) => {
                toast.error(error.response?.data?.message || 'Login failed');
                console.log(error);
            },
        });
    };

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
                        disabled={loginMutation.isPending}
                        className="w-full bg-indigo-900 text-white py-2 rounded-lg hover:bg-purple-800 transition font-semibold"
                    >
                        {loginMutation.isPending ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
