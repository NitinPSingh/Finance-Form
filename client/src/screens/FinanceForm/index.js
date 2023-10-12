import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import InvestmentDetail from '../../widgets/InvestmentDetails';
import InvestmentRiskProfiler from '../../widgets/InvestmentRiskProfiler';
import BankDetails from '../../widgets/BankDetails';
import NomineeDetails from '../../widgets/NomineeDetails';
import ApplicantDetails from '../../widgets/ApplicantDetails';
import { ApplicationDetailState, NomineeDetailState, initialStates, initialValues, validationSchema } from '../../Constants/validations';
import Button from '../../Components/Button';
import axios from 'axios';

function FinanceForm() {

    const [formData,setFormData] = useState(initialStates)
    const [captcha,setCaptcha] =useState(Math.floor(100000 + Math.random() * 900000));
    const [insertCaptcha,setInsertCaptcha] = useState();
    
    const changeValue = (key, value) => {
        setFormData(prevData => ({
          ...prevData,
          [key]: value
        }));
      };
    // const addAccountHolder = () =>{
    //     var newData  = formData;
    //     newData['Applicant Details'].push(ApplicationDetailState)
    //     setFormData(newData)
    // }
    // const removeAccountHolder = () =>{
    //     var newData  = formData;
    //     newData['Applicant Details'].pop();
    //     setFormData(newData)
    // }

    // const addNomineeDetail = () =>{
    //     var newData  = formData;
    //     newData['Nominee Details'].push(NomineeDetailState)
    //     setFormData(newData)
    // }
    // const removeNomineeDetail = () =>{
    //     var newData  = formData;
    //     newData['Nominee Details'].pop();
    //     setFormData(newData)
    // }

    const handleSumbit = (values, { setSubmitting }) => {
       console.log(formData)
        // if(captcha == insertCaptcha){
        //     const url = 'http://localhost:3001/insert'; // Replace with your API endpoint

        //     axios.post(url, formData)
        //     .then((response) => {
                
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
                
        //         console.error(error);
        //     });
        // }else{
        //     alert("wrong captcha")
        // }
        
      };

    return (
        <>
        <div className='pt-[88px] pb-[31px]  w-full  text-[#0E4059]  bg-[#FFF] text-center text-[24px]'>Welcome Investor, 
        <br /><span className='text-[#1EA596] font-semibold'>"To a World of Sustainable Wealth Creation"</span>
        <div className='h-[19px]'/> 
            A Financial Journey filled with capitalization of enormous wealth opportunity in an economic transition.</div>
        <div className='container !max-w-[1128px]'>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} 
        onSubmit={handleSumbit}
        >
            <Form>
                <InvestmentDetail data={formData} changeValue={changeValue}/>
                 <ApplicantDetails data={formData} changeValue={changeValue}/>
                  <BankDetails data={formData} changeValue={changeValue}/>
                <NomineeDetails />
                <InvestmentRiskProfiler />
                        <div className='pt-[81px] pb-[96px] container  text-[22px]'>
            <div className='text-[#0E4059] pb-[51px]'>I / We understand, the above informatio provided is correct to the best of my knowledge / belief, and understand the adversities / risk tolerance arising from mis - placement of information / data in any manner</div>
            <div className='w-[351px] self-start grid gap-y-[39px]'>
            <div className='h-[140px] bg-[#D9D9D9] grid justify-center items-center' onClick={()=>setCaptcha(Math.floor(100000 + Math.random() * 900000))}>{captcha}</div>
            <div>
            <label htmlFor="textInput">Enter Captcha</label>
                   <br/>
                    <input 
                    type="text" 
                    id="textInput" 
                    className='w-full h-[65px]'
                   onChange={(e)=>setInsertCaptcha(e.target.value)}
                    />
                    </div>

                </div>
                </div>
                <button type="submit">Submit</button>
            </Form>

            
        </Formik>

        </div>
        </>
    );
}

export default FinanceForm;