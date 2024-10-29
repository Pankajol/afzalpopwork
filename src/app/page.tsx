import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/photos";
// import Navbar from "@/components/Navbar";


export default function Home() {
  return (
      <div className=" justify-center ">
        {/* <Navbar /> */}
        
        <HeroSection />
        <PhotoGallery />
        <section id="pricing-plans" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
            Our Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Ultra Channel Regular Gypsum Board</h3>
              <p className="text-lg mb-4">High-quality ceiling option for standard use.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹65 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Ultra Channel Gyproc Gypsum Board</h3>
              <p className="text-lg mb-4">Premium quality gypsum board for a refined finish.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹75 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Expert Channel Copy with Regular Gypsum Board</h3>
              <p className="text-lg mb-4">For a professional-grade ceiling installation.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹80 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Expert Channel Original with Gyproc Board Sheet</h3>
              <p className="text-lg mb-4">Enhanced durability and aesthetic quality.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹95 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Ceiling Guru Running Fit</h3>
              <p className="text-lg mb-4">Reliable and cost-effective ceiling option.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹55</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Profile Cutting Guru</h3>
              <p className="text-lg mb-4">Perfect for intricate ceiling patterns.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹55</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">PVC False Ceiling</h3>
              <p className="text-lg mb-4">Lightweight and durable option for modern spaces.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹90 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Wall Paneling</h3>
              <p className="text-lg mb-4">Stylish and cost-effective wall solution.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹35 per sq ft</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
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


      </div>
  );
}
