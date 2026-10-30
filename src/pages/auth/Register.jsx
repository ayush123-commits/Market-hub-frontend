import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
  const navigate = useNavigate();
  // Take name, email, password
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  // Use backend to register the user
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response =await axios.post("http://localhost:3002/api/v1/auth/register", formData)
      toast.success(response.data.message || 'Registration successful!. Toast not working')
      setFormData({
        name: "",
        email: "",
        password: "",
      })
      navigate('/login', { replace: true })
    }catch (error) {

      const message =
          error.response?.data?.message ||
          'Unable to register. Please try again.'
          toast.error(message)
    }
  }
  return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12">
        {/* Ambient background blobs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />

        <div className="relative w-full max-w-md">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(30,64,175,0.25)] backdrop-blur-xl sm:p-10">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create Account</h1>
              <p className="mt-2 text-sm text-slate-500">Register to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </span>
                  <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
                  <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </span>
                  <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="new-password"
                      minLength={8}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-12 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                  <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                  >
                    {showPassword ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                    ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    )}
                  </button>
                </div>

                {/* Strength meter */}
                <div className="mt-2.5 flex gap-1.5">
                  {[1, 5, 8, 12].map((threshold) => {
                    const len = formData.password.length;
                    const active = len >= threshold;
                    const color =
                        len < 8 ? 'bg-rose-400' : len < 12 ? 'bg-amber-400' : 'bg-emerald-500';
                    return (
                        <span
                            key={threshold}
                            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                                active ? color : 'bg-slate-200'
                            }`}
                        />
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  {formData.password.length === 0
                      ? 'Password must be at least 8 characters.'
                      : formData.password.length < 8
                          ? 'Too short — use at least 8 characters.'
                          : formData.password.length < 12
                              ? 'Good password. Add more characters for extra strength.'
                              : 'Strong password.'}
                </p>
              </div>

              {/* Submit */}
              <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-4 focus:ring-blue-500/30 active:translate-y-0 active:scale-[0.99]"
              >
                <span className="relative z-10">Create Account</span>
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <a href="/login" className="font-semibold text-blue-600 transition hover:text-blue-800 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Register