import React, { useState } from 'react';
import { bankDetails } from '../../Constants';
import GridHolder from '../../Components/GridHolder';
import InputNoLabel from '../../Components/InputNoLabel';
import HighlightedText from '../../Components/HighlightedText';

const RadioButton = {
        
}
const BankDetails = () => {
    const [enable,setEnable] = useState("Bank Details")
  
    const But = () => (<div className='inline-flex gap-[96px]'>
    <button onClick={()=>setEnable("Cancelled Cheque")} className="grid grid-cols-[20px,auto]  pl-[14px] font-medium text-[24px] w-[263px] h-[53px] rounded-[6px]" style={enable=="Cancelled Cheque"?{border:"1px solid #1EA596"}:{border: "1px solid #787878",color:"#787878"}}>
        <input type="radio" className="w-[18px] h-[18px] self-center" style={{accentColor:"#1EA596"}} checked={enable=="Cancelled Cheque"?true:false} id="radioButton" />
        <div className='justify-self-start ml-[6px] self-center'>
            Cancelled Check

        </div>
    </button>

    <button onClick={()=>setEnable("Bank Details")} className="grid grid-cols-[20px,auto]  pl-[14px] font-medium text-[24px] w-[263px] h-[53px] rounded-[6px]" style={enable=="Bank Details"?{border:"1px solid #1EA596"}:{border: "1px solid #787878",color:"#787878"}}>
        <input type="radio" className="w-[18px] h-[18px] self-center" style={{accentColor:"#1EA596"}} checked={enable=="Bank Details"?true:false} id="radioButton" />
        <div className='justify-self-start ml-[6px] self-center'>
            Bank Details

        </div>
    </button>

   
    </div>)

    return (
        <div className='grid gap-y-[52px] pt-[75px] pb-[85px]'>
            <GridHolder first={<HighlightedText text={"Bank Preference"} />} second={<But />}/>
            {bankDetails.map((i)=>
                <GridHolder first={<></>} second={<InputNoLabel inputName={i} />} />
           )}
        </div>
    );
};

export default BankDetails;