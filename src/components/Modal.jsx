import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
    XMarkIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export default function Modal({ onClose, data }) {
    const [preview, setPreview] = useState("desktop");
    const text = { __html: data.text };

    return (
        <Transition appear show={true} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded bg-stone-100 p-6 text-left align-middle shadow-xl transition-all dark:border dark:border-[var(--color-red-darker)] dark:bg-[var(--color-background)]">
                                <button
                                    onClick={onClose}
                                    type="button"
                                    className="absolute right-2 top-2 rounded-full"
                                >
                                    <XMarkIcon className="h-6 w-6  text-stone-700 duration-300 hover:cursor-pointer hover:text-[var(--color-red)] dark:text-[var(--color-text)] dark:hover:text-[var(--color-red)]" />
                                </button>
                                <Dialog.Title
                                    as="h3"
                                    className="font-serif text-3xl font-medium leading-6 text-gray-900 dark:text-[var(--color-red)]"
                                >
                                    {data.title}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="flex items-center gap-4 font-mono text-sm text-gray-500 dark:text-gray-400">
                                        {data.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </p>
                                </div>

                                <div
                                    className="mt-4 dark:text-[var(--color-text)]"
                                    dangerouslySetInnerHTML={text}
                                />

                                <div className="mt-8 flex items-center justify-center gap-4 dark:text-[var(--color-text)]">
                                    {data.pictures.desktop !== "" && (
                                        <span
                                            className={`flex items-center gap-2 hover:cursor-pointer ${
                                                preview === "desktop" &&
                                                "font-bold"
                                            }`}
                                            onClick={() =>
                                                setPreview("desktop")
                                            }
                                        >
                                            <ComputerDesktopIcon className="h-5 w-5" />{" "}
                                            Aperçu desktop
                                        </span>
                                    )}
                                    {data.pictures.mobile !== "" && (
                                        <span
                                            className={`flex items-center gap-2 hover:cursor-pointer ${
                                                preview === "mobile" &&
                                                "font-bold"
                                            }`}
                                            onClick={() => setPreview("mobile")}
                                        >
                                            <DevicePhoneMobileIcon className="h-5 w-5" />{" "}
                                            Aperçu mobile
                                        </span>
                                    )}
                                </div>

                                <img
                                    src={
                                        preview === "desktop"
                                            ? data.pictures.desktop
                                            : data.pictures.mobile
                                    }
                                    className="m-auto mt-4 max-h-96 rounded border dark:border-none"
                                />

                                {data.external_links.github !== "" && (
                                    <div className="mt-6 flex justify-center">
                                        <a
                                            href={data.external_links.github}
                                            className="flex items-center gap-2 rounded border border-stone-100 px-6 py-2 duration-300 hover:cursor-pointer hover:border-stone-700 dark:border-[var(--color-background)] dark:text-[var(--color-text)] dark:hover:border-[var(--color-red)]"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="h-5 w-5 dark:fill-[var(--color-text)]"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                                                ></path>
                                            </svg>
                                            Code source
                                        </a>
                                    </div>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
