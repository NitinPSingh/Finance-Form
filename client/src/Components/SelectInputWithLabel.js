import { Field,ErrorMessage } from 'formik';
import React, { useEffect } from 'react';

const SelectInputWithLabel = ({label,options,data,changeValue,def}) => {
  

    const selectStyle = {
       
        strokeWidth: '3px',
        stroke: '#1EA596',
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'22\' height=\'13\' viewBox=\'0 0 22 13\' fill=\'none\'><path d=\'M19.6191 2L10.6191 11L1.61914 2\' stroke=\'%231EA596\' stroke-width=\'3\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/></svg>")',
        backgroundPosition: 'right 31px center',
        backgroundRepeat: 'no-repeat',
        paddingRight: '30px', 
      };

    return (
    
        
        <div className='flex flex-col w-full'>
        <Field as="select" name={label}
          id="dropdown"
          className='appearance-none relative !w-full p-[16px] h-[4.06rem] border-[#787878] rounded-[6px] border-solid border-[1px] bg-[#fff]'
          style={selectStyle}
          
          onSubmit={(e)=>changeValue(label,e.target.value)}
        >
          <option value="" className='text-2xl'>{def || "Select"}</option>
         
           {options.map((i)=> <option key={i} value={i} className='text-2xl'>{i}</option>)}
          
        </Field>
        <ErrorMessage  name={label}  component="div" className="error  bottom-[-10px] text-[red] text-xl" />
      </div>
      
    );
};

export default SelectInputWithLabel;