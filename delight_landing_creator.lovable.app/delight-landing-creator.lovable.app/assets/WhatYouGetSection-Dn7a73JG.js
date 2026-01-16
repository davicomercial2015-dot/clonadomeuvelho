import {
    c as t,
    j as e
} from "./index-HR7j14Lo.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r = t("Check", [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ]),
    o = [{
        icon: "📱",
        title: "Plataforma exclusiva com o Protocolo de 7 Dias",
        bgColor: "bg-amber-50"
    }, {
        icon: "🎬",
        title: "Vídeo principal detalhando cada movimento",
        bgColor: "bg-pink-50"
    }, {
        icon: "📅",
        title: "Cronograma de execução diária (3 min/dia)",
        bgColor: "bg-green-50"
    }, {
        icon: "✅",
        title: "Checklist prático de hábitos anti-papada",
        bgColor: "bg-emerald-50"
    }],
    i = ["DIRETO AO PONTO", "SEM ENROLAÇÃO", "ACESSO VITALÍCIO"],
    l = () => e.jsx("section", {
        className: "bg-background py-12 px-4",
        children: e.jsxs("div", {
            className: "max-w-md mx-auto",
            children: [e.jsxs("div", {
                className: "text-center mb-8",
                children: [e.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mb-2",
                    children: [e.jsx("span", {
                        className: "text-3xl",
                        children: "📦"
                    }), e.jsxs("h2", {
                        className: "text-2xl md:text-3xl font-bold text-foreground",
                        children: ["O QUE VOCÊ VAI", e.jsx("br", {}), "RECEBER"]
                    })]
                }), e.jsx("div", {
                    className: "w-20 h-1 bg-primary mx-auto rounded-full mb-4"
                }), e.jsxs("p", {
                    className: "text-muted-foreground text-sm",
                    children: ["Tudo o que você precisa para resultados", e.jsx("br", {}), "profissionais sem sair do seu quarto."]
                })]
            }), e.jsx("div", {
                className: "space-y-3 mb-8",
                children: o.map((s, a) => e.jsxs("div", {
                    className: "flex items-center gap-4 bg-card rounded-2xl p-4 shadow-sm border border-border",
                    children: [e.jsx("div", {
                        className: `w-12 h-12 ${s.bgColor} rounded-xl flex items-center justify-center text-2xl`,
                        children: s.icon
                    }), e.jsx("p", {
                        className: "text-foreground font-medium text-sm flex-1",
                        children: s.title
                    })]
                }, a))
            }), e.jsx("div", {
                className: "flex flex-wrap justify-center gap-4",
                children: i.map((s, a) => e.jsxs("div", {
                    className: "flex items-center gap-2 text-primary font-semibold text-sm",
                    children: [e.jsx(r, {
                        className: "w-4 h-4"
                    }), e.jsx("span", {
                        children: s
                    })]
                }, a))
            })]
        })
    });
export {
    l as
    default
};