import { ArrowRightIcon } from "lucide-react";

export default async function ConteudosExclusivos() {

    const res = await fetch("https://express.desenvolvimentomoonflag.com.br/wp-json/wp/v2/posts?_embed", {
        next: { revalidate: 60 }, // ISR -> revalida a cada 60s
    });
    const posts = await res.json();

    return (
        <>
            <section className="bg-[var(--primary-color)] pt-[97px] pb-[64px] flex items-center justify-center">
                <div className="w-[1140px] py-[100px] flex items-center justify-center">

                    <div className="w-full flex flex-col gap-[66px]">
                        <div className="">
                            <div className="flex items-center gap-[8px] pb-[8px] justify-center">

                                <div className="w-[42px] h-[2px] bg-[var(--third-color)] mb-[3px]"></div>
                                <h1 className="text-[var(--third-color)] text-[18px] leading-[24px] font-normal tracking-[0.72px] uppercase">Conteúdos exclusivos</h1>

                            </div>
                            <h2 className="text-[36px] leading-[44px] text-[var(--seccondary-white)] font-bold text-center max-md:text-[28px]">Acompanhe as melhores informações</h2>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col  gap-12">
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="max-w-[651px] flex flex-col gap-4 border bg-[var(--seccondary-color)] rounded-lg shadow-md cursor-pointer"
                                    >

                                        <div className="relative">
                                            {/* alguns posts não têm imagem destacada, então é bom tratar */}
                                            {post.featured_media ? (
                                                <img
                                                    src={post._embedded["wp:featuredmedia"]?.[0]?.source_url}
                                                    alt={post.title.rendered}
                                                    className="w-full h-auto"
                                                />
                                            ) : (
                                                <div className="w-full h-[200px] bg-gray-700 flex items-center justify-center text-white">
                                                    Sem imagem
                                                </div>
                                            )}

                                            {/* Tag: pode ser a primeira categoria */}
                                            {post._embedded?.["wp:term"]?.[0]?.[0] && (
                                                <p className="absolute left-[50px] bottom-[-20px] w-fit py-2 px-8 bg-[var(--third-color)] text-[14px] text-[var(--seccondary-color)] font-bold leading-[22px] rounded-4xl">
                                                    {post._embedded["wp:term"][0][0].name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Conteúdo */}
                                        <div className="py-[40px] px-[50px] flex flex-col gap-4">
                                            <p className="text-[18px] text-[var(--seccondary-white)] font-normal leading-[24px]">
                                                {new Date(post.date).toLocaleDateString("pt-BR")} | Moonflag
                                            </p>
                                            <h2
                                                className="text-[24px] text-[var(--seccondary-white)] font-bold leading-[32px]"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                            />
                                            <a href={`/blog/${post.slug}`} className="text-[18px] text-[var(--third-color)] font-bold leading-[24px] self-start flex gap-[5px]">
                                                Ler mais
                                                <ArrowRightIcon className="w-[16px] pt-[2px] group-hover:pl-[6px] group-hover:w-[24px] transition-all duration-300" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-8">
                                <p className="text-[24px] text-[var(--third-color)] font-bold leading-[32px] ">Artigos recentes</p>
                                <div className="flex flex-col gap-6">
                                    {posts.map((post) => (
                                        <div
                                            key={post.id}
                                            className="flex flex-col gap-2.5"
                                        >
                                            <p className="text-[var(--seccondary-white)] text-[18px] font-normal leading-[24px]">{post._embedded["wp:term"][0][0].name} | {new Date(post.date).toLocaleDateString("pt-BR")}</p>
                                            <a href={`/blog/${post.slug}`} className="text-[var(--third-color)] text-[18px] font-bold leading-[24px] hover:text-[var(--seccondary-white)] transition-all duration-300"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}></a>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-[320px] h-[1px] bg-[var(--third-color)]"></div>
                                <p className="text-[24px] text-[var(--third-color)] font-bold leading-[32px] ">Artigos por categoria</p>
                                {posts.map((post) => (
                                        <div
                                            key={post.id}
                                            className="flex flex-col gap-6"
                                        >
                                            <a href={`/blog/${post.slug}`} className="text-[var(--seccondary-white)] text-[18px] font-normal leading-[24px] hover:text-[var(--third-color)] transition-all duration-300">{post._embedded["wp:term"][0][0].name} </a>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}