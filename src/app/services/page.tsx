"use client";
import Image from 'next/image';
import Link from 'next/link';

const ServicePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-28">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/image.png" // Background image path (adjust accordingly)
            alt="Stunning Plaster of Paris Ceiling Design"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Premium POP (Plaster of Paris) Services for Your Home &amp; Office
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your space with expert ceiling, wall, and decorative designs tailored to your needs.
          </p>
          <Link href="#services">
            <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Our Services
            </button>
          </Link>
        </div>
      </section>

      {/* Service Details */}
      <section id="services" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
            Our Expert Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <Image
                src="/service1.jpg" // Image for the service
                alt="Ceiling Design"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Ceiling Design</h3>
              <p>
                Add elegance and sophistication to your home with our custom-designed plaster ceilings.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <Image
                src="/service2.jpg" // Image for the service
                alt="Wall Treatments"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Wall Treatments</h3>
              <p>
                Give your walls a touch of class with our expert wall treatments and POP designs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <Image
                src="/service3.jpg" // Image for the service
                alt="Design Consultation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Design Consultation</h3>
              <p>
                Our experts will help you choose the best designs for your space, ensuring a perfect fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Craftsmanship</h3>
              <p>
                Our team of skilled professionals provides high-quality plasterwork, ensuring durability and elegance.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Designs</h3>
              <p>
                We offer personalized designs that reflect your taste, creating unique spaces.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
              <p>
                Our services are not only premium but also cost-effective, ensuring value for money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
            What Our Clients Say
          </h2>
          <div className="flex justify-center gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
              <blockquote className="italic text-lg mb-4">
                &quot;The ceiling design completely transformed our home! The attention to detail was incredible, and the team was very professional.&quot;
              </blockquote>
              <p className="font-semibold">- John Doe</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
              <blockquote className="italic text-lg mb-4">
                &quot;Excellent work! The wall treatments added such an elegant touch to our office. Highly recommend!&quot;
              </blockquote>
              <p className="font-semibold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg mb-8">
          Reach out to us for a consultation or to get a custom quote for your project. Let&rsquo;s create something amazing!
        </p>
        <Link href="/contact">
          <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Us Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default ServicePage;
