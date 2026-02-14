module.exports = [
"[project]/nter/p4a/p448-poc/lib/data/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/nter/p4a/p448-poc/lib/data/product-detail.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPrice",
    ()=>formatPrice,
    "getProductByHandle",
    ()=>getProductByHandle,
    "johnLilacProduct",
    ()=>johnLilacProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/data/products.ts [app-ssr] (ecmascript)");
;
const euroFormatter = new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR'
});
function formatPrice(amount, currency) {
    if (currency === 'EUR') {
        return euroFormatter.format(amount);
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
    }).format(amount);
}
const johnLilacProduct = {
    handle: 's25john2-w-258',
    kicker: 'SS25 Collection',
    name: 'John Lilac',
    price: 249,
    currency: 'EUR',
    description: 'The John Lilac is wrapped in white leather with contrasting light pink and off-white suede details. Off-white cotton laces and our signature P448 amber rubber sole tie it all together.',
    colorway: 'White / Lilac / Off-white',
    gallery: [
        {
            id: 'look-1',
            src: '/images/product/john-lilac/look-1.jpg',
            alt: 'John Lilac sneaker profile view',
            width: 2100,
            height: 1400
        },
        {
            id: 'look-2',
            src: '/images/product/john-lilac/look-2.jpg',
            alt: 'John Lilac sneaker angled view',
            width: 2100,
            height: 1400
        },
        {
            id: 'look-3',
            src: '/images/product/john-lilac/look-3.jpg',
            alt: 'John Lilac sneaker close-up on tongue',
            width: 2100,
            height: 1400
        },
        {
            id: 'look-4',
            src: '/images/product/john-lilac/look-4.jpg',
            alt: 'John Lilac sneaker overhead view',
            width: 2100,
            height: 1400
        },
        {
            id: 'look-5',
            src: '/images/product/john-lilac/look-5.jpg',
            alt: 'John Lilac sneaker outsole detail',
            width: 2100,
            height: 1400
        },
        {
            id: 'look-6',
            src: '/images/product/john-lilac/look-6.jpg',
            alt: 'John Lilac sneaker stacked pair',
            width: 2100,
            height: 1400
        }
    ],
    highlights: [
        'Made in Italy',
        'White leather upper with perforated P448 logo',
        'Light pink suede tongue & heel tab',
        'Off-white suede trim & toe',
        'Terry cloth lining with memory foam insole',
        'Amber P448 rubber sole & off-white cotton laces'
    ],
    sizeOptions: [
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42'
    ],
    fit: {
        label: 'Fit',
        description: 'True to size',
        value: 50
    },
    materials: [
        'Upper: leather & suede mix',
        'Lining: terry cloth',
        'Sole: 100% rubber',
        'Laces: cotton'
    ],
    careNotes: [
        'Pre-treat leather with a protective spray to guard against stains.',
        'Spot clean leather with a lightly damp cotton cloth; let dry away from direct heat.',
        'Use a suede brush to gently buff the suede panels, always brushing with the nap.',
        'Remove dirt from soles with a damp cloth; use a white rubber eraser for stubborn marks.'
    ],
    shippingNotes: [
        'Free ground shipping on all EU orders.',
        'Orders ship within 1 business day; tracking is emailed at dispatch.',
        'Returns accepted within 14 days via the online portal (a €5 processing fee applies).'
    ],
    recommendations: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["womenProducts"].slice(0, 4),
    tabs: [
        {
            id: 'description',
            label: 'Description',
            content: [
                {
                    type: 'paragraph',
                    value: 'Lux Italian leather, pastel lilac suede, and an amber rubber sole give the John Lilac its elevated everyday energy. Breathable terry cloth lining and a memory foam insole keep things plush no matter where you roam.'
                },
                {
                    type: 'list',
                    value: [
                        'Made in Italy',
                        'Removable memory foam insole',
                        'Signature amber outsole'
                    ]
                }
            ]
        },
        {
            id: 'reviews',
            label: 'Reviews',
            content: [
                {
                    type: 'paragraph',
                    value: '4.8 ★ average · 124 reviews. “Obsessed with the subtle pop of color—these broke in instantly.” – Alessia R.'
                }
            ]
        },
        {
            id: 'care',
            label: 'Care',
            content: [
                {
                    type: 'paragraph',
                    value: 'Spot clean leather panels with a damp microfiber cloth and refresh suede using a suede brush. Avoid soaking the sneakers; instead let them air dry out of direct heat.'
                }
            ]
        }
    ]
};
const productMap = {
    [johnLilacProduct.handle]: johnLilacProduct
};
function getProductByHandle(handle) {
    const key = handle.toLowerCase();
    return productMap[key];
}
}),
"[project]/nter/p4a/p448-poc/components/product/product-modal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "product-modal-module__GH-uba__body",
  "close": "product-modal-module__GH-uba__close",
  "content": "product-modal-module__GH-uba__content",
  "overlay": "product-modal-module__GH-uba__overlay",
  "title": "product-modal-module__GH-uba__title",
});
}),
"[project]/nter/p4a/p448-poc/components/product/product-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductModal",
    ()=>ProductModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-modal.module.css [app-ssr] (css module)");
"use client";
;
;
;
function ProductModal({ triggerLabel, title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-secondary",
                    type: "button",
                    children: triggerLabel
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                    lineNumber: 16,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                lineNumber: 15,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                        lineNumber: 21,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].close,
                                "aria-label": "Close dialog",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                                lineNumber: 23,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                                lineNumber: 26,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                                lineNumber: 27,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                        lineNumber: 22,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                lineNumber: 20,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "product-purchase-panel-module__tt3yeq__actions",
  "description": "product-purchase-panel-module__tt3yeq__description",
  "fitBar": "product-purchase-panel-module__tt3yeq__fitBar",
  "fitIndicator": "product-purchase-panel-module__tt3yeq__fitIndicator",
  "fitRow": "product-purchase-panel-module__tt3yeq__fitRow",
  "highlights": "product-purchase-panel-module__tt3yeq__highlights",
  "kicker": "product-purchase-panel-module__tt3yeq__kicker",
  "modalRow": "product-purchase-panel-module__tt3yeq__modalRow",
  "panel": "product-purchase-panel-module__tt3yeq__panel",
  "price": "product-purchase-panel-module__tt3yeq__price",
  "primaryButton": "product-purchase-panel-module__tt3yeq__primaryButton",
  "sizeButton": "product-purchase-panel-module__tt3yeq__sizeButton",
  "sizeButtonActive": "product-purchase-panel-module__tt3yeq__sizeButtonActive",
  "sizeGrid": "product-purchase-panel-module__tt3yeq__sizeGrid",
  "title": "product-purchase-panel-module__tt3yeq__title",
});
}),
"[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductPurchasePanel",
    ()=>ProductPurchasePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$product$2d$detail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/data/product-detail.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
function ProductPurchasePanel({ product }) {
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const priceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$product$2d$detail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(product.price, product.currency), [
        product.price,
        product.currency
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].kicker,
                        children: product.kicker
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 21,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 22,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].price,
                        children: [
                            priceLabel,
                            " · ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: product.colorway
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 23,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 20,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                children: product.description
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 28,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highlights,
                children: product.highlights.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: item
                    }, item, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 32,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 30,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].kicker,
                        children: "Select size"
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 37,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sizeGrid,
                        children: product.sizeOptions.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sizeButton} ${selectedSize === size ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sizeButtonActive : ''}`,
                                onClick: ()=>setSelectedSize(size),
                                children: [
                                    "EU ",
                                    size
                                ]
                            }, size, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 40,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 38,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 36,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fitRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].kicker,
                        children: [
                            product.fit.label,
                            ": ",
                            product.fit.description
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 53,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fitBar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fitIndicator,
                            style: {
                                left: `${product.fit.value}%`
                            },
                            "aria-label": product.fit.description
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                            lineNumber: 57,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 56,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 52,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                        type: "button",
                        children: selectedSize ? `Add EU ${selectedSize} to bag` : 'Add to bag'
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 66,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$purchase$2d$panel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductModal"], {
                                title: "Materials & Details",
                                triggerLabel: "Details",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: product.materials.map((material)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: material
                                        }, material, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                            lineNumber: 73,
                                            columnNumber: 9
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                    lineNumber: 71,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 70,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductModal"], {
                                title: "Care Guide",
                                triggerLabel: "Care",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: product.careNotes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: note
                                        }, note, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                            lineNumber: 80,
                                            columnNumber: 9
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                    lineNumber: 78,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 77,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductModal"], {
                                title: "Shipping & Returns",
                                triggerLabel: "Shipping",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: product.shippingNotes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: note
                                        }, note, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                            lineNumber: 87,
                                            columnNumber: 9
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                    lineNumber: 85,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 84,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 69,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 65,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/components/product/product-tabs.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "panel": "product-tabs-module__5YHNnG__panel",
  "tab": "product-tabs-module__5YHNnG__tab",
  "tabActive": "product-tabs-module__5YHNnG__tabActive",
  "tabs": "product-tabs-module__5YHNnG__tabs",
  "wrapper": "product-tabs-module__5YHNnG__wrapper",
});
}),
"[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductTabs",
    ()=>ProductTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-tabs.module.css [app-ssr] (css module)");
"use client";
;
;
;
function ProductTabs({ tabs }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(tabs[0]?.id ?? '');
    const current = tabs.find((tab)=>tab.id === activeTab);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabs,
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab} ${tab.id === activeTab ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabActive : ''}`,
                        onClick: ()=>setActiveTab(tab.id),
                        children: tab.label
                    }, tab.id, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                        lineNumber: 19,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this),
            current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
                children: current.content.map((block, index)=>{
                    if (block.type === 'paragraph') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: block.value
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this);
                    }
                    if (block.type === 'list') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: block.value.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                                    lineNumber: 39,
                                    columnNumber: 11
                                }, this))
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, this);
                    }
                    return null;
                })
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrowButton": "product-carousel-module__WMyC1q__arrowButton",
  "card": "product-carousel-module__WMyC1q__card",
  "cardBody": "product-carousel-module__WMyC1q__cardBody",
  "cardBookmark": "product-carousel-module__WMyC1q__cardBookmark",
  "cardColor": "product-carousel-module__WMyC1q__cardColor",
  "cardColors": "product-carousel-module__WMyC1q__cardColors",
  "cardComparePrice": "product-carousel-module__WMyC1q__cardComparePrice",
  "cardContent": "product-carousel-module__WMyC1q__cardContent",
  "cardImage": "product-carousel-module__WMyC1q__cardImage",
  "cardImageHidden": "product-carousel-module__WMyC1q__cardImageHidden",
  "cardImageHover": "product-carousel-module__WMyC1q__cardImageHover",
  "cardImageVisible": "product-carousel-module__WMyC1q__cardImageVisible",
  "cardImages": "product-carousel-module__WMyC1q__cardImages",
  "cardImg": "product-carousel-module__WMyC1q__cardImg",
  "cardLink": "product-carousel-module__WMyC1q__cardLink",
  "cardMediaContainer": "product-carousel-module__WMyC1q__cardMediaContainer",
  "cardPrice": "product-carousel-module__WMyC1q__cardPrice",
  "cardQuickAdd": "product-carousel-module__WMyC1q__cardQuickAdd",
  "cardTag": "product-carousel-module__WMyC1q__cardTag",
  "cardTags": "product-carousel-module__WMyC1q__cardTags",
  "cardTitle": "product-carousel-module__WMyC1q__cardTitle",
  "cardTitleRow": "product-carousel-module__WMyC1q__cardTitleRow",
  "carousel": "product-carousel-module__WMyC1q__carousel",
  "header": "product-carousel-module__WMyC1q__header",
  "headerActions": "product-carousel-module__WMyC1q__headerActions",
  "headerArrows": "product-carousel-module__WMyC1q__headerArrows",
  "headerLink": "product-carousel-module__WMyC1q__headerLink",
  "headerTitle": "product-carousel-module__WMyC1q__headerTitle",
  "section": "product-carousel-module__WMyC1q__section",
  "srOnly": "product-carousel-module__WMyC1q__srOnly",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
function BookmarkIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "20",
        viewBox: "0 0 17 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.78 1H3.22C3.0985 1 3 1.09934 3 1.22189V19.7777C3 19.9753 3.23697 20.0743 3.37556 19.9346L8.34444 14.923C8.43035 14.8364 8.56965 14.8364 8.65556 14.923L13.6244 19.9346C13.763 20.0743 14 19.9753 14 19.7777V1.22189C14 1.09934 13.9015 1 13.78 1Z",
            stroke: "currentColor"
        }, void 0, false, {
            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
            lineNumber: 16,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
}
function ProductCard({ product }) {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const formattedPrice = new Intl.NumberFormat('en-EU', {
        style: 'currency',
        currency: product.currency,
        minimumFractionDigits: 2
    }).format(product.price);
    const formattedComparePrice = product.compareAtPrice ? new Intl.NumberFormat('en-EU', {
        style: 'currency',
        currency: product.currency,
        minimumFractionDigits: 2
    }).format(product.compareAtPrice) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                href: product.href,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardLink,
                "aria-label": product.name,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].srOnly,
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                    lineNumber: 48,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                lineNumber: 47,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardMediaContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImages,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImage} ${isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImageHidden : ''}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                src: product.images.primary,
                                width: 540,
                                height: 675,
                                alt: product.name,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImg,
                                sizes: "(max-width: 767px) 80vw, 25vw"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 54,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                            lineNumber: 53,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImageHover} ${isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImageVisible : ''}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                src: product.images.hover,
                                width: 540,
                                height: 675,
                                alt: product.name,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImg,
                                sizes: "(max-width: 767px) 80vw, 25vw"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 64,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                            lineNumber: 63,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                    lineNumber: 52,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                lineNumber: 51,
                columnNumber: 4
            }, this),
            product.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTags,
                children: product.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTag,
                        children: tag
                    }, tag, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                        lineNumber: 79,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitleRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 86,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBookmark,
                                "aria-label": `Save ${product.name}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookmarkIcon, {}, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                    lineNumber: 88,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 87,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                        lineNumber: 85,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardPrice,
                                children: [
                                    formattedComparePrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardComparePrice,
                                        children: formattedComparePrice
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                        lineNumber: 95,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formattedPrice
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                        lineNumber: 97,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 93,
                                columnNumber: 6
                            }, this),
                            product.colors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardColors,
                                children: product.colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: color.href,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardColor,
                                        style: {
                                            '--swatch-color': color.hex
                                        },
                                        "aria-label": color.name,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].srOnly,
                                            children: color.name
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                            lineNumber: 109,
                                            columnNumber: 10
                                        }, this)
                                    }, color.name, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                        lineNumber: 102,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 100,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                        lineNumber: 92,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                lineNumber: 84,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCarousel",
    ()=>ProductCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/keen-slider/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
function ProductCarousel({ data }) {
    const { title, viewAllLink, products } = data;
    const [sliderRef, instanceRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeenSlider"])({
        mode: 'snap',
        slides: {
            perView: 3,
            spacing: 0
        },
        breakpoints: {
            '(max-width: 900px)': {
                slides: {
                    perView: 2.5,
                    spacing: 0
                }
            },
            '(max-width: 767px)': {
                slides: {
                    perView: 1.5,
                    spacing: 0
                }
            }
        }
    });
    const handlePrev = ()=>{
        instanceRef.current?.prev();
    };
    const handleNext = ()=>{
        instanceRef.current?.next();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerTitle,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                        lineNumber: 45,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                href: viewAllLink,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerLink,
                                children: "Shop Now"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                lineNumber: 47,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerArrows,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrowButton,
                                        onClick: handlePrev,
                                        "aria-label": "Previous products",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "12",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "m7.823 1.646.708.708L4.884 6l3.647 3.646-.708.707L3.47 6l4.354-4.354Z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                                lineNumber: 58,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                            lineNumber: 57,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                        lineNumber: 51,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrowButton,
                                        onClick: handleNext,
                                        "aria-label": "Next products",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "12",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "m4.177 1.646-.708.708L7.116 6 3.469 9.646l.708.707L8.53 6 4.177 1.646Z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                                lineNumber: 73,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                            lineNumber: 72,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                        lineNumber: 66,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                lineNumber: 50,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                        lineNumber: 46,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                lineNumber: 44,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carousel,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: sliderRef,
                    className: "keen-slider",
                    children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "keen-slider__slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                lineNumber: 89,
                                columnNumber: 8
                            }, this)
                        }, product.id, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                            lineNumber: 88,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                    lineNumber: 86,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                lineNumber: 85,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=nter_p4a_p448-poc_99b22ef2._.js.map