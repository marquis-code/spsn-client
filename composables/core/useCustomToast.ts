import { ref } from 'vue';

export interface ToastOptions {
  title: string;
  message: string;
  toastType?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

export const useCustomToast = () => {
  const showToast = (options: ToastOptions) => {
    // In a real implementation with a toast library like vue-toastification
    // we would call the library function here.
    // For now, we use a basic reactive state or browser alert/log.
    console.log(`[TOAST - ${options.toastType || 'info'}]: ${options.title} - ${options.message}`);
    
    // Example using a simple alert for visibility during dev if no library is linked
    // alert(`${options.title}: ${options.message}`);
  };

  return { showToast };
};
