import { ArrowRightIcon } from "lucide-react"
import LightningIcon from "./icons/lightningIcon"

export default function Dores() {

    const dores = [
        {
            title: "Automação, velocidade e eficiência",
            text: "Automatize sua contabilidade e concentre-se no crescimento do seu negócio. Deixe os números com a [SUA CONTABILIDADE].",
            button: "Fale conosco",
        },
        {
            title: "Soluções remotas, no conforto da sua casa",
            text: "Gerencie suas finanças de qualquer lugar, a qualquer momento. Nossa solução dá a você liberdade total.",
            button: "Fale conosco",
        },
        {
            title: "Detalhamento e humanização",
            text: "Tome decisões com dados personalizados sobre sua empresa, não em suposições. Relatórios personalizados ao seu serviço.",
            button: "Fale conosco",
        },
    ];


    return (
        <section className="bg-[var(--primary-color)] pt-[90px] flex items-center justify-center">
            <div className="w-full max-w-[1140px] flex justify-center">
                <div className="w-full flex flex-col justify-between max-md:px-5">
                    <h2 className="pb-[46px] text-center text-[36px] leading-[44px] text-[var(--seccondary-white)] font-bold max-md:text-[28px]">É assim que te ajudamos a salvar seu dinheiro!<br /> Mais economia, mais lucratividade.</h2>
                    <div className="flex justify-between max-[1170px]:flex-col items-center gap-[16px]">

                        {dores.map((card, index) => (
                            <div
                                key={index}
                                className="w-[369px] items-start flex gap-[17px] p-[36px] flex-col cursor-pointer border-[2px] border-[var(--seccondary-color)] rounded-[11px] group hover:border-transparent hover:bg-[var(--seccondary-color)] transition-all duration-300"
                            >
                                <LightningIcon
                                    rectColor="fill-[var(--seccondary-color)]"
                                    rectHover="group-hover:fill-[var(--seccondary-white)]"
                                    pathColor="fill-[var(--seccondary-white)]"
                                    pathHover="group-hover:fill-[var(--seccondary-color)]"
                                />

                                <p className="text-[24px] leading-[32px] text-[var(--seccondary-white)] font-bold">
                                    {card.title}
                                </p>

                                <p className="text-[18px] leading-[24px] text-[var(--seccondary-white)] font-normal">
                                    {card.text}
                                </p>

                                <button className="flex items-center gap-[5px] text-[18px] leading-[24px] text-[var(--seccondary-white)] font-bold cursor-pointer group">
                                    {card.button}
                                    <ArrowRightIcon className="w-[16px] pt-[2px] group-hover:pl-[6px] group-hover:w-[24px] transition-all duration-300" />
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}