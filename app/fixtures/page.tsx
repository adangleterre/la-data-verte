import FixturePreview from "@/components/FixturePreview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";

export interface Fixture {
  id: number;
  date: string;
  referee: string;
  homeGoalsFullTime: number;
  awayGoalsFullTime: number;
  homeGoalsHalfTime: number;
  awayGoalsHalfTime: number;
  homeWinner: boolean;
  awayWinner: boolean;
  venue?: {
    name: string;
    city: string;
  };
  homeTeam: {
    name: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    logo: string;
  };
}

async function getFixtures(): Promise<Fixture[]> {
  const response = await fetch(
    "https://asse-api-production.up.railway.app/fixtures"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
}

export default async function Fixtures() {
  const fixtures = await getFixtures();

  return (
    <main>
      <Header />
      <PageTitle title="Calendrier Ligue 2 BKT | 2023 - 2024" />
      <section className="max-w-screen-md mx-auto container flex flex-col gap-8">
        {fixtures.map((f) => (
          <FixturePreview key={f.id} fixture={f} />
        ))}
      </section>
      <Footer />
    </main>
  );
}