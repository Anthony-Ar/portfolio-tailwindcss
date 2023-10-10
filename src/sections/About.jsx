import { GitHubCard } from "../components";

export default function About() {
    return (
        <section id="about" className="pt-32 flex gap-32">

            <GitHubCard />
            <div className="max-w-4xl">
                <h2 className="
                        before:block before:w-full before:h-1.5 before:bg-[#222222] before:absolute before:top-1/2
                        text-9xl font-serif font-bold uppercase select-none text-[#3a3a3a] relative w-fit
                    ">
                    À propos
                </h2>
                <div className="mt-12 flex flex-col gap-4 font-mono text-[#c2c2c2]">
                    <p>En quelques mots : je m'appelle Anthony et j'ai décidé de transformer une passion en une
                        carrière professionnel stimulante.</p>
                    <p>Mon parcours a débuté par des projets personnels, il y as longtemps, où j'ai expérimenté
                        plusieurs langages de programmation et j'ai par la suite continuer exclusivement sur du
                        développement web.</p>
                    <p>J'ai tout de suite été attiré par le côté infinie du développement, le fait de pouvoir créer
                        sans n'avoir d'autre limite que son imagination dans un monde en constante évolution.</p>
                    <p>Aujourd'hui j'aime construire des sites interactifs, intuitifs et captivants. Je suis aussi
                        attaché au contenu qu'il délivre.</p>
                </div>
            </div>

        </section>
    )
}