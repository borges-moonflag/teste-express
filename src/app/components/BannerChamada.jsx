"use client"


import Link from "next/link";
import HouseIcon from "./icons/houseIcon";
import { usePathname } from "next/navigation";


export default function BannerChamada({TitleChamada}){

    const pathname = usePathname().slice(1)

    return(
        <section className="py-[113px] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url('../bannerChamada.webp')` }}
        >
            <div className="w-full max-w-[1140px] flex justify-center">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[var(--seccondary-white)] text-[46px] leading-[54px] font-bold text-center">{TitleChamada}</h1>
                    <div className="flex items-center justify-center text-[var(--seccondary-white)] gap-3 cursor-pointer">
                        <Link href="/" 
                        className="flex items-center gap-2 text-[17px] leading-[25px] font-normal"><HouseIcon/> Home</Link>
                        <span>/</span>
                        <Link href={`/${pathname}`}
                        className="text-[var(--third-color)] text-[17px] leading-[25px] font-bold">{pathname}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}