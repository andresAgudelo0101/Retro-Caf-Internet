import Link from "next/link";

export default async function MenuCategoria() {
  const data = await fetch(
    "https://raw.githubusercontent.com/andresAgudelo0101/retro-cafe-data-products/refs/heads/main/data.json"
  );
  const productos = await data.json();

  const categorias = [
    ...new Set(productos?.data.map((producto) => producto.categoria)),
  ];

  return (
    <>
      <nav className="bg-colores-2 rounded-md">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <div className="flex flex-wrap  items-center gap-4 p-4 font-medium ">
              <Link
                href="/productos/"
                className="text-colores-1 hover:text-slate-700"
              >
                Todos los productos
              </Link>
              {categorias?.map((cat, index) => (
                <Link
                  key={index}
                  href={"/producto/" + cat}
                  className="text-colores-1  hover:text-slate-700"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
