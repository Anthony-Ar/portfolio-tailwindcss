import { GitHubCard } from "../components";

export default function About() {
    return (
        <section
            id="about"
            className="flex animate-from_bottom_appear flex-col gap-8 pt-8 lg:gap-16 2xl:flex-row 2xl:gap-32 2xl:pt-32"
        >
            <GitHubCard />
            <div className="container flex flex-col px-6 sm:m-auto 2xl:max-w-4xl">
                <h2
                    className="
                        relative w-fit select-none font-serif text-6xl font-bold uppercase text-stone-700 before:absolute before:top-1/2
                        before:block before:h-0.5 before:w-full before:bg-stone-100 dark:text-[var(--color-text-darker)] dark:before:bg-[var(--color-background)] sm:text-8xl sm:before:h-1 md:text-9xl md:before:h-1.5
                    "
                >
                    À propos
                </h2>
                <div className="mt-12 flex flex-col gap-4 font-mono dark:text-[var(--color-text)]">
                    <p>
                        En quelques mots : je m'appelle Anthony et j'ai décidé
                        de transformer ma passion en une carrière
                        professionnelle stimulante.
                    </p>

                    <p>
                        Mon parcours a commencé par des projets personnels, il y
                        a longtemps, où j'ai expérimenté plusieurs langages de
                        programmation, puis j'ai continué exclusivement dans le
                        domaine du développement web.
                    </p>

                    <p>
                        J'ai été immédiatement attiré par l'aspect infini du
                        développement, le fait de pouvoir créer sans avoir
                        d'autre limite que son imagination dans un univers en
                        constante évolution.
                    </p>

                    <p>
                        Aujourd'hui, j'aime construire des sites interactifs,
                        intuitifs et captivants. Je tiens également beaucoup à
                        la qualité du contenu qu'ils délivrent.
                    </p>
                </div>
            </div>
        </section>
    );
}
