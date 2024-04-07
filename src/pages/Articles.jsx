import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ArticleCards from '../cards/ArticleCards';

const Articles = () => {
    const articles = useLoaderData();
    return (
        <div className='items-center'>
            <div className='flex justify-center'>
                <h1 className='font-semibold text-lg text-center border bg-blue-100 w-5/6'>Original Articles</h1>
            </div>

            {/* <hr /> */}
            <div className=''>
                {
                    articles.map((article, index) =>
                    <ArticleCards key={article._id} index={index} article={article}></ArticleCards> )
                }
            </div>
        </div>
    );
};

export default Articles;