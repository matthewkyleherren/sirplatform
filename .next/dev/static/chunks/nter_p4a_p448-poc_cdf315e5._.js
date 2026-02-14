(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/nter/p4a/p448-poc/lib/utils/get-offset-top.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Port of BAO.Utils.getOffsetTop
 * Recursively calculates an element's offset from the top of the document body.
 */ __turbopack_context__.s([
    "getOffsetTop",
    ()=>getOffsetTop
]);
function getOffsetTop(el, parent = document.body, offsetTop = 0) {
    if (!el || isNaN(el.offsetTop)) {
        return offsetTop;
    }
    offsetTop += el.offsetTop;
    if (el.offsetParent === parent || !el.offsetParent) {
        return offsetTop;
    }
    return getOffsetTop(el.offsetParent, parent, offsetTop);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-parallax.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useParallax",
    ()=>useParallax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/utils/get-offset-top.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useParallax(options = {}) {
    _s();
    const { desktopAmount = 60, mobileAmount = 40, activationDelay = 500, respectReducedMotion = true } = options;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastKnownY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(max-width: 767px)');
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useParallax.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (respectReducedMotion && prefersReducedMotion) return;
            const amountToMoveY = isMobile ? mobileAmount : desktopAmount;
            function updateEl() {
                isTicking.current = false;
                moveParallaxItem();
            }
            function moveParallaxItem() {
                if (!el || !el.offsetHeight) return;
                const elementHeight = el.offsetHeight;
                const heightDifference = amountToMoveY;
                const elementStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOffsetTop"])(el) - window.innerHeight;
                const elementEndPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOffsetTop"])(el) + elementHeight;
                if (lastKnownY.current <= elementStartPoint) {
                    el.style.transform = `translate3d(0px, ${amountToMoveY / -2}px, 0px)`;
                    return;
                }
                if (lastKnownY.current > elementEndPoint) {
                    el.style.transform = `translate3d(0px, ${amountToMoveY / 2}px, 0px)`;
                    return;
                }
                const totalScrollAmount = elementEndPoint - elementStartPoint;
                const scrollYAsAPercentageOfJourney = (lastKnownY.current - elementStartPoint) / totalScrollAmount;
                const transformAmountY = heightDifference * scrollYAsAPercentageOfJourney - heightDifference / 2;
                el.style.transform = `translate3d(0px, ${transformAmountY}px, 0px)`;
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
            // Delayed activation (matches original 500ms setTimeout)
            const activationTimer = setTimeout({
                "useParallax.useEffect.activationTimer": ()=>{
                    isActive.current = true;
                    el.setAttribute('active', '');
                }
            }["useParallax.useEffect.activationTimer"], activationDelay);
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "useParallax.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                    clearTimeout(activationTimer);
                    isActive.current = false;
                }
            })["useParallax.useEffect"];
        }
    }["useParallax.useEffect"], [
        isMobile,
        prefersReducedMotion,
        desktopAmount,
        mobileAmount,
        activationDelay,
        respectReducedMotion
    ]);
    return ref;
}
_s(useParallax, "xiRzpck2Pyl4w6xu806qMhPxizI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParallaxImage",
    ()=>ParallaxImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-parallax.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ParallaxImage({ image, parallaxOptions, className, style, oversize = 1.15, priority = false }) {
    _s();
    const parallaxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParallax"])(parallaxOptions);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            ...style
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: parallaxRef,
            style: {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                transform: 'scale(1)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                    src: image.desktop.src,
                    width: image.desktop.width,
                    height: image.desktop.height,
                    alt: image.desktop.alt,
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: `scale(${oversize})`
                    },
                    className: "hidden md:block",
                    sizes: "100vw",
                    ...priority ? {
                        priority: true
                    } : {}
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx",
                    lineNumber: 52,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                    src: image.mobile.src,
                    width: image.mobile.width,
                    height: image.mobile.height,
                    alt: image.mobile.alt,
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: `scale(${oversize})`
                    },
                    className: "block md:hidden",
                    sizes: "100vw",
                    ...priority ? {
                        priority: true
                    } : {}
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx",
                    lineNumber: 68,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx",
            lineNumber: 41,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, this);
}
_s(ParallaxImage, "fOybH0Woz7TF5SuefscJIqkJPr0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParallax"]
    ];
});
_c = ParallaxImage;
var _c;
__turbopack_context__.k.register(_c, "ParallaxImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-lazy-video.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLazyVideo",
    ()=>useLazyVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useLazyVideo(options = {}) {
    _s();
    const { threshold = 0, autoplayOnMobile = true } = options;
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLazyVideo.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            const observer = new IntersectionObserver({
                "useLazyVideo.useEffect": ([entry])=>{
                    if (!entry?.isIntersecting) return;
                    // Set poster from data-poster if present
                    const dataPoster = video.dataset.poster;
                    if (dataPoster) {
                        video.setAttribute('poster', dataPoster);
                    }
                    // Copy data-src to src on all <source> children
                    const children = video.children;
                    for(let i = 0; i < children.length; i++){
                        const child = children[i];
                        if (child instanceof HTMLSourceElement && child.dataset.src) {
                            child.src = child.dataset.src;
                        }
                    }
                    video.load();
                    observer.unobserve(video);
                    setIsLoaded(true);
                    // Mobile autoplay: listen for touchstart to play paused videos
                    const isMobile = window.matchMedia('(max-width: 767px)').matches;
                    if (autoplayOnMobile && !isMobile && video.getAttribute('autoplay') !== null) {
                    // Desktop with autoplay: no extra handling needed
                    } else if (autoplayOnMobile && isMobile && video.paused) {
                        const playOnTouch = {
                            "useLazyVideo.useEffect.playOnTouch": ()=>{
                                if (video.paused) {
                                    video.play().catch({
                                        "useLazyVideo.useEffect.playOnTouch": ()=>{
                                        // Autoplay may be blocked by browser policy
                                        }
                                    }["useLazyVideo.useEffect.playOnTouch"]);
                                }
                            }
                        }["useLazyVideo.useEffect.playOnTouch"];
                        document.addEventListener('touchstart', playOnTouch, {
                            once: true
                        });
                    }
                }
            }["useLazyVideo.useEffect"], {
                threshold
            });
            observer.observe(video);
            return ({
                "useLazyVideo.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useLazyVideo.useEffect"];
        }
    }["useLazyVideo.useEffect"], [
        threshold,
        autoplayOnMobile
    ]);
    return {
        videoRef,
        isLoaded
    };
}
_s(useLazyVideo, "aiUzJy4qlMjR771bU960cL57BBw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LazyVideo",
    ()=>LazyVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$lazy$2d$video$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-lazy-video.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function LazyVideo({ desktop, mobile, className }) {
    _s();
    const { videoRef: desktopRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$lazy$2d$video$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyVideo"])();
    const { videoRef: mobileRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$lazy$2d$video$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyVideo"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            position: 'relative',
            width: '100%',
            height: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: desktopRef,
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                "data-poster": desktop.poster,
                className: "hidden md:block",
                style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    "data-src": desktop.mp4,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx",
                    lineNumber: 34,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx",
                lineNumber: 18,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: mobileRef,
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                "data-poster": mobile.poster,
                className: "block md:hidden",
                style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    "data-src": mobile.mp4,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx",
                    lineNumber: 53,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx",
                lineNumber: 37,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this);
}
_s(LazyVideo, "y7S04D32zhWAH7HO9Xyyk0yDCRA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$lazy$2d$video$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyVideo"],
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$lazy$2d$video$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyVideo"]
    ];
});
_c = LazyVideo;
var _c;
__turbopack_context__.k.register(_c, "LazyVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-animate-in.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "splitAnimateWords",
    ()=>splitAnimateWords,
    "useAnimateIn",
    ()=>useAnimateIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useAnimateIn(options = {}) {
    _s();
    const { respectReducedMotion = true } = options;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isAnimated, setIsAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(max-width: 767px)');
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimateIn.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (respectReducedMotion && prefersReducedMotion) {
                setIsAnimated(true);
                return;
            }
            const rootMargin = options.rootMargin ?? (isMobile ? '-60px' : '-50px');
            const observer = new IntersectionObserver({
                "useAnimateIn.useEffect": ([entry])=>{
                    if (entry?.isIntersecting) {
                        setIsAnimated(true);
                        observer.unobserve(el);
                    }
                }
            }["useAnimateIn.useEffect"], {
                rootMargin,
                threshold: 0
            });
            observer.observe(el);
            return ({
                "useAnimateIn.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useAnimateIn.useEffect"];
        }
    }["useAnimateIn.useEffect"], [
        isMobile,
        prefersReducedMotion,
        options.rootMargin,
        respectReducedMotion
    ]);
    return {
        ref,
        isAnimated
    };
}
_s(useAnimateIn, "dftIZpGsIE92N6t4OkFbDy71kLU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
function splitAnimateWords(text) {
    const words = text.replace(/\n/g, ' <br> ').split(' ');
    return words.filter((w)=>w.trim() !== '').map((word)=>({
            word: word === '<br>' ? '' : word,
            isBreak: word === '<br>'
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/primitives/animate-in.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "animate-in-module__H3q2DG__content",
  "word": "animate-in-module__H3q2DG__word",
  "wrapper": "animate-in-module__H3q2DG__wrapper",
});
}),
"[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateIn",
    ()=>AnimateIn,
    "AnimateInContent",
    ()=>AnimateInContent,
    "AnimateInWords",
    ()=>AnimateInWords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-animate-in.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/animate-in.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
function AnimateIn({ children, className }) {
    _s();
    const { ref, isAnimated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimateIn"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper} ${className ?? ''}`,
        ...isAnimated ? {
            'data-animate': ''
        } : {},
        children: children
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this);
}
_s(AnimateIn, "p4piHkN9fh+xDofs+7vlcGHZzQc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimateIn"]
    ];
});
_c = AnimateIn;
function AnimateInWords({ text, className, tag: Tag = 'h2' }) {
    _s1();
    const { ref, isAnimated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimateIn"])();
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitAnimateWords"])(text);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper} ${className ?? ''}`,
        ...isAnimated ? {
            'data-animate': ''
        } : {},
        children: words.map((entry, i)=>entry.isBreak ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, i, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx",
                lineNumber: 59,
                columnNumber: 6
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].word,
                children: [
                    entry.word,
                    i < words.length - 1 && !words[i + 1]?.isBreak ? '\u00A0' : ''
                ]
            }, i, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx",
                lineNumber: 61,
                columnNumber: 6
            }, this))
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
}
_s1(AnimateInWords, "p4piHkN9fh+xDofs+7vlcGHZzQc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimateIn"]
    ];
});
_c1 = AnimateInWords;
function AnimateInContent({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content} ${className ?? ''}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, this);
}
_c2 = AnimateInContent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AnimateIn");
__turbopack_context__.k.register(_c1, "AnimateInWords");
__turbopack_context__.k.register(_c2, "AnimateInContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "cta-single-module__y4axwG__button",
  "buttonPrimary": "cta-single-module__y4axwG__buttonPrimary",
  "buttonSecondary": "cta-single-module__y4axwG__buttonSecondary",
  "buttonText": "cta-single-module__y4axwG__buttonText",
  "buttons": "cta-single-module__y4axwG__buttons",
  "content": "cta-single-module__y4axwG__content",
  "description": "cta-single-module__y4axwG__description",
  "floatingLabel": "cta-single-module__y4axwG__floatingLabel",
  "floatingList": "cta-single-module__y4axwG__floatingList",
  "floatingMenu": "cta-single-module__y4axwG__floatingMenu",
  "floatingPanel": "cta-single-module__y4axwG__floatingPanel",
  "floatingToggle": "cta-single-module__y4axwG__floatingToggle",
  "kicker": "cta-single-module__y4axwG__kicker",
  "media": "cta-single-module__y4axwG__media",
  "pulse": "cta-single-module__y4axwG__pulse",
  "quickProduct": "cta-single-module__y4axwG__quickProduct",
  "quickProductDot": "cta-single-module__y4axwG__quickProductDot",
  "quickProductImage": "cta-single-module__y4axwG__quickProductImage",
  "quickProductLink": "cta-single-module__y4axwG__quickProductLink",
  "quickProductName": "cta-single-module__y4axwG__quickProductName",
  "quickProductPulse": "cta-single-module__y4axwG__quickProductPulse",
  "quickProductTooltip": "cta-single-module__y4axwG__quickProductTooltip",
  "quickProducts": "cta-single-module__y4axwG__quickProducts",
  "section": "cta-single-module__y4axwG__section",
  "title": "cta-single-module__y4axwG__title",
  "videoOverlay": "cta-single-module__y4axwG__videoOverlay",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASingle",
    ()=>CTASingle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.module.css [app-client] (css module)");
'use client';
;
;
;
;
;
;
;
function CTASingle({ data, priority = false }) {
    const { media, title, kicker, description, buttons, quickProducts, floatingMenu } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].media,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxImage"], {
                        image: media.image,
                        priority: priority
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                        lineNumber: 27,
                        columnNumber: 5
                    }, this),
                    media.type === 'video' && media.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoOverlay,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyVideo"], {
                            desktop: media.video.desktop,
                            mobile: media.video.mobile
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 30,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                        lineNumber: 29,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                lineNumber: 26,
                columnNumber: 4
            }, this),
            quickProducts && quickProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickProducts,
                children: quickProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickProductDot, {
                        product: product
                    }, product.name, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                        lineNumber: 39,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            floatingMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingToggle,
                        "aria-haspopup": "true",
                        "aria-label": floatingMenu.label,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 47,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                        lineNumber: 46,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingLabel,
                                children: floatingMenu.label
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                lineNumber: 50,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingList,
                                children: floatingMenu.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            href: link.href,
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                            lineNumber: 54,
                                            columnNumber: 10
                                        }, this)
                                    }, link.label, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                        lineNumber: 53,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                lineNumber: 51,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                        lineNumber: 49,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateIn"], {
                    children: [
                        kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                                children: kicker
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                lineNumber: 67,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 66,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInWords"], {
                            text: title,
                            tag: "h2",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 70,
                            columnNumber: 6
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                lineNumber: 73,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 72,
                            columnNumber: 7
                        }, this),
                        buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                                children: buttons.map((button)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        href: button.href,
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${button.variant === 'primary' ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonSecondary}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonText,
                                            children: button.label
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                            lineNumber: 85,
                                            columnNumber: 11
                                        }, this)
                                    }, button.label, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                        lineNumber: 80,
                                        columnNumber: 10
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                lineNumber: 78,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 77,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                    lineNumber: 64,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                lineNumber: 63,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this);
}
_c = CTASingle;
function QuickProductDot({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickProduct,
        style: {
            '--qp-x': product.position.x,
            '--qp-y': product.position.y
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickProductDot,
                "aria-label": `View ${product.name}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickProductPulse
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                    lineNumber: 107,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                lineNumber: 106,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickProductTooltip,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                    href: product.href,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickProductLink,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            src: product.image,
                            width: 60,
                            height: 60,
                            alt: product.name,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickProductImage
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 111,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickProductName,
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 118,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                    lineNumber: 110,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                lineNumber: 109,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this);
}
_c1 = QuickProductDot;
var _c, _c1;
__turbopack_context__.k.register(_c, "CTASingle");
__turbopack_context__.k.register(_c1, "QuickProductDot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "cta-split-module__kmulQG__card",
  "cardButton": "cta-split-module__kmulQG__cardButton",
  "cardButtonPrimary": "cta-split-module__kmulQG__cardButtonPrimary",
  "cardButtonSecondary": "cta-split-module__kmulQG__cardButtonSecondary",
  "cardButtons": "cta-split-module__kmulQG__cardButtons",
  "cardContent": "cta-split-module__kmulQG__cardContent",
  "cardMedia": "cta-split-module__kmulQG__cardMedia",
  "cardTitle": "cta-split-module__kmulQG__cardTitle",
  "cardVideoOverlay": "cta-split-module__kmulQG__cardVideoOverlay",
  "grid": "cta-split-module__kmulQG__grid",
  "section": "cta-split-module__kmulQG__section",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASplit",
    ()=>CTASplit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.module.css [app-client] (css module)");
'use client';
;
;
;
;
;
;
function CTASplit({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitCard, {
                    media: data.left.media,
                    title: data.left.title,
                    button: data.left.button
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                    lineNumber: 22,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitCard, {
                    media: data.right.media,
                    title: data.right.title,
                    button: data.right.button
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                    lineNumber: 27,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
            lineNumber: 21,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, this);
}
_c = CTASplit;
function SplitCard({ media, title, button }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardMedia,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxImage"], {
                        image: media.image
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                        lineNumber: 47,
                        columnNumber: 5
                    }, this),
                    media.type === 'video' && media.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVideoOverlay,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyVideo"], {
                            desktop: media.video.desktop,
                            mobile: media.video.mobile
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                            lineNumber: 50,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                        lineNumber: 49,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                lineNumber: 46,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateIn"], {
                    children: [
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInWords"], {
                            text: title,
                            tag: "h2",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                            lineNumber: 57,
                            columnNumber: 7
                        }, this),
                        button && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardButtons,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    href: button.href,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardButton} ${button.variant === 'primary' ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardButtonPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardButtonSecondary}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: button.label
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                        lineNumber: 66,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                    lineNumber: 62,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                lineNumber: 61,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                            lineNumber: 60,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                    lineNumber: 55,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                lineNumber: 54,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, this);
}
_c1 = SplitCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "CTASplit");
__turbopack_context__.k.register(_c1, "SplitCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrowButton": "product-carousel-module__WMyC1q__arrowButton",
  "card": "product-carousel-module__WMyC1q__card",
  "cardBody": "product-carousel-module__WMyC1q__cardBody",
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
  "cardPriceRow": "product-carousel-module__WMyC1q__cardPriceRow",
  "cardQuickAdd": "product-carousel-module__WMyC1q__cardQuickAdd",
  "cardQuickAddText": "product-carousel-module__WMyC1q__cardQuickAddText",
  "cardTag": "product-carousel-module__WMyC1q__cardTag",
  "cardTags": "product-carousel-module__WMyC1q__cardTags",
  "cardTitle": "product-carousel-module__WMyC1q__cardTitle",
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
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ProductCard({ product }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                href: product.href,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLink,
                "aria-label": product.name,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].srOnly,
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                    lineNumber: 38,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                lineNumber: 37,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardMediaContainer,
                children: [
                    product.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTags,
                        children: product.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTag,
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 46,
                                columnNumber: 8
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                        lineNumber: 44,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImages,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImage} ${isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImageHidden : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                    src: product.images.primary,
                                    width: 540,
                                    height: 675,
                                    alt: product.name,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImg,
                                    sizes: "(max-width: 767px) 80vw, 25vw"
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                    lineNumber: 52,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 51,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImageHover} ${isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImageVisible : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                    src: product.images.hover,
                                    width: 540,
                                    height: 675,
                                    alt: product.name,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImg,
                                    sizes: "(max-width: 767px) 80vw, 25vw"
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                    lineNumber: 62,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 61,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                        lineNumber: 50,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                lineNumber: 42,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                        lineNumber: 76,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardPriceRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardPrice,
                                        children: [
                                            formattedComparePrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardComparePrice,
                                                children: formattedComparePrice
                                            }, void 0, false, {
                                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                                lineNumber: 81,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: formattedPrice
                                            }, void 0, false, {
                                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                                lineNumber: 83,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                        lineNumber: 79,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardQuickAdd,
                                        "aria-label": `Quick add ${product.name}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardQuickAddText,
                                            children: "Quick add"
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                            lineNumber: 90,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                        lineNumber: 85,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 78,
                                columnNumber: 6
                            }, this),
                            product.colors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardColors,
                                children: product.colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        href: color.href,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardColor,
                                        style: {
                                            '--swatch-color': color.hex
                                        },
                                        "aria-label": color.name,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].srOnly,
                                            children: color.name
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                            lineNumber: 103,
                                            columnNumber: 10
                                        }, this)
                                    }, color.name, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                        lineNumber: 96,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 94,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                        lineNumber: 77,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                lineNumber: 75,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this);
}
_s(ProductCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCarousel",
    ()=>ProductCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/keen-slider/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ProductCarousel({ data }) {
    _s();
    const { title, viewAllLink, products } = data;
    const [sliderRef, instanceRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerTitle,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                        lineNumber: 45,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: viewAllLink,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerLink,
                                children: "Shop Now"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.tsx",
                                lineNumber: 47,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerArrows,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowButton,
                                        onClick: handlePrev,
                                        "aria-label": "Previous products",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "12",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowButton,
                                        onClick: handleNext,
                                        "aria-label": "Next products",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "12",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carousel,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: sliderRef,
                    className: "keen-slider",
                    children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "keen-slider__slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
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
_s(ProductCarousel, "TNmR5mb2CmtgJwIc8TeANSGEDts=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"]
    ];
});
_c = ProductCarousel;
var _c;
__turbopack_context__.k.register(_c, "ProductCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-ticker-text.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTickerText",
    ()=>useTickerText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/utils/get-offset-top.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useTickerText(options = {}) {
    _s();
    const { amountToMoveX = 100, respectReducedMotion = true } = options;
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastKnownY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(max-width: 767px)');
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTickerText.useEffect": ()=>{
            const wrapper = wrapperRef.current;
            const container = containerRef.current;
            const message = messageRef.current;
            if (!wrapper || !container || !message) return;
            if (respectReducedMotion && prefersReducedMotion) return;
            // Set ticker speed CSS variable (matches original setupTickerSpeed)
            const divisor = isMobile ? 100 : 60;
            const tickerWidth = message.offsetWidth / divisor;
            wrapper.style.setProperty('--Ticker_Speed', String(tickerWidth));
            function updateEl() {
                isTicking.current = false;
                moveContainer();
            }
            function moveContainer() {
                if (!wrapper.offsetHeight) return;
                const elementHeight = wrapper.offsetHeight;
                const elementStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOffsetTop"])(wrapper) - window.innerHeight;
                const elementEndPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOffsetTop"])(wrapper) + elementHeight;
                if (lastKnownY.current <= elementStartPoint) {
                    container.style.transform = 'translate3d(0%, 0px, 0px)';
                    return;
                }
                if (lastKnownY.current > elementEndPoint) {
                    container.style.transform = 'translate3d(-100%, 0px, 0px)';
                    return;
                }
                const totalScrollAmount = elementEndPoint - elementStartPoint;
                const scrollYAsAPercentageOfJourney = (lastKnownY.current - elementStartPoint) / totalScrollAmount;
                const transformAmountX = amountToMoveX * scrollYAsAPercentageOfJourney;
                container.style.transform = `translate3d(-${transformAmountX}%, 0px, 0px)`;
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
                "useTickerText.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                }
            })["useTickerText.useEffect"];
        }
    }["useTickerText.useEffect"], [
        isMobile,
        prefersReducedMotion,
        amountToMoveX,
        respectReducedMotion
    ]);
    return {
        wrapperRef,
        containerRef,
        messageRef
    };
}
_s(useTickerText, "TTxnxtYiTgdBmfLTaOfoZDMQIl4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "ticker-text-module__F2_lwq__button",
  "buttonContainer": "ticker-text-module__F2_lwq__buttonContainer",
  "buttonPrimary": "ticker-text-module__F2_lwq__buttonPrimary",
  "buttonSecondary": "ticker-text-module__F2_lwq__buttonSecondary",
  "media": "ticker-text-module__F2_lwq__media",
  "section": "ticker-text-module__F2_lwq__section",
  "ticker": "ticker-text-module__F2_lwq__ticker",
  "tickerContainer": "ticker-text-module__F2_lwq__tickerContainer",
  "tickerMessage": "ticker-text-module__F2_lwq__tickerMessage",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TickerText",
    ()=>TickerText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$ticker$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-ticker-text.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function TickerText({ data }) {
    _s();
    const { text, backgroundImage, button } = data;
    const { wrapperRef, containerRef, messageRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$ticker$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTickerText"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: wrapperRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].media,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxImage"], {
                    image: backgroundImage
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                    lineNumber: 25,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                lineNumber: 24,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tickerContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticker,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            ref: messageRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tickerMessage,
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                            lineNumber: 32,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tickerMessage,
                            "aria-hidden": "true",
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                            lineNumber: 35,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tickerMessage,
                            "aria-hidden": "true",
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                            lineNumber: 38,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                    lineNumber: 30,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                lineNumber: 29,
                columnNumber: 4
            }, this),
            button && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                    href: button.href,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${button.variant === 'primary' ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonSecondary}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: button.label
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                        lineNumber: 51,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                    lineNumber: 47,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this);
}
_s(TickerText, "KhAFF21xOMO9gnA0Y+YsTk9sQmM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$ticker$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTickerText"]
    ];
});
_c = TickerText;
var _c;
__turbopack_context__.k.register(_c, "TickerText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-text-image-reveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTextImageReveal",
    ()=>useTextImageReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/utils/get-offset-top.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useTextImageReveal(options = {}) {
    _s();
    const { respectReducedMotion = true } = options;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastKnownY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    const registerWord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useTextImageReveal.useRef": (index, dataIndex)=>{
            return ({
                "useTextImageReveal.useRef": (el)=>{
                    if (el) {
                        wordDataRef.current[index] = {
                            el,
                            dataIndex
                        };
                    }
                }
            })["useTextImageReveal.useRef"];
        }
    }["useTextImageReveal.useRef"]).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTextImageReveal.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            if (respectReducedMotion && prefersReducedMotion) {
                wordDataRef.current.forEach({
                    "useTextImageReveal.useEffect": ({ el })=>{
                        el.style.setProperty('--Reveal_Amount', '100%');
                    }
                }["useTextImageReveal.useEffect"]);
                return;
            }
            function updateEl() {
                isTicking.current = false;
                revealText();
            }
            function revealText() {
                if (!container) return;
                const elementStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOffsetTop"])(container);
                const elementEndPoint = elementStartPoint + window.innerHeight - 200;
                const words = wordDataRef.current;
                if (lastKnownY.current <= elementStartPoint) {
                    words.forEach({
                        "useTextImageReveal.useEffect.revealText": ({ el })=>{
                            el.style.setProperty('--Reveal_Amount', '0%');
                        }
                    }["useTextImageReveal.useEffect.revealText"]);
                    return;
                }
                if (lastKnownY.current > elementEndPoint) {
                    words.forEach({
                        "useTextImageReveal.useEffect.revealText": ({ el })=>{
                            el.style.setProperty('--Reveal_Amount', '100%');
                        }
                    }["useTextImageReveal.useEffect.revealText"]);
                    return;
                }
                const totalScrollAmount = elementEndPoint - elementStartPoint;
                const scrollYAsAPercentageOfJourney = (lastKnownY.current - elementStartPoint) / totalScrollAmount;
                words.forEach({
                    "useTextImageReveal.useEffect.revealText": ({ el, dataIndex }, index)=>{
                        const minimumPercent = index / words.length;
                        const maximumPercent = (index + 1) / words.length;
                        if (scrollYAsAPercentageOfJourney >= minimumPercent && scrollYAsAPercentageOfJourney < maximumPercent) {
                            const wordScrolledAmount = scrollYAsAPercentageOfJourney - minimumPercent;
                            const wordMaxAmount = maximumPercent - minimumPercent;
                            const wordProgress = wordScrolledAmount / wordMaxAmount;
                            const wordProgressAmount = Math.round(wordProgress * 100 * 10) / 10;
                            // Update active media index (skip index "0" per original logic)
                            if (dataIndex !== '0') {
                                setActiveIndex(dataIndex);
                            }
                            el.style.setProperty('--Reveal_Amount', `${wordProgressAmount}%`);
                        } else if (scrollYAsAPercentageOfJourney > maximumPercent) {
                            el.style.setProperty('--Reveal_Amount', '100%');
                        } else {
                            el.style.setProperty('--Reveal_Amount', '0%');
                        }
                    }
                }["useTextImageReveal.useEffect.revealText"]);
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
            // Initial update after delay (matches original 500ms)
            lastKnownY.current = window.scrollY;
            const initTimer = setTimeout({
                "useTextImageReveal.useEffect.initTimer": ()=>{
                    updateEl();
                }
            }["useTextImageReveal.useEffect.initTimer"], 500);
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "useTextImageReveal.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                    clearTimeout(initTimer);
                }
            })["useTextImageReveal.useEffect"];
        }
    }["useTextImageReveal.useEffect"], [
        prefersReducedMotion,
        respectReducedMotion
    ]);
    return {
        containerRef,
        registerWord,
        activeIndex
    };
}
_s(useTextImageReveal, "8oDvdV0+DGXUeCX/LdJFHCR5cRE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "text-image-reveal-module__lD110q__grid",
  "image": "text-image-reveal-module__lD110q__image",
  "imageActive": "text-image-reveal-module__lD110q__imageActive",
  "imageColumn": "text-image-reveal-module__lD110q__imageColumn",
  "imageWrapper": "text-image-reveal-module__lD110q__imageWrapper",
  "section": "text-image-reveal-module__lD110q__section",
  "text": "text-image-reveal-module__lD110q__text",
  "textColumn": "text-image-reveal-module__lD110q__textColumn",
  "word": "text-image-reveal-module__lD110q__word",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextImageReveal",
    ()=>TextImageReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$text$2d$image$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-text-image-reveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TextImageReveal({ data }) {
    _s();
    const { blocks } = data;
    const { containerRef, registerWord, activeIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$text$2d$image$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextImageReveal"])();
    // Build all words with their block index
    let globalWordIndex = 0;
    const wordBlocks = blocks.map((block, blockIndex)=>{
        const words = block.text.split(/\s+/).filter(Boolean);
        const entries = words.map((word)=>{
            const idx = globalWordIndex;
            globalWordIndex++;
            return {
                word,
                globalIndex: idx,
                blockIndex
            };
        });
        return {
            ...block,
            words: entries
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textColumn,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                        children: wordBlocks.map((block)=>block.words.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: registerWord(entry.globalIndex, String(entry.blockIndex)),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].word,
                                    "data-index": entry.blockIndex,
                                    children: [
                                        entry.word,
                                        ' '
                                    ]
                                }, entry.globalIndex, true, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 9
                                }, this)))
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
                        lineNumber: 33,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
                    lineNumber: 32,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageColumn,
                    children: blocks.map((block, blockIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper} ${activeIndex === String(blockIndex) ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageActive : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                    src: block.image.desktop.src,
                                    width: block.image.desktop.width,
                                    height: block.image.desktop.height,
                                    alt: block.image.desktop.alt,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image} hidden md:block`,
                                    sizes: "50vw"
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                    src: block.image.mobile.src,
                                    width: block.image.mobile.width,
                                    height: block.image.mobile.height,
                                    alt: block.image.mobile.alt,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image} block md:hidden`,
                                    sizes: "100vw"
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, blockIndex, true, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
                            lineNumber: 52,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
                    lineNumber: 50,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
            lineNumber: 30,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this);
}
_s(TextImageReveal, "wpKRNjo5r4jTdEBuKSKsFG9c+0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$text$2d$image$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextImageReveal"]
    ];
});
_c = TextImageReveal;
var _c;
__turbopack_context__.k.register(_c, "TextImageReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/data/news-feed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "newsFeedCTA",
    ()=>newsFeedCTA,
    "newsFeedItems",
    ()=>newsFeedItems
]);
const newsFeedItems = [
    {
        title: 'NEW ARRIVALS',
        description: 'You heard it here first. Check out just-landed pairs to refresh your rotation.',
        linkLabel: 'Shop Now',
        href: '/collections/new-arrivals',
        image: '/images/feed/notification-new-arrivals.jpg'
    },
    {
        title: 'ANTIBES',
        description: 'Meet our first-ever boat shoe that blends coastal prep with city style.',
        linkLabel: 'Shop Now',
        href: '/collections/antibes',
        image: '/images/feed/notification-antibes.jpg'
    },
    {
        title: 'ESSENTIALS EDIT',
        description: 'Tried-and-true pairs that keep up season after season.',
        linkLabel: 'Shop Now',
        href: '/collections/the-essentials-edit',
        image: '/images/feed/notification-essentials.jpg'
    }
];
const newsFeedCTA = {
    label: "What's New?",
    helper: 'Open feed'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/feed/news-feed.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "news-feed-module__Hg0GJG__backdrop",
  "closeButton": "news-feed-module__Hg0GJG__closeButton",
  "drawer": "news-feed-module__Hg0GJG__drawer",
  "drawerBody": "news-feed-module__Hg0GJG__drawerBody",
  "drawerHeader": "news-feed-module__Hg0GJG__drawerHeader",
  "drawerOpen": "news-feed-module__Hg0GJG__drawerOpen",
  "feedCopy": "news-feed-module__Hg0GJG__feedCopy",
  "feedDescription": "news-feed-module__Hg0GJG__feedDescription",
  "feedImage": "news-feed-module__Hg0GJG__feedImage",
  "feedItem": "news-feed-module__Hg0GJG__feedItem",
  "feedLink": "news-feed-module__Hg0GJG__feedLink",
  "feedTitle": "news-feed-module__Hg0GJG__feedTitle",
  "trigger": "news-feed-module__Hg0GJG__trigger",
  "triggerCopy": "news-feed-module__Hg0GJG__triggerCopy",
  "triggerMedia": "news-feed-module__Hg0GJG__triggerMedia",
});
}),
"[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsFeed",
    ()=>NewsFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$news$2d$feed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/data/news-feed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/feed/news-feed.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function NewsFeed() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trigger,
                onClick: ()=>setOpen(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].triggerMedia,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$news$2d$feed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsFeedItems"][0].image,
                            width: 40,
                            height: 40,
                            alt: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$news$2d$feed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsFeedItems"][0].title
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                            lineNumber: 16,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                        lineNumber: 15,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].triggerCopy,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$news$2d$feed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsFeedCTA"].label
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                lineNumber: 19,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$news$2d$feed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsFeedCTA"].helper
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                lineNumber: 20,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                        lineNumber: 18,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                lineNumber: 14,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawer} ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawerOpen : ''}`,
                "aria-hidden": !open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawerHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawerTitle,
                                children: "Feed"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                lineNumber: 26,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                                onClick: ()=>setOpen(false),
                                "aria-label": "Close feed",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                lineNumber: 27,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                        lineNumber: 25,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawerBody,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$news$2d$feed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsFeedItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: item.href,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feedItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feedImage,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                            src: item.image,
                                            width: 120,
                                            height: 120,
                                            alt: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                            lineNumber: 35,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                        lineNumber: 34,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feedCopy,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feedTitle,
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                                lineNumber: 38,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feedDescription,
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                                lineNumber: 39,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feedLink,
                                                children: [
                                                    item.linkLabel,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                                lineNumber: 40,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                        lineNumber: 37,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, item.title, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                                lineNumber: 33,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                        lineNumber: 31,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                lineNumber: 24,
                columnNumber: 4
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$feed$2f$news$2d$feed$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
                onClick: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/feed/news-feed.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(NewsFeed, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = NewsFeed;
var _c;
__turbopack_context__.k.register(_c, "NewsFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=nter_p4a_p448-poc_cdf315e5._.js.map