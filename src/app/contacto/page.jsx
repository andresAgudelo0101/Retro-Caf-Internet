import Footer from "../components/footer";
import Header from "../components/header";
import Map from ".";

export default function Contacto() {
  return (
    <>
      <Header />
      <div className="w-100 h-auto bg-colores- grid grid-cols-1   md:grid-cols-2 justify-center items-center p-6 gap-1">
        <div className="md:col-span-2 w-full h-auto ">
          <h1 className="font-fuente text-6xl  tracking-wide text-red-500 p-2">
            Escribenos
          </h1>
        </div>
        <div className="w-full  h-96  "></div>
        <div>
          <Map />
        </div>
      </div>
      <Footer />
    </>
  );
}
