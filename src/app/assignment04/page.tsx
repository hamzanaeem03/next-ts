import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecentPost from "./components/RecentPost";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <RecentPost />
      <FeaturedWorks />
      <Footer />
    </>
  );
}
