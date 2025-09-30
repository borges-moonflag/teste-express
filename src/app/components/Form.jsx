"use client";
import { useState } from "react";
import WhatsappIcon from "./icons/whatsappIcon";

export default function Formulario() {

    const formulario = {
        background: "/form-background.webp"
    }

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        consent: false,
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            // 🔹 Endpoint do WP REST API (exemplo usando Contact Form 7 REST API)
            const res = await fetch(
                "https://SEU-WORDPRESS.com/wp-json/contact-form-7/v1/contact-forms/123/feedback",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "your-name": form.name,
                        "tel-604": form.phone,
                        "your-email": form.email,
                        "checkbox-867": form.consent ? ["on"] : [],
                    }),
                }
            );

            const data = await res.json();

            if (res.ok) {
                setMessage("✅ Formulário enviado com sucesso!");
                setForm({ name: "", phone: "", email: "", consent: false });
            } else {
                setMessage("❌ Erro: " + data.message);
            }
        } catch (error) {
            console.error(error);
            setMessage("❌ Erro ao enviar o formulário.");
        }

        setLoading(false);
    };

    return (
        <>
            <section className="flex items-center justify-center bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${formulario.background})` }}>
                <div className="w-full max-w-[1140px] flex justify-center">
                    <div className="w-full pt-[106px] pb-[94px] flex items-center justify-between max-[1150]:flex-col-reverse max-[1180]:gap-8">
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-md mx-auto py-16 px-8 bg-[var(--seccondary-color)] rounded-xl shadow-md flex flex-col gap-4 max-md:mx-5" >
                            <input
                                type="text"
                                name="name"
                                placeholder="Digite seu nome"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg py-[9.22] px-5 bg-[var(--seccondary-white)] text-[18px] leading-[24px] text-[var(--primary-color)] font-normal"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Digite seu telefone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg py-[9.22] px-5 bg-[var(--seccondary-white)] text-[18px] leading-[24px] text-[var(--primary-color)] font-normal"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Seu melhor e-mail"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg py-[9.22] px-5 bg-[var(--seccondary-white)] text-[18px] leading-[24px] text-[var(--primary-color)] font-normal"
                            />

                            <label className="flex items-center gap-2 text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={form.consent}
                                    onChange={handleChange}
                                    className="mt-1"
                                />
                                <span className="text-[var(--seccondary-white)]">
                                    Aceito receber e-mails com ofertas e conteúdos. Prometemos não utilizar suas informações para spam, clique aqui e veja nossa Política de Dados.
                                </span>
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full border border-[var(--third-color)] hover:bg-[var(--seccondary-white)] text-[var(--seccondary-white)] hover:text-[var(--primary-color)] font-bold py-3 rounded-[100px] transition-all cursor-pointer"
                            >
                                {loading ? "Enviando..." : "Enviar"}
                            </button>

                            {message && <p className="text-center text-sm">{message}</p>}
                        </form>

                        <div className="max-w-[580px] gap-4 flex flex-col max-[1180]:text-center max-[1180]:items-center max-md:max-w-[420px]">
                            <h2 className="text-[36px] leading-[44px] text-[var(--seccondary-white)] font-bold max-md:text-[28px]">Melhore sua empresa a qualquer momento, em qualquer lugar</h2>
                            <div className="w-[551px] h-[1px] bg-[var(--third-color)] max-md:w-[420px]"></div>
                            <p className="max-w-[551px] text-[18px] leading-[24px] text-[var(--seccondary-white)] font-normal">Tem perguntas? Precisa de ajuda? Basta entrar em contato com a [SUA CONTABILIDADE]. Preencha o formulário e nosso time falará com você em breve. Queremos conhecer você!</p>
                            <button className="w-fit rounded-[100px] py-3 px-8 bg-[#25D366] flex gap-4 text-[18px] leading-[24px] text-[var(--background)] font-bold cursor-pointer hover:bg-[#25D366]/70 transition-all duration-300 "><WhatsappIcon /> Ou chame no WhatsApp</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}