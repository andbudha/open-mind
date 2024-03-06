import toast from 'react-hot-toast';

export const toastSuccess = (message: string) =>
  toast.success(message, {
    duration: 6000,
    style: {
      border: '1px solid #FC6736',
      padding: '16px',
      color: '#FC6736',
    },
    iconTheme: {
      primary: '#FC6736',
      secondary: '#fff',
    },
  });
