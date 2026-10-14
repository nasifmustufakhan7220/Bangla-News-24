import NewsDetails from '@/components/NewsDetails';
import NewsDetailsSkeleton from '@/components/NewsDetailsSkeleton';
import React, { Suspense } from 'react';

const NewsDetailsPage = ({params}:{params: Promise<{articleId:string}>}) => {
    return (
        <div>
            <Suspense fallback={<NewsDetailsSkeleton/>}>
                <NewsDetails params={params} />
            </Suspense>
        </div>
    );
};

export default NewsDetailsPage;