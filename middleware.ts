// middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // console.log(req.headers['authorization'], "middleware");
  const token = req.cookies.get("token")?.value;
  // const token = true;
  const url = req.nextUrl;

  if (token && url.pathname === "/login") {
    // If logged in and trying to access /login, redirect to home (or another page like /dashboard)
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  // List of protected routes
  const protectedRoutes = [
    "/",
    "/blog",
    "/products",
    "/contact",
    "/sub-categories",
    "/categories",
  ];

  // If the user is not authenticated and tries to access a protected route, redirect to login
  if (!token && protectedRoutes.includes(url.pathname)) {
    url.pathname = "/login"; // Redirect to login page
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
