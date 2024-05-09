import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { basicFetch } from "@/api/fetchFunctions";
import { playersURL } from "@/config";
import { Player } from "@/api/types";

interface PlayerCardProps {
  positionCategory: "Goalkeeper" | "Defender" | "Midfielder" | "Attacker";
}

async function getPlayersInfos(): Promise<Player[]> {
  const playersInfosEndpoint: string = playersURL;
  const playerInfos = await basicFetch<Player[]>(playersInfosEndpoint);

  return playerInfos;
}

async function PlayerCard({ positionCategory }: PlayerCardProps) {
  let playerInfos = await getPlayersInfos();

  const filteredPlayers = playerInfos.filter(
    (player) => player.position === positionCategory
  );

  return (
    <>
      {filteredPlayers.map((player) => (
        <Card key={player.id} className="min-w-20">
          <CardHeader className="flex gap-3 items-center text-center">
            <Avatar>
              <AvatarImage src={player.photo} alt={`photo de ${player.name}`} />
            </Avatar>
            <div className="flex flex-col">
              <CardTitle>{player.name}</CardTitle>
              <CardDescription>{player.age} ans</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              # {player.number} | {player.position}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default PlayerCard;
