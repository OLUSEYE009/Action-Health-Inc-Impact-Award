import { useUI } from '../context/UIContext';

export const useNotifications = () => {
  const { success, error, warning, info } = useUI();

  return {
    success,
    error,
    warning,
    info,
  };
};
