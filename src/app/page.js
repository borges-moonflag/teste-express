import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Dores from "./components/Dores";
import Beneficios from "./components/Beneficios";
import Servicos from "./components/Servicos";
import Formulario from "./components/Form";
import SobreNos from "./components/SobreNos";
import Depoimentos from "./components/Depoimentos";
import Blog from "./components/Blog";

// Mock de dados (simulando futuro WP)
const siteData = {
  features: [
    { icon: "/icon1.png", title: "Feature 1", description: "Descrição 1" },
    { icon: "/icon2.png", title: "Feature 2", description: "Descrição 2" },
    { icon: "/icon3.png", title: "Feature 3", description: "Descrição 3" },
  ],
  cta: {
    text: "Pronto para começar?",
    button: { label: "Entre em contato", href: "#contact" },
  },
  companyName: "Agência Test",
};

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Dores/>
      <Beneficios/>
      <Servicos/>
      <Formulario/>
      <SobreNos/>
      <Depoimentos/>
      <Blog/>
      <Footer companyName={siteData.companyName} />
    </>
  );
}
