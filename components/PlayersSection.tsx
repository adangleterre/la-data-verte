import PlayerCard from "./PlayerCard"

async function PlayersSection() {
    return (
        <div className="flex flex-col gap-16">
            <div>
                <p className="font-bold text-3xl mb-6">Gardiens</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <PlayerCard positionCategory="Goalkeeper"/>
                </div>
            </div>
            <div>
                <p className="font-bold text-3xl mb-6">Défenseurs</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <PlayerCard positionCategory="Defender"/>
                </div>
            </div>
            <div>
                <p className="font-bold text-3xl mb-6">Milieux</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <PlayerCard positionCategory="Midfielder"/>
                </div>
            </div>
            <div>
                <p className="font-bold text-3xl mb-6">Attaquants</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <PlayerCard positionCategory="Attacker"/>
                </div>
            </div>
        </div>
    )
}

export default PlayersSection