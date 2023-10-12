import React, { useEffect } from 'react';

import { investmentDetails } from '../../Constants';
import SelectInputWithLabel from '../../Components/SelectInputWithLabel';
import InputNoLabel from '../../Components/InputNoLabel';
import GridHolder from '../../Components/GridHolder';
import HighlightedText from '../../Components/HighlightedText'


const InvestmentDetail = ({data,changeValue}) => {
    useEffect(()=>{console.log("rrreeee")},)
    return (
        <div className='text-2xl flex flex-col w-full justify-between container w-[1128px] gap-[42px] pt-[35px] pb-[50px] '>
            <HighlightedText className='mb-[32px]' text="Investment Detail"/>
           {investmentDetails.map((i,_i)=>{
            return <GridHolder key={_i} first={<div>
                <div className='text-[22px]'> {i.label} </div>
                 <div className='text-lg text-[#404040]'> {i.desc}</div>  
             </div>}
                second={
                    i.options?<SelectInputWithLabel label={i.label} options={i.options} data={data} changeValue={changeValue} />:<InputNoLabel inputName={i.label}/>
                }
             />
           })}
        </div>
    );
};

export default InvestmentDetail;