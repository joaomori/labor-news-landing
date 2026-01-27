import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoriesBar } from "@/components/CategoriesBar";
import { NewsSection } from "@/components/NewsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoriesBar />
        <NewsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
