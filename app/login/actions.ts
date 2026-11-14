"use server";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function Login(formData: FormData) {
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirectTo: "/"
    })
  } catch (err) {
    if (err instanceof AuthError) return { error: "Wrong username or password" }
    throw error;
  }
}

export async function SignUp(formData: FormData) {
  const username = String(formData.get("username"));
  const password = String(formData.get("password"));

  if (!username || !password) return { error: "Missing fields" }

  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.username, username));

  if (existing) return { error: "Username taken" }

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.insert(users).values({ username, hashedPassword });
  
  await signIn("credentials", {
    username,
    password,
    redirectTo: "/",
  })
}