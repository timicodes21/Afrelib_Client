// import { useEffect } from "react";
// import { useRouter } from "next/router";

// export default function Home() {
//   const router = useRouter();
//   useEffect(() => {
//     setTimeout(() => {
//       router.push("/login");
//     }, 1000);
//   }, [router]);

//   return (
//     <>
//       <h1>Afrelib</h1>
//     </>
//   );
// }

import LoginPage from "@/components/pages/auth/LoginPage";
import { NextPage } from "next";
import React from "react";

const Login: NextPage = () => {
  return <LoginPage />;
};

export default Login;
