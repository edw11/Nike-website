import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import SpecialOffers from "@/components/SpecialOffers";
import Subscribe from "@/components/Subscribe";
import SuperQuality from "@/components/SuperQuality";

export default function Home() {
  return (
    <main className="relative">
      {/* Nav */}
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <SuperQuality />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
