
import Image from "next/image";
import { Suspense } from "react";
import DisplayTime from "./DisplayTime";
import Navbar from "./Navbar/Navbar";
import NavbarSkeleton from "./Navbar/NavbarSkeleton";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="relative flex h-23.5 w-full items-center justify-end px-4 sm:px-8 lg:px-[8.8%]">

        {/* Logo and Title - Centered */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
          <div className="h-12.5 w-12.5 shrink-0 overflow-hidden rounded-[14px] bg-[#0c1020]">
            <Image
              src="/logo.webp"
              alt="Bangla News 24 Logo"
              width={50}
              height={50}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="whitespace-nowrap">
            <h1 className="font-serif text-[24px] font-bold leading-tight text-[#c90000] sm:text-[28px]">
              Bangla News 24
            </h1>

            <div className="mt-1 text-[12px] text-[#777777]">
              <Suspense fallback={<p>Loading...</p>}>
                <DisplayTime/>
              </Suspense>
            </div>
          </div>
        </div>

        {/* Sign In and Sign Up */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="whitespace-nowrap text-[14px] text-[#333333] transition-colors hover:text-red-700"
          >
            সাইন ইন
          </button>

          <button
            type="button"
            className="whitespace-nowrap rounded-md bg-[#cc0000] px-3.5 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-red-800"
          >
            সাইন আপ
          </button>
        </div>

      </div>
      <Suspense fallback={<NavbarSkeleton/>}>
        <Navbar/>
      </Suspense>
    </header>
  );
};

export default Header;

