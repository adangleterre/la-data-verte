import PlayerCard from "./PlayerCard"

function PlayersSection() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="font-bold text-2xl mb-3">Gardiens</p>
                <div className="flex flex-col max-w-64 gap-6">
                <PlayerCard />
                </div>
            </div>
            <div>
                <p className="font-bold text-2xl">Défenseurs</p>
            </div>
            <div>
                <p className="font-bold text-2xl">Milieux</p>
            </div>
            <div>
                <p className="font-bold text-2xl">Attaquants</p>
            </div>
        </div>
    )
}

export default PlayersSection