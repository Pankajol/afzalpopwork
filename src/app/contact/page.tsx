import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-28">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/contact-header.jpg" // Background image (adjust accordingly)
            alt="Contact Page Background"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Let&apos;s Get in Touch
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            We&apos;re here to answer any questions you have. Drop us a message, and we&apos;ll get back to you as soon as possible!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center mb-12">
            Get In Touch with Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Contact Information</h3>

              <div className="mb-8">
                <h4 className="text-xl font-medium text-blue-700">Address</h4>
                <p className="text-lg">Lousiwadi, Thane west , Maharashtra, India - 400604</p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-medium text-blue-700">Phone Number</h4>
                <p className="text-lg">
                  <a href="tel:+917738961799" className=" hover:underline">
                    +91 9029241977
                  </a>
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-medium text-blue-700">Email</h4>
                <p className="text-lg">
                  <a href="mailto:pankajdyadav10699@gmail.com" className=" hover:underline">
                    afzalkhan23718@gmail.com
                  </a>
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-6">
                <a href="https://wa.me/917738961799" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={30} className="text-green-500 hover:text-green-600 transition-all duration-300" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={30} className="text-blue-600 hover:text-blue-700 transition-all duration-300" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} className="text-pink-600 hover:text-pink-700 transition-all duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} className="text-blue-400 hover:text-blue-500 transition-all duration-300" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-blue-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-4 border border-gray-300 rounded-md text-lg"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-blue-700 mb-2">
                      Phone No.
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      className="w-full p-4 border border-gray-300 rounded-md text-lg"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-blue-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-4 border border-gray-300 rounded-md text-lg"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-blue-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-md text-lg"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp and Social Media Section */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
          Connect with Us on WhatsApp &amp; Social Media
        </h2>
        <div className="flex justify-center items-center gap-6">
          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/917738961799"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="inline-block mr-2" /> Contact on WhatsApp
          </Link>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          {/* Social Media Icons */}
          <Link href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-700">
            <FaFacebookF size={30} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-600">
            <FaInstagram size={30} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-blue-500">
            <FaTwitter size={30} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
