import React from 'react';

const NewsDetails = async({params}:{params:Promise<{articleId: string}>}) => {
    const {articleId} = await params;
    console.log(articleId);
    return (
        <div>
            
        </div>
    );
};

export default NewsDetails;