import Filter from "../components/Filter";
import Navbar from "../includes/Navbar";
import CategoryCards from "../components/CategoryCards";
import Footer from "../includes/Footer";

export default function ProductListing() {
  return (
    <>
      <Navbar />
      <CategoryCards />
      <Filter />
      <Footer />
    </>
  );
}
