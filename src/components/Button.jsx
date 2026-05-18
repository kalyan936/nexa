import React from 'react';

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  let baseStyles = "transition-all active:scale-[0.98] ";
  let variants = {
    primary: "bg-primary text-on-primary hover:translate-y-[-2px]",
    outline: "border border-primary text-primary hover:bg-primary/5 transition-colors",
    text: "text-secondary hover:gap-4 flex items-center gap-2"
  };

  const finalClassName = className || variants[variant] || variants.primary;

  return (
    <button 
      className={`${baseStyles} ${finalClassName}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
