const NewsCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
      {/* Image skeleton */}
      <div className="h-24 w-full animate-pulse bg-gray-200 sm:h-28 md:h-32 lg:h-36" />

      <div className="space-y-2 p-2">
        {/* Category */}
        <div className="h-2.5 w-12 animate-pulse rounded-sm bg-red-100" />

        {/* Title */}
        <div className="space-y-1.5">
          <div className="h-3 w-full animate-pulse rounded-sm bg-gray-200" />
          <div className="h-3 w-4/5 animate-pulse rounded-sm bg-gray-200" />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <div className="h-2 w-full animate-pulse rounded-sm bg-gray-100" />
          <div className="h-2 w-[90%] animate-pulse rounded-sm bg-gray-100" />
          <div className="h-2 w-3/5 animate-pulse rounded-sm bg-gray-100" />
        </div>

        {/* Date and author */}
        <div className="h-2 w-2/3 animate-pulse rounded-sm bg-gray-100" />
      </div>
    </div>
  );
};

export default NewsCardSkeleton;