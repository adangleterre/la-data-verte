import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HonoursSection from "@/components/HonoursSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main>
      <section>
        <Hero/>
      </section>
      <section>
        <StatsSection />
      </section>
      <section>
        <HonoursSection />
      </section>
    </main>
  );
}
