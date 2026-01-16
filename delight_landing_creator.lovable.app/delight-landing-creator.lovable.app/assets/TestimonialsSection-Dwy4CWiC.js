import {
    c as r,
    r as d,
    j as e
} from "./index-HR7j14Lo.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l = r("ChevronLeft", [
    ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m = r("ChevronRight", [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ]),
    h = "/assets/depoimento-1-C5QDh7JA.png",
    x = "/assets/depoimento-2-B0pj2oZA.png",
    g = "/assets/depoimento-3-BGtLpKZi.png",
    p = "/assets/depoimento-4-BG2O13_Q.png",
    t = [{
        id: 1,
        image: h
    }, {
        id: 2,
        image: x
    }, {
        id: 3,
        image: g
    }, {
        id: 4,
        image: p
    }],
    f = () => {
        const [o, n] = d.useState(0), i = () => {
            n(s => (s + 1) % t.length)
        }, c = () => {
            n(s => (s - 1 + t.length) % t.length)
        };
        return e.jsx("section", {
            className: "bg-section py-12 px-4",
            children: e.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [e.jsx("h2", {
                    className: "text-2xl md:text-3xl font-bold text-center text-foreground mb-6",
                    children: "RESULTADOS REAIS EM 7 DIAS"
                }), e.jsxs("div", {
                    className: "relative",
                    children: [e.jsx("div", {
                        className: "overflow-hidden rounded-2xl bg-card shadow-card",
                        children: e.jsx("img", {
                            src: t[o].image,
                            alt: `Depoimento ${o+1}`,
                            className: "w-full",
                            loading: "lazy",
                            decoding: "async"
                        })
                    }), e.jsx("button", {
                        onClick: c,
                        className: "absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card rounded-full shadow-card flex items-center justify-center hover:bg-muted transition-colors",
                        children: e.jsx(l, {
                            className: "w-5 h-5 text-foreground"
                        })
                    }), e.jsx("button", {
                        onClick: i,
                        className: "absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card rounded-full shadow-card flex items-center justify-center hover:bg-muted transition-colors",
                        children: e.jsx(m, {
                            className: "w-5 h-5 text-foreground"
                        })
                    })]
                }), e.jsx("div", {
                    className: "flex justify-center gap-2 mt-4",
                    children: t.map((s, a) => e.jsx("button", {
                        onClick: () => n(a),
                        className: `w-2 h-2 rounded-full transition-colors ${a===o?"bg-primary":"bg-border"}`
                    }, a))
                })]
            })
        })
    };
export {
    f as
    default
};