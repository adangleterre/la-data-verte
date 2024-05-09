import FixturePreview from "@/components/FixturePreview";
import PageTitle from "@/components/PageTitle";
import { fixturesURL } from "@/config";
import { Fixture } from "@/api/types";
import { basicFetch } from "@/api/fetchFunctions";

async function getFixtures(): Promise<Fixture[]> {
  const fixturesEndpoint: string = fixturesURL;
  const fixtures = await basicFetch<Fixture[]>(fixturesEndpoint)

  return fixtures;
}

export default async function Fixtures() {
  const fixtures = await getFixtures();

  return (
    <main>
      <PageTitle title="Calendrier Ligue 2 BKT | 2023 - 2024" />
      <section className="max-w-screen-md mx-auto flex flex-col gap-8">
        {fixtures.map((f) => (
          <FixturePreview key={f.id} fixture={f} />
        ))}
      </section>
    </main>
  );
}