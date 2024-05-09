import { standingURL } from "@/config";
import { basicFetch } from "@/api/fetchFunctions";
import { Team } from "@/api/types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

async function getStandingTeams(): Promise<Team[]> {
    const standingTeamsEndpoint: string = standingURL
    const standingTeams = await basicFetch<Team[]>(standingTeamsEndpoint)
    
    return standingTeams;
}

function getFormDots(form: string) {
    return form.split('').map((result, index) => (
        <GoDotFill
            key={index}
            className={` ${result === 'W' ? 'text-primary' : result === 'D' ? 'text-slate-500' : 'text-red-500'} `}
        />
    ));
}

function getBackgroundColor(rank: number): string {
    switch (true) {
        case rank <= 2:
            return 'bg-green-100';
        case rank >= 3 && rank <= 5:
            return 'bg-yellow-100';
        case rank >= 17:
            return 'bg-red-100';
        default:
            return 'bg-white';
    }
}

async function StandingTable() {
    const standingTeams  = await getStandingTeams();
    standingTeams.sort((a, b) => a.rank - b.rank);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Club</TableHead>
                    <TableHead className='text-right'>Points</TableHead>
                    <TableHead className="text-right">Forme</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {standingTeams.map((teamData) => (
                    <TableRow key={teamData.teamId} className={getBackgroundColor(teamData.rank)}>
                        <TableCell className="flex items-center gap-2">{teamData.rank} <Image alt={`logo du club de ${teamData.team.name}`} src={teamData.team.logo} width={25} height={25} />{teamData.team.name}</TableCell>
                        <TableCell className='text-right'>{teamData.points}</TableCell>
                        <TableCell className="flex items-center justify-end">
                            {getFormDots(teamData.form)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default StandingTable;
