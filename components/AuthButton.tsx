// "use clinet";

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import LoginPage from "@/app/login/page";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <div>
      <div>
        <LoginPage></LoginPage>
      </div>
      <div>
        <Link
          href="/sign-up"
          className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Sign Up
        </Link>
      </div>
    </div>

    // <div
    //   // href="/login"
    //   className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    // >
    //   </LoginPage>
    // </div>
    //   <Link
    //   href="/sign-up"
    //   className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    // >
    //   Sign Up
    // </Link>
  );
}
