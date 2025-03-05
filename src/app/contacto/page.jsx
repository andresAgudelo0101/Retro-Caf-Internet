
import Footer from "../components/footer";
import Header from "../components/header";
import Map from ".";


export default function Contacto() {

  return (
    <>
      <Header />
      <div className="w-100 h-screen bg-white grid grid-cols-1 md:grid-cols-2 justify-center items-center p-6 gap-2">
        <div className="w-full bg-slate-900 h-96">
          <h1>Escribenos</h1>
        </div>
        <Map/>
      </div>
      <Footer />
    </>
  );
}
