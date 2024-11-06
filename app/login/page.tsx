"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import nookies from "nookies";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthWrapper from "@/components/AuthWrapper";
import { post } from "../../api";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const response: any = await post(
      `${process.env.NEXT_PUBLIC_API_URL}users/login`,
      data
    );

    nookies.set(null, "token", response?.data?.token, {
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    localStorage.setItem("test-token", response?.data?.token);
    // Show success toast notification
    toast.success("Login successful!");
    router.push("/");
  };

  return (
    <>
      {" "}
      <AuthWrapper />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password")}
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
