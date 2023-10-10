import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { AtSymbolIcon, ChatBubbleOvalLeftEllipsisIcon, PaperAirplaneIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Contact() {
    return (
        <section id="contact" className="container m-auto pt-48 pb-32 px-6 flex flex-col items-center">
            <h2 className="
                    before:block before:w-full before:h-1.5 before:bg-[#222222] before:absolute before:top-1/2 before:skew-y-3
                    text-9xl font-serif font-bold uppercase select-none text-[#3a3a3a] relative w-fit
                ">
                Contact
            </h2>
            <p className="font-mono text-[#c2c2c2]">Je ne suis pas à la recherche nouvelles opportunités actuellement, cependant ma boîte mail reste ouverte pour toute demande.</p>

            <div className="mt-24 w-1/2 flex justify-between">
                <a href="mailto:anthony.arrighi@orange.fr" className="flex gap-2 items-center text-[#d71945] text-xl font-light font-serif">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-[#d71945]">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                    </svg> GitHub</a>
                <a href="mailto:anthony.arrighi@orange.fr" className="flex gap-2 items-center text-[#d71945] text-xl font-light font-serif"><EnvelopeIcon className="w-5 h-5"/> anthony.arrighi@orange.fr</a>
            </div>
            <div className="bg-[#262626] mt-2 p-12 w-1/2 rounded border border-[#641e2e] shadow-xl relative">
                <p className="font-mono text-[#c2c2c2] mb-12">Vous pouvez me contacter par e-mail, sur les réseaux sociaux ou directement depuis le formulaire ci-dessous.</p>
                <div className="relative my-6">
                    <input
                        id="id-l11"
                        type="text"
                        name="id-l11"
                        placeholder="Nom et prénom"
                        className="relative w-full h-12 px-4 pl-12 placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    />
                    <label
                        htmlFor="id-l11"
                        className="font-sans absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                    >
                        Nom et prénom
                    </label>
                    <UserIcon className="absolute w-6 h-6 top-3 left-4 stroke-slate-400 peer-disabled:cursor-not-allowed" />
                </div>
                <div className="relative my-6">
                    <input
                        id="id-l11"
                        type="text"
                        name="id-l11"
                        placeholder="Adresse e-mail"
                        className="relative w-full h-12 px-4 pl-12 placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    />
                    <label
                        htmlFor="id-l11"
                        className="font-sans absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                    >
                        Adresse e-mail
                    </label>
                    <AtSymbolIcon className="absolute w-6 h-6 top-3 left-4 stroke-slate-400 peer-disabled:cursor-not-allowed" />
                </div>

                <div className="relative my-6">
                            <textarea
                                id="id-l11"
                                name="id-l11"
                                rows="8"
                                placeholder="Message"
                                className="relative w-full px-4 pl-12 pt-2 placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                    <label
                        htmlFor="id-l11"
                        className="font-sans absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                    >
                        Message
                    </label>
                    <ChatBubbleOvalLeftEllipsisIcon className="absolute w-6 h-6 top-3 left-4 stroke-slate-400 peer-disabled:cursor-not-allowed" />
                </div>
                <div className="flex items-center border border-[#641e2e] w-fit m-auto font-mono bg-[#222222] py-2 px-4 text-[#c2c2c2] gap-4 hover:border-[#ff003a] duration-300 hover:cursor-pointer">
                    <PaperAirplaneIcon className="w-5 h-5"/>
                    Envoyer mon message
                </div>
            </div>
        </section>
    )
}