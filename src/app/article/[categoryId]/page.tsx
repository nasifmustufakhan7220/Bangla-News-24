import NewsDetails from '@/components/NewsDetails';
import React, { Suspense } from 'react';

const CategoryDetailsPage = ({params}:{params:Promise<{categoryId:string}>}) => {

    return (
        <div>
            <Suspense fallback={<p>Loading....</p>}>
                <NewsDetails params={params} />
            </Suspense>        
        </div>
    );
};

export default CategoryDetailsPage;