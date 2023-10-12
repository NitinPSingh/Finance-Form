import React from 'react';

const GridHolder = ({first,second,third,fourth}) => {
    return (
        <div className='grid grid-cols-[264px,850px] gap-x-[14px] relative'>
            <div>{first}</div>
            <div className="flex justify-between gap-[43px]">
                {second}
                {third}
                {fourth ?? fourth}
            </div>
        </div>
    );
};

export default GridHolder;