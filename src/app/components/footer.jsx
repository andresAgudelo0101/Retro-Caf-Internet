import Image from 'next/image';

export default function Footer() {
return (
<footer className=" h-auto p-4 bg-zinc-900 flex flex-col justify-center items-center text-base text-gray-300">
      <div className="flex flex-col md:flex-row w-auto gap-5">
        <div>
          <p className="text-md font-normal leading-normal tracking-tight ">
            Síguenos
          </p>
          <div className="flex flex-row gap-2 justify-start">
            <a
              href="https://www.instagram.com"	
              target="_blank"
            >
                <Image src="/instagram.png" width={22} height={22} alt="Picture of the author"/>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
            >
            <Image src="/facebook.png" width={22} height={22} alt="Picture of the author"/>

            </a>
          </div>
        </div>
        <div>
          <p className="text-md font-normal leading-normal tracking-tight ">
            Contacto
          </p>
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex flex-row gap-1">
            <Image src="/wsp.svg" width={22} height={22} alt="Picture of the author"/>
              <p className="text-sm font-semibold leading-normal tracking-tight text-slate-100 font-sans">
                +57 3108415549
              </p>
            </div>
            <div className="flex flex-row gap-1">
            <Image src="/email.png" width={22} height={22} alt="Picture of the author"/>
              <p className="text-sm font-semibold leading-normal tracking-tight text-slate-100 font-sans">
              retrocafeinternet@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 text-xs">
         Copyright © 2025 Retro Cafe Internet
      </div>
    </footer>
 );
}