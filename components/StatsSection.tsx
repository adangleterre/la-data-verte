import { basicFetch } from "@/api/fetchFunctions";
import { Team } from "@/api/types";
import { standingURL } from "@/config";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

async function getStandingTeam(): Promise<Team[]> {
    const standingTeamsEndpoint: string = standingURL;
    const standingTeams = await basicFetch<Team[]>(standingTeamsEndpoint);
    
    return standingTeams;
}

async function StatsSection() {
    const teamInfos = await getStandingTeam();
    const filteredTeam = teamInfos.filter((team) => team.teamId === 1063);

    return (
        <>
            <h2 className="text-center text-green-950 font-bold text-4xl mb-4">En bref</h2>
            {filteredTeam.map((team) => (
                <div key={team.teamId} className="text-xl md:text-3xl mx-auto max-w-4xl text-center mb-6">Sainté est {team.rank}eme de la ligue 2 BKT avec {team.points} points. L&apos;effectif est composé de 32 joueurs d&apos;une moyenne d&apos;age de 24 ans.</div>
            ))}
            <div className="flex flex-col items-center sm:flex-row justify-center gap-4 sm:gap-8">
                <Link href="/standing" className="flex items-center gap-1">
                    Consulter le classement <GoArrowUpRight />
                </Link>
                <Link href="/players" className="flex items-center gap-1">
                    Voir le groupe professionnel <GoArrowUpRight />
                </Link>
                <Link href="/fixtures" className="flex items-center gap-1">
                    Voir le calendrier <GoArrowUpRight />
                </Link>
            </div>
        </>
    )
}

export default StatsSection