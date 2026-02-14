module.exports = [
"[project]/nter/p4a/p448-poc/lib/utils/get-offset-top.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-parallax.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useParallax",
    ()=>useParallax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/utils/get-offset-top.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function useParallax(options = {}) {
    const { desktopAmount = 60, mobileAmount = 40, activationDelay = 500, respectReducedMotion = true } = options;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastKnownY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(max-width: 767px)');
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            const elementStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffsetTop"])(el) - window.innerHeight;
            const elementEndPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffsetTop"])(el) + elementHeight;
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
        const activationTimer = setTimeout(()=>{
            isActive.current = true;
            el.setAttribute('active', '');
        }, activationDelay);
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', onScroll);
            clearTimeout(activationTimer);
            isActive.current = false;
        };
    }, [
        isMobile,
        prefersReducedMotion,
        desktopAmount,
        mobileAmount,
        activationDelay,
        respectReducedMotion
    ]);
    return ref;
}
}),
"[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParallaxImage",
    ()=>ParallaxImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$parallax$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-parallax.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ParallaxImage({ image, parallaxOptions, className, style, oversize = 1.15, priority = false }) {
    const parallaxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$parallax$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParallax"])(parallaxOptions);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            ...style
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: parallaxRef,
            style: {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                transform: 'scale(1)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
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
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-lazy-video.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLazyVideo",
    ()=>useLazyVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useLazyVideo(options = {}) {
    const { threshold = 0, autoplayOnMobile = true } = options;
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (!video) return;
        const observer = new IntersectionObserver(([entry])=>{
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
                const playOnTouch = ()=>{
                    if (video.paused) {
                        video.play().catch(()=>{
                        // Autoplay may be blocked by browser policy
                        });
                    }
                };
                document.addEventListener('touchstart', playOnTouch, {
                    once: true
                });
            }
        }, {
            threshold
        });
        observer.observe(video);
        return ()=>{
            observer.disconnect();
        };
    }, [
        threshold,
        autoplayOnMobile
    ]);
    return {
        videoRef,
        isLoaded
    };
}
}),
"[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LazyVideo",
    ()=>LazyVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$lazy$2d$video$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-lazy-video.ts [app-ssr] (ecmascript)");
'use client';
;
;
function LazyVideo({ desktop, mobile, className }) {
    const { videoRef: desktopRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$lazy$2d$video$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLazyVideo"])();
    const { videoRef: mobileRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$lazy$2d$video$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLazyVideo"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            position: 'relative',
            width: '100%',
            height: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
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
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-animate-in.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "splitAnimateWords",
    ()=>splitAnimateWords,
    "useAnimateIn",
    ()=>useAnimateIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useAnimateIn(options = {}) {
    const { respectReducedMotion = true } = options;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isAnimated, setIsAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(max-width: 767px)');
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        if (respectReducedMotion && prefersReducedMotion) {
            setIsAnimated(true);
            return;
        }
        const rootMargin = options.rootMargin ?? (isMobile ? '-60px' : '-50px');
        const observer = new IntersectionObserver(([entry])=>{
            if (entry?.isIntersecting) {
                setIsAnimated(true);
                observer.unobserve(el);
            }
        }, {
            rootMargin,
            threshold: 0
        });
        observer.observe(el);
        return ()=>{
            observer.disconnect();
        };
    }, [
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
function splitAnimateWords(text) {
    const words = text.replace(/\n/g, ' <br> ').split(' ');
    return words.filter((w)=>w.trim() !== '').map((word)=>({
            word: word === '<br>' ? '' : word,
            isBreak: word === '<br>'
        }));
}
}),
"[project]/nter/p4a/p448-poc/components/primitives/animate-in.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "animate-in-module__H3q2DG__content",
  "word": "animate-in-module__H3q2DG__word",
  "wrapper": "animate-in-module__H3q2DG__wrapper",
});
}),
"[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateIn",
    ()=>AnimateIn,
    "AnimateInContent",
    ()=>AnimateInContent,
    "AnimateInWords",
    ()=>AnimateInWords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-animate-in.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/animate-in.module.css [app-ssr] (css module)");
'use client';
;
;
;
function AnimateIn({ children, className }) {
    const { ref, isAnimated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimateIn"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper} ${className ?? ''}`,
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
function AnimateInWords({ text, className, tag: Tag = 'h2' }) {
    const { ref, isAnimated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimateIn"])();
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$animate$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitAnimateWords"])(text);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper} ${className ?? ''}`,
        ...isAnimated ? {
            'data-animate': ''
        } : {},
        children: words.map((entry, i)=>entry.isBreak ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, i, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx",
                lineNumber: 59,
                columnNumber: 6
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word,
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
function AnimateInContent({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content} ${className ?? ''}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASingle",
    ()=>CTASingle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.module.css [app-ssr] (css module)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].media,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParallaxImage"], {
                        image: media.image,
                        priority: priority
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                        lineNumber: 27,
                        columnNumber: 5
                    }, this),
                    media.type === 'video' && media.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].videoOverlay,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LazyVideo"], {
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
            quickProducts && quickProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickProducts,
                children: quickProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickProductDot, {
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
            floatingMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingToggle,
                        "aria-haspopup": "true",
                        "aria-label": floatingMenu.label,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingLabel,
                                children: floatingMenu.label
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                                lineNumber: 50,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingList,
                                children: floatingMenu.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateIn"], {
                    children: [
                        kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].kicker,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateInWords"], {
                            text: title,
                            tag: "h2",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 70,
                            columnNumber: 6
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
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
                        buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttons,
                                children: buttons.map((button)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: button.href,
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button} ${button.variant === 'primary' ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonSecondary}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonText,
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
function QuickProductDot({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickProduct,
        style: {
            '--qp-x': product.position.x,
            '--qp-y': product.position.y
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickProductDot,
                "aria-label": `View ${product.name}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickProductPulse
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickProductTooltip,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                    href: product.href,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickProductLink,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                            src: product.image,
                            width: 60,
                            height: 60,
                            alt: product.name,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickProductImage
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-single/cta-single.tsx",
                            lineNumber: 111,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$single$2f$cta$2d$single$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickProductName,
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
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "cta-split-module__kmulQG__card",
  "cardButton": "cta-split-module__kmulQG__cardButton",
  "cardButtonPrimary": "cta-split-module__kmulQG__cardButtonPrimary",
  "cardButtonSecondary": "cta-split-module__kmulQG__cardButtonSecondary",
  "cardButtonText": "cta-split-module__kmulQG__cardButtonText",
  "cardButtons": "cta-split-module__kmulQG__cardButtons",
  "cardContent": "cta-split-module__kmulQG__cardContent",
  "cardMedia": "cta-split-module__kmulQG__cardMedia",
  "cardMenu": "cta-split-module__kmulQG__cardMenu",
  "cardMenuLabel": "cta-split-module__kmulQG__cardMenuLabel",
  "cardMenuPanel": "cta-split-module__kmulQG__cardMenuPanel",
  "cardMenuToggle": "cta-split-module__kmulQG__cardMenuToggle",
  "cardTitle": "cta-split-module__kmulQG__cardTitle",
  "cardVideoOverlay": "cta-split-module__kmulQG__cardVideoOverlay",
  "grid": "cta-split-module__kmulQG__grid",
  "section": "cta-split-module__kmulQG__section",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASplit",
    ()=>CTASplit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/lazy-video.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/animate-in.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
function CTASplit({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitCard, {
                    media: data.left.media,
                    title: data.left.title,
                    button: data.left.button,
                    menu: data.left.menu
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                    lineNumber: 22,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitCard, {
                    media: data.right.media,
                    title: data.right.title,
                    button: data.right.button,
                    menu: data.right.menu
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                    lineNumber: 28,
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
function SplitCard({ media, title, button, menu }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardMedia,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParallaxImage"], {
                        image: media.image
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                        lineNumber: 50,
                        columnNumber: 5
                    }, this),
                    media.type === 'video' && media.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardVideoOverlay,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$lazy$2d$video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LazyVideo"], {
                            desktop: media.video.desktop,
                            mobile: media.video.mobile
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                            lineNumber: 53,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                        lineNumber: 52,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                lineNumber: 49,
                columnNumber: 4
            }, this),
            menu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardMenuToggle,
                        type: "button",
                        "aria-label": menu.label,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                        lineNumber: 59,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardMenuPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardMenuLabel,
                                children: menu.label
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                lineNumber: 63,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: menu.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            href: link.href,
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                            lineNumber: 67,
                                            columnNumber: 10
                                        }, this)
                                    }, link.label, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                        lineNumber: 66,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                lineNumber: 64,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                        lineNumber: 62,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                lineNumber: 58,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateIn"], {
                    children: [
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateInWords"], {
                            text: title,
                            tag: "h2",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                            lineNumber: 77,
                            columnNumber: 7
                        }, this),
                        button && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$animate$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateInContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardButtons,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                    href: button.href,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardButton} ${button.variant === 'primary' ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardButtonPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardButtonSecondary}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$cta$2d$split$2f$cta$2d$split$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardButtonText,
                                        children: button.label
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                        lineNumber: 86,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                    lineNumber: 82,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                                lineNumber: 81,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                            lineNumber: 80,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                    lineNumber: 75,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
                lineNumber: 74,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/cta-split/cta-split.tsx",
        lineNumber: 48,
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
"[project]/nter/p4a/p448-poc/lib/hooks/use-ticker-text.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTickerText",
    ()=>useTickerText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/utils/get-offset-top.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function useTickerText(options = {}) {
    const { amountToMoveX = 100, respectReducedMotion = true } = options;
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastKnownY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(max-width: 767px)');
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            const elementStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffsetTop"])(wrapper) - window.innerHeight;
            const elementEndPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffsetTop"])(wrapper) + elementHeight;
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
        return ()=>{
            window.removeEventListener('scroll', onScroll);
        };
    }, [
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
}),
"[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "ticker-text-module__F2_lwq__button",
  "buttonContainer": "ticker-text-module__F2_lwq__buttonContainer",
  "media": "ticker-text-module__F2_lwq__media",
  "section": "ticker-text-module__F2_lwq__section",
  "ticker": "ticker-text-module__F2_lwq__ticker",
  "tickerContainer": "ticker-text-module__F2_lwq__tickerContainer",
  "tickerMessage": "ticker-text-module__F2_lwq__tickerMessage",
  "wrapper": "ticker-text-module__F2_lwq__wrapper",
});
}),
"[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TickerText",
    ()=>TickerText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/primitives/parallax-image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$ticker$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-ticker-text.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
function TickerText({ data }) {
    const { text, backgroundImage, button } = data;
    const { wrapperRef, containerRef, messageRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$ticker$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTickerText"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].media,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$primitives$2f$parallax$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParallaxImage"], {
                        image: backgroundImage
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                        lineNumber: 26,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                    lineNumber: 25,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tickerContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ticker,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: messageRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tickerMessage,
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                                lineNumber: 33,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tickerMessage,
                                "aria-hidden": "true",
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                                lineNumber: 36,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tickerMessage,
                                "aria-hidden": "true",
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                                lineNumber: 39,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                        lineNumber: 31,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                    lineNumber: 30,
                    columnNumber: 4
                }, this),
                button && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        href: button.href,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button} ${button.variant === 'primary' ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$ticker$2d$text$2f$ticker$2d$text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonSecondary}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: button.label
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                            lineNumber: 52,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                        lineNumber: 48,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
                    lineNumber: 47,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
            lineNumber: 23,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/sections/ticker-text/ticker-text.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this);
}
}),
"[project]/nter/p4a/p448-poc/lib/hooks/use-text-image-reveal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTextImageReveal",
    ()=>useTextImageReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/utils/get-offset-top.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-media-query.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function useTextImageReveal(options = {}) {
    const { respectReducedMotion = true } = options;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastKnownY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0');
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(prefers-reduced-motion: reduce)');
    const registerWord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])((index, dataIndex)=>{
        return (el)=>{
            if (el) {
                wordDataRef.current[index] = {
                    el,
                    dataIndex
                };
            }
        };
    }).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        if (!container) return;
        if (respectReducedMotion && prefersReducedMotion) {
            wordDataRef.current.forEach(({ el })=>{
                el.style.setProperty('--Reveal_Amount', '100%');
            });
            return;
        }
        function updateEl() {
            isTicking.current = false;
            revealText();
        }
        function revealText() {
            if (!container) return;
            const elementStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$utils$2f$get$2d$offset$2d$top$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffsetTop"])(container);
            const elementEndPoint = elementStartPoint + window.innerHeight - 200;
            const words = wordDataRef.current;
            if (lastKnownY.current <= elementStartPoint) {
                words.forEach(({ el })=>{
                    el.style.setProperty('--Reveal_Amount', '0%');
                });
                return;
            }
            if (lastKnownY.current > elementEndPoint) {
                words.forEach(({ el })=>{
                    el.style.setProperty('--Reveal_Amount', '100%');
                });
                return;
            }
            const totalScrollAmount = elementEndPoint - elementStartPoint;
            const scrollYAsAPercentageOfJourney = (lastKnownY.current - elementStartPoint) / totalScrollAmount;
            words.forEach(({ el, dataIndex }, index)=>{
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
        // Initial update after delay (matches original 500ms)
        lastKnownY.current = window.scrollY;
        const initTimer = setTimeout(()=>{
            updateEl();
        }, 500);
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', onScroll);
            clearTimeout(initTimer);
        };
    }, [
        prefersReducedMotion,
        respectReducedMotion
    ]);
    return {
        containerRef,
        registerWord,
        activeIndex
    };
}
}),
"[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextImageReveal",
    ()=>TextImageReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$text$2d$image$2d$reveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/hooks/use-text-image-reveal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function TextImageReveal({ data }) {
    const { blocks } = data;
    const { containerRef, registerWord, activeIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$hooks$2f$use$2d$text$2d$image$2d$reveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTextImageReveal"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textColumn,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                        children: wordBlocks.map((block)=>block.words.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: registerWord(entry.globalIndex, String(entry.blockIndex)),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageColumn,
                    children: blocks.map((block, blockIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageWrapper} ${activeIndex === String(blockIndex) ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageActive : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                    src: block.image.desktop.src,
                                    width: block.image.desktop.width,
                                    height: block.image.desktop.height,
                                    alt: block.image.desktop.alt,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image} hidden md:block`,
                                    sizes: "50vw"
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/sections/text-image-reveal/text-image-reveal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                    src: block.image.mobile.src,
                                    width: block.image.mobile.width,
                                    height: block.image.mobile.height,
                                    alt: block.image.mobile.alt,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$text$2d$image$2d$reveal$2f$text$2d$image$2d$reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image} block md:hidden`,
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
}),
];

//# sourceMappingURL=nter_p4a_p448-poc_19d83317._.js.map