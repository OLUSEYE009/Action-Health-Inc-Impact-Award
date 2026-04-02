import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  glass = false, 
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-lg bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 transition-all';
  
  const glassClasses = glass ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/20' : '';
  
  const hoverClasses = hover ? 'hover:shadow-lg dark:hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/30' : '';
  
  const shadowClasses = glass ? '' : 'shadow-sm dark:shadow-md';

  return (
    <div 
      className={`${baseClasses} ${glassClasses} ${hoverClasses} ${shadowClasses} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex gap-2 ${className}`} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardContent, CardFooter };
export default Card;
