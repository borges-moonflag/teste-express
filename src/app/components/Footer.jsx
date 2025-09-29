import Link from "next/link";
import InstagramIcon from "./icons/instagramIcon";
import WhatsappIcon from "./icons/whatsappIcon";
import Facebookicon from "./icons/facebookIcon";
import LinkedInIcon from "./icons/linkedInIcon";
import MapMarkerIcon from "./icons/mapMarkerIcon";
import PhoneCallIcon from "./icons/phoneCallIcon";
import MailIcon from "./icons/malIcon";

export default function Footer() {

  const logo = {
    image: "./logo.webp",
  }
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Sobre nós", href: "/sobreNos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
    { label: "Solicite um orçamento", href: "/orcamento" },
  ];

  return (
    <>
      <div className="navbar pt-[107.49px] pb-[97.41px] justify-center flex">
        <div className="w-full max-w-[1140px] flex justify-between px-5 max-md:flex-col max-md:items-center max-md:gap-8">

          <div className="max-w-[275px] gap-[20px] flex flex-col ">
            <Link href="/">
              <img
                src={logo.image}
                alt="Logo"
                className="h-14 cursor-pointer"
              />
            </Link>
            <p className=" text-[18px] leading-[24px] text-[var(--seccondary-white)] font-normal">Lorem ipsum dolor sit amet consectetur. Odio at et metus laoreet lorem arcu risus tellus tempus. Cursus dui pellentesque vitae at sagittis porta risus maecenas. Ut dolor facilisis quam ac aliquam augue.</p>
            <div className="flex flex-col gap-[9px]">
              <p className="text-[18px] leading-[24px] text-[var(--third-color)] font-bold">Siga nossas redes sociais</p>
              <div className="flex gap-[29.51px] items-center">
                <InstagramIcon className="w-[18.41px]" />
                <Facebookicon className="w-[23px]" />
                <LinkedInIcon className="w-[18.41px]" />
                <WhatsappIcon className="w-[18.41px]" />
              </div>
            </div>
          </div>

          <div className="min-w-[275px]">
            <p className="text-[18px] leading-[24px] text-[var(--third-color)] font-bold pb-3">Navegação</p>
            <ul className="flex flex-col  gap-3 items-baseline">
              {menuItems.map((item) => (
                <li key={item.href} className="last:hidden">
                  <Link
                    className="text-lg transition font-[var(--font-dm)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[275px]">
            <p className="text-[18px] leading-[24px] text-[var(--third-color)] font-bold pb-3">Encontre-nos</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 text-[16px] leading-[24px] text-[var(--seccondary-white)] font-normal">
                <MapMarkerIcon className="w-[42px]"/>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas sed viverra elementum volutpat quam morb ut.
                </p>
              </div>
              <div className="flex items-center gap-4 text-[16px] leading-[24px] text-[var(--seccondary-white)] font-normal">
                <PhoneCallIcon className="w-[15px]"/>
                <p>
                 00 0000 0000
                </p>
              </div>
              <div className="flex items-center gap-4 text-[16px] leading-[24px] text-[var(--seccondary-white)] font-normal">
                <MailIcon className="w-[15px]"/>
                <p>
                  email@email.com.br
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}