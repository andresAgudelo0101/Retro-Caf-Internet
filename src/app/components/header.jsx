
import Image from "next/image"

export default function Header() {
return(
  <div className="bg-black text-white p-4 text-xl h-auto">
    <div>
      <div className=" flex justify-center w-full">
        <Image
          src="/retrocafe.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>

    <ul className="flex justify-center h-auto gap-2 text-slate-400  flex-wrap">

      <li>
        <a className="hover:text-slate-50" href="/">Inicio</a>
      </li>
      
      <li>
        <a className="hover:text-slate-50" href="/productos">Productos</a>
      </li>

      <li>
        <a className="hover:text-slate-50" href="/contacto">Contacto</a>
      </li>

  </ul>
  </div>
</div>
)
}