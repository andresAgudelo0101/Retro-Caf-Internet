export default function ProductCard({ productos }) {
  return (
    <>
      <div className="grid grid-cols-2  md:grid-cols-3 gap-3 p-4 ">
        {productos?.map((prod) => (
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
    </>
  );
}
