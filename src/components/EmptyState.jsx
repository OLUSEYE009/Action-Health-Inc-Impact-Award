import React from 'react';
import { InboxIcon } from 'lucide-react';
import Button from './Button';

const EmptyState = ({
  icon: Icon = InboxIcon,
  title = 'No content yet',
  description = 'Get started by creating your first item',
  action,
  actionLabel = 'Create',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      <div className="mb-4 p-4 bg-gray-100 dark:bg-dark-card rounded-full">
        <Icon className="w-12 h-12 text-gray-400 dark:text-gray-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
        {description}
      </p>
      {action && (
        <Button onClick={action} variant="primary">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
