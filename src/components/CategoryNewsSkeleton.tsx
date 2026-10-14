import NewsCardSkeleton from "./NewsCardSkeleton";


const CategoryNewsSkeleton = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-3 py-3">
      {/* Section heading */}
      <div className="mb-3 border-b-2 border-red-500 pb-2">
        <div className="h-4 w-24 animate-pulse rounded-sm bg-gray-200" />
      </div>

      {/* Breadcrumb skeleton */}
      <div className="mb-3 flex items-center gap-2">
        <div className="h-2.5 w-10 animate-pulse rounded-sm bg-gray-200" />
        <div className="h-2.5 w-2 animate-pulse rounded-sm bg-gray-200" />
        <div className="h-2.5 w-16 animate-pulse rounded-sm bg-gray-200" />
      </div>

      {/* News cards grid */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 15 }).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export default CategoryNewsSkeleton;