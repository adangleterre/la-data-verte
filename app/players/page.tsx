import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import PlayersSection from "@/components/PlayersSection";

export default function Players() {
    return (
        <main>
            <Header />
            <PageTitle title="Effectif Ligue 2 BKT | 2023 - 2024"/>
                <section className="container">
                    <PlayersSection />
                </section>
                <Footer />
        </main>
    )
}