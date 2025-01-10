import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
