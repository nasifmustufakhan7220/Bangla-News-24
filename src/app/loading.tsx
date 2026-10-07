
const LoadingPage = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">

        {/* Brand Accent */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-1 w-10 bg-red-600 rounded-full" />

          <span className="text-sm font-bold tracking-[0.2em] uppercase text-red-600">
            Bangla News 24
          </span>

          <span className="h-1 w-10 bg-red-600 rounded-full" />
        </div>

        {/* Loading Indicator */}
        <div className="relative mx-auto mb-10 w-20 h-20">

          {/* Static Ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-red-100" />

          {/* Animated Ring */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              border-[3px]
              border-transparent
              border-t-red-600
              animate-spin
            "
          />

          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Loading the latest news
        </h1>

        {/* Description */}
        <p className="max-w-md mx-auto text-gray-500 text-base sm:text-lg leading-7">
          Please wait a moment while we bring the latest stories
          and updates to you.
        </p>

        {/* Progress Line */}
        <div className="mt-10 mx-auto w-full max-w-xs">
          <div className="h-1 rounded-full bg-red-100 overflow-hidden">
            <div
              className="
                h-full
                w-1/2
                rounded-full
                bg-red-600
                animate-[loading_1.5s_ease-in-out_infinite]
              "
            />
          </div>
        </div>

        {/* Status */}
        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />

          <span className="text-sm font-medium text-gray-400">
            Fetching stories...
          </span>
        </div>

        {/* Bottom Branding */}
        <div className="mt-16 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Stay informed. Stay connected.
          </p>
        </div>

      </div>
    </main>
  );
};

export default LoadingPage;

