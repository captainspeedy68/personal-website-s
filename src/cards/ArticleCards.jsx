import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ArticleCards = ({ article, index }) => {
    const { title, authors, journal, link, year, pages, database, volume, impact_factor } = article;
    const isValid = (linkString) => {
        const hasUnbalancedBrackets = /\[[^\]]*$|[^(]*\]/.test(linkString);
        if (hasUnbalancedBrackets) {
            return false;
        }
        else {
            return true;
        }
    }
    return (
        <div>
            <div className="rounded-lg md:flex w-5/6 overflow-hidden bg-white shadow-md my-5 mx-auto">
                {/* <img src={photo} alt="Movie" className=" h-fit w-fit object-cover" /> */}
                <div className="flex items-center justify-center py-2 px-4 border-r border-gray-300 min-w-20">
                    <h1 className='text-xl font-bold text-gray-800'>{index + 1}</h1>
                </div>

                <div className="md:flex px-10 flex-col space-y-2 p-2">
                    <h2 className="text-xl font-bold text-gray-800">{title}
                        {
                            journal && <span className='font-normal text-blue-500'> <span className='text-xl font-normal text-gray-800'>||</span>  {journal} </span>
                        }
                        {
                            database && <span className="font-normal">|| {database}</span>
                        }
                    </h2>
                    {
                        authors &&
                        <p className="text-gray-600"><span className='font-medium'>Authors:</span> {authors}</p>
                    }
                    {
                        year &&
                        <div>
                            <span className="text-gray-600 pr-1"><span className='font-medium'>Year:</span> {year} </span>
                            {
                                volume &&
                                    <span className="text-gray-600 p-1"><span className='font-medium'>Volume:</span> {volume}</span>
                                
                            }
                            {
                                pages && <span className="text-gray-600 p-1"><span className='font-medium'>Pages:</span> {pages}</span>
                            }
                            {
                                impact_factor && <span className="text-gray-600 p-1"><span className='font-medium'>IF:</span> {impact_factor}</span>
                            }
                        </div>
                        
                    }

                    {link && isValid(link) && (
                        <a className="text-xs font-thin text-gray-500" href={link} target="_blank">
                            <span className='font-semibold' >Link: </span>
                             {link}
                        </a>
                    )}

                </div>
            </div>
            {/* <ToastContainer autoClose={1000}></ToastContainer> */}
        </div>
    );
};

export default ArticleCards;