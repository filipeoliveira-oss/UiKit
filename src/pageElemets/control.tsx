import { useRef, useState } from "react"
import { Button } from "../uiKit/button/button"
import Checkbox from "../uiKit/checkBox/checkBox";
import { Tooltip } from "../uiKit/tooltip/tooltip";


type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type HSL = `hsl(${number}, ${number}%, ${number}%)`;
type HSLA = `hsla(${number}, ${number}%, ${number}%, ${number})`;
type OKLCH = `oklch(${number} ${number} ${number})`;
type OKLAB = `oklab(${number} ${number} ${number})`;
type CMYK = `cmyk(${number}%, ${number}%, ${number}%, ${number}%)`;

type colors = RGB | RGBA | HEX | HSL | HSLA | OKLCH | OKLAB | CMYK ;


export default function Control(){
    const colorRef = useRef<HTMLInputElement>(null)
    const timerRef = useRef<number | null>(null);

    const [selectedColor, setSelectedColor] = useState<colors>('#8e51ff')
    const [checkbox, setCheckbox] = useState<boolean>(false)


    function ColorSelector({color} : {color:colors}){
        return(
            <div className="cursor-pointer h-6 w-6 border-0 rounded-md" style={{backgroundColor:color}} onClick={() => handleChangeColor(color)}></div>
        )
    }

    function handleChangeColor(e:colors){
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setSelectedColor(e)
        }, 250);
    }

    return(
        <div className="w-full h-fit flex flex-row gap-4 ">
            <div className="w-1/2 h-full flex flex-col ">
                <span className="text-5xl text-white leading-snug">Gain complete mastery over your components and control <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">every detail</span></span> <br />
                <span className="text-zinc-300 w-[80%] text-lg">Total control, your way—pass props, tweak the code, or style with classes. The choice is yours.</span>
            
                <div className="w-full h-12 flex flex-row gap-2 mt-8  items-center">
                    <div className="w-fit h-fit flex flex-row gap-4">
                        <span className="text-zinc-300 w-[80%] text-lg">Primary color:</span>
                        <input className={`w-32 h-8 border-2 outline-none rounded-lg text-white px-2`} style={{borderColor:selectedColor}} value={selectedColor} onChange={(e) => handleChangeColor(e.target.value as unknown as colors)}/>
                    </div>
                    
                    <ColorSelector color="#1677FF"/>
                    <ColorSelector color="#5A54F9"/>
                    <ColorSelector color="#9E339F"/>
                    <ColorSelector color="#ED4192"/>
                    <ColorSelector color="#E0282E"/>
                    <ColorSelector color="#F4801A"/>
                    <ColorSelector color="#F2BD27"/>
                    <ColorSelector color="#00B96B"/>

                    <div className="cursor-pointer h-6 w-6 border-0 rounded-md relative bg-[conic-gradient(red,yellow,lime,aqua,blue,magenta,red)]" onClick={() => colorRef.current ? colorRef.current.click() : ''}>
                        <input ref={colorRef} type="color" value={selectedColor} onChange={(e) => handleChangeColor(e.target.value as unknown as colors)} className="cursor-pointer h-full w-full outline-none border-0 rounded-lg absolute top-0 right-0 invisible" />
                    </div>
                </div>
            </div>

            <div className="w-1/2 h-full flex relative ">
                <Button backgroundColor={selectedColor} className="absolute top-12 left-4">This is a sample button</Button>

                <div className="w-fit h-fit flex flex-row gap-2 items-center absolute top-48 left-56">
                    <span className="text-zinc-300">Are you a customer?</span>
                    <Checkbox value={checkbox} setValue={(e) => setCheckbox(e)} falseAccentColor={selectedColor}/>
                </div>

                <div className="w-fit h-fit  absolute bottom-0 right-12">
                    <Tooltip content="This is a sample tooltip" backgroundColor={selectedColor} className="text-white">
                        <div className="text-zinc-300 cursor-pointer">Hover me</div>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}