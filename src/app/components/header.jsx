
import Image from "next/image"

export default function Header() {
return(
<nav className="border-gray-200 bg-black">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 overflow-hidden ">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image  aria-hidden src="/retrocafe.png" alt="File icon" width={89} height={89} />    
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Retro Café Internet</span>
    </a>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex gap-4 text-gray-500 ">
        <li>
          <a href="#" className="hover:text-gray-200">Productos</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-200">Galeria</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-200">Contactanos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}