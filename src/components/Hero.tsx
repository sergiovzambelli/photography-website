import Image from "next/image";
import { ChevronDown } from "lucide-react"; // Assicurati di aver installato lucide-react
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-4">
      {/* Immagine di sfondo ottimizzata con Next.js */}
      <div className="absolute inset-0">
        <Image
          src="/images/street_run.jpg"
          alt="Fotografia"
          fill
          className="object-cover"
          quality={90}
          priority
        />
      </div>

      {/* Overlay scuro per migliorare il contrasto del testo */}
      <div className="absolute inset-0 bg-[#333333] bg-opacity-60"></div>

      {/* Testo centrato */}
      <h1 className="relative text-white text-5xl font-bold font-poppins">
        street photography
      </h1>

      {/* Freccia fissa verso il basso */}
      <div className="absolute bottom-8 text-white animate-bounce">
        <Link href="#nextSection">
          <ChevronDown size={40} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
