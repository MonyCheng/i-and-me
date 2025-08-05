import { Diamond, DiamondIcon, ExternalLink, Gem } from "lucide-react"
import Spline from "@splinetool/react-spline"

const hero = () => {
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
            <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
                <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,0,4)] rounded-full">
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
                        <Gem size={20} />
                        <span>INTRODUCING</span>
                    </div>
                </div>
                {/* Main Header */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
                    EMAIL FOR
                    <br></br>
                    DEVELOPER
                </h1>

                {/* Des */}
                <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
                    the best way to reach me insted of spam folder, dlever transaction and marketing email at scale.
                </p>

                {/* Button */}
                <div className="pt-2 flex gap-4">
                    <a href="#" className="inline-flex items-center gap-2 border boder-[#2a2a2a] py2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:text-gray-300">
                        Documentation
                        <ExternalLink size={20} />
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 border boder-[#2a2a2a] py20 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 bg-gray-300 text-black hover:text-white">
                        GetStart
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>

            {/* */}
            <Spline className="absolute lg:top-0 top-[-20%] bottom-0 " scene="https://prod.spline.design/IZNqc72aBChlifBh/scene.splinecode" />
            {/* <Spline className="absolute lg:top-0 top-[-20%] bottom-0" scene="https://prod.spline.design/S3Ca9ryYBhFbel8X/scene.splinecode" /> */}
        </main>
    )
}

export default hero