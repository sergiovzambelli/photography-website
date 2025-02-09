import Link from "next/link";

const FinalSection: React.FC = () => {
  return (
    <section className="bg-off-white text-charcoal py-16 md:py-20 lg:py-40 px-4">
      {/* Contenitore per il blocco delle informazioni */}
      <div className="max-w-2xl mx-auto mb-12 md:mb-18 lg:mb-24">
        <ul className="space-y-2 flex flex-col items-center font-medium font-poppins md:text-xl lg:text-2xl"> 
          {/* Email */}
          <li>
            <Link href="mailto:example@example.com" >
              example@example.com
            </Link>
          </li>

          {/* Numero di telefono */}
          <li>
            <Link href="tel:+123456789">
              +123 456 789
            </Link>
          </li>

          {/* Instagram */}
          <li>
            <Link href="https://instagram.com/yourusername">
              @yourusername
            </Link>
          </li>
        </ul>
      </div>

      {/* Titolo Contattatami */}
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center font-poppins">
        reach me
      </h2>
    </section>
  );
};

export default FinalSection;
