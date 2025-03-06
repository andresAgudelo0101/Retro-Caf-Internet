import Footer from "../components/footer";
import Header from "../components/header";
import Map from ".";

export default function Contacto() {
  return (
    <>
      <Header />
      <div className="w-100 md:h-[75vh] h-auto bg-colores-1 grid    md:grid-cols-2 justify-center items-center p-4 gap-1">
        <div className="md:col-span-2 w-full h-auto ">
          <h1 className="font-fuente md:text-6xl text-4xl  text-left md:text-center tracking-wide text-colores-3 p-5">
            Visitanos en
          </h1>
        </div>
        <div className="w-full  h-full grid grid-cols-1  gap-4 md:gap-0 md:grid-cols-2 p-4 bg-colores-2 md:items-center rounded-md">
          <div>
            <h2 className=" text-colores-1 md:text-2xl  text-xl font-fuente">
              Dirección
            </h2>
            <p className="md:text-xl text-lg text-colores-1">
              Calle 18 # 21 - 29, Retiro, Antioquia
            </p>
          </div>
          <div>
            <h2 className=" text-colores-1 md:text-2xl text-xl font-fuente">
              Horario de Apertura
            </h2>
            <div className="md:text-xl text-lg text-colores-1">
              <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
              <p>Sábado: 10:00 AM - 8:00 PM</p>
              <p>Domingo: 7:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
        <div className=" bg-colores-1 h-full flex items-center rounded-md">
          <Map />
        </div>
      </div>
      <Footer />
    </>
  );
}
