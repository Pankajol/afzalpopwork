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
              <p className="text-lg mb-4 text-gray-600">High-quality ceiling option for standard use.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹65 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Ultra Channel Gyproc Gypsum Board</h3>
              <p className="text-lg mb-4 text-gray-600">Premium quality gypsum board for a refined finish.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹75 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Expert Channel Copy with Regular Gypsum Board</h3>
              <p className="text-lg mb-4 text-gray-600">For a professional-grade ceiling installation.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹80 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Expert Channel Original with Gyproc Board Sheet</h3>
              <p className="text-lg mb-4 text-gray-600">Enhanced durability and aesthetic quality.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹95 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Ceiling Guru Running Fit</h3>
              <p className="text-lg mb-4 text-gray-600">Reliable and cost-effective ceiling option.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹55</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Profile Cutting Guru</h3>
              <p className="text-lg mb-4 text-gray-600">Perfect for intricate ceiling patterns.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹55</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">PVC False Ceiling</h3>
              <p className="text-lg mb-4 text-gray-600">Lightweight and durable option for modern spaces.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹90 per sq ft</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Wall Paneling</h3>
              <p className="text-lg mb-4 text-gray-600">Stylish and cost-effective wall solution.</p>
              <div className="text-3xl font-bold text-blue-700 mb-6">₹35 per sq ft</div>
            </div>
          </div>
        </div>
      </section>

      


      </div>
  );
}
