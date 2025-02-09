import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 lg:px-16">

      <div className="absolute inset-0">
        <Image
          src="/images/street_run.webp"
          alt="Street Photography"
          fill
          className="object-cover"
          quality={90}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-[#333333] bg-opacity-60"></div>

      <h1 className="relative text-white text-5xl md:text-7xl lg:text-8xl font-bold font-poppins">
        street photography
      </h1>

      <div className="absolute bottom-8 text-white animate-bounce">
        <Link href="#nextSection">
          <ChevronDown size={40} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
