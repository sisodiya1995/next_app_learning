"use client";
import { useRouter } from "next/navigation";
import nookies from "nookies";
import { toast } from "react-toastify";

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    nookies.destroy(null, "token");
    // Remove the token from cookies
    // Remove the token from localStorage
    localStorage.removeItem("test-token");
    toast.success("User logged out!");
    router.push("/login"); // Redirect to login page
  };

  return (
    <header className="bg-indigo-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          MyApp
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <a href="/" className="hover:text-gray-200">
            Home
          </a>
          {/* <a href="/blog" className="hover:text-gray-200">
            Blogs
          </a> */}
          <a href="/products" className="hover:text-gray-200">
            Blogs
          </a>
          {/* <a href="/contact" className="hover:text-gray-200">
            Contact
          </a> */}
          <a href="/categories" className="hover:text-gray-200">
            Categories
          </a>
          <a href="/sub-categories" className="hover:text-gray-200">
            Sub-Categories
          </a>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
