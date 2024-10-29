import Image from 'next/image';
import Link from 'next/link';

const PricingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-28">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/pricing-img.jpg"
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
            Choose the best options for your space with our transparent, value-oriented pricing.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Ultra Channel</h3>
              <ul className="text-left mb-6 text-lg">
                <li>Regular Gypsum Board: <strong>₹65 per sq ft</strong></li>
                <li>Gyproc Gypsum Board: <strong>₹75 per sq ft</strong></li>
              </ul>
              <Link href="/contact">
                <button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Expert Channel</h3>
              <ul className="text-left mb-6 text-lg">
                <li>Copy with Regular Gypsum Board: <strong>₹80 per sq ft</strong></li>
                <li>Original with Gyproc Board Sheet: <strong>₹95 per sq ft</strong></li>
              </ul>
              <Link href="/contact">
                <button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Ceiling Services</h3>
              <ul className="text-left mb-6 text-lg">
                <li>Ceiling Guru Running Fit: <strong>₹55 per sq ft</strong></li>
                <li>Profile Cutting Guru: <strong>₹55 per sq ft</strong></li>
                <li>PVC False Ceiling: <strong>₹90 per sq ft</strong></li>
              </ul>
              <Link href="/contact">
                <button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Wall Paneling</h3>
              <ul className="text-left mb-6 text-lg">
                <li>Wall Paneling: <strong>₹35 per sq ft</strong></li>
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
                Our team provides top-notch POP designs with attention to detail for all spaces.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customization</h3>
              <p>
                We customize every design to suit your style and space perfectly.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
              <p>
                Enjoy premium designs with competitive rates for exceptional value.
              </p>
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
          Contact us now for a personalized quote and consultation. Let's create something beautiful together!
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
