import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import MenuCategoria from "@/app/components/menuCategoria";
import ProductCard from "@/app/components/productCard";

export default async function ProductoCategoria({ params }) {
  const categoria = (await params).categoria;

  const data = await fetch(
    "https://raw.githubusercontent.com/andresAgudelo0101/retro-cafe-data-products/refs/heads/main/data.json"
  );
  const productos = await data.json();

  const productosFiltrados = productos?.data.filter(
    (producto) => producto.categoria === categoria
  );

  return (
    <>
      <Header />
      <div className="w-full min-h-[70vh] h-auto md:min-h-[75vh] bg-colores-1 grid justify-center items-center p-2">
        <div className=" w-full h-auto ">
          <h1 className="font-fuente md:text-6xl text-center text-5xl tracking-wide text-colores-3 p-4">
            {categoria}
          </h1>
          <MenuCategoria />
          <ProductCard productos={productosFiltrados} />
        </div>
      </div>

      <Footer />
    </>
  );
}
