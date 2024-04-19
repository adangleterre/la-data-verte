import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StandingLegend from "@/components/StandingLegend";
import StandingTable from "@/components/StandingTable";

export default function Standing() {
    return (
        <main className="container">
            <Header />
            <section className='max-w-screen-md mx-auto'>
                <StandingTable />
            </section>
            <section className='max-w-screen-md mx-auto'>
                <StandingLegend />
            </section>
            <Footer />
        </main>
    )
}