import { icons } from "lucide-react"

interface cards {
    icon: keyof typeof icons;
    title: string;
    text: string
}


export default function Cards({ icon, text, title }: cards) {

    const LucideIcon = icons[icon]

    return (
        <div className="w-full h-full cardStyle px-4 text-white flex py-4 flex flex-col gap-4">
            <LucideIcon className="text-violet-500" />
            <span className="capitalize text-lg font-regular">{title}</span>
            <span className="text-md text-zinc-300">{text}</span>
        </div>
    )
}