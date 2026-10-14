import CategoryNewsSkeleton from '@/components/CategoryNewsSkeleton';
import CategoryProducts from '@/components/CategoryProducts';
import React, { Suspense } from 'react';

const CategoryDetailsPage = ({params}:{params: Promise<{categorySlug: string}>}) => {

    return (
        <div>
            <Suspense fallback={<CategoryNewsSkeleton/>}>
                <CategoryProducts params={params}/>
            </Suspense>        
        </div>
    );
};

export default CategoryDetailsPage;