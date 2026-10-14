
import Link from "next/link";
import { FaRegNewspaper, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600">
          <FaRegNewspaper className="text-4xl" />
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-extrabold tracking-tight text-red-600 sm:text-8xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
          দুঃখিত! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          আপনি যে সংবাদটি খুঁজছেন সেটি সরিয়ে ফেলা হয়েছে, ঠিকানা পরিবর্তন
          হয়েছে অথবা পৃষ্ঠাটি বর্তমানে উপলব্ধ নেই।
        </p>

        {/* Divider */}
        <div className="mx-auto my-6 h-1 w-20 rounded-full bg-red-600" />

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <FaArrowLeft />
          হোম পেজে ফিরে যান
        </Link>

        {/* Footer text */}
        <p className="mt-8 border-t border-gray-200 pt-4 text-xs text-gray-400">
          সর্বশেষ সংবাদ জানতে হোম পেজে ফিরে আসুন।
        </p>
      </div>
    </main>
  );
}
