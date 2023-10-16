import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function GitHubCard() {
    const [userInfo, setUserInfo] = useState([]);

    const fetchUser = () => {
        fetch("https://api.github.com/users/Lost-Somewhere")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUserInfo(data);
            });
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="lg:pt-16">
            <div className="w-full bg-stone-700 shadow-xl dark:border dark:border-l-0 dark:border-r-0 dark:border-[var(--color-red-darker)] dark:bg-[var(--color-background-lighter)] dark:shadow-none 2xl:max-w-2xl dark:2xl:border-r">
                <div className="flex flex-col items-center justify-center gap-8 p-6 md:flex-row md:gap-16 2xl:justify-start">
                    <img
                        src={userInfo.avatar_url}
                        alt={`Avatar GitHub de ` + userInfo.login}
                        className="h-32 w-32 rounded-full"
                    />
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-serif text-2xl text-[var(--color-red)]">
                                    {userInfo.login}
                                </p>
                                <a
                                    href={userInfo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ArrowTopRightOnSquareIcon
                                        className="h-6 w-6 text-[var(--color-text)] duration-300 hover:cursor-pointer hover:text-[var(--color-red)]"
                                        alt={
                                            `Lien externe : GitHub de ` +
                                            userInfo.login
                                        }
                                    />
                                </a>
                            </div>
                            <p className="font-sans text-sm text-[var(--color-text)]">
                                {userInfo.name}
                            </p>
                        </div>
                        <p className="font-sans font-extralight italic text-[var(--color-text)]">
                            {userInfo.bio !== null
                                ? userInfo.bio
                                : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
