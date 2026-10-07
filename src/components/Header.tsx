
import Image from "next/image";
import NavLinks from "./NavLinks";
import DisplayTime from "./DisplayTime";
import { Suspense } from "react";

const Header = () => {
  

  return (
    <div>
      <div className="relative max-w-7xl mx-auto h-24">
        {/* Logo + Title + Date */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
          <Image
            width={50}
            height={50}
            src="/logo.webp"
            alt="Bangla News 24 logo"
          />

          <div>
            <h2 className="font-serif text-3xl font-bold text-red-700">
              Bangla News 24
            </h2>

            <p className="text-xs text-gray-500">
              <Suspense fallback={<p>loading.....</p>}>
                <DisplayTime />
              </Suspense>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
          <button className="cursor-pointer hover:text-red-600">সাইন ইন</button>

          <button className="rounded-md px-3 py-1.5 bg-red-600 text-white cursor-pointer hover:bg-red-700">
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks />
    </div>
  );
};

export default Header;
