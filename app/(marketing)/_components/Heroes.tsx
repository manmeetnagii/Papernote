import Image from "next/image"

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl ">
            <div className="flex items-center ">
                <div className="relative w-[300px] h-[300px] sm:w-[300px] sm:h-[350px] md:h-[400px] md:w-[400px] ">
                    <Image src="/hero1_dark.svg" fill className="object-contain dark:hidden" alt="hero"/>
                    <Image src="/hero1_light.svg" fill className="object-contain hidden dark:block" alt="hero"/>
                </div>
                <div className="relative w-[400px] h-[400px] hidden md:block">
                    <Image src="/hero2-dark.svg" fill className="object-contain dark:hidden" alt="hero"/>
                    <Image src="/hero2-light.svg" fill className="object-contain hidden dark:block" alt="hero"/>
                </div>
            </div>
        </div>
    )
}