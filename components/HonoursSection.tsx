import TrophyWon from "./TrophyWon"
 
function HonoursSection() {
    return (
        <>
            <h2 className="text-center text-green-950 font-bold text-4xl mb-4">Palmares</h2>
            <div className="grid place-content-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 mx-auto">
                <TrophyWon image="/trophee-L1.svg" name="Championnat de France de Ligue 1" number={10}/>
                <TrophyWon image="/trophee-CDF.svg" name="Coupe de France" number={6}/>
                <TrophyWon image="/trophee-CDL.svg" name="Coupe de la ligue" number={1}/>
                <TrophyWon image="/trophee-TDC.svg" name="Trophé des champions" number={5}/>
                <TrophyWon image="/trophee-L2.svg" name="Championnat de France de Ligue 2" number={3}/>
            </div>
        </>
    )
}

export default HonoursSection