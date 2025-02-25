import { Tooltip } from "../uiKit/tooltip/tooltip"

export default function Compatibility() {

    function FrameworkCard({ imgUrl, alt, link, frameworkName }: { imgUrl: string, alt: string, link: string,frameworkName:string }) {
        return (
            <Tooltip content={frameworkName} className="bg-zinc-900 border-none px-2 text-zinc-300">
                <a href={link} target="_blank" rel="noopener noreferrer" className="w-full h-full cardStyle px-4 text-white flex py-4 flex-col gap-4 items-center justify-center grayscale cursor-pointer hover:scale-95">
                    <img alt={alt} src={imgUrl} className="w-auto max-h-24" />
                </a>
            </Tooltip>
        )
    }

    return (
        <div className="w-full h-fit flex flex-row gap-4">

            <div className="w-1/2 h-full flex flex-col gap-0 ">
                <span className="text-white text-5xl leading-snug">Build your UI on top of any <span className="bg-violet-500/30 border-r-4 border-r-violet-500">React framework</span></span> <br />
                <span className="text-zinc-300 w-[80%] text-lg">Focus less on writing UI code and more on delivering a remarkable experience for your customers.</span>
            </div>

            <div className=" w-1/2 h-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-fr gap-4">
                <FrameworkCard imgUrl="./nextjs.png" alt="Next logo" link="https://nextjs.org/" frameworkName="NextJs"/>
                <FrameworkCard imgUrl="./vite.png" alt="Vite logo" link="https://vite.dev/" frameworkName="Vite"/>
                <FrameworkCard imgUrl="./remix.png" alt="Remix logo" link="https://remix.run/" frameworkName="Remix"/>
                <FrameworkCard imgUrl="./astro.png" alt="Astro logo" link="https://astro.build/" frameworkName="Astro"/>
                <FrameworkCard imgUrl="./blitz.png" alt="Blitz logo" link="https://blitzjs.com/" frameworkName="BlitzJs"/>
                <FrameworkCard imgUrl="./gatsby.png" alt="Gatsby logo" link="https://www.gatsbyjs.com/" frameworkName="GatsbyJs"/>
            </div>
        </div>
    )
}