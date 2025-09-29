"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Sobre nós", href: "/sobreNos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
    { label: "Solicite um orçamento", href: "/orcamento" },
  ];

  const logo = {
    image: "./logo.webp",
  }

  return (
    <nav className="navbar p-[20px] justify-center flex">
      <div className="w-full max-w-[1140px] flex justify-center">
        <div className="flex w-full justify-between items-center py-[20px]">
          
          <Link href="/">
            <img
              src={logo.image}
              alt="Logo"
              className="h-10 cursor-pointer"
            />
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden min-[935px]:flex gap-8 items-center">
  {menuItems.map((item) => (
    <li key={item.href} className="last:hidden md:last:block">
      <Link
        className="text-lg transition font-[var(--font-dm)]"
        href={item.href}
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>

          {/* Botão Mobile (aparece até 935px) */}
          <button
            className="max-[935px]:block hidden text-amber-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (abre só em <935) */}
      {isOpen && (
        <div className="min-w-[160px] max-[935px]:block mt-4 bg-white shadow-md rounded-lg p-4">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.href} className="last:hidden">
                <Link
                  className="block text-lg transition text-[var(--primary-color)]"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
