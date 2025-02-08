import Image from "next/image";

const FirstSection: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] pt-16">
      {/* Titolo h2 */}
      <h2 className="text-5xl font-semibold text-center mb-16 font-poppins">
        around us
      </h2>

      <div className="flex flex-col w-full">
        {/* Immagine 1 */}
        <div className="w-full relative" style={{ paddingBottom: "100%" }}>
          <Image
            src="/images/place.jpg"
            alt="Immagine 1"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>

        {/* Immagine 2 */}
        <div className="w-full relative" style={{ paddingBottom: "100%" }}>
          <Image
            src="/images/orange_girl.jpg"
            alt="Immagine 2"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>

        {/* Immagine 3 */}
        <div className="w-full relative" style={{ paddingBottom: "100%" }}>
          <Image
            src="/images/rainy.jpg"
            alt="Immagine 3"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
