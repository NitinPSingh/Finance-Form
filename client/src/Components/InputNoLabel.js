import React from 'react';
import { ErrorMessage, Field, } from 'formik';
const InputNoLabel = ({inputName,changeValue}) => {
    return (
       <>
    
      
      <div className='w-full relative flex flex-col'>
        <Field type="text" name={inputName} onSubmit={(e)=>{changeValue(inputName,e.target.value)}} className=' p-[16px]  !w-full text-2xl h-[4.06rem] border-[#787878] rounded-[6px] border-solid border-[1px] bg-[#fff]' placeholder={inputName} />
        <ErrorMessage name={inputName} component="div" className="error  bottom-[0] text-[red] text-xl" />
        </div>
        </>


    );
};

export default InputNoLabel;