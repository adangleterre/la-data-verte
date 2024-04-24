import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className="py-10">
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex gap-6 flex-col">
                        <h1 className="text-5xl lg:text-7xl tracking-tight font-bold">
                            Toutes les stats des <span className='text-primary'>verts</span> sont ici !
                        </h1>
                        <p className="text-md leading-relaxed text-muted-foreground max-w-lg">
                            Explorez les chiffres actuels de l&apos;AS Saint-Étienne. Plongez au cœur des statistiques les plus récentes, des performances sur le terrain, des données qui définissent le présent et l&apos;avenir du club. Découvrez les statistiques des joueurs, les analyses de matchs, et suivez en temps réel l&apos;évolution des performances qui forgent la légende de l&apos;ASSE.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-green-200 rounded-md">
                            <Image
                                src="/players.png"
                                width={500}
                                height={500}
                                alt="Les joueurs de saint-etienne en train de célébrer"
                            />
                        </div>
                        <div className="bg-emerald-300 rounded-md row-span-2 flex items-end">
                            <Image
                                src="/stadium.png"
                                width={500}
                                height={500}
                                alt="Le stade geoffroy-guichard, les sièges montrent les initiales du club"
                                className='rounded-md'
                            />
                        </div>
                        <div className="bg-lime-200 rounded-md">
                            <Image
                                src="/cardona.png"
                                width={500}
                                height={500}
                                alt="Irvin Cardona célèbre un but"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero