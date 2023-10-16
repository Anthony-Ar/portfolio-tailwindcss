export default function Input(props) {
    return (
        <>
            <input
                id={props.name}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className="peer relative h-12 w-full rounded border border-[var(--color-text)] px-4 pl-12 placeholder-transparent outline-none transition-all autofill:bg-[var(--color-background)] invalid:border-pink-500 invalid:text-pink-500 focus:border-red-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 dark:bg-[var(--color-background)] dark:text-[var(--color-text)]"
            />
            <label
                htmlFor={props.name}
                className="absolute -top-2 left-2 z-[1] cursor-text px-2 font-sans text-xs text-[var(--color-text)] transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent dark:before:bg-[var(--color-background)]"
            >
                {props.placeholder}
            </label>
            <props.icon className="absolute left-4 top-3 h-6 w-6 stroke-[var(--color-text)] peer-disabled:cursor-not-allowed" />
        </>
    );
}
