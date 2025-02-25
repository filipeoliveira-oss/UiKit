import { ArrowRight,  Copy, Terminal } from "lucide-react";
import { Button } from "../uiKit/button/button";
import { Tooltip } from "../uiKit/tooltip/tooltip";
import { useState } from "react";
import { motion } from 'framer-motion'

export default function HeroHeader() {

	const [copied, setCopied] = useState(false)

    const animation = {
		hidden: {
			pathLength: 0,
			opacity: 1,
			transition: {
				duration: .350
			}
		},
		show: {
			pathLength: 1,
			opacity: 1,
			transition: {
				duration: .350
			}
		}

	}

	function handleCopy() {
		setCopied(true)
		navigator.clipboard.writeText('npx fouikit')

		setTimeout(() => {
			setCopied(false)
		}, 3000);
	}

	function Check() {
		return (
			<svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width='18px' height='18px' viewBox="0 0 24 24" fill="none" stroke='currentColor' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
				<motion.path d="M20 6 9 17l-5-5" variants={animation} initial='hidden' animate={'show'} />
			</svg>
		)
	}

    return (
        <div className="w-full h-[70dvh] border border-zinc-300 flex items-center justify-between">
            <div className="w-1/2 h-full flex flex-col justify-center border ">
                <span className="text-white px-2 text-5xl w-full leading-snug">Accelerate your React projects with flexible, </span> <br />
                <span className="text-white px-2 text-5xl w-fit leading-snug bg-violet-500/30 border-r-4 border-r-violet-500 -translate-y-4">ready-to-use boilerplates</span> <br />
                <span className="text-zinc-300 w-[80%] text-lg">Pre-built React boilerplates designed for speed, flexibility, and seamless integration into your projects.</span>

                <div className="w-full h-fit flex flex-row gap-4 mt-8">
                    <Button className="rounded-full">Get started <ArrowRight /> </Button>
                    <div className="w-fit h-full border border-zinc-800 text-violet-500 flex flex-row items-center justify-center px-4 gap-4 rounded-full bg-zinc-900">
                        <Terminal size={18} />
                        <span>npx fouikit </span>
                        {copied ?
                            <Check />
                            :
                            <Tooltip content="Copy to clipboard" className="bg-zinc-900 border-none px-2 text-zinc-300">
                                <Copy size={18} className="cursor-pointer" onClick={() => handleCopy()} />
                            </Tooltip>
                        }
                    </div>
                </div>
            </div>

            <img src="./UiKitMain.png" alt="Main Image from FO UI Kit" className="w-1/2 h-auto" />
        </div>
    )
}