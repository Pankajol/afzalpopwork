import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/photos";
// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <div className=" justify-center ">
        {/* <Navbar /> */}
        <HeroSection />
        <PhotoGallery />

      </div>
  );
}
