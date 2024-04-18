import React from 'react'

function Hero() {
    return (
        <div className="w-full py-20 mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
                    <div className="flex gap-4 flex-col flex-1">
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-xl sm:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                                Toutes les statistiques des verts sont ici
                            </h2>
                            <p className="text-md max-w-xl lg:max-w-md leading-relaxed tracking-tight text-muted-foreground font-nunito">
                                Explorez les chiffres actuels de l&apos;AS Saint-Étienne. Plongez au cœur des statistiques les plus récentes, des performances sur le terrain, et des données qui définissent le présent et l&apos;avenir du club. Découvrez les statistiques des joueurs, les analyses de matchs, et suivez en temps réel l&apos;évolution des performances qui forgent la légende de l&apos;ASSE.
                            </p>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
                </div>
        </div>
    )
}

export default Hero