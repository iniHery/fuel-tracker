// "use client";

// import { useState } from "react";
// import { supabase } from "../../utils/supabase/client";

// const SignUpForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = async () => {
//     const { data, error } = await supabase.auth.signUp({ email, password });
//     if (error) alert(error.message);
//   };

//   return (
//     <div className="flex flex-col items-center text-black">
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="mb-2 p-2 border"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="mb-2 p-2 border"
//       />
//       <button onClick={handleSignUp} className="bg-blue-500 text-white p-2">
//         Sign Up
//       </button>
//     </div>
//   );
// };

// export default SignUpForm;
