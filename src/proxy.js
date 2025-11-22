import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function proxy(req) {
  const token = await getToken({ req });
  const url = new URL(req.url);
  const path = url.pathname;

  const isAdminUser = token?.role === "admin";
  const isAdminSpecificRoute = path.startsWith("/products/add");

  if (isAdminSpecificRoute && !isAdminUser) {
    const callbackURL = encodeURIComponent(path);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackURL}`, url)
    );
  }

  return NextResponse.next();
}
