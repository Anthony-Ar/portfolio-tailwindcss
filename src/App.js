import { Header } from "./components";
import { About, Projects, Contact } from "./sections";
import { useWindowScroll } from "@uidotdev/usehooks";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

export default function App() {
    const [{ y }, scrollTo] = useWindowScroll();

    return (
        <>
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>

            {y > 200 && (
                <div
                    className="fixed bottom-10 right-5 hidden animate-from_bottom_appear rounded border border-[var(--color-red-darker)] p-2 text-[var(--color-background-lighter)] duration-300 hover:cursor-pointer hover:border-[var(--color-red)] dark:bg-[var(--color-background-lighter)] dark:text-[var(--color-text)] 2xl:block"
                    onClick={() =>
                        scrollTo({ left: 0, top: 0, behavior: "smooth" })
                    }
                >
                    <ArrowSmallUpIcon
                        className="h-5 w-5"
                        alt="Remonter en haut de la page"
                    />
                </div>
            )}
        </>
    );
}
