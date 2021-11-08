import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp
