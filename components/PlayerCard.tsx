import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface Player {
    id: number,
    name: string,
    age: number,
    number: number,
    photo: string,
    position: string,
}

interface PlayerCardProps {
    positionCategory: "Goalkeeper" | "Defender" | "Midfielder" | "Attacker";
}

async function getPlayersInfos(): Promise<Player[]> {
    const response = await fetch('https://asse-api-production.up.railway.app/players');
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await response.json();

    return data;
}


async function PlayerCard({ positionCategory }: PlayerCardProps) {
    let playerInfos = await getPlayersInfos();

    const filteredPlayers = playerInfos.filter((player) => player.position === positionCategory);

    return (
        <>
            {filteredPlayers.map((player) => (
                <Card key={player.id} className="min-w-20">
                    <CardHeader className="flex gap-3 items-center text-center">
                        <Avatar>
                            <AvatarImage src={player.photo} alt={`photo de ${player.name}`} />
                        </Avatar>
                        <div className="flex flex-col">
                            <CardTitle>
                                {player.name}
                            </CardTitle>
                            <CardDescription>{player.age} ans</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p># {player.number} | {player.position}</p>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}

export default PlayerCard