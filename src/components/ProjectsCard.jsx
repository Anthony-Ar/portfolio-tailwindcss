import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function ProjectsCard() {
    return (
        <a href="#">
            <div className="group flex items-center relative">
                <img
                    src="./projets/kasa.jpg"
                    alt="Kasa"
                    className="group-hover:brightness-75 w-48 h-48 z-20 relative left-6 shadow-xl brightness-50 duration-300"
                />
                <div className="
                                    card-clip-polygon relative p-12 bg-[#262626] max-w-2xl border border-[#641e2e] group-hover:border-[#ff003a] duration-300 shadow-xl h-56 flex flex-col justify-between z-10
                                    ">
                    <div>
                        <h3 className="text-3xl font-mono text-[#d71945]">Kasa</h3>
                        <p className="font-sans text-[#c2c2c2]">Un site de réservation en ligne dédié aux vacances et à l'évasion</p>
                    </div>
                    <div className="flex gap-6 font-mono text-gray-300/40">
                        <span>ReactJS</span>
                        <span>SaSS</span>
                    </div>

                </div>
                <PlusCircleIcon className="h-8 w-8 absolute bottom-0 right-0 text-[#641e2e] duration-300 group-hover:text-[#ff003a]"/>
            </div>
        </a>
    )
}