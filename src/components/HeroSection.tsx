import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-20 lg:py-28">
      {/* Background Image with Parallax */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/image.png" // Ensure you have this image in your public folder
          alt="Beautiful Plaster of Paris ceiling design"
          layout="fill"
          objectFit="cover"
          className="opacity-40" // Slight opacity to ensure text readability
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading with Animation */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Transform Your Space with Stunning POP Designs
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          Discover exquisite ceiling and wall treatments that bring style and sophistication to your home or office.
        </p>

        {/* Testimonial Section */}
        <div className="bg-white text-blue-700 rounded-lg p-6 mb-8 max-w-lg mx-auto shadow-lg animate__animated animate__fadeIn animate__delay-2s">
          <blockquote className="italic text-center text-lg mb-4">
            "The plaster of Paris ceiling designs completely transformed our home! The quality and attention to detail were outstanding!"
          </blockquote>
          <p className="text-center text-sm font-semibold">- Satisfied Customer</p>
        </div>

        {/* Call-to-Action Buttons with Hover Effects */}
        <div className="flex justify-center gap-6 mt-8 animate__animated animate__fadeIn animate__delay-2s">
          <Link href="/services">
            <span className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Our Services
            </span>
          </Link>
          <Link href="/contact">
            <span className="bg-transparent text-white hover:text-blue-700 hover:bg-white px-8 py-4 text-lg font-semibold border-2 border-white rounded-lg transition-all duration-300 transform hover:scale-105">
              Get a Quote
            </span>
          </Link>
        </div>

        {/* Contact Section (Optional) */}
        <div className="mt-12 text-center text-white animate__animated animate__fadeIn animate__delay-3s">
          <p className="text-xl">Have any questions? Reach out to us today for personalized advice or quotes!</p>
          <Link href="/contact">
            <span className="text-lg mt-4 text-blue-300 hover:text-white">Contact Us Now</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
