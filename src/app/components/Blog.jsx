import { ArrowRightIcon } from "lucide-react";

export default function Blog() {

    const blogs = [
        {
            image: "./blog1.webp",
            tag: "Contabilidade",
            data: "04.01.2023",
            empresa: "Nome empresa",
            titulo: "Ullamcorper mattis pellentesque ut.",
            botao: "Leia na íntegra",
        },
        {
            image: "./blog2.webp",
            tag: "Contabilidade",
            data: "04.01.2023",
            empresa: "Nome empresa",
            titulo: "Ullamcorper mattis pellentesque ut.",
            botao: "Leia na íntegra",
        },
        {
            image: "./blog3.webp",
            tag: "Contabilidade",
            data: "04.01.2023",
            empresa: "Nome empresa",
            titulo: "Ullamcorper mattis pellentesque ut.",
            botao: "Leia na íntegra",
        },
    ];

    return (
        <>
            <section className="bg-[var(--primary-color)] pb-[104px] flex items-center justify-center">
                <div className="w-full max-w-[1140px] flex justify-center">
                    <div className="w-full flex flex-col">
                        <div className="w-full flex items-center justify-between max-[1180]:justify-center max-[1180]:flex-col max-[1180]:gap-8">
                            <div className="">
                                <div className="flex items-center gap-[8px] pb-[8px] max-[1180]:justify-center">

                                    <div className="w-[42px] h-[2px] bg-[var(--third-color)] mb-[3px]"></div>
                                    <h1 className="text-[var(--third-color)] text-[18px] leading-[24px] font-normal tracking-[0.72px] uppercase">Blog</h1>

                                </div>
                                <h2 className="text-[36px] leading-[44px] text-[var(--seccondary-white)] font-bold max-md:text-[28px] max-md:text-center">Acompanhe as melhores informações</h2>
                            </div>
                            <button className="w-fit py-3 px-8 bg-[var(--seccondary-color)] text-[18px] leading-[24px] text-[var(--seccondary-white)] font-bold rounded-[100px] cursor-pointer hover:bg-[var(--seccondary-color)]/70">Todos os artigos</button>
                        </div>
                        <div className="flex flex-wrap justify-between pt-[111px] max-[1180]:px-5 max-[1180]:justify-center max-[1180]:gap-3">
                            {blogs.map((blog, index) => (
                                <div
                                    key={index}
                                    className="max-w-[350px] flex flex-col gap-4 border bg-[var(--seccondary-color)] rounded-lg  shadow-md cursor-pointer hover:scale-[1.05] transition-all duration-300 group"
                                >
                                    <div className="relative">
                                        <img src={blog.image} alt={blog.titulo} className="w-full h-auto" />
                                        <p className="absolute left-[50px] bottom-[-20px] w-fit py-2 px-8 bg-[var(--third-color)] text-[14px] text-[var(--seccondary-color)] font-bold leading-[22px] rounded-4xl">
                                            {blog.tag}</p>
                                    </div>
                                    <div className="py-[40px] px-[50px] flex flex-col gap-4 ">
                                        <p className="text-[18px] text-[var(--seccondary-white)] font-normal leading-[24px]">
                                            {blog.data} | {blog.empresa}
                                        </p>
                                        <h2 className="text-[24px] text-[var(--seccondary-white)] font-bold leading-[32px]">
                                            {blog.titulo}
                                        </h2>
                                        <button className="text-[18px] text-[var(--third-color)] font-bold leading-[24px] self-start flex gap-[5px]">
                                            {blog.botao} <ArrowRightIcon className="w-[16px] pt-[2px] group-hover:pl-[6px] group-hover:w-[24px] transition-all duration-300" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}