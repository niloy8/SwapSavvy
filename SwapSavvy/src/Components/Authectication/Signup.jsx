import { useState } from 'react';
import { Link } from 'react-router';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup attempt:', formData);
    };

    const handleGoogleSignup = () => {
        // Handle Google signup logic here
        console.log('Google signup attempt');
    };

    return (
        <div className="min-h-screen bg-indigo-200 from-purple-50 via-white to-blue-50 flex items-center justify-center !p-4">
            <div className="max-w-lg w-full !space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 !mb-2">Join SwapSavvy</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 !mb-2">Create your account</h2>
                    <p className="text-gray-600">Start your skill swapping journey today</p>
                </div>

                {/* Signup Form */}
                <div className="bg-white rounded-2xl shadow-xl !p-8 border border-gray-100">
                    <form onSubmit={handleSubmit} className="!space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-2 !gap-4">
                            {/* First Name */}
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 !mb-2">
                                    First Name
                                </label>
                                <div className="relative">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="input input-bordered w-full !pl-10 !pr-4 !py-3 border-gray-300 focus:!border-purple-500 focus:!ring-purple-500"
                                        placeholder="John"
                                    />
                                    <svg className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 !z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 !mb-2">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="input input-bordered w-full !pl-10 !pr-4 !py-3 border-gray-300 focus:!border-purple-500 focus:!ring-purple-500"
                                        placeholder="Doe"
                                    />
                                    <svg className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 !z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 !mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input input-bordered w-full !pl-10 !pr-4 !py-3 border-gray-300 focus:!border-purple-500 focus:!ring-purple-500"
                                    placeholder="john.doe@example.com"
                                />
                                <svg className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 !z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 !mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="input input-bordered w-full !pl-10 !pr-12 !py-3 border-gray-300 focus:!border-purple-500 focus:!ring-purple-500"
                                    placeholder="Create a strong password"
                                />
                                <svg className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 !z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute !z-10 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 !mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="input input-bordered w-full !pl-10 !pr-12 !py-3 border-gray-300 focus:!border-purple-500 focus:!ring-purple-500"
                                    placeholder="Confirm your password"
                                />
                                <svg className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 !z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute !z-10 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? (
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms Agreement */}
                        <div className="flex items-start !space-x-3">
                            <input
                                id="agreeToTerms"
                                name="agreeToTerms"
                                type="checkbox"
                                required
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className="checkbox checkbox-primary checkbox-sm !mt-1"
                            />
                            <label htmlFor="agreeToTerms" className="text-sm text-gray-600 leading-5">
                                I agree to the{' '}
                                <Link to="/terms" className="text-purple-600 hover:text-purple-500 font-medium">
                                    Terms of Service
                                </Link>
                                {' '}and{' '}
                                <Link to="/privacy" className="text-purple-600 hover:text-purple-500 font-medium">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full !py-3 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 !bg-purple-600 !border-purple-600 hover:!bg-purple-700"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative !my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="!px-2 bg-white text-gray-500">Or sign up with</span>
                        </div>
                    </div>

                    {/* Google Signup Button */}
                    <button
                        onClick={handleGoogleSignup}
                        className="w-full flex items-center justify-center !px-4 !py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md transition-all duration-200 font-medium"
                    >
                        <svg className="w-5 h-5 !mr-3" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    {/* Login Link */}
                    <div className="text-center !mt-6">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-purple-600 hover:text-purple-500 font-semibold">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Password Requirements */}
                <div className="bg-gray-50 rounded-xl !p-4 border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700 !mb-2">Password requirements:</h3>
                    <ul className="text-xs text-gray-600 !space-y-1">
                        <li>• At least 8 characters long</li>
                        <li>• Include uppercase and lowercase letters</li>
                        <li>• Include at least one number</li>
                        <li>• Include at least one special character</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Signup;