import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface Team {
    teamId: number;
    rank: number;
    points: number;
    form: string;
}

async function getStandingTeam(): Promise<Team[]> {
    const response = await fetch('https://asse-api-production.up.railway.app/standings');
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await response.json();

    return data;
}

async function StatsSection() {
    const teamInfos = await getStandingTeam();
    const filteredTeam = teamInfos.filter((team) => team.teamId === 1063);

    return (
        <>
            <h2 className="text-center text-green-950 font-bold text-4xl mb-4">En bref</h2>
            {filteredTeam.map((team) => (
                <div key={team.teamId} className="text-3xl mx-auto max-w-4xl text-center mb-6">Sainté est {team.rank}eme de la ligue 2 BKT avec {team.points} points. L&apos;effectif est composé de 42 joueurs d&apos;une moyenne d&apos;age de 26 ans.</div>
            ))}
            <div className="flex justify-center gap-8">
                <Link href="/standing" className="flex items-center gap-1">
                    Consulter le classement <GoArrowUpRight />
                </Link>
                <Link href="/players" className="flex items-center gap-1">
                    Voir le groupe professionnel <GoArrowUpRight />
                </Link>
            </div>
        </>
    )
}

export default StatsSection