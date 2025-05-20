// No more used
export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };

    img.onerror = () => {
      // Fallback dimensions if image fails to load
      resolve({
        width: 800,
        height: 600
      });
    };
  });
};