// import { useState } from "react";
// import { supabase } from "../../utils/supabase/client";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (error) alert(error.message);
//   };

//   return (
//     <div className="flex flex-col items-center">
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
//       <button onClick={handleLogin} className="bg-blue-500 text-white p-2">
//         Login
//       </button>
//     </div>
//   );
// };

// export default LoginForm;

// "use client";

// import { useState } from "react";
// import { createClient } from "@/utils/supabase/client";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     const { data, error } = await createClient.auth.signInWithPassword({
//       email,
//       password,
//     });
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
//       <button onClick={handleLogin} className="bg-blue-500 text-white p-2">
//         Login
//       </button>
//     </div>
//   );
// };

// export default LoginForm;
