import Image from "next/image";

export default function Wasap() {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <a href="https://wa.me/573204000000" target="_blank" rel="noopener noreferrer">
                <Image  aria-hidden src="/wsp.svg" alt="File icon" width={38} height={38} />    
            </a>
        </div>
    );
}