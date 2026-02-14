(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function Link({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/link.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Link;
var _c;
__turbopack_context__.k.register(_c, "Link");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useMediaQuery(query) {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const mql = window.matchMedia(query);
            setMatches(mql.matches);
            const handler = {
                "useMediaQuery.useEffect.handler": (e)=>{
                    setMatches(e.matches);
                }
            }["useMediaQuery.useEffect.handler"];
            mql.addEventListener('change', handler);
            return ({
                "useMediaQuery.useEffect": ()=>{
                    mql.removeEventListener('change', handler);
                }
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-logo-scroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLogoScroll",
    ()=>useLogoScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useLogoScroll(options = {}) {
    _s();
    const { respectReducedMotion = true } = options;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastKnownY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    const setLogoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useLogoScroll.useRef": (index)=>{
            return ({
                "useLogoScroll.useRef": (el)=>{
                    if (el) {
                        logoElsRef.current[index] = el;
                    }
                }
            })["useLogoScroll.useRef"];
        }
    }["useLogoScroll.useRef"]).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLogoScroll.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            if (respectReducedMotion && prefersReducedMotion) return;
            function updateEl() {
                isTicking.current = false;
                scrollLogo();
            }
            function scrollLogo() {
                const scrollYAsAPercentage = lastKnownY.current / window.innerHeight;
                // Count full windows scrolled (matches original for loop)
                let totalWindowsScrolled = 0;
                for(let i = 0; i < scrollYAsAPercentage; i++){
                    totalWindowsScrolled = i;
                }
                const transformAmountY = 100 * (scrollYAsAPercentage - totalWindowsScrolled);
                logoElsRef.current.forEach({
                    "useLogoScroll.useEffect.scrollLogo": (logoEl)=>{
                        if (logoEl) {
                            logoEl.style.transform = `translate3d(0px, -${transformAmountY}%, 0px)`;
                        }
                    }
                }["useLogoScroll.useEffect.scrollLogo"]);
            }
            function requestTick() {
                if (!isTicking.current) {
                    requestAnimationFrame(updateEl);
                }
                isTicking.current = true;
            }
            function onScroll() {
                lastKnownY.current = window.scrollY;
                requestTick();
            }
            // Initial position
            lastKnownY.current = window.scrollY;
            updateEl();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "useLogoScroll.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                }
            })["useLogoScroll.useEffect"];
        }
    }["useLogoScroll.useEffect"], [
        prefersReducedMotion,
        respectReducedMotion
    ]);
    return {
        containerRef,
        setLogoRef
    };
}
_s(useLogoScroll, "H8L6WiTj8qMYmXlr9hf4Et10G94=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/header/header.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "banner": "header-module__yrGlOG__banner",
  "bannerAncillary": "header-module__yrGlOG__bannerAncillary",
  "bannerLink": "header-module__yrGlOG__bannerLink",
  "bannerLinkIcon": "header-module__yrGlOG__bannerLinkIcon",
  "bannerLinkText": "header-module__yrGlOG__bannerLinkText",
  "bannerMain": "header-module__yrGlOG__bannerMain",
  "bannerNav": "header-module__yrGlOG__bannerNav",
  "bannerNavItems": "header-module__yrGlOG__bannerNavItems",
  "header": "header-module__yrGlOG__header",
  "logoImage": "header-module__yrGlOG__logoImage",
  "logoLink": "header-module__yrGlOG__logoLink",
  "logoScroll": "header-module__yrGlOG__logoScroll",
  "logoWrap": "header-module__yrGlOG__logoWrap",
  "navLink": "header-module__yrGlOG__navLink",
});
}),
"[project]/nter/p4a/p448-poc/components/header/header-logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderLogo",
    ()=>HeaderLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$logo$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-logo-scroll.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/header/header.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const P448Logo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 128 57",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "m29.163 14.165-.62 7.126c-.788 8.789-5.44 13.567-14.058 13.567h-4.053L8.64 55.488H0L4.821.618h12.694c8.597-.02 12.394 4.758 11.648 13.547ZM12.736 8.448l-1.621 18.581h4.074c2.73 0 4.352-1.259 4.694-5.163l.725-8.234c.363-3.904-1.046-5.163-3.776-5.163h-4.096v-.021Zm14.421 29.226L46.08.597h9.408l-3.243 37.077h4.075l-.683 7.83h-4.075l-.874 9.962H42.24l.874-9.962H26.496l.661-7.83Zm16.619 0 1.792-20.629-10.496 20.63h8.704Zm14.4 0L77.098.597h9.408l-3.243 37.077h4.075l-.683 7.83h-4.053l-.875 9.962H73.28l.875-9.962H57.536l.64-7.83Zm16.618 0 1.792-20.629-10.496 20.63h8.704Zm26.261 18.454c-8.725 0-13.034-5.014-12.266-13.782l.384-4.33c.448-5.227 2.368-9.344 6.336-11.456-3.456-1.941-4.843-5.653-4.352-11.05l.17-1.729C92.117 4.992 97.322 0 106.026 0s13.034 5.013 12.266 13.781l-.17 1.728c-.491 5.398-2.603 9.11-6.315 11.05 3.584 2.113 4.779 6.187 4.331 11.457l-.384 4.33c-.768 8.747-6.016 13.782-14.699 13.782Zm.683-7.851c2.731 0 4.907-1.344 5.397-6.187l.448-5.098c.384-4.33-1.258-6.187-4.33-6.187-3.051 0-5.014 1.877-5.398 6.187l-.448 5.098c-.426 4.864 1.558 6.187 4.331 6.187Zm-2.155-31.125c-.384 4.395 1.536 5.781 4.352 5.781 2.731 0 4.971-1.408 5.376-5.781l.256-3.05c.427-4.95-1.557-6.273-4.33-6.273-2.731 0-4.971 1.344-5.398 6.272l-.256 3.05Z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
            lineNumber: 9,
            columnNumber: 3
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
        lineNumber: 8,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0));
_c = P448Logo;
function HeaderLogo() {
    _s();
    const { containerRef, setLogoRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$logo$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoScroll"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWrap,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            href: "/",
            "aria-label": "P448 - Home",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoLink,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoScroll,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage,
                            ref: setLogoRef(0),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P448Logo, {}, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
                                lineNumber: 26,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage,
                            ref: setLogoRef(1),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P448Logo, {}, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
                                lineNumber: 29,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
                            lineNumber: 28,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
                    lineNumber: 24,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "P448"
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
                    lineNumber: 32,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
            lineNumber: 23,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this);
}
_s(HeaderLogo, "GFZPzqT1/8F1B+CVUkLTX9sz0Lw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$logo$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoScroll"]
    ];
});
_c1 = HeaderLogo;
var _c, _c1;
__turbopack_context__.k.register(_c, "P448Logo");
__turbopack_context__.k.register(_c1, "HeaderLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/footer/footer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accordion": "footer-module__9HIIuq__accordion",
  "accordionContent": "footer-module__9HIIuq__accordionContent",
  "accordionItem": "footer-module__9HIIuq__accordionItem",
  "accordionTrigger": "footer-module__9HIIuq__accordionTrigger",
  "background": "footer-module__9HIIuq__background",
  "backgroundImage": "footer-module__9HIIuq__backgroundImage",
  "backgroundOverlay": "footer-module__9HIIuq__backgroundOverlay",
  "bottomBar": "footer-module__9HIIuq__bottomBar",
  "chevron": "footer-module__9HIIuq__chevron",
  "content": "footer-module__9HIIuq__content",
  "copyright": "footer-module__9HIIuq__copyright",
  "footer": "footer-module__9HIIuq__footer",
  "footerLink": "footer-module__9HIIuq__footerLink",
  "footerLinks": "footer-module__9HIIuq__footerLinks",
  "navColumn": "footer-module__9HIIuq__navColumn",
  "navGrid": "footer-module__9HIIuq__navGrid",
  "newsletter": "footer-module__9HIIuq__newsletter",
  "newsletterDescription": "footer-module__9HIIuq__newsletterDescription",
  "newsletterForm": "footer-module__9HIIuq__newsletterForm",
  "newsletterHeading": "footer-module__9HIIuq__newsletterHeading",
  "newsletterInput": "footer-module__9HIIuq__newsletterInput",
  "newsletterSubmit": "footer-module__9HIIuq__newsletterSubmit",
  "slideDown": "footer-module__9HIIuq__slideDown",
  "slideUp": "footer-module__9HIIuq__slideUp",
  "socialIcons": "footer-module__9HIIuq__socialIcons",
  "socialLink": "footer-module__9HIIuq__socialLink",
  "uspBar": "footer-module__9HIIuq__uspBar",
  "uspItem": "footer-module__9HIIuq__uspItem",
});
}),
"[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterAccordion",
    ()=>FooterAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/footer/footer.module.css [app-client] (css module)");
'use client';
;
;
;
;
function ChevronIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chevron,
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 4l4 4 4-4",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }, void 0, false, {
            fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
            lineNumber: 27,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this);
}
_c = ChevronIcon;
function FooterAccordion({ groups }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        type: "multiple",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accordion,
        children: Object.entries(groups).map(([key, group])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                value: key,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accordionItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accordionTrigger,
                                children: [
                                    group.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {}, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
                                        lineNumber: 41,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
                                lineNumber: 39,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
                            lineNumber: 38,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
                        lineNumber: 37,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accordionContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerLinks,
                            children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        href: item.href,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerLink,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
                                        lineNumber: 49,
                                        columnNumber: 10
                                    }, this)
                                }, item.label, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
                                    lineNumber: 48,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
                            lineNumber: 46,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
                        lineNumber: 45,
                        columnNumber: 6
                    }, this)
                ]
            }, key, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this))
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this);
}
_c1 = FooterAccordion;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChevronIcon");
__turbopack_context__.k.register(_c1, "FooterAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterNewsletter",
    ()=>FooterNewsletter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/footer/footer.module.css [app-client] (css module)");
'use client';
;
;
function FooterNewsletter({ heading, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newsletter,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newsletterHeading,
                children: heading
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx",
                lineNumber: 13,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newsletterDescription,
                children: description
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx",
                lineNumber: 14,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newsletterForm,
                onSubmit: (e)=>{
                    e.preventDefault();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newsletterInput,
                        placeholder: "Enter your email",
                        "aria-label": "Email address for newsletter",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx",
                        lineNumber: 21,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newsletterSubmit,
                        children: "Subscribe"
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx",
                        lineNumber: 28,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx",
                lineNumber: 15,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
}
_c = FooterNewsletter;
var _c;
__turbopack_context__.k.register(_c, "FooterNewsletter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=nter_p4a_p448-poc_81510ec2._.js.map