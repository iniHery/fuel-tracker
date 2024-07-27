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

import { useState } from "react";
import { supabase } from "@/utils/supabase/client";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSignUp = async () => {
    setError(null);
    setSuccessMessage(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccessMessage("Check your email for confirmation!");
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        required
      />
      <button
        onClick={handleSignUp}
        className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
      >
        Sign Up
      </button>
      {error && (
        <p className="mt-4 p-4 bg-red-100 text-red-700 text-center">{error}</p>
      )}
      {successMessage && (
        <p className="mt-4 p-4 bg-green-100 text-green-700 text-center">
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default SignUp;
