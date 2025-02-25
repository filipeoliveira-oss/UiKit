export default function Header(){
    return(
        <div className="w-full h-12 border flex fixed flex-row px-[13%] justify-between items-center bg-black">
            <h1 className="text-zinc-100 cursor-pointer text-3xl font-light">UI Kit</h1>

            <div className="flex flex-row gap-4">
                <a className='text-zinc-100 cursor-pointer font-light' href="/docs">Docs</a>
                <a className='text-zinc-100 cursor-pointer font-light' href="/components">Components</a>
            </div>
        </div>
    )
}