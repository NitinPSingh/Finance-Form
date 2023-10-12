import React, { useState } from 'react';
import { nomineeDetails } from '../../Constants';
import InputNoLabel from '../../Components/InputNoLabel';
import HighlightedText from '../../Components/HighlightedText';
import DateInput from '../../Components/DateInput';

const NomineeDetails = () => {
    const [opt,setOpt] = useState(1);
    const types = ["1st","2nd","3rd"]
    const selectStyle = {
       
        strokeWidth: '3px',
        stroke: '#1EA596',
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'22\' height=\'13\' viewBox=\'0 0 22 13\' fill=\'none\'><path d=\'M19.6191 2L10.6191 11L1.61914 2\' stroke=\'%231EA596\' stroke-width=\'3\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/></svg>")',
        backgroundPosition: 'right 31px center',
        backgroundRepeat: 'no-repeat',
        paddingRight: '30px', 
      };
    return (
        <div className=' pb-[85px]'>
    <div className='dropwdown grid grid-cols-[264px,850px]  gap-x-[14px] pb-[42px]'>
        
        <HighlightedText text={"Nominee Detail"} width='264px'/>
        <select
          id="dropdown"
          className='appearance-none w-full p-[16px] h-[4.06rem] border-[#787878] rounded-[6px] border-solid border-[1px] bg-[#fff]'
          value={opt}
          style={selectStyle}
          onChange={(e)=>setOpt(parseInt(e.target.value))}
        >{console.log(typeof opt)}
          <option value={1} className='text-2xl'>1</option>
          <option value={2} className='text-2xl'>2</option>
          <option value={3} className='text-2xl'>3</option>
         
          
        </select>
        
       
        

        
      </div>
   
      {[...Array(opt)].map((_,_i) =>(
        <div className='dropwdown grid grid-cols-[278px,850px] gap-y-[52px]  pb-[42px] gap-row-[52px]'>
            <div></div>  <HighlightedText text={`${types[_i]} Nominee Detail`} width='264px'/>
            {nomineeDetails.map((i)=>
                
            <><div></div>{(i!="DOB")?<InputNoLabel inputName={i}/>:<DateInput />}</>
           
            )}
             </div>))}
             </div>
       
    );
};

export default NomineeDetails;