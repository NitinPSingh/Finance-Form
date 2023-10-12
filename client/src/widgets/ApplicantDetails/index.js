import React from 'react';
import GridHolder from '../../Components/GridHolder';
import HighlightedText from '../../Components/HighlightedText';
import { applicantDetails } from '../../Constants';
import InputNoLabel from '../../Components/InputNoLabel';
import Button from '../../Components/Button';

const ApplicantDetails = ({data,changeValue}) => {
    return (
        <div className='pt-[75px] pb-[85px]'>
            <GridHolder first={<HighlightedText text="Applicant Details" />} second={<HighlightedText text={"1st Account holder"}/>} />
            <div className='pt-[35px] grid gap-[52px]'>
            {applicantDetails.map((i)=><GridHolder 
                first={<></>}
                second={i?.label ? <InputNoLabel data={data} changeValue={changeValue} inputName={i.label} />: <div className='w-full text-[#0E4059] text-2xl'>{i.text}</div>}
                third={i?.Button1? <Button type={i.Button1.type} children={i.Button1.label} />:undefined}
                fourth={i?.Button2? <Button type={i.Button2.type} children={i.Button2.label} />:undefined}
            />)}
            </div>
        </div>
    );
};

export default ApplicantDetails;