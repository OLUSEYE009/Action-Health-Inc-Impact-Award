import React from 'react';
import { motion } from 'framer-motion';

const Progress = ({
  value = 0,
  max = 100,
  label,
  showPercentage = true,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const percentage = (value / max) * 100;

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const variantColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-200 dark:bg-dark-card rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <motion.div
          className={`${variantColors[variant]} rounded-full h-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default Progress;
