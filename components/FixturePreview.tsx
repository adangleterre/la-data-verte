import { Fixture } from "@/api/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import Image from "next/image";

interface FixtureProps {
  fixture: Fixture;
}

export default function FixturePreview(props: FixtureProps) {
  const { fixture } = props;

  return (
    <Card className="min-w-20">
      <CardHeader className="flex gap-3 items-stretch text-center">
        <div className="flex flex-col">
          <CardTitle className="grid grid-cols-3 ">
            <div className="flex flex-col items-center justify-between gap-2">
              <Image
                src={fixture.homeTeam.logo}
                alt={`Logo de l'équipe de ${fixture.homeTeam.name}`}
                width="50"
                height="50"
              />
              <span className={fixture.homeWinner ? "text-primary" : ""}>
                {fixture.homeTeam.name}
              </span>
            </div>
            <div className="self-center flex flex-col items-center gap-4">
              <span>
                {fixture.homeGoalsFullTime} - {fixture.awayGoalsFullTime}
              </span>
              <span className="text-sm font-thin">
                Mi-temps : {fixture.homeGoalsHalfTime} -{" "}
                {fixture.awayGoalsHalfTime}
              </span>
            </div>
            <div className="flex flex-col items-center justify-between gap-2">
              <Image
                src={fixture.awayTeam.logo}
                alt={`Logo de l'équipe de ${fixture.homeTeam.name}`}
                width="50"
                height="50"
              />
              <span className={fixture.awayWinner ? "text-primary" : ""}>
                {fixture.awayTeam.name}
              </span>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-center font-normal text-sm">
        <p>{new Date(fixture.date).toLocaleString()}</p>
        <p>
          {fixture.venue?.name}, {fixture.venue?.city}
        </p>
        <p>Arbitre : {fixture.referee}</p>
      </CardContent>
    </Card>
  );
}
