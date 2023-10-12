export const investmentDetails = [
    {
      label: "Account Type",
      desc: "",
      options: ["Individual", "Joint"]
    },
    {
      label: "Portfolio/Strategy Name",
      desc: "",
      options: ["Growth", "Income"]
    },
    {
      label: "Fund Fees Category",
      desc: "Fees preview according to selection",
      options: ["Low", "Medium", "High"]
    },
    {
      label: "Investment Category",
      desc: "Preview only when systematic transfer plan is selected",
      options: ["Equity", "Debt"]
    },
    {
      label: "Communication Address",
      desc: "(All further deliverables will be communicated on this address)",
      options: undefined
    },
    {
      label: "Country of Tax Residency",
      desc: "Preview only when systematic transfer plan is selected",
      options: ["USA", "Canada", "UK"]
    },
    {
      label: "No. of Account Holders",
      desc: "Preview only when systematic transfer plan is selected",
      options: ["1","2","3"]
    },
    {
      label: "Quantum of Investment",
      desc: "Preview only when systematic transfer plan is selected",
      options: undefined
    },
    {
      label: "Investment Mode",
      desc: "Preview only when systematic transfer plan is selected",
      options: ["Lump Sum", "SIP"]
    }
  ];
  
  
  

export const nomineeDetails = ["Nominee Name","Nominee PAN","Nominee Email Id","Contact no","DOB","Nominee Relationship with 1st Applicant","Nominee (%)"]

export const applicantDetails =[{
    label:"Applicant Name"
},{
    label:"Contact No",
    Button1:{label:"Send OTP",type:"outlined"}
},{
    label:"Enter Contact OTP",
    Button1:{label:"Verify OTP",type:"filled"},
    Button2:{label:"Re-Send OTP",type:"transparent"}
},{
    label:"Email Id",
    Button1:{label:"Send OTP",type:"outlined"}
},{
    label:"Enter Email OTP",
    Button1:{label:"Verify OTP",type:"filled"},
    Button2:{label:"Re-Send OTP",type:"transparent"}
},{
    label:"PAN No",
   
},{
    input:"dob"
},{
    text:"Upload scanned copy of PAN Card",
    Button1:{label:"Choose File",type:"outlined"},
    Button2:{label:"Upload",type:"filled"}
},{
    text:"Upload scanned copy of Aadhar Card",
    Button1:{label:"Choose File",type:"outlined"},
    Button2:{label:"Upload",type:"filled"}
},]

export const bankDetails =["Bank Name","Account No","Account Title","Bank IFSC Code"]

export const investmentRiskProfiler = [{
    label:"Investment Experience",
    radio:["0-3 yr","3-5 yr","5-7 yr",">7 yr"]
},{
    label:"Investment Style",
    radio:["Active","Pasive"]
},,{
    label:"How would you react if well diversified portfolio fells below 10%",
    radio:["Accumulate","Hold","Reduce","Exit"]
},   {
    label: "Investment Objective",
    options: ["Growth", "Income", "Capital Preservation"]
  },
  {
    label: "Risk Tolerance",
    options: ["Low", "Medium", "High"]
  },{
    label:"Investment Horizon",
    radio:["<3 yr","3-5 yr","5-7 yr",">10 yr"]
}]