export type Team = {
    teamId: number;
    rank: number;
    points: number;
    form: string;
    team: {
        name: string;
        logo: string;
    };
}

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

interface Player {
    id: number;
    name: string;
    age: number;
    number: number;
    photo: string;
    position: string;
}