import { ArrowRightIcon } from "lucide-react"
import LightningIcon from "./icons/lightningIcon"

export default function Servicos() {

    const servicos = [
        {
            title: "Serviço 1",
            text: "Nec facilisis ut cras vehicula nunc tincidunt ante eget. Sagittis lectus ullamcorper aenean cursus augue diam.",
            button: "Fale conosco",
        },
        {
            title: "Serviço 2",
            text: "Nec facilisis ut cras vehicula nunc tincidunt ante eget. Sagittis lectus ullamcorper aenean cursus augue diam.",
            button: "Fale conosco",
        },
        {
            title: "Serviço 3",
            text: "Nec facilisis ut cras vehicula nunc tincidunt ante eget. Sagittis lectus ullamcorper aenean cursus augue diam.",
            button: "Fale conosco",
        },
        {
            title: "Serviço 4",
            text: "Nec facilisis ut cras vehicula nunc tincidunt ante eget. Sagittis lectus ullamcorper aenean cursus augue diam.",
            button: "Fale conosco",
        },
        {
            title: "Serviço 5",
            text: "Nec facilisis ut cras vehicula nunc tincidunt ante eget. Sagittis lectus ullamcorper aenean cursus augue diam.",
            button: "Fale conosco",
        },
        {
            title: "Serviço 6",
            text: "Nec facilisis ut cras vehicula nunc tincidunt ante eget. Sagittis lectus ullamcorper aenean cursus augue diam.",
            button: "Fale conosco",
        },
    ];

    return (
        <section className="bg-[var(--primary-color)] py-[50px] flex items-center justify-center">
            <div className="w-[1140px] flex items-center justify-center">

                <div className="flex flex-col">
                    <div className="w-full flex items-center justify-between pb-[64px] max-[1180px]:flex-col max-[1180px]:gap-3">

                        <div className="w-[562px] max-md:max-w-[420px] max-md:px-5">

                            <div className="flex items-center gap-[8px] pb-[8px] max-[1180px]:justify-center">

                                <div className="w-[42px] h-[2px] bg-[var(--third-color)] mb-[3px]"></div>
                                <h1 className="text-[var(--third-color)] text-[18px] leading-[24px] font-normal tracking-[0.72px] uppercase">Nossos serviços</h1>

                            </div>

                            <h2 className="text-[36px] leading-[44px] text-[var(--seccondary-white)] font-bold max-[1180]:text-center max-md:text-[28px]">Uma contabilidade digital com soluções certeiras</h2>

                        </div>
                        <div className="border-l-2 border-[var(--seccondary-color)] py-[16px] pl-[36px] max-[1180]:border-none max-md:px-5">

                            <p className="max-w-[466px] text-[var(--seccondary-white)] text-[18px] leading-[24px] font-medium  max-[1180]:text-center">Oferecemos soluções sob medida para resolver os maiores desafios enfrentados pelos empreendedores de hoje.</p>

                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between gap-[14px] max-[1180]:justify-center">

                        {servicos.map((card, index) => (
                            <div key={index}
                                className={`w-[369px] min-h-[328px] items-start flex gap-[17px] p-[36px] flex-col cursor-pointer border-[2px] border-[var(--seccondary-color)] rounded-[11px] ${index != 0 ? "group hover:border-transparent hover:bg-[var(--seccondary-color)] transition-all duration-300" : "bg-[var(--seccondary-color)]"}`}>
                                {index != 0 ? (<LightningIcon
                                    pathColor={"fill-[var(--seccondary-white)]"}
                                    pathHover={"group-hover:fill-[var(--seccondary-color)]"}
                                    rectColor={"fill-[var(--seccondary-color)]"}
                                    rectHover={"group-hover:fill-[var(--seccondary-white)]"}
                                />) :

                                    (<LightningIcon
                                        rectColor="fill-[var(--seccondary-white)]"
                                        rectHover="group-hover:fill-[var(--seccondary-white)]"
                                        pathColor="fill-[var(--seccondary-color)]"
                                        pathHover="group-hover:fill-[var(--seccondary-color)]"
                                    />)

                                }
                                <p className="text-[24px] leading-[32px] text-[var(--seccondary-white)] font-bold">{card.title}</p>
                                <p className="text-[18px] leading-[24px] text-[var(--seccondary-white)] font-normal">{card.text}</p>
                                <button
                                    className={`flex items-center gap-[5px] text-[18px] leading-[24px] text-[var(--seccondary-white)] font-bold cursor-pointer transition-all duration-300
                                    ${index === 0 ? "block" : "hidden group-hover:flex"}`}>
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