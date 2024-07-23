import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: { label: "Login", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const response = await axios.post(
            "https://api.lettobet.dev.bet4skill.com/api/client-login",
            {
              login: credentials?.login,
              password: credentials?.password,
            },
          );

          if (response.data) {
            return response.data;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Login error", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/",
    error: "/",
  },
  session: {
    maxAge: 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "strict",
    },
  },
  jwt: {
    maxAge: 24 * 60 * 60,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
