import MasonryGallery from "@/components/MasonryGallery";
import image1 from "@/../public/images/orange_girl.webp";
import image2 from "@/../public/images/place.webp";
import image3 from "@/../public/images/rainy.webp";
import image4 from "@/../public/images/street_run.webp";

export default function Masonry() {
  const images = [
    { src: image1.src, alt: "Image 1", width: image1.width, height: image1.height },
    { src: image2.src, alt: "Image 2", width: image2.width, height: image2.height },
    { src: image3.src, alt: "Image 3", width: image3.width, height: image3.height },
    { src: image4.src, alt: "Image 4", width: image4.width, height: image4.height },
  ];

  return (
    <main className="container mx-auto p-4">
      <MasonryGallery images={images} />
    </main>
  );
}