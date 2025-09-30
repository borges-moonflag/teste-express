import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Dores from "./components/Dores";
import Beneficios from "./components/Beneficios";
import Servicos from "./components/Servicos";
import Formulario from "./components/Form";
import SobreNos from "./components/SobreNos";
import Depoimentos from "./components/Depoimentos";
import BlogPosts from "./components/Blog";


export default function HomePage() {
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
      <BlogPosts/>
      <Footer/>
        </>
    )
}