// import "@/app/globals.css"

// export default function MyApp ({Component, ...pageProps}){
//     return(
//         <Component {...pageProps} />
//     )
// }

import { useState, useEffect } from 'react';
import "@/app/globals.css"
import Loader from '@/components/Home/Loader/Loader';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}

