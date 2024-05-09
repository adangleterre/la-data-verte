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
    const standingTeamsEndpoint: string = standingURL;
    const standingTeams = await basicFetch<Team[]>(standingTeamsEndpoint);
    
    return standingTeams;
}

function getFormDots(form: string) {
    const dotColor =  {
        win: 'text-primary',
        draw: 'text-slate-500',
        loose: 'text-red-500',
    }

    return form.split('').map((result, index) => (
        <GoDotFill
            key={index}
            className={{
                W: dotColor.win,
                D: dotColor.draw,
                L: dotColor.loose,
            }[result]}
        />
    ));
}

function getBackgroundColor(rank: number): string {
    const rankColor =  {
        promotion: 'bg-green-100',
        playoffs: 'bg-yellow-100',
        relegation: 'bg-red-100',
        normalPosition: 'bg-white'
    }

    switch (true) {
        case rank <= 2:
            return rankColor.promotion;
        case rank >= 3 && rank <= 5:
            return rankColor.playoffs;
        case rank >= 17:
            return rankColor.relegation;
        default:
            return rankColor.normalPosition;
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
