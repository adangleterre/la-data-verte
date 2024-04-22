import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Image from "next/image";

interface Player {
    id: number,
    name: string,
    age: number,
    photo: string,
}

async function getPlayersInfos(): Promise<Player[]> {
    const response = await fetch('https://asse-api-production.up.railway.app/players');
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await response.json();

    return data;
}


async function PlayerCard() {
    let playerInfos = await getPlayersInfos();

    return (
        <>
            {playerInfos.map((player) => (
                <Card key={player.id}>
                    <CardHeader className="flex flex-row gap-3 items-center">
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
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}

export default PlayerCard