import Navbar from "@/app/components/navbar/Navbar";
import Home from "@/app/components/home/Home";
import Footer from "@/app/components/footer/Footer";
import { AuthContextProvider } from "@/context/authContext";


export default function Index() {
    return (
      <>
        <AuthContextProvider>
        <Navbar />
        <Home />
        <Footer/>

        </AuthContextProvider>
       
      
       
      </>
    );
  }