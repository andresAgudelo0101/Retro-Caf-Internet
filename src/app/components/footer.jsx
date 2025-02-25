import Image from 'next/image';
export default function Footer() {
return (
<footer className="grid lg:flex-row  justify-center gap-2 bg-black text-white p-4">
  
 

<div className='flex flex-col justify-center  md:flex-row'>
<div className='flex justify-center md:p-4'>
   <img src="/retrocafe.png" alt="Picture of the author" className='h-20 w-20 md:w-auto md:h-32'/>
</div>
<div className='flex flex-col gap-2'>
  <div>
    <p className='text-lg text-fuchsia-400 font-semibold'> Síguenos</p>
        <div className='flex flex-row gap-2'>
          <a href="https://www.instagram.com"	target="_blank">
                <Image src="/instagram.png" width={28} height={22} alt="Picture of the author"/>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <Image src="/facebook.png" width={28} height={22} alt="Picture of the author"/>
          </a>
        </div>
  </div>
  <div>
    <p className="text-lg text-fuchsia-400 font-semibold "> Contacto</p>
      <div>
        <div className="flex flex-row gap-1">
          <Image src="/wsp.png" width={28} height={22} alt="Picture of the author"/>
          <p>+57 3108415549</p>
        </div>
        <div className="flex flex-row gap-1">
          <Image src="/email.png" width={28} height={22} alt="Picture of the author"/>
          <p>retrocafeinternet@gmail.com</p>
        </div>
      </div>
      </div>
 </div>
</div>

<pre>
    Copyright © 2025 Retro Cafe Internet
</pre>  
</footer>
 );
}