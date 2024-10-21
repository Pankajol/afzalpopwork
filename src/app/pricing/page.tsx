import Image from 'next/image';
import Link from 'next/link';

const PricingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-28">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/pricing-img.jpg" // Background image path (adjust accordingly)
            alt="Pricing Page Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Affordable POP Services for Every Budget
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Choose the right package for your home or office. Our transparent pricing ensures you know exactly what you&apos;re paying for.
          </p>

          <Link href="#pricing-plans">
            <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              View Pricing Plans
            </button>
          </Link>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing-plans" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
            Our Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Basic Plan</h3>
              <p className="text-lg mb-4">Ideal for small spaces and residential use.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹15,000</div>
              <ul className="text-left mb-6">
                <li>Simple ceiling designs</li>
                <li>Basic wall treatments</li>
                <li>Standard materials</li>
              </ul>
              <Link href="/contact">
                <button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Premium Plan</h3>
              <p className="text-lg mb-4">Perfect for larger homes and sophisticated designs.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹30,000</div>
              <ul className="text-left mb-6">
                <li>Complex ceiling designs</li>
                <li>Decorative wall treatments</li>
                <li>Premium materials</li>
                <li>Customized designs</li>
              </ul>
              <Link href="/contact">
                <button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Luxury Plan</h3>
              <p className="text-lg mb-4">For upscale properties and luxury designs.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹50,000</div>
              <ul className="text-left mb-6">
                <li>Exclusive ceiling and wall treatments</li>
                <li>High-end materials and finishes</li>
                <li>Custom-tailored solutions</li>
                <li>Full consultation and design process</li>
              </ul>
              <Link href="/contact">
                <button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
            Why Choose Our POP Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Craftsmanship</h3>
              <p>
                Our team has years of experience in delivering high-quality plaster of Paris designs for all kinds of spaces.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customization</h3>
              <p>
                We tailor every design to match your unique style and preferences, ensuring a perfect fit for your space.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
              <p>
                We offer premium designs at competitive prices, ensuring you get the best value for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
            Hear From Our Clients
          </h2>
          <div className="flex justify-center gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
              <blockquote className="italic text-lg mb-4">
                &quot;The ceiling designs completely transformed our home! Professional service and high-quality work.&quot;
              </blockquote>
              <p className="font-semibold">- Rajesh Kumar</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
              <blockquote className="italic text-lg mb-4">
                &quot;Amazing wall treatments and ceiling designs. My office looks more elegant and inspiring.&quot;
              </blockquote>
              <p className="font-semibold">- Priya Mehta</p>
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
          Contact us now for a personalized quote and consultation. Let&apos;s create something beautiful together!
        </p>
        <Link href="/contact">
          <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </Link>
      </section>
    </div>
  );
};

export default PricingPage;
