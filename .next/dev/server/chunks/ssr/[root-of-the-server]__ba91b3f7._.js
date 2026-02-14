module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/nter/p4a/p448-poc/components/link.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function Link({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/link.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useMediaQuery(query) {
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mql = window.matchMedia(query);
        setMatches(mql.matches);
        const handler = (e)=>{
            setMatches(e.matches);
        };
        mql.addEventListener('change', handler);
        return ()=>{
            mql.removeEventListener('change', handler);
        };
    }, [
        query
    ]);
    return matches;
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-logo-scroll.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLogoScroll",
    ()=>useLogoScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useLogoScroll(options = {}) {
    const { respectReducedMotion = true } = options;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastKnownY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    const setLogoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])((index)=>{
        return (el)=>{
            if (el) {
                logoElsRef.current[index] = el;
            }
        };
    }).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            logoElsRef.current.forEach((logoEl)=>{
                if (logoEl) {
                    logoEl.style.transform = `translate3d(0px, -${transformAmountY}%, 0px)`;
                }
            });
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
        return ()=>{
            window.removeEventListener('scroll', onScroll);
        };
    }, [
        prefersReducedMotion,
        respectReducedMotion
    ]);
    return {
        containerRef,
        setLogoRef
    };
}
}),
"[project]/nter/p4a/p448-poc/components/header/header.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
  "megaHeading": "header-module__yrGlOG__megaHeading",
  "megaLink": "header-module__yrGlOG__megaLink",
  "megaList": "header-module__yrGlOG__megaList",
  "megaPanel": "header-module__yrGlOG__megaPanel",
  "megaPanelInner": "header-module__yrGlOG__megaPanelInner",
  "megaPanelVisible": "header-module__yrGlOG__megaPanelVisible",
  "megaPromo": "header-module__yrGlOG__megaPromo",
  "megaPromoCopy": "header-module__yrGlOG__megaPromoCopy",
  "megaPromoImage": "header-module__yrGlOG__megaPromoImage",
  "megaPromoKicker": "header-module__yrGlOG__megaPromoKicker",
  "megaPromoLink": "header-module__yrGlOG__megaPromoLink",
  "megaPromoTitle": "header-module__yrGlOG__megaPromoTitle",
  "navLink": "header-module__yrGlOG__navLink",
  "navLinkCaret": "header-module__yrGlOG__navLinkCaret",
  "searchButton": "header-module__yrGlOG__searchButton",
  "searchIcon": "header-module__yrGlOG__searchIcon",
  "searchRotate": "header-module__yrGlOG__searchRotate",
  "searchTicker": "header-module__yrGlOG__searchTicker",
  "searchTickerItem": "header-module__yrGlOG__searchTickerItem",
  "utilityIcon": "header-module__yrGlOG__utilityIcon",
  "utilityLink": "header-module__yrGlOG__utilityLink",
  "utilityList": "header-module__yrGlOG__utilityList",
});
}),
"[project]/nter/p4a/p448-poc/components/header/header-logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderLogo",
    ()=>HeaderLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$logo$2d$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-logo-scroll.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/header/header.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
const P448Logo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 128 57",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function HeaderLogo() {
    const { containerRef, setLogoRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$logo$2d$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLogoScroll"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoWrap,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
            href: "/",
            "aria-label": "P448 - Home",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoLink,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoScroll,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoImage,
                            ref: setLogoRef(0),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P448Logo, {}, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
                                lineNumber: 26,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-logo.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoImage,
                            ref: setLogoRef(1),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P448Logo, {}, void 0, false, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/nter/p4a/p448-poc/components/image.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>Image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function Image(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/image.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/lib/data/navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "footerNav",
    ()=>footerNav,
    "headerNav",
    ()=>headerNav,
    "headerSecondaryNav",
    ()=>headerSecondaryNav,
    "megaMenu",
    ()=>megaMenu,
    "socialLinks",
    ()=>socialLinks
]);
const megaMenu = {
    men: {
        highlights: [
            {
                label: 'Shop All',
                href: '/collections/men'
            },
            {
                label: 'New Arrivals',
                href: '/collections/men-new-arrivals'
            },
            {
                label: 'Best Sellers',
                href: '/collections/men-best-sellers'
            },
            {
                label: 'Spring/Summer 26',
                href: '/collections/ss26-men'
            },
            {
                label: 'Fall/Winter 25',
                href: '/collections/fw25-men'
            },
            {
                label: 'Laces',
                href: '/collections/laces'
            }
        ],
        promo: {
            image: '/images/nav/nav-essentials-men.jpg',
            kicker: 'New Year Essentials',
            title: 'Shop Now',
            href: '/collections/men-the-essentials-edit'
        }
    },
    women: {
        highlights: [
            {
                label: 'Shop All',
                href: '/collections/women'
            },
            {
                label: 'New Arrivals',
                href: '/collections/women-new-arrivals'
            },
            {
                label: 'Best Sellers',
                href: '/collections/women-best-sellers'
            },
            {
                label: 'Spring/Summer 26',
                href: '/collections/ss26-women'
            },
            {
                label: 'Fall/Winter 25',
                href: '/collections/fw25-women'
            },
            {
                label: 'Laces',
                href: '/collections/laces'
            }
        ],
        promo: {
            image: '/images/nav/nav-aspen.jpg',
            kicker: "It's Cold",
            title: 'Shop Warm Pairs',
            href: '/collections/women-aspen'
        }
    },
    explore: {
        highlights: [
            {
                label: 'Model Guide',
                href: '/pages/model-index'
            },
            {
                label: 'Gift Cards',
                href: '/products/gift-card'
            },
            {
                label: 'Project Sustainability®',
                href: '/pages/project-sustainability'
            },
            {
                label: 'P448 World',
                href: '/pages/our-story'
            }
        ],
        promo: {
            image: '/images/nav/nav-p448-world.jpg',
            title: 'P448 World',
            href: '/pages/our-story'
        }
    }
};
const headerNav = [
    {
        label: 'Women',
        href: '/collections/women',
        menuKey: 'women'
    },
    {
        label: 'Men',
        href: '/collections/men',
        menuKey: 'men'
    },
    {
        label: 'Explore',
        href: '/our-story',
        menuKey: 'explore'
    }
];
const headerSecondaryNav = [
    {
        label: 'Get Outside',
        href: '#'
    },
    {
        label: 'Sale',
        href: '#'
    }
];
const footerNav = {
    about: {
        label: 'About',
        items: [
            {
                label: 'About',
                href: '/our-story'
            },
            {
                label: 'Visit Us',
                href: '#'
            },
            {
                label: 'Environmental Promises',
                href: '#'
            }
        ]
    },
    customerService: {
        label: 'Customer Service',
        items: [
            {
                label: 'FAQs',
                href: '#'
            },
            {
                label: 'Contact',
                href: '#'
            },
            {
                label: 'Shipping',
                href: '#'
            },
            {
                label: 'Returns & Exchanges',
                href: '#'
            },
            {
                label: 'Size Charts',
                href: '#'
            }
        ]
    },
    legal: {
        label: 'Legal',
        items: [
            {
                label: 'Privacy Policy',
                href: '#'
            },
            {
                label: 'Cookie Policy',
                href: '#'
            },
            {
                label: 'Terms & Conditions',
                href: '#'
            }
        ]
    }
};
const socialLinks = [
    {
        platform: 'Instagram',
        href: 'https://instagram.com/p448',
        label: 'Instagram'
    },
    {
        platform: 'Facebook',
        href: 'https://facebook.com/p448',
        label: 'Facebook'
    },
    {
        platform: 'TikTok',
        href: 'https://tiktok.com/@p448',
        label: 'TikTok'
    },
    {
        platform: 'LinkedIn',
        href: 'https://linkedin.com/company/p448',
        label: 'LinkedIn'
    }
];
}),
"[project]/nter/p4a/p448-poc/components/header/header-nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderNav",
    ()=>HeaderNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/data/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/header/header.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
function HeaderNav() {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeMenu = activeIndex !== null ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["megaMenu"][__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["headerNav"][activeIndex].menuKey] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bannerNav,
        onMouseLeave: ()=>setActiveIndex(null),
        onBlur: (event)=>{
            if (!event.currentTarget.contains(event.relatedTarget)) {
                setActiveIndex(null);
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Primary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bannerNavItems,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["headerNav"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onMouseEnter: ()=>setActiveIndex(index),
                            onFocus: ()=>setActiveIndex(index),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                href: item.href,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                        lineNumber: 33,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLinkCaret,
                                        "aria-hidden": "true",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                        lineNumber: 34,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                lineNumber: 32,
                                columnNumber: 8
                            }, this)
                        }, item.label, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                            lineNumber: 27,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                    lineNumber: 25,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                lineNumber: 24,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaPanel} ${activeMenu ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaPanelVisible : ''}`,
                children: activeMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaPanelInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaHeading,
                                    children: "Highlights"
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                    lineNumber: 47,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaList,
                                    children: activeMenu.highlights.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                href: link.href,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaLink,
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                                lineNumber: 51,
                                                columnNumber: 11
                                            }, this)
                                        }, link.label, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                            lineNumber: 50,
                                            columnNumber: 10
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                    lineNumber: 48,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                            lineNumber: 46,
                            columnNumber: 7
                        }, this),
                        activeMenu.promo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaPromo,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                    src: activeMenu.promo.image,
                                    width: 420,
                                    height: 280,
                                    alt: activeMenu.promo.title,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaPromoImage,
                                    priority: activeIndex === 0
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                    lineNumber: 61,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaPromoCopy,
                                    children: [
                                        activeMenu.promo.kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaPromoKicker,
                                            children: activeMenu.promo.kicker
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                            lineNumber: 71,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaPromoTitle,
                                            children: activeMenu.promo.title
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                            lineNumber: 73,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            href: activeMenu.promo.href,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].megaPromoLink,
                                            children: "Shop Now"
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                            lineNumber: 74,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                                    lineNumber: 69,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                            lineNumber: 60,
                            columnNumber: 8
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                    lineNumber: 45,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
                lineNumber: 43,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/header/header-nav.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/components/footer/footer.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/nter/p4a/p448-poc/components/footer/footer-accordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterAccordion",
    ()=>FooterAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/footer/footer.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function ChevronIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chevron,
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function FooterAccordion({ groups }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        type: "multiple",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accordion,
        children: Object.entries(groups).map(([key, group])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
                value: key,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accordionItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accordionTrigger,
                                children: [
                                    group.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accordionContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerLinks,
                            children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: item.href,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerLink,
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
}),
"[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterNewsletter",
    ()=>FooterNewsletter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/footer/footer.module.css [app-ssr] (css module)");
'use client';
;
;
function FooterNewsletter({ heading, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsletter,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsletterHeading,
                children: heading
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx",
                lineNumber: 13,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsletterDescription,
                children: description
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx",
                lineNumber: 14,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsletterForm,
                onSubmit: (e)=>{
                    e.preventDefault();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsletterInput,
                        placeholder: "Enter your email",
                        "aria-label": "Email address for newsletter",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/footer/footer-newsletter.tsx",
                        lineNumber: 21,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsletterSubmit,
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ba91b3f7._.js.map