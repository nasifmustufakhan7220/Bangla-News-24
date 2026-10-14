import CategoryProducts from '@/components/CategoryProducts';
import React, { Suspense } from 'react';

const CategoryDetailsPage = ({params}:{params: Promise<{categorySlug: string}>}) => {

    return (
        <div>
            <Suspense fallback={<p>Loading....</p>}>
                <CategoryProducts params={params}/>
            </Suspense>        
        </div>
    );
};

export default CategoryDetailsPage;