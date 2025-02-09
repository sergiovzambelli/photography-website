import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 lg:px-16">
      {/* Immagine di sfondo */}
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

      {/* Overlay per contrasto */}
      <div className="absolute inset-0 bg-[#333333] bg-opacity-60"></div>

      {/* Testo centrato e responsive */}
      <h1 className="relative text-white text-5xl md:text-7xl lg:text-8xl font-bold font-poppins">
        street photography
      </h1>

      {/* Freccia che scende */}
      <div className="absolute bottom-8 text-white animate-bounce">
        <Link href="#nextSection">
          <ChevronDown size={40} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
