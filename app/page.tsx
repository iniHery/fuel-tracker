import Header from "@/components/Header";
import ResponsiveDesktop from "./responsive-desktop/page";
import ResponsiveMobile from "./responsive-mobile/page";
import AuthButton from "@/components/AuthButton";
import MenuBar from "@/components/menu-bar/page";
import DeployButton from "@/components/DeployButton";
// import { supabase } from "../app/auth/login";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* <AuthButton /> */}
      <div className="hidden md:block">
        <ResponsiveDesktop />
      </div>

      <div className="block md:hidden">
        <ResponsiveMobile />
        <MenuBar />
      </div>
    </div>
  );
}

// import Link from "next/link";
// import LoginForm from "@/components/auth/LoginForm";
// import SignUpForm from "@/components/auth/SignUpForm";
// import SignUp from "./auth/signup";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Fuel Tracker</h1>
//       <div className="flex space-x-4">
//         {/* <Link href="/auth/login"> */}
//         <div className="bg-blue-500 text-white p-2">
//           <LoginForm />
//         </div>
//         {/* </Link> */}
//         {/* <Link href="/auth/signup"> */}
//         <div className="bg-blue-500 text-white p-2">
//           <SignUpForm />
//         </div>
//         {/* </Link> */}
//       </div>
//     </div>
//   );
// }
