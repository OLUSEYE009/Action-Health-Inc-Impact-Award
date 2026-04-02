import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import { useUI } from '../context/UIContext';

const Toast = () => {
  const { notifications, removeNotification } = useUI();

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900';
      case 'error':
        return 'bg-red-50 dark:bg-red-900';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900';
      default:
        return 'bg-blue-50 dark:bg-blue-900';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20, x: 300 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 300 }}
            className={`${getBgColor(notification.type)} p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-sm backdrop-blur-sm border border-opacity-20`}
          >
            {getIcon(notification.type)}
            <span className="flex-1 text-sm font-medium dark:text-white">{notification.message}</span>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
