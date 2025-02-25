import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import Inicio from "./inicio/Inicio";

export default function Home() {
  return (
  <div className="grid">
    <Header />
    <Inicio />
    <Footer/>
  </div>
  )
};
    
