import BannerChamada from "../components/BannerChamada";
import ConteudosExclusivos from "../components/ConteudosExclusivos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Servicos from "../components/Servicos";



export default function Blog() {
    return(
        <>
        <Navbar/>
        <BannerChamada TitleChamada="A [SUA CONTABILIDADE] leva conhecimento para todos os empresários"/>
        <ConteudosExclusivos/>
        <NewsLetter/>
        <Servicos/>
        <Footer/>
        </>
    )
}