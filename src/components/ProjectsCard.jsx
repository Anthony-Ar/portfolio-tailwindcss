import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectsCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={`group relative flex flex-col items-center hover:cursor-pointer md:flex-row ${
                inView ? "animate-from_right_appear" : "invisible opacity-0"
            }`}
            onClick={() => setIsOpen(true)}
        >
            {isOpen &&
                createPortal(
                    <Modal
                        onClose={() => setIsOpen(false)}
                        data={props.data}
                    />,
                    document.body,
                )}

            <img
                src={props.data.cover}
                alt="Kasa"
                className="relative top-6 z-20 h-48 w-48 shadow-xl brightness-100 duration-300 group-hover:brightness-100 dark:brightness-50 dark:group-hover:brightness-75 md:left-6 md:top-0 md:brightness-75"
            />
            <div className="card-clip-polygon relative z-10 flex h-auto w-full flex-col justify-between border bg-stone-700 p-12 shadow-xl duration-300 group-hover:border-[var(--color-red)] dark:border-[var(--color-red-darker)] dark:bg-[var(--color-background-lighter)] md:h-56 xl:max-w-2xl">
                <div>
                    <h3 className="font-mono text-3xl text-[var(--color-red)]">
                        {props.data.title}
                    </h3>
                    <p className="font-sans text-[var(--color-text)]">
                        {props.data.description}
                    </p>
                </div>
                <div className="mt-2 flex flex-col font-mono text-gray-300/40 md:mt-0 md:flex-row md:gap-6">
                    {props.data.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <PlusCircleIcon
                className="absolute -right-2 bottom-0 h-8 w-8 text-[var(--color-red-darker)] duration-300 group-hover:text-[var(--color-red)] md:right-0"
                alt="Afficher plus"
            />
        </div>
    );
}
