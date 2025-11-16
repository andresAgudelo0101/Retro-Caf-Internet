import Header from "../components/header";
import Footer from "../components/footer";
import ProductCard from "../components/productCard";
import MenuCategoria from "../components/menuCategoria";

export default async function Productos() {
  const data = await fetch(
    "https://raw.githubusercontent.com/andresAgudelo0101/retro-cafe-data-products/refs/heads/main/data.json"
  );
  const productos = await data.json();

  return (
    <>
      <Header />
      <div className="w-full h-auto min-h-screen bg-black grid justify-center items-center p-2">
        <div className=" w-full h-auto ">
          <h1 className="font-fuente md:text-6xl text-center text-5xl tracking-wide text-colores-3 p-4">
            Todos los productos
          </h1>

          <MenuCategoria />
          <ProductCard productos={productos.data} />
        </div>
      </div>
      <Footer />
    </>
  );
}
