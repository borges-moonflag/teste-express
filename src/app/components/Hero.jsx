import AngleArrowIcon from "./icons/angleArrowIcon";

export default function Hero() {

  const hero = {
    title: "Contabilidade para [seu segmento]",
    backgroundImage: "/Banner-Home.webp",
    image: "/Foto-Home.webp",
    cliente1: "/home-cliente-1.webp",
    cliente2: "/home-cliente-2.webp",
    cliente3: "/home-cliente-3.webp",
    arrowAngle: "/angle-arrow.svg",
  }

  return (
    <section
      className="hero flex items-center justify-center"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <div className="w-full max-w-[1140px] flex justify-center">
        <div className="pb-[145px]">

          <div className="pt-[97px] pb-[124px] flex items-center gap-[16px] max-md:justify-center max-[480]:flex-col">
            <div className="flex">"
              <img src={hero.cliente1} className="" />
              <img src={hero.cliente2} className="ml-[-26px]" />
              <img src={hero.cliente3} className="ml-[-26px]" />
            </div>
            <p className="text-[var(--third-color)] text-[18px] leading-[24px]">Junte-se a <span className="font-bold ">+00 clientes</span> satisfeitos</p>
          </div>

          <div className="flex gap-[8px] flex-col max-md:items-center">

            <div className="flex items-center gap-[13px] max-[480]:gap-[6]">
              <div className="w-[42px] h-[2px] bg-[var(--third-color)] mb-[3px] max-[480]:w-[32]"></div>
              <h1 className="text-[var(--third-color)] text-[18px] leading-[24px] font-bold uppercase max-[480]:text-[16px]">{hero.title}</h1>
            </div>

            <div className="max-w-[526px]">
              <h2 className="text-[58px] leading-[66px] text-[var(--seccondary-white)] font-bold max-md:text-[42px] max-md:text-center">Adeus, papelada.<br />
                Olá, <span className="text-[var(--third-color)]">liberdade!</span>
              </h2>
            </div>
            <h1></h1>

            <div className="flex gap-[16px] pt-[56px]">
              <div className="flex gap-[16px] p-[19px] bg-[var(--seccondary-color)] flex-col rounded-[11px] items-end cursor-pointer hover:bg-[var(--third-color)] hover:border-[var(--third-color)] group">
                <AngleArrowIcon className="text-[var(--seccondary-white)] group-hover:text-[var(--primary-color)] transition-colors duration-300"/>
                <p className="text-[var(--seccondary-white)] text-[18px] leading-[24px] font-bold text-right group-hover:text-[var(--primary-color)] transition-colors duration-300">O que a [SUA <br />EMPRESA] faz?</p>
              </div>

              <div className="flex gap-[16px] p-[19px] flex-col items-end cursor-pointer border-[2px] border-[var(--seccondary-color)] rounded-[11px] hover:border-transparent hover:bg-[var(--seccondary-color)] transition-all duration-300">
                <AngleArrowIcon className="text-[var(--seccondary-white)] group-hover:text-[var(--primary-color)] transition-colors duration-300"/>
                <p className="text-[var(--seccondary-white)] text-[18px] leading-[24px] font-bold text-right">Migre de <br />
                  contabilidade</p>
              </div>
            </div>

          </div>
        </div>

        <div className="max-[1245px]:hidden">
          <img src={hero.image} alt="banner home"/>
        </div>

      </div>
    </section>
  );
}
