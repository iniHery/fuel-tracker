import Header from "@/components/Header";
import ResponsiveDesktop from "./responsive-desktop/page";
import ResponsiveMobile from "./responsive-mobile/page";
import AuthButton from "@/components/AuthButton";

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
      </div>
    </div>
  );
}
