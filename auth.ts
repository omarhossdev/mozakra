import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },

      authorize: async (creds) => { // we are going to use that!
        const username = creds?.username as string;
        const password = creds?.password as string;

        if (!username || !password) return null; // if the client didn't send either username or password or both

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.username, username))
        // get the user from the database that has the same username from the form above.

        if (!user) return null; // if we didn't find the user, stop! <- we're changing that later to add signup!

        const ok = await bcrypt.compare(password, user.hashedPassword);
        if (!ok) return null; // if passwords don't match STOP!
        // we're using bcrypt bcz we shouldn't store passwords plain in the DB but should be hashed and we compare the password written in the client form with the hashed version of it from the DB for security.

        return { id: String(user.id), name: user.username };
      },

    }),
  ],
  pages: { signIn: '/login' }
})