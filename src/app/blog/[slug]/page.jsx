import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

export default async function PostPage({ params }) {
  const { slug } = await params

  const res = await fetch(
    `https://express.desenvolvimentomoonflag.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } } // revalida a cada 60s (ISR)
  )
  const posts = await res.json()
  const post = posts[0] // slug é único, então pega só o primeiro

  if (!post) {
    return <h1>Post não encontrado</h1>
  }
  return (
    <>
    <Navbar/>
    <article className="max-w-[800px] mx-auto py-20 px-5">
      {/* Título */}
      <h1
        className="text-4xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      {/* Data e autor */}
      <p className="text-gray-400 mb-6">
        {new Date(post.date).toLocaleDateString("pt-BR")}</p>

      {/* Imagem destacada */}
      {post.featured_media ? (
        <img
          src={post._embedded["wp:featuredmedia"]?.[0]?.source_url}
          alt={post.title.rendered}
          className="w-full h-auto mb-8 rounded-lg shadow-md"
        />
      ) : null}

      {/* Conteúdo */}
      <div
        className="prose prose-lg prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
    <Footer/>
    </>
  )
}
