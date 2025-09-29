"use client"
import StarIcon from "./icons/starIcon"

export default function Depoimentos() {

    const depoimentos = [
        {
            texto: "Lorem ipsum dolor sit amet consectetur. Sapien integer mauris egestas sem id eu in interdum. Vel scelerisque pulvinar ac id ut proin id. Ipsum dis ut tincidunt massa eget leo risus eu vestibulum. Consequat gravida pretium nec laoreet egestas leo. Turpis in eu sed lacus maecenas purus pretium id elit. Habitasse sed eu senectus turpis non purus enim. Viverra id praesent nam enim maecenas.",
            nome: "Nome Sobrenome",
            cargo: "CEO da Lorem Ipsum",
            imagem: "./depoimentoImage1.webp",
        },
        {
            texto: "Lorem ipsum dolor sit amet consectetur. Sapien integer mauris egestas sem id eu in interdum. Vel scelerisque pulvinar ac id ut proin id. Ipsum dis ut tincidunt massa eget leo risus eu vestibulum. Consequat gravida pretium nec laoreet egestas leo. Turpis in eu sed lacus maecenas purus pretium id elit. Habitasse sed eu senectus turpis non purus enim. Viverra id praesent nam enim maecenas.",
            nome: "Maria Silva",
            cargo: "Diretora da Empresa X",
            imagem: "./depoimentoImage2.webp",
        },
    ];

    const loopCards = [...depoimentos, ...depoimentos];


    return (
        <>
            <section className="bg-[var(--primary-color)] py-[50px] flex items-center justify-center">
                <div className="w-[1140px] py-[100px] flex items-center justify-center">

                    <div className="w-full flex flex-col gap-[64px]">
                        <div className="">
                            <div className="flex items-center gap-[8px] pb-[8px] justify-center">

                                <div className="w-[42px] h-[2px] bg-[var(--third-color)] mb-[3px]"></div>
                                <h1 className="text-[var(--third-color)] text-[18px] leading-[24px] font-normal tracking-[0.72px] uppercase">Depoimentos</h1>

                            </div>
                            <h2 className="text-[36px] leading-[44px] text-[var(--seccondary-white)] font-bold text-center max-md:text-[28px]">Saiba o que dizem sobre nós</h2>
                        </div>
                        <div className="flex justify-between max-[1180]:max-w-[800px] max-[1180px]:self-center max-[850px]:max-w-[562px] max-[600px]:max-w-[350px]">

                            <div className="overflow-hidden w-full">
                                <div className="flex animate-scroll gap-6">
                                    {loopCards.map((card, index) => (
                                        <div
                                            key={index}
                                            className="max-w-[562px] p-10 flex flex-col gap-9 rounded-2xl border border-[var(--third-color)] flex-shrink-0 max-[750px]:max-w-[380px]"
                                        >
                                            <p className="text-[var(--seccondary-white)] text-[18px] leading-[24px] font-normal max-[600px]:text-[16px]">
                                                {card.texto}
                                            </p>
                                            <div className="border-t border-[var(--third-color)] pt-4">
                                                <div className="flex justify-between items-center max-[850px]:flex-col">
                                                    <div className="flex items-center gap-4 max-[850px]:flex-col max-[850px]:text-center">
                                                        <img src={card.imagem} alt={card.nome} />
                                                        <div>
                                                            <p className="text-[var(--third-color)] text-[20px] leading-[28px] font-bold">
                                                                {card.nome}
                                                            </p>
                                                            <p className="text-[var(--seccondary-white)] text-[16px] leading-[22px] font-normal">
                                                                {card.cargo}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex pr-8 max-[850px]:pr-0">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <StarIcon
                                                                key={i}
                                                                className="w-7"
                                                                circleColor="fill-[var(--primary-color)]"
                                                                pathColor="fill-[var(--third-color)]"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}