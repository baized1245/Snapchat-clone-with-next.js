import NextAuth from "next-auth";
import github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    github({
      clientId: process.env.NEXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,

  //   callbacks: {
  //     async signIn({account, profile}){
  //         if(account?.provider === "github"){
  //             try {

  //             } catch (error) {
  //                 console.log(error);
  //             }
  //         }
  //     }
  //   }
});
