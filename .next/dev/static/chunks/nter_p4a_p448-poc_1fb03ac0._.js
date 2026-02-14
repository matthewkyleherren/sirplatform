(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/nter/p4a/p448-poc/components/image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>Image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function Image(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/image.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
_c = Image;
var _c;
__turbopack_context__.k.register(_c, "Image");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
    const { media, title, kicker, description, buttons, quickProducts } = data;
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
                                lineNumber: 49,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 48,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInWords"], {
                            text: title,
                            tag: "h2",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 52,
                            columnNumber: 6
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                lineNumber: 55,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 54,
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
                                            lineNumber: 67,
                                            columnNumber: 11
                                        }, this)
                                    }, button.label, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                        lineNumber: 62,
                                        columnNumber: 10
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                lineNumber: 60,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 59,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                    lineNumber: 46,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                lineNumber: 45,
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
                    lineNumber: 89,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                lineNumber: 88,
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
                            lineNumber: 93,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickProductName,
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 100,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                    lineNumber: 92,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                lineNumber: 91,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
        lineNumber: 81,
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
"[project]/nter/p4a/p448-poc/components/primitives/responsive-media.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResponsiveMedia",
    ()=>ResponsiveMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function ResponsiveMedia({ media, className }) {
    if (media.type === 'video' && media.video) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            style: {
                position: 'relative',
                width: '100%',
                height: '100%'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxImage"], {
                    image: media.image,
                    style: {
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/primitives/responsive-media.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyVideo"], {
                    desktop: media.video.desktop,
                    mobile: media.video.mobile,
                    className: ""
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/primitives/responsive-media.tsx",
                    lineNumber: 26,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nter/p4a/p448-poc/components/primitives/responsive-media.tsx",
            lineNumber: 19,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxImage"], {
        image: media.image,
        className: className
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/primitives/responsive-media.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_c = ResponsiveMedia;
var _c;
__turbopack_context__.k.register(_c, "ResponsiveMedia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrowButton": "cta-carousel-module__tbECEq__arrowButton",
  "arrows": "cta-carousel-module__tbECEq__arrows",
  "carouselWrapper": "cta-carousel-module__tbECEq__carouselWrapper",
  "kicker": "cta-carousel-module__tbECEq__kicker",
  "section": "cta-carousel-module__tbECEq__section",
  "slide": "cta-carousel-module__tbECEq__slide",
  "slideButton": "cta-carousel-module__tbECEq__slideButton",
  "slideButtonPrimary": "cta-carousel-module__tbECEq__slideButtonPrimary",
  "slideButtonSecondary": "cta-carousel-module__tbECEq__slideButtonSecondary",
  "slideContent": "cta-carousel-module__tbECEq__slideContent",
  "slideDescription": "cta-carousel-module__tbECEq__slideDescription",
  "slideKicker": "cta-carousel-module__tbECEq__slideKicker",
  "slideMedia": "cta-carousel-module__tbECEq__slideMedia",
  "slideTitle": "cta-carousel-module__tbECEq__slideTitle",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTACarousel",
    ()=>CTACarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/keen-slider/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$responsive$2d$media$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/responsive-media.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CTACarousel({ data }) {
    _s();
    const { kicker, slides } = data;
    const [sliderRef, instanceRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"])({
        mode: 'snap',
        slides: {
            perView: 1,
            spacing: 0
        },
        loop: true
    });
    const handlePrev = ()=>{
        instanceRef.current?.prev();
    };
    const handleNext = ()=>{
        instanceRef.current?.next();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: kicker
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                lineNumber: 41,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: sliderRef,
                        className: "keen-slider",
                        children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "keen-slider__slide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slide, {
                                    slide: slide
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                    lineNumber: 47,
                                    columnNumber: 8
                                }, this)
                            }, index, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                lineNumber: 46,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                        lineNumber: 44,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrows,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowButton,
                                onClick: handlePrev,
                                "aria-label": "Previous slide",
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
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                        lineNumber: 61,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                    lineNumber: 60,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                lineNumber: 54,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowButton,
                                onClick: handleNext,
                                "aria-label": "Next slide",
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
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                        lineNumber: 76,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                    lineNumber: 75,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                lineNumber: 69,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                        lineNumber: 53,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                lineNumber: 43,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, this);
}
_s(CTACarousel, "TNmR5mb2CmtgJwIc8TeANSGEDts=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"]
    ];
});
_c = CTACarousel;
function Slide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slide,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideMedia,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$responsive$2d$media$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveMedia"], {
                    media: slide.media
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                    lineNumber: 94,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                lineNumber: 93,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateIn"], {
                    children: [
                        slide.kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideKicker,
                                children: slide.kicker
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                lineNumber: 100,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                            lineNumber: 99,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInWords"], {
                            text: slide.title,
                            tag: "h2",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideTitle
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                            lineNumber: 103,
                            columnNumber: 6
                        }, this),
                        slide.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideDescription,
                                children: slide.description
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                lineNumber: 106,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                            lineNumber: 105,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: slide.button.href,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideButton} ${slide.button.variant === 'primary' ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideButtonPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$carousel$2f$cta$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideButtonSecondary}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: slide.button.label
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                    lineNumber: 114,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                                lineNumber: 110,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                            lineNumber: 109,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                    lineNumber: 97,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
                lineNumber: 96,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-carousel/cta-carousel.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this);
}
_c1 = Slide;
var _c, _c1;
__turbopack_context__.k.register(_c, "CTACarousel");
__turbopack_context__.k.register(_c1, "Slide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-text-reveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTextReveal",
    ()=>useTextReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/utils/get-offset-top.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useTextReveal(options = {}) {
    _s();
    const { respectReducedMotion = true } = options;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastKnownY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    const setWordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useTextReveal.useRef": (index)=>{
            return ({
                "useTextReveal.useRef": (el)=>{
                    if (el) {
                        wordElsRef.current[index] = el;
                    }
                }
            })["useTextReveal.useRef"];
        }
    }["useTextReveal.useRef"]).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTextReveal.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            if (respectReducedMotion && prefersReducedMotion) {
                // Reveal all words immediately
                wordElsRef.current.forEach({
                    "useTextReveal.useEffect": (wordEl)=>{
                        wordEl.style.setProperty('--Reveal_Amount', '100%');
                    }
                }["useTextReveal.useEffect"]);
                return;
            }
            function updateEl() {
                isTicking.current = false;
                revealText();
            }
            function revealText() {
                if (!container) return;
                const elementStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOffsetTop"])(container);
                const elementEndPoint = elementStartPoint + window.innerHeight / 2;
                const wordEls = wordElsRef.current;
                if (lastKnownY.current <= elementStartPoint) {
                    wordEls.forEach({
                        "useTextReveal.useEffect.revealText": (wordEl)=>{
                            wordEl.style.setProperty('--Reveal_Amount', '0%');
                        }
                    }["useTextReveal.useEffect.revealText"]);
                    return;
                }
                if (lastKnownY.current > elementEndPoint) {
                    wordEls.forEach({
                        "useTextReveal.useEffect.revealText": (wordEl)=>{
                            wordEl.style.setProperty('--Reveal_Amount', '100%');
                        }
                    }["useTextReveal.useEffect.revealText"]);
                    return;
                }
                const totalScrollAmount = elementEndPoint - elementStartPoint;
                const scrollYAsAPercentageOfJourney = (lastKnownY.current - elementStartPoint) / totalScrollAmount;
                wordEls.forEach({
                    "useTextReveal.useEffect.revealText": (wordEl, index)=>{
                        const minimumPercent = index / wordEls.length;
                        const maximumPercent = (index + 1) / wordEls.length;
                        if (scrollYAsAPercentageOfJourney >= minimumPercent && scrollYAsAPercentageOfJourney < maximumPercent) {
                            const wordScrolledAmount = scrollYAsAPercentageOfJourney - minimumPercent;
                            const wordMaxAmount = maximumPercent - minimumPercent;
                            const wordProgress = wordScrolledAmount / wordMaxAmount;
                            const wordProgressAmount = Math.round(wordProgress * 100 * 10) / 10;
                            wordEl.style.setProperty('--Reveal_Amount', `${wordProgressAmount}%`);
                        } else if (scrollYAsAPercentageOfJourney > maximumPercent) {
                            wordEl.style.setProperty('--Reveal_Amount', '100%');
                        } else {
                            wordEl.style.setProperty('--Reveal_Amount', '0%');
                        }
                    }
                }["useTextReveal.useEffect.revealText"]);
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
            // Initial update after a short delay (matches original 500ms)
            lastKnownY.current = window.scrollY;
            const initTimer = setTimeout({
                "useTextReveal.useEffect.initTimer": ()=>{
                    updateEl();
                }
            }["useTextReveal.useEffect.initTimer"], 500);
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "useTextReveal.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                    clearTimeout(initTimer);
                }
            })["useTextReveal.useEffect"];
        }
    }["useTextReveal.useEffect"], [
        prefersReducedMotion,
        respectReducedMotion
    ]);
    return {
        containerRef,
        setWordRef
    };
}
_s(useTextReveal, "TKo7nv2EFTCuxvgMDVsOVvD6a+0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "caption": "text-reveal-module__QPSo8W__caption",
  "content": "text-reveal-module__QPSo8W__content",
  "media": "text-reveal-module__QPSo8W__media",
  "overlay": "text-reveal-module__QPSo8W__overlay",
  "section": "text-reveal-module__QPSo8W__section",
  "text": "text-reveal-module__QPSo8W__text",
  "textInverse": "text-reveal-module__QPSo8W__textInverse",
  "word": "text-reveal-module__QPSo8W__word",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextReveal",
    ()=>TextReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$text$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-text-reveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TextReveal({ data }) {
    _s();
    const { caption, text, backgroundImage, overlayOpacity = 0.4 } = data;
    const { containerRef, setWordRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$text$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextReveal"])();
    const words = text.split(/\s+/).filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            backgroundImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].media,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxImage"], {
                            image: backgroundImage
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx",
                            lineNumber: 24,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx",
                        lineNumber: 23,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                        style: {
                            opacity: overlayOpacity
                        }
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx",
                        lineNumber: 26,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].caption,
                        children: caption
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text} ${backgroundImage ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textInverse : ''}`,
                        children: words.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: setWordRef(index),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$reveal$2f$text$2d$reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].word,
                                children: [
                                    word,
                                    ' '
                                ]
                            }, index, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx",
                                lineNumber: 37,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx",
                        lineNumber: 35,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx",
                lineNumber: 33,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/text-reveal/text-reveal.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
}
_s(TextReveal, "KNCY/guQxX6jaYv8cZ9wkC2aO4Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$text$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextReveal"]
    ];
});
_c = TextReveal;
var _c;
__turbopack_context__.k.register(_c, "TextReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "editorial-content-module__aoQ9Ta__body",
  "bodyColumn": "editorial-content-module__aoQ9Ta__bodyColumn",
  "grid": "editorial-content-module__aoQ9Ta__grid",
  "headline": "editorial-content-module__aoQ9Ta__headline",
  "headlineColumn": "editorial-content-module__aoQ9Ta__headlineColumn",
  "section": "editorial-content-module__aoQ9Ta__section",
  "subheading": "editorial-content-module__aoQ9Ta__subheading",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorialContent",
    ()=>EditorialContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.module.css [app-client] (css module)");
'use client';
;
;
;
function EditorialContent({ data }) {
    const { headline, subheading, body } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headlineColumn,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateIn"], {
                        children: [
                            headline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInWords"], {
                                text: headline,
                                tag: "h2",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headline
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
                                lineNumber: 25,
                                columnNumber: 8
                            }, this),
                            subheading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subheading,
                                    children: subheading
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
                                    lineNumber: 29,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
                                lineNumber: 28,
                                columnNumber: 8
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
                        lineNumber: 23,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
                    lineNumber: 22,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bodyColumn,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateIn"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$editorial$2d$content$2f$editorial$2d$content$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                                dangerouslySetInnerHTML: {
                                    __html: body
                                }
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
                                lineNumber: 39,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
                            lineNumber: 38,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
                        lineNumber: 37,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
                    lineNumber: 36,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
            lineNumber: 20,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/editorial-content/editorial-content.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
}
_c = EditorialContent;
var _c;
__turbopack_context__.k.register(_c, "EditorialContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "floating-nav-module__B8kR-G__button",
  "container": "floating-nav-module__B8kR-G__container",
  "hidden": "floating-nav-module__B8kR-G__hidden",
  "visible": "floating-nav-module__B8kR-G__visible",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingNav",
    ()=>FloatingNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function FloatingNav({ label, href, footerSelector = 'footer' }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingNav.useEffect": ()=>{
            const footer = document.querySelector(footerSelector);
            if (!footer) return;
            observerRef.current = new IntersectionObserver({
                "FloatingNav.useEffect": ([entry])=>{
                    setIsVisible(!entry?.isIntersecting);
                }
            }["FloatingNav.useEffect"], {
                threshold: 0
            });
            observerRef.current.observe(footer);
            return ({
                "FloatingNav.useEffect": ()=>{
                    observerRef.current?.disconnect();
                }
            })["FloatingNav.useEffect"];
        }
    }["FloatingNav.useEffect"], [
        footerSelector
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container} ${isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible : __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            href: href,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$floating$2d$nav$2f$floating$2d$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            children: label
        }, void 0, false, {
            fileName: "[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx",
            lineNumber: 42,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/floating-nav/floating-nav.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, this);
}
_s(FloatingNav, "LafPc56BI1jdemHsh8z2dKW+Bp8=");
_c = FloatingNav;
var _c;
__turbopack_context__.k.register(_c, "FloatingNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=nter_p4a_p448-poc_1fb03ac0._.js.map