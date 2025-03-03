import Header from "../components/header";
import Footer from "../components/footer";
import { data } from "./data";
export default function Productos() {
  return (
    <>
      <Header />
      <div className="w-full h-auto min-h-screen bg-gray-200 grid justify-center items-center p-2">
        <div className="grid grid-cols-2  md:grid-cols-3 gap-3 px-4 py-3">
          {data.map((prod) => (
            <div className="bg-black rounded-lg flex flex-col p-3 items-center md:max-w-80">
              <img
                className="p-4 rounded-t-lg  w-auto max-h-48"
                src={prod?.imagen}
                alt={prod.nombre}
              />
              <div className="flex justify-items-start w-full">
                <h2 className=" font-semibold text-lg">{prod.nombre}</h2>
              </div>
              <div className="flex justify-items-start w-full">
                <h3 className="font-ligth text-sm">{prod.descripcion}</h3>
              </div>
              <div className="flex justify-items-start w-full">
                <h2 className=" font-bold text-xl text-fuchsia-400 ">
                  $ {prod.precio}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
