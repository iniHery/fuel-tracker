// "use client";

// import { useState } from "react";
// import { supabase } from "@/utils/supabase/client";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const handleSignUp = async () => {
//     setError(null); // Reset error message
//     setSuccessMessage(null); // Reset success message

//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (error) {
//       setError(error.message);
//     } else {
//       setSuccessMessage("Check your email for confirmation!");
//     }
//   };

//   return (
//     <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
//       <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="rounded-md px-4 py-2 bg-inherit border mb-6"
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="rounded-md px-4 py-2 bg-inherit border mb-6"
//         required
//       />
//       <button
//         onClick={handleSignUp}
//         className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
//       >
//         Sign Up
//       </button>
//       {error && <p className="mt-4 p-4 bg-red-100 text-red-700 text-center">{error}</p>}
//       {successMessage && <p className="mt-4 p-4 bg-green-100 text-green-700 text-center">{successMessage}</p>}
//     </div>
//   );
// };

// export default SignUp;

"use client";

import Link from "next/link";
import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    // <form className="text-black">
    //   <div>
    //     <Link href="/">
    //       <button className="bg-white p-2 rounded-[8px] border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8),0_0px_0px_rgba(0,0,0,0.8)]">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke-width="2"
    //           stroke="currentColor"
    //           className="w-6 h-6 text-black"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             d="M15 19l-7-7 7-7"
    //           />
    //         </svg>
    //       </button>
    //     </Link>
    //   </div>

    //   <label htmlFor="email">Email:</label>
    //   <input id="email" name="email" type="email" required />
    //   <label htmlFor="password">Password:</label>
    //   <input id="password" name="password" type="password" required />
    //   {/* <button formAction={login}>Log in</button> */}
    //   <button formAction={signup}>Sign up</button>
    // </form>

    <div>
      <div>
        <div>
          <Link href="/">
            <button className="bg-white p-2 rounded-[8px] border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8),0_0px_0px_rgba(0,0,0,0.8)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <form>
          <input
            // type="email"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            required
            className="rounded-md px-4 py-2 bg-inherit border mb-6 bg-white"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            className="rounded-md px-4 py-2 bg-inherit border mb-6 bg-white "
          />
        </form>
        <button
          className="bg-white text-black p-2 rounded-[8px] border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8),0_0px_0px_rgba(0,0,0,0.8)]"
          formAction={signup}
        >
          Sign up
        </button>
        {/* {error && (
        <p className="mt-4 p-4 bg-red-100 text-red-700 text-center">{error}</p>
      )}
      {successMessage && (
        <p className="mt-4 p-4 bg-green-100 text-green-700 text-center">
          {successMessage}
        </p>
      )} */}
      </div>
    </div>
  );
}
