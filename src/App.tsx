import Cards from "./componets/cards";
import HeroHeader from "./pageElemets/heroHeader";

export default function App() {

	return (
		<div className="w-full h-full pt-12 flex flex-col gap-4 px-[13%] mt-4">
			<HeroHeader/>

			<div className=" flex-row grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] auto-rows-fr gap-4 mt-4 h-auto">
				<Cards icon="Zap" title="Fast" text="Built with Tailwind CSS, ensuring zero runtime styles and eliminating unnecessary classes from your bundle." />
				<Cards icon="FileJson2" title="TypeScript friendly" text="FO UI Kit is fully typed to simplify learning and provide an optimal developer experience with TypeScript integration." />
				<Cards icon="Weight" title="Light" text="FO UI Kit is lightweight, bundling only the components you use for optimal performance." />
			</div>
		</div>
	)
}