import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  const getColumns = (columnCount: number) => {
    const cols: GalleryImage[][] = Array.from({ length: columnCount }, () => []);
    
    images.forEach((image) => {
      const shortestCol = cols.reduce((prev, curr) => 
        curr.reduce((sum, img) => sum + img.height/img.width, 0) < 
        prev.reduce((sum, img) => sum + img.height/img.width, 0) ? curr : prev
      );
      shortestCol.push(image);
    });

    return cols;
  };

  return (
    <>
      {/* Mobile - 1 column (no masonry needed) */}
      <div className="grid grid-cols-1 gap-2 md:hidden">
        {images.map((image) => (
          <ImageCard key={image.src} image={image} />
        ))}
      </div>

      {/* Medium - 2 columns */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-2">
        {getColumns(2).map((column, colIndex) => (
          <div key={`md-${colIndex}`} className="flex flex-col gap-2">
            {column.map((image) => (
              <ImageCard key={image.src} image={image} />
            ))}
          </div>
        ))}
      </div>

      {/* Desktop - 4 columns */}
      <div className="hidden lg:grid grid-cols-4 gap-2">
        {getColumns(4).map((column, colIndex) => (
          <div key={`lg-${colIndex}`} className="flex flex-col gap-2">
            {column.map((image) => (
              <ImageCard key={image.src} image={image} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

const ImageCard: React.FC<{ image: GalleryImage }> = ({ image }) => (
  <div 
    className="relative rounded-lg overflow-hidden"
    style={{ aspectRatio: `${image.width}/${image.height}` }}
  >
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  </div>
);

export default MasonryGallery;