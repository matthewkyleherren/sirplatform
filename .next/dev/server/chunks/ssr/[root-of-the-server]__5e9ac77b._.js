module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/nter/p4a/p448-poc/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/nter/p4a/p448-poc/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/nter/p4a/p448-poc/lib/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allProducts",
    ()=>allProducts,
    "menProducts",
    ()=>menProducts,
    "womenProducts",
    ()=>womenProducts
]);
const womenProducts = [
    {
        id: 'w-john-cow-white',
        name: 'John Cow White',
        price: 258,
        currency: 'EUR',
        images: {
            primary: '/images/products/int-s26john2-w_cow-whi-primary.jpg',
            hover: '/images/products/int-s26john2-w_cow-whi-hover.jpg'
        },
        colors: [
            {
                name: 'White',
                hex: '#FFFFFF',
                href: '#'
            },
            {
                name: 'Cream',
                hex: '#F5F0E1',
                href: '#'
            }
        ],
        tags: [
            'New'
        ],
        href: '#'
    },
    {
        id: 'w-john-ed-white',
        name: 'John Ed White',
        price: 278,
        currency: 'EUR',
        images: {
            primary: '/images/products/int-s26john2-w_ed-whi-primary.jpg',
            hover: '/images/products/int-s26john2-w_ed-whi-hover.jpg'
        },
        colors: [
            {
                name: 'White',
                hex: '#FFFFFF',
                href: '#'
            },
            {
                name: 'Silver',
                hex: '#C0C0C0',
                href: '#'
            },
            {
                name: 'Blush',
                hex: '#DE9FAD',
                href: '#'
            }
        ],
        tags: [
            'Best Seller'
        ],
        href: '#'
    },
    {
        id: 'w-john-plat-panna',
        name: 'John Platform Panna',
        price: 298,
        currency: 'EUR',
        images: {
            primary: '/images/products/int-s26john11-w_plat-panna-primary.jpg',
            hover: '/images/products/int-s26john11-w_plat-panna-hover.jpg'
        },
        colors: [
            {
                name: 'Panna',
                hex: '#F2E8D4',
                href: '#'
            },
            {
                name: 'White',
                hex: '#FFFFFF',
                href: '#'
            }
        ],
        tags: [
            'New'
        ],
        href: '#'
    },
    {
        id: 'w-john-block-terra',
        name: 'John Block Terra',
        price: 248,
        currency: 'EUR',
        images: {
            primary: '/images/products/int-s26john2-w_block-ter-primary.jpg',
            hover: '/images/products/int-s26john2-w_block-ter-primary.jpg'
        },
        colors: [
            {
                name: 'Terra',
                hex: '#C4683E',
                href: '#'
            },
            {
                name: 'Sand',
                hex: '#D2B48C',
                href: '#'
            },
            {
                name: 'White',
                hex: '#FFFFFF',
                href: '#'
            }
        ],
        tags: [],
        href: '#'
    }
];
const menProducts = [
    {
        id: 'm-john-block-cream',
        name: 'John Block Cream',
        price: 258,
        currency: 'EUR',
        images: {
            primary: '/images/products/int-s26john2-m_block-cre-primary.jpg',
            hover: '/images/products/int-s26john2-m_block-cre-hover.jpg'
        },
        colors: [
            {
                name: 'Cream',
                hex: '#F5F0E1',
                href: '#'
            },
            {
                name: 'White',
                hex: '#FFFFFF',
                href: '#'
            }
        ],
        tags: [
            'New'
        ],
        href: '#'
    },
    {
        id: 'm-john-vint-blue',
        name: 'John Vintage Blue',
        price: 268,
        currency: 'EUR',
        images: {
            primary: '/images/products/int-s26john2-m_vint-bul-primary.jpg',
            hover: '/images/products/int-s26john2-m_vint-bul-hover.jpg'
        },
        colors: [
            {
                name: 'Blue',
                hex: '#4A6FA5',
                href: '#'
            },
            {
                name: 'Navy',
                hex: '#1B2A4A',
                href: '#'
            },
            {
                name: 'White',
                hex: '#FFFFFF',
                href: '#'
            }
        ],
        tags: [
            'Best Seller'
        ],
        href: '#'
    },
    {
        id: 'm-john-low-white',
        name: 'John Low White',
        price: 228,
        currency: 'EUR',
        images: {
            primary: '/images/products/int-s26john2-w_cow-whi-primary.jpg',
            hover: '/images/products/int-s26john2-w_cow-whi-hover.jpg'
        },
        colors: [
            {
                name: 'White',
                hex: '#FFFFFF',
                href: '#'
            },
            {
                name: 'Off White',
                hex: '#FAF9F6',
                href: '#'
            }
        ],
        tags: [],
        href: '#'
    },
    {
        id: 'm-john-retro-cream',
        name: 'John Retro Cream',
        price: 278,
        currency: 'EUR',
        images: {
            primary: '/images/products/int-s26john2-m_block-cre-primary.jpg',
            hover: '/images/products/int-s26john2-m_block-cre-hover.jpg'
        },
        colors: [
            {
                name: 'Cream',
                hex: '#F5F0E1',
                href: '#'
            },
            {
                name: 'Sage',
                hex: '#9CAF88',
                href: '#'
            }
        ],
        tags: [
            'New'
        ],
        href: '#'
    }
];
const allProducts = [
    ...womenProducts,
    ...menProducts
];
}),
"[project]/nter/p4a/p448-poc/lib/data/homepage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "antibesSection",
    ()=>antibesSection,
    "ctaSplitSection",
    ()=>ctaSplitSection,
    "heroSection",
    ()=>heroSection,
    "homepageSections",
    ()=>homepageSections,
    "menCarouselSection",
    ()=>menCarouselSection,
    "textImageRevealSection",
    ()=>textImageRevealSection,
    "tickerSection",
    ()=>tickerSection,
    "womenCarouselSection",
    ()=>womenCarouselSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/data/products.ts [app-rsc] (ecmascript)");
;
const heroSection = {
    type: 'cta-single',
    media: {
        type: 'image',
        image: {
            desktop: {
                src: '/images/hero/hero-desktop.jpg',
                width: 4200,
                height: 2100,
                alt: 'P448 SS26 Collection — You Can Surf Later'
            },
            mobile: {
                src: '/images/hero/hero-mobile.jpg',
                width: 1000,
                height: 1200,
                alt: 'P448 SS26 Collection — You Can Surf Later'
            }
        }
    },
    title: 'Spring Is Here',
    kicker: 'SS26 Collection',
    description: 'New arrivals stitched with quality craftsmanship, premium materials and fresh style perspectives.',
    buttons: [
        {
            label: "Shop women's",
            href: '/collections/women-new-arrivals',
            variant: 'primary'
        },
        {
            label: "Shop men's",
            href: '/collections/men-new-arrivals',
            variant: 'secondary'
        }
    ],
    floatingMenu: {
        label: 'In this drop',
        links: [
            {
                label: 'About us',
                href: '/our-story'
            },
            {
                label: 'P448 World',
                href: '/pages/our-story'
            },
            {
                label: 'Project Sustainability®',
                href: '/pages/project-sustainability'
            }
        ]
    }
};
const womenCarouselSection = {
    type: 'product-carousel',
    title: 'New Arrivals',
    viewAllLink: '/collections/women-new-arrivals',
    products: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["womenProducts"]
};
const ctaSplitSection = {
    type: 'cta-split',
    left: {
        media: {
            type: 'image',
            image: {
                desktop: {
                    src: '/images/cta/women-desktop.jpg',
                    width: 2100,
                    height: 1400,
                    alt: 'Shop Women'
                },
                mobile: {
                    src: '/images/cta/women-mobile.jpg',
                    width: 1000,
                    height: 800,
                    alt: 'Shop Women'
                }
            }
        },
        title: "Women's",
        button: {
            label: "Shop women's",
            href: '/collections/women',
            variant: 'primary'
        },
        menu: {
            label: 'Highlights',
            links: [
                {
                    label: 'New Arrivals',
                    href: '/collections/women-new-arrivals'
                },
                {
                    label: 'Best Sellers',
                    href: '/collections/women-best-sellers'
                },
                {
                    label: 'Stella Ballet',
                    href: '/collections/women-stella'
                }
            ]
        }
    },
    right: {
        media: {
            type: 'image',
            image: {
                desktop: {
                    src: '/images/cta/men-desktop.jpg',
                    width: 2100,
                    height: 1400,
                    alt: 'Shop Men'
                },
                mobile: {
                    src: '/images/cta/men-mobile.jpg',
                    width: 1000,
                    height: 800,
                    alt: 'Shop Men'
                }
            }
        },
        title: "Men's",
        button: {
            label: "Shop men's",
            href: '/collections/men',
            variant: 'primary'
        },
        menu: {
            label: 'Highlights',
            links: [
                {
                    label: 'New Arrivals',
                    href: '/collections/men-new-arrivals'
                },
                {
                    label: 'Best Sellers',
                    href: '/collections/men-best-sellers'
                },
                {
                    label: 'Essentials Edit',
                    href: '/collections/men-the-essentials-edit'
                }
            ]
        }
    }
};
const menCarouselSection = {
    type: 'product-carousel',
    title: 'New Arrivals',
    viewAllLink: '/collections/men-new-arrivals',
    products: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["menProducts"]
};
const antibesSection = {
    type: 'cta-single',
    media: {
        type: 'image',
        image: {
            desktop: {
                src: '/images/cta/antibes-desktop.jpg',
                width: 4200,
                height: 2100,
                alt: 'The Antibes — iconic slip-on reimagined for summer'
            },
            mobile: {
                src: '/images/cta/antibes-mobile.jpg',
                width: 1000,
                height: 1200,
                alt: 'The Antibes — iconic slip-on reimagined for summer'
            }
        }
    },
    title: 'The Antibes',
    description: 'Our iconic slip-on, reimagined for summer',
    buttons: [
        {
            label: 'Discover',
            href: '#',
            variant: 'primary'
        }
    ]
};
const tickerSection = {
    type: 'ticker-text',
    text: 'You Can Surf Later.',
    backgroundImage: {
        desktop: {
            src: '/images/ticker/surf-later-desktop.jpg',
            width: 4200,
            height: 1400,
            alt: 'You Can Surf Later'
        },
        mobile: {
            src: '/images/ticker/surf-later-mobile.jpg',
            width: 1000,
            height: 800,
            alt: 'You Can Surf Later'
        }
    },
    button: {
        label: 'Shop Now',
        href: '#',
        variant: 'primary'
    }
};
const textImageRevealSection = {
    type: 'text-image-reveal',
    blocks: [
        {
            text: 'Born in 2014, P448 emerged from Italy\u2019s rich shoemaking tradition \u2014 but with an irreverent twist. We craft luxury sneakers for those who dare to stand out.',
            image: {
                desktop: {
                    src: '/images/text-reveal/pair-1-desktop.jpg',
                    width: 2100,
                    height: 1400,
                    alt: 'P448 Italian craftsmanship'
                },
                mobile: {
                    src: '/images/text-reveal/pair-1-mobile.jpg',
                    width: 1000,
                    height: 800,
                    alt: 'P448 Italian craftsmanship'
                }
            }
        },
        {
            text: 'Every pair is handcrafted in our Italian atelier, blending premium materials with bold design. Because life\u2019s too short for boring shoes.',
            image: {
                desktop: {
                    src: '/images/text-reveal/pair-2-desktop.jpg',
                    width: 2100,
                    height: 1400,
                    alt: 'P448 handcrafted sneakers'
                },
                mobile: {
                    src: '/images/text-reveal/pair-2-mobile.jpg',
                    width: 1000,
                    height: 800,
                    alt: 'P448 handcrafted sneakers'
                }
            }
        }
    ]
};
const homepageSections = [
    heroSection,
    womenCarouselSection,
    ctaSplitSection,
    menCarouselSection,
    antibesSection,
    tickerSection,
    textImageRevealSection
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
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCarousel",
    ()=>ProductCarousel
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductCarousel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductCarousel() from the server but ProductCarousel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx <module evaluation>", "ProductCarousel");
}),
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCarousel",
    ()=>ProductCarousel
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductCarousel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductCarousel() from the server but ProductCarousel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx", "ProductCarousel");
}),
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TickerText",
    ()=>TickerText
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TickerText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TickerText() from the server but TickerText is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx <module evaluation>", "TickerText");
}),
"[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TickerText",
    ()=>TickerText
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TickerText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TickerText() from the server but TickerText is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx", "TickerText");
}),
"[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextImageReveal",
    ()=>TextImageReveal
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TextImageReveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextImageReveal() from the server but TextImageReveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx <module evaluation>", "TextImageReveal");
}),
"[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextImageReveal",
    ()=>TextImageReveal
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TextImageReveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextImageReveal() from the server but TextImageReveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx", "TextImageReveal");
}),
"[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsFeed",
    ()=>NewsFeed
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const NewsFeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NewsFeed() from the server but NewsFeed is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx <module evaluation>", "NewsFeed");
}),
"[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsFeed",
    ()=>NewsFeed
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const NewsFeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NewsFeed() from the server but NewsFeed is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx", "NewsFeed");
}),
"[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/nter/p4a/p448-poc/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$homepage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/data/homepage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NewsFeed"], {}, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/app/page.tsx",
                lineNumber: 12,
                columnNumber: 4
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$homepage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["homepageSections"].map((section, index)=>{
                switch(section.type){
                    case 'cta-single':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTASingle"], {
                            data: section,
                            priority: index === 0
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/page.tsx",
                            lineNumber: 16,
                            columnNumber: 14
                        }, this);
                    case 'cta-split':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTASplit"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/page.tsx",
                            lineNumber: 18,
                            columnNumber: 14
                        }, this);
                    case 'product-carousel':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCarousel"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/page.tsx",
                            lineNumber: 20,
                            columnNumber: 14
                        }, this);
                    case 'ticker-text':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TickerText"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/page.tsx",
                            lineNumber: 22,
                            columnNumber: 14
                        }, this);
                    case 'text-image-reveal':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TextImageReveal"], {
                            data: section
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/app/page.tsx",
                            lineNumber: 24,
                            columnNumber: 14
                        }, this);
                    default:
                        return null;
                }
            })
        ]
    }, void 0, true);
}
}),
"[project]/nter/p4a/p448-poc/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/nter/p4a/p448-poc/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5e9ac77b._.js.map