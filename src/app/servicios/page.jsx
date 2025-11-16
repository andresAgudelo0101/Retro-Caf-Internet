import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Servicios() {
  return (
    <>
      <Header />
      <div className=" text-colores-1 grid grid-cols-1 md:grid-cols-2  grid-rows-3 min-h-[75vh] w-100  bg-colores-2 items-center place-content-center p-8 md:p-14 gap-8">
        <div>
          <Image src={"/pc.png"} width={48} height={48} alt="cpu" />

          <h2 className=" text-colores-3 font-fuente text-xl">
            Reparación de computadores
          </h2>
          <p>
            ¿Tu compu está fallando? Nos encargamos de cualquier problema que
            puedes estar enfrentando. Nuestros expertos identifican el problema
            y lo solucionan rápidamente, ya sea que se trate de un problema de
            hardware o software.
          </p>
        </div>

        <div>
          <Image src={"/pc2.png"} width={48} height={48} alt="compu2" />

          <h2 className=" text-colores-3 font-fuente text-xl">
            Mantenimiento de computadores y consolas
          </h2>
          <p>
            Nos encargamos de que tu equipo esté en óptimas condiciones y
            funcione de manera eficiente. Ofrecemos mantenimiento lógico o
            físico. Con nuestro servicio de mantenimiento, puedes estar seguro
            de que tú compu o tu consola de juegos siempre estará lista en poco
            tiempo.
          </p>
        </div>

        <div>
          <Image src={"/web.png"} width={48} height={48} alt="web" />

          <h2 className=" text-colores-3 font-fuente text-xl">
            Creación de Páginas Web
          </h2>
          <p>
            ¿Necesitas una página web profesional? Visítanos y te creamos un
            sitio web a tu medida, moderno y optimizado para atraer más
            clientes.
          </p>
        </div>

        <div>
          <Image src={"/cel.png"} width={48} height={48} alt="celu" />

          <h2 className=" text-colores-3 font-fuente text-xl">
            Servicio Técnico de Celulares
          </h2>
          <p>
            Formateo de celulares, instalación de aplicaciones y mucho más. Ven
            y trae tu celular y lo reparamos de manera rápida.¡El dispositivo en
            manos de expertos!
          </p>
        </div>

        <div>
          <Image src={"/printer.png"} width={48} height={48} alt="printer" />

          <h2 className=" text-colores-3 font-fuente text-xl">
            Servicio de Copias e Impresiones
          </h2>
          <p>
            ¿Necesitas imprimir documentos, fotos o hacer copias de alta
            calidad? ¡Nosotros te ayudamos! En nuestro local ofrecemos un
            servicio rápido y confiable para todas tus necesidades de impresión
            y copiado. Ya sea para trabajos, proyectos escolares, trámites o
            cualquier otro propósito, garantizamos resultados nítidos y
            profesionales. ¡Trae tus archivos y te los entregamos listos en poco
            tiempo! 📄✨
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
