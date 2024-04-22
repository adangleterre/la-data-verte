import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayersSection from "@/components/PlayersSection";

export default function Players() {
    return (
        <main className="container">
            <Header />
            <section>
                <PlayersSection />
            </section>
            <Footer />
        </main>
    )
}