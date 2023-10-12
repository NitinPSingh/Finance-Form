import React, { useState, useEffect } from 'react';
import SelectInputWithLabel from './SelectInputWithLabel';

const DateInput = () => {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [daysInMonth, setDaysInMonth] = useState(31);

  useEffect(() => {
    const daysInMonths = {
      '1': 31, '2': 28, '3': 31, '4': 30, '5': 31, '6': 30,
      '7': 31, '8': 31, '9': 30, '10': 31, '11': 30, '12': 31
    };

    if (month !== '' && year !== '') {
      if (month === '2') {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
          setDaysInMonth(29);
        } else {
          setDaysInMonth(28);
        }
      } else {
        setDaysInMonth(daysInMonths[month]);
      }
    }
    console.log("called")

   
  }, [date,month, year]);

  let yearOpt = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  let monthOpt = Array.from({ length: 12 }, (_, i) => i + 1);
  // let dayOpt = { length: 2006 - 1970 }, (_, i) => 1970 + i);
  return (
    <div className='flex '>
    
    
    <SelectInputWithLabel def ="YYYY" label={"Year"} options={[...Array.from({ length: 2006 - 1970 }, (_, i) => 1970 + i)]} />
        <SelectInputWithLabel def ="MM" label={"Month"} options={[...Array.from({ length: 12 }, (_, i) => i + 1)]} />
        <SelectInputWithLabel def ="DD" label={"Date"} options={[...Array.from({ length: daysInMonth }, (_, i) => i + 1)]} />
   
   
   
  </div>
  );
}

export default DateInput;
