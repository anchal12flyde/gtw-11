'use client'
import { useState, useEffect } from 'react';
import "@/app/globals.css"
import Loader from '@/components/Home/Loader/Loader';
import { FormProvider } from '@/context/FormContext';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> :<FormProvider> <Component {...pageProps} /></FormProvider>}
   <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: '#white', 
      color: 'black', 
      padding: '12px 20px',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      fontSize: '15px',
    },
  }}
/>

    </>
  );
}

