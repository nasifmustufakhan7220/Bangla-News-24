
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-4xl">

        {/* Top accent */}
        <div className="flex items-center gap-3 mb-10">
          <span className="h-1 w-12 bg-red-600 rounded-full" />
          <span className="text-sm font-bold tracking-[0.2em] text-red-600 uppercase">
            Error 404
          </span>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left - 404 */}
          <div>
            <h1
              className="
                text-[9rem]
                sm:text-[11rem]
                md:text-[12rem]
                font-black
                leading-[0.8]
                tracking-[-0.08em]
                text-red-600
                select-none
              "
            >
              404
            </h1>

            <div className="mt-8 h-1 w-24 bg-red-600 rounded-full" />
          </div>

          {/* Right - Content */}
          <div className="md:border-l md:border-gray-200 md:pl-12">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600 mb-4">
              Page not found
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-5">
              Looks like this story
              <br />
              <span className="text-red-600">has gone missing.</span>
            </h2>

            <p className="text-gray-500 text-base sm:text-lg leading-8 max-w-md mb-8">
              The page you&apos;re looking for doesn&apos;t exist, may have
              been moved, or is no longer available.
            </p>

            <div className="flex flex-wrap items-center gap-4">

              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-red-600
                  text-white
                  px-6
                  py-3.5
                  rounded-md
                  font-semibold
                  shadow-sm
                  hover:bg-red-700
                  hover:shadow-md
                  transition-all
                  duration-200
                "
              >
                <span className="text-lg">←</span>
                Back to Home
              </Link>

              <Link
                href="/"
                className="
                  text-red-600
                  font-semibold
                  px-3
                  py-3.5
                  hover:text-red-700
                  transition-colors
                "
              >
                Read latest news →
              </Link>

            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm font-semibold text-gray-400">
            Bangla News 24
          </p>

          <p className="text-xs text-gray-400">
            Stay informed. Stay connected.
          </p>
        </div>

      </div>
    </main>
  );
};

export default NotFound;

