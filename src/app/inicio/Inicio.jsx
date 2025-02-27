import Image from "next/image";
export default function Inicio() {
  return (
    <div className="grid h-90 md:grid-cols-2 md:h-85">
      <div className="flex justify-center items-center">
        <img
          src="/cafeteria.jpg"
          alt="imagen1"
          className=" h-96 md:h-auto  md:w-100 "
        />
      </div>
      <div className="flex justify-center items-center h-auto p-5 md:h-full md:p-8 md:text-lg">
        <div className="flex flex-col gap-3">
          <p>
            En <strong className=" text-red-500">Retro Cafe</strong>, fusionamos
            café de especialidad, reparación de computadoras y videojuegos retro
            en un solo lugar. Somos un espacio único donde disfrutas, solucionas
            y revives recuerdos del pasado.
          </p>

          <h2 className=" text-fuchsia-400">Nuestros Servicios</h2>
          <ul>
            <li>
              <strong>Café de Especialidad</strong>: Granos selectos, métodos
              artesanales, caseros y snacks deliciosos.
            </li>
            <li>
              <strong>Jugos Naturales</strong>: Frescos, saludables y llenos de
              sabor, preparados al momento.
            </li>
            <li>
              <strong>Servicio técnico</strong>: Brindamos un servicio eficaz,
              hardware y software de computadoras, consolas de videojuegos,
              celulares. Y asesoría.
            </li>
            <li>
              <strong>Videojuegos Retro</strong>: ven y juega con nuestras
              consolas clásicas (GameCube, Playstation 2, Xbox 360) con un
              amplio catalogo de juegos.
            </li>
          </ul>

          <h2 className=" text-fuchsia-400">Nuestro Espacio</h2>
          <p>
            En <strong className=" text-red-500">Retro Cafe</strong>, hemos
            creado un rincón íntimo y acogedor, perfecto para grupos pequeños
            hasta 5 personas. Aunque es compacto, está diseñado para ofrecerte
            todo lo que necesitas:
          </p>
          <ul>
            <li>
              Una <strong>barra de café</strong> donde prepararemos tu bebida
              favorita.
            </li>
            <li>
              Un <strong>rincón técnico</strong> para resolver tus problemas de
              computadoras de manera rápida y eficiente.
            </li>
            <li>
              Una <strong>zona retro</strong> con consolas clásicas y juegos
              icónicos, ideal para disfrutar en compañía.
            </li>
          </ul>
          <p>
            Es un espacio pequeño, pero lleno de energía, nostalgia y buen café.
            ¡Ven y hazlo tuyo!
          </p>
        </div>
      </div>
    </div>
  );
}
