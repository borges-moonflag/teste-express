"use client"
import { useState } from "react";

export default function NewsLetter() {

    const [form, setForm] = useState({
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
                        "your-email": form.email,
                        "checkbox-867": form.consent ? ["on"] : [],
                    }),
                }
            );

            const data = await res.json();

            if (res.ok) {
                setMessage("✅ Formulário enviado com sucesso!");
                setForm({ email: "", consent: false });
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
            <section className="py-[113px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url('./bannerChamada.webp')` }}
            >
                <div className="w-[1140px] flex items-center justify-center">

                    <div className="flex items-center justify-between">

                        <div className="w-[562px] max-md:max-w-[420px] max-md:px-5">
                            <div className="flex items-center gap-[8px] pb-[8px] max-[1180px]:justify-center">
                                <div className="w-[42px] h-[2px] bg-[var(--third-color)] mb-[3px]"></div>
                                <h1 className="text-[var(--third-color)] text-[18px] leading-[24px] font-normal tracking-[0.72px] uppercase">newsletter</h1>
                            </div>
                            <h2 className="text-[36px] leading-[44px] text-[var(--seccondary-white)] font-bold max-[1180]:text-center max-md:text-[28px]">Novidades no seu e-mail!</h2>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-[512px] mx-auto p-8 bg-[var(--seccondary-color)] rounded-xl shadow-md flex flex-col gap-4 max-md:mx-5" >

                            <input
                                type="email"
                                name="email"
                                placeholder="exemplo@exemplo.com.br"
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
                                <span className="text-[16px] leading-[22px] text-[var(--seccondary-white)] font-normal">
                                    Aceito receber e-mails com ofertas e conteúdos. Prometemos não utilizar suas informações para spam, clique aqui e veja nossa Política de Dados
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

                    </div>
                </div>
            </section>
        </>
    )
}