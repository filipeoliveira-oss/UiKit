import { ComponentProps, forwardRef, useState,useRef } from "react";
import { tv, type VariantProps } from 'tailwind-variants'
import { motion } from 'framer-motion'

interface Itooltip {
    children: React.ReactNode,
    content: string,
    offset?: number,
    delayOpen?: number,
    delayHide?: number
}


const TooltipVariant = tv({
    base: 'flex items-center justify-center w-fit h-fit absolute bg-white shadow-lg border border-zinc-100 p-1 rounded-sm z-50',

    variants: {
        placement: {
            "top-start": "bottom-full left-0 -translate-y-[7px]",
            "top": 'bottom-full left-1/2 -translate-y-[7px]',
            "top-end": 'bottom-full right-0 -translate-y-[7px]',
            "bottom-start": 'top-full left-0 translate-y-[7px]',
            "bottom": 'top-full left-1/2 translate-y-[7px]',
            "bottom-end": 'top-full right-0 translate-y-[7px]',
            "left-start": 'right-full top-0 -translate-x-[7px]',
            "left": 'right-full top-1/2 -translate-y-1/2 -translate-x-[7px]',
            "left-end": 'right-full bottom-0 -translate-x-[7px]',
            "right-start": 'left-full top-0 translate-x-[7px]',
            "right": 'left-full top-1/2 -translate-y-1/2 translate-x-[7px]',
            "right-end": 'left-full bottom-0 translate-x-[7px]',
        },

    },

    defaultVariants: {
        placement: 'top-start',
    },
})

type TooltipType = ComponentProps<'div'> & Itooltip & VariantProps<typeof TooltipVariant>

export const Tooltip = forwardRef<HTMLDivElement, TooltipType>(
    ({ className, children, placement = 'top-start', delayOpen = 150, delayHide = 150, content, ...props }, ref) => {

        const [showTooltip, setShowTooltip] = useState(false)

        const timerRef = useRef<number | null>(null);

        const tooltip = {
            closed: { display: 'none', opacity: 0, translateY:'20px' },
            open: {
                display: 'block',
                opacity: 1,
                translateY:'0px',
                transition: {
                    duration: .250,
                }
            }
        }

        const handleMouseEnter = () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setShowTooltip(true);
            }, delayOpen);
        };

        const handleMouseLeave = () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setShowTooltip(false);
            }, delayHide);
        };



        return (
            <div ref={ref} className={"flex items-center justify-center w-full h-full relative "} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {children}

                <motion.div className={TooltipVariant({ placement, className:  `${className}` })} variants={tooltip} initial='closed' animate={showTooltip ? 'open' : 'closed'}>
                    <span className="whitespace-nowrap">{content}</span>
                </motion.div>
            </div>
        )
    }
)