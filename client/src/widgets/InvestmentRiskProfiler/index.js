import React from 'react';
import HighlightedText from '../../Components/HighlightedText';
import { investmentRiskProfiler } from '../../Constants';
import SelectInputWithLabel from '../../Components/SelectInputWithLabel';
import { ErrorMessage, Field } from 'formik';


const GridHolder2 = ({first,second}) =>{
    return  <div className='grid grid-cols-[457px,647px] gap-x-[24px] '>
    <div>{first}</div>
    <div className="flex justify-between gap-[43px]">
        {second}
        
       
    </div>
    </div>
}


const InvestmentRiskProfiler = () => {


  
    const RadioBut = ({name,opt}) => (<div className='flex flex-col '>
      <div className='flex gap-[32px]'>{opt.map((option, index) => (
        <div key={index} className="">
          <label>
            <Field
              type="radio"
              name={name}
              value={option}
            //   checked={}
            //   onChange={}
              className="mr-2 w-[18px] h-[20px]"
            />
            {option}
          </label>
          
        </div>))}
        </div>
        <ErrorMessage  name={name}  component="div" className="error text-[red] text-xl" />
        </div>)
    return (
        <div className='grid gap-y-[42px] text-[24px] container pb-[112px]'>
            <HighlightedText text="Investment Risk Profiler" />
            <div className='text-center text-[#0E4059] text-[24px] pb-[62px]'>
              <div>Welcome to <span className='text-[#1EA596]'>Risk Profiler</span></div>
            <div>Your Investment is utmost as important as understanding your emotional risk appetite</div>
            </div>
            {investmentRiskProfiler.map((i)=>
           <GridHolder2 first={<div className='text-[24px]'>{i.label}</div>} second={i?.radio?<RadioBut name={i.label} opt={i.radio}/>:<SelectInputWithLabel label={i.label} options={i.options}/> }/>
           
            )}
        </div>
    );
};

export default InvestmentRiskProfiler;