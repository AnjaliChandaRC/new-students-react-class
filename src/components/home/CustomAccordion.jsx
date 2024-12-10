import React, { useRef, useState } from 'react';
import { ACCORDION_DATA } from '../common/Helper';

const CustomAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='max-w-[700px] mx-auto py-10'>
            {ACCORDION_DATA.map((obj, index) => (
                <div key={index} className='bg-slate-600 rounded-2xl p-7 mt-4'>
                    <div
                        className='flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out'
                        onClick={() => toggleAccordion(index)}
                    >
                        <h2 className='text-2xl font-bold text-white'>{obj.questions}</h2>
                        <p className='text-2xl font-bold text-white'>{activeIndex === index ? '-' : '+'}</p>
                    </div>
                    <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        style={{
                            maxHeight:
                                activeIndex === index
                                    ? contentRefs.current[index]?.scrollHeight + 'px'
                                    : '0px',
                        }}
                        className='overflow-hidden transition-max-height duration-500 ease-in-out'
                    >
                        <p className='text-base font-bold text-white mt-2'>{obj.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomAccordion;
