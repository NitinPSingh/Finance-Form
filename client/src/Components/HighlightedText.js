import React from 'react';

const HighlightedText = ({text,width='100%'}) => {
    return (
        <div className={`bg-[#0E4059] py-[12px] px-[17px] text-[#fff] self-centre font-medium text-[28px] h-[51px] flex items-center w-full `}>{text}</div>
    );
};

export default HighlightedText;