"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const PhotoGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const images = [
    { id: 1, src: 'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530282/image30_oqkoon.jpg', alt: 'POP Ceiling Design 1' },
    { id: 2, src: 'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530273/image24_sawmuh.jpg', alt: 'POP Wall Treatment 2' },
    { id: 3, src: 'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530274/image31_wtrrmq.jpg', alt: 'POP Wall Treatment 2' },
    { id: 4, src: 'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530273/image29_jron0e.jpg', alt: 'POP Ceiling Design 1' },
    { id: 5, src: 'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530272/image28_tgxjcj.jpg', alt: 'POP Wall Treatment 2' },
    { id: 6, src: 'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530271/image27_ecg9xn.jpg', alt: 'POP Wall Treatment 2' },

    // Add more images here
  ];

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
          Our Project Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {images.slice(0, 6).map((image) => (
            <div 
              key={image.id} 
              className="group relative cursor-pointer" 
              onClick={() => openLightbox(image.src)}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={400} 
                height={300} 
                className="rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-semibold">
                View Design
              </div> */}
            </div>
          ))}
        </div>

        {/* View All Designs Button */}
        <div className="mt-6">
          <Link href="/gallery">
            <span className="inline-block bg-blue-700 text-white hover:bg-blue-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
              View All Designs
            </span>
          </Link>
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
            <div className="relative">
              <Image 
                src={currentImage} 
                alt="Selected Design" 
                width={800} 
                height={600} 
                className="rounded-lg"
              />
              <button 
                onClick={closeLightbox} 
                className="absolute top-0 right-0 mt-4 mr-4 text-white text-3xl"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
