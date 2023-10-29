import '../styles/global.css';
import { AuthContextProvider } from '@/context/authContext';
export default function App({ Component, pageProps }) {
    return<AuthContextProvider> <Component {...pageProps} /></AuthContextProvider>;
}