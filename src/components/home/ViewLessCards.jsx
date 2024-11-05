import React, { useState } from 'react';

const ViewLessCards = () => {
    const [view, setView] = useState(false);

    const toggleView = () => setView(!view);

    return (
        <>
            <h2 className='text-4xl font-bold text-center pt-5'>View/Less Cards</h2>
            <div className='m-10 flex justify-center flex-wrap'>
                {[...Array(view ? 6 : 3)].map((_, index) => (
                    <div key={index} className='w-[30%] bg-black h-[500px] mx-5 mt-8'></div>
                ))}
                <button
                    className='bg-black text-white text-xl font-bold p-4 mt-4'
                    onClick={toggleView}
                >
                    {view ? "Less" : "View"}
                </button>
            </div>
        </>
    );
};

export default ViewLessCards;
