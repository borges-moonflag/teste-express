import StarIcon from "./icons/starIcon"

export default function Beneficios() {

    const beneficios = {
        image: "/beneficios-foto.webp",
        title: "Contabilidade para [seu segmento]",
        text: "Aqui a gente tem de tudo, exceto o que te atrapalha.",
        button1: "Sem perda de tempo",
        button2: "Sem perda de dinheiro",
        button3: "Sem preocupação",
    }

    return (
        <section className="bg-[var(--primary-color)] py-[50px] flex items-center justify-center">
            <div className="w-[1140px] flex items-center justify-center">
                <div className="w-full flex">

                    <div className="w-full flex items-center justify-between max-[1115px]:justify-center">

                        <img src={beneficios.image} alt="Beneficios banner" className="max-[1115px]:hidden"/>

                        <div className="max-w-[562px] max-[1115px]:text-center max-md:px-5">

                            <div className="flex items-center gap-[13px] pb-[8px] max-[1115px]:justify-center max-[480]:gap-[6]">
                                
                                <div className="w-[42px] h-[2px] bg-[var(--third-color)] mb-[3px] max-[480]:w-[32]"></div>
                                <h1 className="text-[var(--third-color)] text-[18px] leading-[24px] font-bold uppercase max-[480]:text-[16px]">{beneficios.title}</h1>

                            </div>

                            <h2 className="text-[36px] leading-[44px] text-[var(--seccondary-white)] font-bold max-[1115px]:text-center max-md:text-[28px]">{beneficios.text}</h2>

                            <div className="flex flex-col gap-[20px] py-[40px] max-[1115px]:items-center">

                                <div className="w-fit flex items-center bg-[var(--third-color)] py-[16px] pr-[48px] pl-[20px] cursor-pointer border-[2px] border-[var(--third-color)] rounded-[51px] hover:bg-[var(--third-clor)] group transition-all duration-300">
                                    <StarIcon 
                                        circleColor="fill-[var(--primary-color)]"
                                        circleHover="group-hover:fill-[var(--third-color)]"
                                        pathColor="fill-[var(--third-color)]"
                                        pathHover="group-hover:fill-[var(--primary-color)]" 
                                    />
                                    <p className="text-[var(--primary-color)] text-[18px] leading-[24px] font-bold pl-[60px] group-hover:text-[var(--third-color)] group-hover:pl-[80px] transition-all duration-300">{beneficios.button1}</p>
                                </div>

                                <div className="w-fit flex items-center py-[16px] pr-[48px] pl-[20px] cursor-pointer border-[2px] border-[var(--third-color)] rounded-[51px] group hover:bg-[var(--third-color)] transition-all duration-300">
                                    <StarIcon 
                                        circleColor="fill-[var(--third-color)]"
                                        circleHover="group-hover:fill-[var(--primary-color)]"
                                        pathColor="fill-[var(--primary-color)]"
                                        pathHover="group-hover:fill-[var(--third-color)]" 
                                    />
                                    <p className="text-[var(--third-color)] text-[18px] leading-[24px] font-bold pl-[20px]  group-hover:text-[var(--primary-color)] group-hover:pl-[40px] transition-all duration-300">{beneficios.button2}</p>
                                </div>

                                <div className="w-fit flex items-center py-[16px] pr-[48px] pl-[20px] cursor-pointer border-[2px] border-[var(--third-color)] rounded-[51px] group hover:bg-[var(--third-color)] transition-all duration-300">
                                    <StarIcon 
                                        circleColor="fill-[var(--third-color)]"
                                        circleHover="group-hover:fill-[var(--primary-color)]"
                                        pathColor="fill-[var(--primary-color)]"
                                        pathHover="group-hover:fill-[var(--third-color)]" 
                                    />
                                    <p className="text-[var(--third-color)] text-[18px] leading-[24px] font-bold pl-[20px]  group-hover:text-[var(--primary-color)] group-hover:pl-[40px] transition-all duration-300">{beneficios.button3}</p>
                                </div>

                            </div>
                            <button className="bg-[var(--third-color)] py-[12px] px-[32px] text-[var(--primary-color)] text-[16px] leading-[24px] font-bold rounded-[100px]" style={{ boxShadow: "0 20px 36px 2px rgba(145, 187, 226, 0.15)" }}>Solucione com a [SUA CONTABILIDADE]</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}