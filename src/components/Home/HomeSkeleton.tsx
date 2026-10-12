
const NewsSectionSkeleton = () => {
  return (
    <section className="mx-auto w-full max-w-380 px-4 py-5 sm:px-6">
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12">
        {/* Featured News Skeleton */}
        <div className="min-w-0 lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {/* Featured Image */}
            <div className="aspect-video w-full animate-pulse bg-gray-200" />

            {/* Featured Content */}
            <div className="space-y-4 p-5 sm:p-6">
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />

              <div className="space-y-2">
                <div className="h-7 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-7 w-5/6 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="space-y-2 pt-1">
                <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
                <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-gray-100" />
              </div>
            </div>
          </div>

          {/* Pagination / Count */}
          <div className="mt-2 h-5 w-8 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Middle News List Skeleton */}
        <div className="min-w-0 lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`space-y-3 p-5 ${
                  index !== 3 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />

                <div className="space-y-2">
                  <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
                  {index === 0 || index === 2 ? (
                    <div className="h-6 w-4/5 animate-pulse rounded bg-gray-200" />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Numbered News Skeleton */}
        <div className="min-w-0 lg:col-span-2">
          <div className="space-y-8 rounded-2xl border border-gray-200 bg-white p-5">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Number */}
                <div className="h-5 w-4 shrink-0 animate-pulse rounded bg-red-100" />

                {/* News Title */}
                <div className="flex-1 space-y-2 pt-1">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                  {index === 6 && (
                    <div className="h-4 w-3/5 animate-pulse rounded bg-gray-200" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSectionSkeleton;
