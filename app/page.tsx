import Navbar from "./components/home/Navbar";
import Footer from "./components/footer/Footer";
import Banner from "./components/home/Banner";
import ShopSection from "./components/home/ShopSection";

export default function Home() {
  return (
    <div className="font-inter">
      <Navbar />
      <Banner />
      <ShopSection />
      <Footer />
    </div>
  );
}
