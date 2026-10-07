import CategoryNews from "@/components/CategoryNews";
import { Suspense } from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
        <CategoryNews params={params} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
