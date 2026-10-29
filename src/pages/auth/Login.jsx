import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(30,64,175,0.25)] backdrop-blur-xl sm:p-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Sign in to your account
            </p>
          </div>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Email Address
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs font-semibold text-blue-600 transition hover:text-blue-800 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Remember me */}
            <label
              htmlFor="remember"
              className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600"
            >
              <input
                id="remember"
                type="checkbox"
                name="remember"
                className="h-4 w-4 rounded border-slate-300 bg-slate-50 text-blue-600 accent-blue-600 focus:ring-4 focus:ring-blue-500/10"
              />
              Remember me
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-4 focus:ring-blue-500/30 active:translate-y-0 active:scale-[0.99]"
            >
              <span className="relative z-10">Sign In</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-blue-600 transition hover:text-blue-800 hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
