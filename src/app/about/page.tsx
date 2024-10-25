import { FaAward, FaUsers, FaBusinessTime } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
          About Us
        </h2>

        {/* Introduction */}
        <div className="text-lg md:text-xl mb-16 text-black">
          <p className="mb-8">
            With over 20 years of experience, we have been at the forefront of transforming spaces with our
            exceptional Plaster of Paris (POP) designs. Our expertise in creating intricate ceiling and wall treatments
            has helped us build a reputation as a trusted name in home and office decor. We take pride in delivering
            high-quality, aesthetically pleasing, and durable designs that elevate the beauty of your living or working space.
          </p>
          <p>
            We believe in personalized solutions tailored to your unique needs. Whether it&apos;s a grand ceiling design, custom wall
            treatments, or decorative features, we provide expert consultations, professional execution, and impeccable results.
          </p>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <FaAward size={50} className="text-blue-700 mb-6" />
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">20+ Years of Experience</h3>
            <p className="text-lg text-black">
              With over two decades in the industry, we have honed our skills to provide innovative and cutting-edge POP designs.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <FaUsers size={50} className="text-blue-700 mb-6" />
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Trusted by Thousands</h3>
            <p className="text-lg text-black">
              Our clients trust us for our reliability and commitment to excellence. We&apos;ve successfully completed hundreds of projects across India.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <FaBusinessTime size={50} className="text-blue-700 mb-6" />
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Quality and Durability</h3>
            <p className="text-lg text-black">
              We use only the highest quality materials and techniques, ensuring that every design is not only beautiful but also long-lasting.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Our Mission</h3>
          <p className="text-lg text-black">
            Our mission is to transform your space into a masterpiece with our POP designs. We aim to provide creative, custom solutions that reflect your style, personality, and needs. Whether it&apos;s residential or commercial, our designs create an environment that inspires and enhances productivity.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Let&apos;s Create Something Beautiful Together</h3>
          <p className="text-lg text-black mb-8">
            Get in touch with us today to discuss your design requirements, and let us help you create a space that reflects your vision.
          </p>
          <div className="flex justify-center">
            <a href="/contact">
              <span className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
