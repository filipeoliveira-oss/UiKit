export default function Footer() {
    return (
        <div className="w-full min-h-[40dvh] flex flex-row justify-between items-center border border-zinc-50">
            <div className="w-fit h-full flex flex-col gap-8  justify-center">
                <div className="w-fit h-fit flex flex-col gap-2">
                    <h1 className="text-zinc-100 cursor-pointer text-3xl font-light">UI Kit</h1>
                    <span className="text-zinc-300">Projected and maintained by <a href="https://www.linkedin.com/in/filipeoliveirasilva/">Filipe Oliveira</a></span>
                </div>

                <span className="text-zinc-300">Deployed on Vercel</span>
            </div>

            <div className="w-fit h-full flex flex-col gap-4 justify-center">
                <span className="text-white text-xl">Menus</span>
                <a className="text-zinc-300 cursor-pointer">Docs</a>
                <a className="text-zinc-300 cursor-pointer">Components</a>
            </div>
        </div>
    )
}