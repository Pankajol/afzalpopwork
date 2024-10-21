"use client"

import Image from 'next/image';

const GalleryPage: React.FC = () => {
  const images = [
    
{ id: 1, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530259/imag26_wjasde.jpg' ,alt:' id: 1,'},
{ id: 2, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530259/iamge4_kkaygg.jpg' ,alt:' id: 2,'},
{ id: 3, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530260/image6_mefkuk.jpg' ,alt:' id: 3,'},
{ id: 4, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530260/image7_ouu6ti.jpg' ,alt:' id: 4,'},
{ id: 5, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530260/image2_ng3jxi.jpg' ,alt:' id: 5,'},
{ id: 6, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530262/image5_ys6ccn.jpg' ,alt:' id: 6,'},
{ id: 7, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530261/image1_j9avnn.jpg' ,alt:' id: 7,'},
{ id: 8, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530260/image3_kfjgc7.jpg' ,alt:' id: 8,'},
{ id: 9, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530262/image11_lwn2yq.jpg' ,alt:' id: 9,'},
{ id: 10, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530262/image8_f1gs3p.jpg' ,alt:' id: 10'},
{ id: 11, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530264/image14_vksolq.jpg' ,alt:' id: 11'},
{ id: 12, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530262/image9_smmcbz.jpg' ,alt:' id: 12'},
{ id: 13, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530266/image13_c69w9m.jpg' ,alt:' id: 13'},
{ id: 14, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530265/image16_qjlsm6.jpg' ,alt:' id: 14'},
{ id: 15, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530267/image12_qsajbv.jpg' ,alt:' id: 15'},
{ id: 16, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530266/image10_jb4m01.jpg' ,alt:' id: 16'},
{ id: 17, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530266/image15_a02txs.jpg' ,alt:' id: 17'},
{ id: 18, src:'https://res.cloudinary.com/dz1gfppll/image/upload/v1729530267/image20_kul7hq.jpg' ,alt:' id: 18'},
    // Add more images here
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center mb-12">
          Complete Gallery of Our Work
        </h2>
        
        {/* Full Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.id} className="group relative">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={400} 
                height={300} 
                className="rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-semibold">
                {image.alt}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;

















