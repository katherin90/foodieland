
import SubscribeBanner from "@/components/sections/subscribe-banner/subscribe-banner";
import Banner from "@/components/home/banner/banner";
import SimpleSection from "@/components/home/simple-section/simple-section";
import TrySection from "@/components/home/try-section/try-section";
import CategoriesSection from "@/components/home/categories/categories";
import Hero from "@/components/home/hero/hero";
import BlogSection from "@/components/sections/blog-section/blog-section";

export const metadata = {
  title: "Foodieland",
  description: "demo Foodieland",
};

export default function Home() {
  return <>
    <Hero />
    <CategoriesSection/>
    <SimpleSection/>
    <Banner/>
    <BlogSection />
    <TrySection/>
    <SubscribeBanner/>
  </>
}
