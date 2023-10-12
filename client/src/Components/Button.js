import React from 'react';


const Button = ({ type, onClick, children }) => {
    let buttonStyle;
  
    switch (type) {
      case 'transparent':
        buttonStyle = ' text-[#0E4059] ';
        break;
      case 'outlined':
        buttonStyle = 'border-[2px] border-solid border-[#1EA596] text-[#1EA596]';
        break;
      case 'filled':
        buttonStyle = 'bg-[#1EA596] text-white';
        break;
     
    }
  
    return (
      <div
        className={`text-center py-[13px] rounded-[6px] min-w-[156px] h-[54px] ${buttonStyle}`}
        
      >
        {children}
      </div>
    );
  };
  

export default Button;