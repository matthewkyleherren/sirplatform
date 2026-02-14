module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/nter/p4a/p448-poc/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/nter/p4a/p448-poc/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/nter/p4a/p448-poc/lib/data/our-story.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectionsCarousel",
    ()=>collectionsCarousel,
    "craftsmanshipReveal",
    ()=>craftsmanshipReveal,
    "handcraftedSplit",
    ()=>handcraftedSplit,
    "headerMarquee",
    ()=>headerMarquee,
    "heroSection",
    ()=>heroSection,
    "introReveal",
    ()=>introReveal,
    "materialsEditorial",
    ()=>materialsEditorial,
    "ourStorySections",
    ()=>ourStorySections,
    "philosophyEditorial",
    ()=>philosophyEditorial,
    "sustainabilityReveal",
    ()=>sustainabilityReveal
]);
const headerMarquee = {
    type: 'page-header-marquee',
    text: 'Our Story'
};
const heroSection = {
    type: 'cta-single',
    media: {
        type: 'video',
        image: {
            desktop: {
                src: '/images/our-story/hero-desktop.jpg',
                width: 4200,
                height: 2100,
                alt: 'P448 Our Story hero'
            },
            mobile: {
                src: '/images/our-story/hero-mobile.jpg',
                width: 1000,
                height: 1200,
                alt: 'P448 Our Story hero'
            }
        },
        video: {
            desktop: {
                mp4: '/videos/our-story/hero-desktop.mp4'
            },
            mobile: {
                mp4: '/videos/our-story/hero-mobile.mp4'
            }
        }
    },
    title: 'Born In Italy, Made For The World',
    buttons: [
        {
            label: 'Discover Collection',
            href: '#',
            variant: 'primary'
        }
    ]
};
const introReveal = {
    type: 'text-reveal',
    text: 'We are P448. Born in 2014 from the streets of Italy, we craft luxury sneakers for those who refuse to blend in. Every pair tells a story of rebellion, craftsmanship, and unapologetic style.'
};
const handcraftedSplit = {
    type: 'cta-split',
    left: {
        media: {
            type: 'image',
            image: {
                desktop: {
                    src: '/images/our-story/split-left-desktop.jpg',
                    width: 2100,
                    height: 1400,
                    alt: 'Handcrafted in Italy'
                },
                mobile: {
                    src: '/images/our-story/split-left-mobile.jpg',
                    width: 1000,
                    height: 800,
                    alt: 'Handcrafted in Italy'
                }
            }
        },
        title: 'Handcrafted In Italy',
        button: {
            label: 'Shop Now',
            href: '#',
            variant: 'primary'
        }
    },
    right: {
        media: {
            type: 'image',
            image: {
                desktop: {
                    src: '/images/our-story/split-right-desktop.jpg',
                    width: 2100,
                    height: 1400,
                    alt: 'Since 2014'
                },
                mobile: {
                    src: '/images/our-story/split-right-mobile.jpg',
                    width: 1000,
                    height: 800,
                    alt: 'Since 2014'
                }
            }
        },
        title: 'Since 2014',
        button: {
            label: 'Shop Now',
            href: '#',
            variant: 'primary'
        }
    }
};
const philosophyEditorial = {
    type: 'editorial',
    headline: 'Our Philosophy',
    body: '<p>At P448, we believe luxury should be lived in, not locked away. Our sneakers are designed to be worn — on sun-drenched cobblestone streets, in smoky jazz clubs, at gallery openings. Wherever you go, however you move.</p><p>We take the finest Italian leather and suede, pair them with hand-finished details, and create something that\'s equal parts art and utility. No compromises.</p>'
};
const collectionsCarousel = {
    type: 'cta-carousel',
    kicker: 'Collections',
    slides: [
        {
            media: {
                type: 'image',
                image: {
                    desktop: {
                        src: '/images/our-story/carousel-fw25-desktop.jpg',
                        width: 4200,
                        height: 2100,
                        alt: 'FW25 Collection'
                    },
                    mobile: {
                        src: '/images/our-story/carousel-fw25-mobile.jpg',
                        width: 1000,
                        height: 1200,
                        alt: 'FW25 Collection'
                    }
                }
            },
            title: 'FW25 Collection',
            kicker: 'New Season',
            description: 'Bold silhouettes for the season ahead',
            button: {
                label: 'Shop FW25',
                href: '#',
                variant: 'primary'
            }
        },
        {
            media: {
                type: 'image',
                image: {
                    desktop: {
                        src: '/images/our-story/carousel-python-desktop.jpg',
                        width: 4200,
                        height: 2100,
                        alt: 'Python Collection'
                    },
                    mobile: {
                        src: '/images/our-story/carousel-python-mobile.jpg',
                        width: 1000,
                        height: 1200,
                        alt: 'Python Collection'
                    }
                }
            },
            title: 'Python Collection',
            kicker: 'Limited Edition',
            description: 'Exotic textures, Italian craftsmanship',
            button: {
                label: 'Discover',
                href: '#',
                variant: 'primary'
            }
        },
        {
            media: {
                type: 'image',
                image: {
                    desktop: {
                        src: '/images/our-story/carousel-katz-desktop.jpg',
                        width: 4200,
                        height: 2100,
                        alt: 'Katz Collaboration'
                    },
                    mobile: {
                        src: '/images/our-story/carousel-katz-mobile.jpg',
                        width: 1000,
                        height: 1200,
                        alt: 'Katz Collaboration'
                    }
                }
            },
            title: 'Katz Collaboration',
            kicker: 'Special Edition',
            description: 'Art meets street culture',
            button: {
                label: 'Explore',
                href: '#',
                variant: 'primary'
            }
        }
    ]
};
const craftsmanshipReveal = {
    type: 'text-reveal',
    text: "Every stitch, every detail, every material — chosen with intention. We don't follow trends. We set them.",
    backgroundImage: {
        desktop: {
            src: '/images/our-story/craftsmanship-desktop.jpg',
            width: 2100,
            height: 1400,
            alt: 'Craftsmanship'
        },
        mobile: {
            src: '/images/our-story/craftsmanship-mobile.jpg',
            width: 1000,
            height: 800,
            alt: 'Craftsmanship'
        }
    },
    overlayOpacity: 0.5,
    caption: 'Craftsmanship'
};
const materialsEditorial = {
    type: 'editorial',
    headline: 'Materials & Innovation',
    body: "<p>We source only the finest materials from tanneries across Italy and Europe. Premium leather, hand-washed suede, recycled fabrics — each chosen for quality, character, and sustainability.</p><p>Our artisans in Marche combine traditional techniques with modern innovation, creating sneakers that age beautifully and feel incredible from day one.</p>"
};
const sustainabilityReveal = {
    type: 'text-reveal',
    text: "Sustainability isn't a trend for us. It's a responsibility. From recycled materials to ethical production, we're committed to doing better.",
    backgroundImage: {
        desktop: {
            src: '/images/our-story/sustainability-desktop.jpg',
            width: 2100,
            height: 1400,
            alt: 'Sustainability'
        },
        mobile: {
            src: '/images/our-story/sustainability-mobile.jpg',
            width: 1000,
            height: 800,
            alt: 'Sustainability'
        }
    },
    overlayOpacity: 0.45,
    caption: 'Sustainability'
};
const ourStorySections = [
    headerMarquee,
    heroSection,
    introReveal,
    handcraftedSplit,
    philosophyEditorial,
    collectionsCarousel,
    craftsmanshipReveal,
    materialsEditorial,
    sustainabilityReveal
];
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASingle",
    ()=>CTASingle
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CTASingle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTASingle() from the server but CTASingle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx <module evaluation>", "CTASingle");
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASingle",
    ()=>CTASingle
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CTASingle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTASingle() from the server but CTASingle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx", "CTASingle");
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASplit",
    ()=>CTASplit
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CTASplit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTASplit() from the server but CTASplit is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx <module evaluation>", "CTASplit");
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASplit",
    ()=>CTASplit
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CTASplit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTASplit() from the server but CTASplit is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx", "CTASplit");
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTACarousel",
    ()=>CTACarousel
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CTACarousel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTACarousel() from the server but CTACarousel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx <module evaluation>", "CTACarousel");
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTACarousel",
    ()=>CTACarousel
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CTACarousel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTACarousel() from the server but CTACarousel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx", "CTACarousel");
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextReveal",
    ()=>TextReveal
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TextReveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextReveal() from the server but TextReveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx <module evaluation>", "TextReveal");
}),
"[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextReveal",
    ()=>TextReveal
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TextReveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextReveal() from the server but TextReveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx", "TextReveal");
}),
"[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorialContent",
    ()=>EditorialContent
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const EditorialContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditorialContent() from the server but EditorialContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx <module evaluation>", "EditorialContent");
}),
"[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorialContent",
    ()=>EditorialContent
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const EditorialContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditorialContent() from the server but EditorialContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx", "EditorialContent");
}),
"[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/components/sections/page-header-marquee/page-header-marquee.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "marquee": "page-header-marquee-module__XlZSgG__marquee",
  "section": "page-header-marquee-module__XlZSgG__section",
  "text": "page-header-marquee-module__XlZSgG__text",
  "track": "page-header-marquee-module__XlZSgG__track",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/page-header-marquee/page-header-marquee.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeaderMarquee",
    ()=>PageHeaderMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$page$2d$header$2d$marquee$2f$page$2d$header$2d$marquee$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/page-header-marquee/page-header-marquee.module.css [app-rsc] (css module)");
;
;
function PageHeaderMarquee({ data }) {
    const { text } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$page$2d$header$2d$marquee$2f$page$2d$header$2d$marquee$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$page$2d$header$2d$marquee$2f$page$2d$header$2d$marquee$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].track,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$page$2d$header$2d$marquee$2f$page$2d$header$2d$marquee$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].text,
                    children: text
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/page-header-marquee/page-header-marquee.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$page$2d$header$2d$marquee$2f$page$2d$header$2d$marquee$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].text,
                    "aria-hidden": "true",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/page-header-marquee/page-header-marquee.tsx",
                    lineNumber: 17,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$page$2d$header$2d$marquee$2f$page$2d$header$2d$marquee$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].text,
                    "aria-hidden": "true",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/page-header-marquee/page-header-marquee.tsx",
                    lineNumber: 20,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nter/p4a/p448-poc/components/sections/page-header-marquee/page-header-marquee.tsx",
            lineNumber: 13,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/page-header-marquee/page-header-marquee.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingNav",
    ()=>FloatingNav
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FloatingNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FloatingNav() from the server but FloatingNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx <module evaluation>", "FloatingNav");
}),
"[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingNav",
    ()=>FloatingNav
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FloatingNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FloatingNav() from the server but FloatingNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx", "FloatingNav");
}),
"[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/app/our-story/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurStoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$our$2d$story$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/data/our-story.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$page$2d$header$2d$marquee$2f$page$2d$header$2d$marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/page-header-marquee/page-header-marquee.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function OurStoryPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$our$2d$story$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ourStorySections"].map((section, index)=>{
                switch(section.type){
                    case 'page-header-marquee':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$page$2d$header$2d$marquee$2f$page$2d$header$2d$marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHeaderMarquee"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/our-story/page.tsx",
                            lineNumber: 16,
                            columnNumber: 14
                        }, this);
                    case 'cta-single':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTASingle"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/our-story/page.tsx",
                            lineNumber: 18,
                            columnNumber: 14
                        }, this);
                    case 'text-reveal':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TextReveal"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/our-story/page.tsx",
                            lineNumber: 20,
                            columnNumber: 14
                        }, this);
                    case 'cta-split':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTASplit"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/our-story/page.tsx",
                            lineNumber: 22,
                            columnNumber: 14
                        }, this);
                    case 'editorial':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditorialContent"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/our-story/page.tsx",
                            lineNumber: 24,
                            columnNumber: 14
                        }, this);
                    case 'cta-carousel':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTACarousel"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/our-story/page.tsx",
                            lineNumber: 26,
                            columnNumber: 14
                        }, this);
                    default:
                        return null;
                }
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FloatingNav"], {
                label: "Shop Now",
                href: "#"
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/app/our-story/page.tsx",
                lineNumber: 31,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/nter/p4a/p448-poc/app/our-story/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/nter/p4a/p448-poc/app/our-story/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__93eb2d2b._.js.map