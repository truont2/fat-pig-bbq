import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
// use onlcliked to use sign in when u need to

export default function googleSign() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {!session ? (
        <div style={{ paddingTop: "200" }} onClick={signIn}>
          <FcGoogle fontSize={30} className="mr-2" />
          <span>Sign in with Google</span>
        </div>
      ) : (
        <div>
          <p>{session.user.name}</p>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
