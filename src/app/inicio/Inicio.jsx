
import Image from 'next/image';
export default function Inicio() {
    return (
    <div className="grid h-90 lg:grid-cols-2 lg:h-85">
        <div className="flex justify-center items-center"> 
            <img src="/cafeteria.jpg" alt="imagen1" className=" h-96 md:h-auto  md:w-100 " />
        </div>
        <div className="flex justify-center items-center h-64 lg:h-full"> 
                <h1>¡Bienvenidos a nuestra cafetería!</h1>
        </div>
    </div>
)};