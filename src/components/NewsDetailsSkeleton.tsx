
const NewsDetailsSkeleton = () => {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-5 sm:px-6">
      {/* News Title */}
      <div className="mb-4 space-y-2">
        <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-4/5 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Short Description */}
      <div className="mb-4 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Author / Date */}
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-12 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Divider */}
      <div className="mb-4 border-y border-gray-200 py-1" />

      {/* Main News Image */}
      <div className="mb-1 aspect-video w-full animate-pulse rounded bg-gray-200" />

      {/* Image Caption */}
      <div className="mb-4 h-3 w-4/5 animate-pulse rounded bg-gray-200" />

      {/* News Paragraphs */}
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-11/12 animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-4/5 animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>

      {/* Second News Image */}
      <div className="mt-5">
        <div className="aspect-video w-full animate-pulse rounded bg-gray-200" />
        <div className="mt-2 h-3 w-3/4 animate-pulse rounded bg-gray-200" />
      </div>

      {/* More News Paragraphs */}
      <div className="mt-4 space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-10/12 animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-3/4 animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </article>
  );
};

export default NewsDetailsSkeleton;
