import Image from "next/image";

const FirstSection: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] pt-16 md:pt-20 lg:pt-40">
  
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center mb-16 md:mb-20 lg:mb-40 font-poppins">
        around us
      </h2>

      <div className="flex flex-col w-full max-w-[1200px] mx-auto">
    
        <div className="w-full relative" style={{ paddingBottom: "100%" }}>
          <Image
            src="/images/place.jpg"
            alt="Pic 1"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>

        <div className="w-full relative" style={{ paddingBottom: "100%" }}>
          <Image
            src="/images/orange_girl.jpg"
            alt="Pic 2"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>

        <div className="w-full relative" style={{ paddingBottom: "100%" }}>
          <Image
            src="/images/rainy.jpg"
            alt="Pic 3"
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
