import Navbar from "@/app/components/navbar/Navbar";
import Home from "@/app/components/home/Home";
import Footer from "@/app/components/footer/Footer";
import {store} from '../redux/store';
import { Provider } from 'react-redux'

export default function Index() {
    return (
      <>
      <Provider store={store}>
        <Navbar />
        <Home />
        <Footer/>
      </Provider>
       
      </>
    );
  }