import PageTitle from "./PageTitle"
import PlayerCard from "./PlayerCard"
import { Separator } from "@/components/ui/separator"

async function PlayersSection() {
    return (
        <div className="flex flex-col gap-20">
            <PageTitle title="Effectif Ligue 2 BKT / 2023 - 2024
 "/>
            <div>
                <p className="font-bold text-3xl mb-6">Gardiens</p>
                <Separator className="mb-6"/>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <PlayerCard positionCategory="Goalkeeper" />
                </div>
            </div>
            <div>
                <p className="font-bold text-3xl mb-6">Défenseurs</p>
                <Separator className="mb-6"/>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <PlayerCard positionCategory="Defender" />
                </div>
            </div>
            <div>
                <p className="font-bold text-3xl mb-6">Milieux</p>
                <Separator className="mb-6"/>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <PlayerCard positionCategory="Midfielder" />
                </div>
            </div>
            <div>
                <p className="font-bold text-3xl mb-6">Attaquants</p>
                <Separator className="mb-6"/>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <PlayerCard positionCategory="Attacker" />
                </div>
            </div>
        </div>
    )
}

export default PlayersSection