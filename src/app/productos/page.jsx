import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default async function Productos() {
  const data = await fetch(
    "https://raw.githubusercontent.com/andresAgudelo0101/retro-cafe-data-products/refs/heads/main/data.json"
  );
  const posts = await data.json();

  return (
    <>
      <Header />
      <div className="w-full h-auto min-h-screen bg-colores-1 grid justify-center items-center p-2">
        <div className=" w-full h-auto ">
          <h1 className="font-fuente md:text-6xl text-center text-5xl tracking-wide text-colores-3 p-4">
            Todos los productos
          </h1>
          <div className=" text-colores-2">
            <Link href={"/producto/Health & Fitness"}>cartegoria 1</Link>
            <Link href={"/producto/Travel"}>categoria 2</Link>
            <Link href={"/producto/Technology"}>categoria 3</Link>
            <Link href={"/producto/Science"}>categoria 4</Link>
          </div>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 gap-3 p-4 ">
          {posts.data.map((prod) => (
            <div
              className="bg-colores-2 rounded-lg flex flex-col p-3 items-center md:max-w-80  place-content-between"
              key={prod?.id}
            >
              <img
                className="p-4 rounded-t-lg  w-auto max-h-48"
                src={prod?.imagen}
                alt={prod?.name}
              />
              <div className="flex justify-items-start w-full">
                <h2 className=" font-semibold text-lg">{prod?.nombre}</h2>
              </div>
              <div className="flex justify-items-start w-full">
                <h3 className="font-ligth text-sm">{prod?.descripcion}</h3>
              </div>
              <div className=" w-full ">
                <h2 className=" font-bold text-xl text-colores-3 ">
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
