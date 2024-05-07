import PageTitle from "@/components/PageTitle";
import StandingLegend from "@/components/StandingLegend";
import StandingTable from "@/components/StandingTable";

export default function Standing() {
    return (
        <main>
            <PageTitle title="Classement Ligue 2 BKT | 2023 - 2024" />
            <section className='max-w-screen-md mx-auto mb-3'>
                <StandingTable />
            </section>
            <section className='max-w-screen-md my-0 mx-auto container'>
                <StandingLegend />
            </section>
        </main>
    )
}