import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function GitHubCard() {
    return (
        <div className="pt-16">
            <div className="bg-[#262626] max-w-2xl border border-l-0 border-[#641e2e]">
                <div className="p-6 flex gap-16">
                    <img
                        src="https://avatars.githubusercontent.com/u/112488355?v=4"
                        alt="Avatar GitHub pour l'utilisateur Lost-Somewhere"
                        className="w-32 h-32 rounded-full"
                    />
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl text-[#d71945] font-serif">Lost-Somewhere</p>
                                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-[#c2c2c2]"/>
                            </div>
                            <p className="text-sm text-[#c2c2c2] font-sans">Anthony Arrighi</p>
                        </div>
                        <p className="text-[#c2c2c2] font-extralight font-sans italic">
                            Neque porro quisquam est qui
                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}