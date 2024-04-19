import { GoDotFill } from "react-icons/go";
import { RiRectangleFill } from "react-icons/ri";

function StandingLegend() {
    return (
        <div className="flex flex-col mt-3 gap-2 text-sm">
            <div className="flex gap-3">
                <div>Forme :</div>
                <div className="flex gap-2">
                    <div className="flex items-center"><GoDotFill className='text-primary' />Victoire</div>
                    <div className="flex items-center"><GoDotFill className='text-slate-500' />Nul</div>
                    <div className="flex items-center"><GoDotFill className='text-red-500' />Défaite</div>
                </div>
            </div>
            <div className="flex gap-3">
                <div>Position :</div>
                <div className="flex flex-col sm:flex-row sm:gap-5">
                    <div className="flex items-center gap-1"><RiRectangleFill className='text-primary' />Promotion directe en Ligue 1</div>
                    <div className="flex items-center gap-1"><RiRectangleFill className='text-yellow-500' />Barrages d&apos;accession</div>
                    <div className="flex items-center gap-1"><RiRectangleFill className='text-red-500' />Relégation en National 1</div>
                </div>
            </div>
        </div>
    )
}

export default StandingLegend