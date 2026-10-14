import NewsDetails from '@/components/NewsDetails';
import React, { Suspense } from 'react';

const NewsDetailsPage = ({params}:{params: Promise<{articleId:string}>}) => {
    return (
        <div>
            <Suspense fallback={<p>Loading......</p>}>
                <NewsDetails params={params} />
            </Suspense>
        </div>
    );
};

export default NewsDetailsPage;