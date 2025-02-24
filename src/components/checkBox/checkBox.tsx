import { clsx, type ClassValue } from "clsx"
import { ComponentProps, forwardRef, useRef } from "react"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"
import { motion, MotionConfig } from 'framer-motion'



interface props {
	value: boolean,
	setValue: (e: boolean | ((prev: boolean) => boolean)) => void,
	falseAccentColor?: string,
	trueAccentColor?: string,
	disabledAnimation?: boolean,
	animationDuration?: number
}


const checkboxVariants = tv({
	base: 'w-8 h-8 border border-zinc-400 cursor-pointer flex flex-row gap-2 items-center justify-center',
	variants: {
		format: {
			square: 'rounded-md',
			rounded: 'rounded-full'
		}
	},

	defaultVariants: {
		format: 'square'
	}
})

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

type checkboxType = ComponentProps<'div'> & props & VariantProps<typeof checkboxVariants>




const Checkbox = forwardRef<HTMLDivElement, checkboxType>(
	({ className, setValue, value, format, falseAccentColor = '#FE0000', trueAccentColor = '#00CC44', disabledAnimation = false, animationDuration = 0.5 }, ref) => {


		const animation = {
			hidden: {
				pathLength: 0,
				opacity: 1,
				transition: {
					duration: disabledAnimation ? 0 : animationDuration
				}
			},
			show: {
				pathLength: 1,
				opacity: 1,
				transition: {
					duration: disabledAnimation ? 0 : animationDuration
				}
			}

		}

		function X() {
			return (
				<motion.svg xmlns="http://www.w3.org/2000/svg" width='80%' height='80%' viewBox="0 0 24 24" fill="none" stroke={falseAccentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<motion.path d="M18 6 6 18" variants={animation} initial='hidden' animate={value === false ? 'show' : 'hidden'} />
					<motion.path d="m6 6 12 12" variants={animation} initial='hidden' animate={value === false ? 'show' : 'hidden'} />
				</motion.svg>
			)
		}

		function Check() {
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width='80%' height='80%' viewBox="0 0 24 24" fill="none" stroke={trueAccentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
					<motion.path d="M20 6 9 17l-5-5" variants={animation} initial='hidden' animate={value === true ? 'show' : 'hidden'} />
				</svg>
			)
		}


		return (
			<div ref={ref} className={checkboxVariants({ format, className })} onClick={() => setValue((prev: boolean) => !prev)}>
				{value === true ? <Check /> : <X />}
			</div>
		)
	}
)

export default Checkbox
