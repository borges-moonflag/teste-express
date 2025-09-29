import LightningIcon from "./icons/lightningIcon";

export default function SobreNos() {

    const sobreNos = {
        image: "./sobreNos-image.webp"
    }

    return (
        <>
            <section className="bg-[var(--primary-color)] py-[50px] flex items-center justify-center">
                <div className="w-[1140px] flex items-center justify-center">

                    <div className="w-full py-[100px] flex flex-col gap-[64px] max-[1180]:gap-[32px]">
                        <div className="flex items-center justify-between max-[1180]:justify-center max-[1180]:flex-col">
                            <div className="max-w-[650px]">

                                <div className="flex items-center gap-[8px] pb-[8px] max-[1180]:justify-center">

                                    <div className="w-[42px] h-[2px] bg-[var(--third-color)] mb-[3px]"></div>
                                    <h1 className="text-[var(--third-color)] text-[18px] leading-[24px] font-normal tracking-[0.72px] uppercase">Contabilidade para [seu segmento]</h1>

                                </div>

                                <h2 className="text-[36px] leading-[44px] text-[var(--seccondary-white)] font-bold max-[1180]:text-center max-md:text-[28px]">A [SUA CONTABILIDADE] tem uma história que nos leva até você</h2>

                            </div>
                            <LightningIcon
                                className="w-[100px] h-[100px]"
                                rectColor=""
                                rectHover=""
                                pathColor="fill-[var(--third-color)]"
                                pathHover=""
                            />
                        </div>
                        <div className="flex justify-between max-[1180]:flex-col max-[1180]:justify-center max-[1180]:items-center max-[1180]:gap-10 max-[1180]:px-5">
                            <img src={sobreNos.image} alt="Sobre nós" className="max-[1180]:w-[520px] "/>
                            <div className="max-w-[430px] flex flex-col gap-7">
                                <p className="text-[18px] leading-[24px] text-[var(--seccondary-white)] font-normal">Lorem ipsum dolor sit amet consectetur. Lacus erat arcu donec lacinia semper neque lacus nisl amet. Egestas pharetra volutpat turpis vulputate montes consectetur velit. Congue aliquam tempus facilisi rhoncus egestas fringilla.</p>
                                <p className="text-[18px] leading-[24px] text-[var(--seccondary-white)] font-normal">Nunc eleifend libero integer ut at. Proin aenean volutpat donec habitant. Sit vitae platea erat vel massa id sit.</p>
                                <p className="text-[18px] leading-[24px] text-[var(--seccondary-white)] font-normal">Maecenas vulputate pellentesque cras euismod nam. Ut elementum rhoncus diam senectus. Pretium dapibus eget cursus mi.</p>
                                <button className="w-fit py-3 px-8 bg-[var(--seccondary-color)] text-[18px] leading-[24px] text-[var(--seccondary-white)] font-bold rounded-[100px] cursor-pointer hover:bg-[var(--seccondary-color)]/70">Saiba mais sobre nós</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}