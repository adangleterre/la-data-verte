import Image from "next/image"

interface TrophyWonProps {
    image: string,
    number: number,
    name: string
}

function TrophyWon({ image, number, name }: TrophyWonProps) {
    return (
        <div className="flex flex-col text-center items-center">
            <p className="font-bold text-5xl text-green-950">{number}</p>
            <Image src={image} alt={`le trophée ${name}`} width={100} height={100}/>
            <p className="mt-2">{name}</p>
        </div>
    )
}

export default TrophyWon