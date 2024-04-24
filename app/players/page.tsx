import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import PlayersSection from "@/components/PlayersSection";

export default function Players() {
    return (
        <main>
            <Header />
            <PageTitle />
                <section className="container">
                    <PlayersSection />
                </section>
                <Footer />
        </main>
    )
}