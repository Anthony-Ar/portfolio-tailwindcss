import { ProjectsCard } from "../components";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Projects() {
    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    const [projects, setProjects] = useState([]);

    const fetchProjects = () => {
        fetch("./projects.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProjects(data);
            });
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <section
            id="projects"
            className="container -scroll-mt-24 px-6 pt-12 sm:m-auto xl:pt-48"
        >
            <h2
                ref={ref}
                className={`
                    relative w-fit select-none font-serif text-6xl font-bold uppercase text-stone-700 before:absolute before:top-1/2 before:block
                    before:h-0.5 before:w-full before:-skew-y-3 before:bg-stone-100 dark:text-[var(--color-text-darker)] dark:before:bg-[var(--color-background)] sm:text-8xl sm:before:h-1 md:text-9xl md:before:h-1.5
                    ${
                        inView
                            ? "animate-from_bottom_appear opacity-100"
                            : "invisible opacity-0"
                    }
                `}
            >
                Projets
            </h2>
            <div className="px-6 pt-16 md:px-0">
                <div className="grid grid-cols-4 gap-4 lg:grid-cols-8 lg:gap-x-12 lg:gap-y-16 xl:grid-cols-12">
                    {projects.map((project) => (
                        <div
                            className="col-span-4 lg:col-span-8 xl:col-span-6 xl:odd:relative xl:odd:right-6"
                            key={project.id}
                        >
                            <ProjectsCard data={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
