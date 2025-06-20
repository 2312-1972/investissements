// auth.js
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Auth } from "@auth/core";
import GitHub from "@auth/core/providers/github";
import prisma from "./prismaClient.js";

export const authHandler = async (req, res) => {
  return await Auth(req, res, {
    adapter: PrismaAdapter(prisma),

    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],

    session: {
      strategy: "database",
    },

    secret: process.env.AUTH_SECRET,

    callbacks: {
      async session({ session, user }) {
        // Ajoute l'ID utilisateur à la session
        session.user.id = user.id;
        return session;
      },
    },

    pages: {
      signIn: "/login", // redirigé manuellement dans Express
    },
  });
};
