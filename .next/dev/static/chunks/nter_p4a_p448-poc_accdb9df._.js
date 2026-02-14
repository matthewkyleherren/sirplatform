(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/nter/p4a/p448-poc/components/product/product-gallery.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dot": "product-gallery-module__OnoMHG__dot",
  "dotActive": "product-gallery-module__OnoMHG__dotActive",
  "dots": "product-gallery-module__OnoMHG__dots",
  "gallery": "product-gallery-module__OnoMHG__gallery",
  "hint": "product-gallery-module__OnoMHG__hint",
  "keen-slider": "product-gallery-module__OnoMHG__keen-slider",
  "slide": "product-gallery-module__OnoMHG__slide",
  "slideImage": "product-gallery-module__OnoMHG__slideImage",
  "slider": "product-gallery-module__OnoMHG__slider",
  "thumbnailButton": "product-gallery-module__OnoMHG__thumbnailButton",
  "thumbnailImage": "product-gallery-module__OnoMHG__thumbnailImage",
  "thumbnails": "product-gallery-module__OnoMHG__thumbnails",
  "zoomClose": "product-gallery-module__OnoMHG__zoomClose",
  "zoomContent": "product-gallery-module__OnoMHG__zoomContent",
  "zoomGallery": "product-gallery-module__OnoMHG__zoomGallery",
  "zoomMeta": "product-gallery-module__OnoMHG__zoomMeta",
  "zoomOverlay": "product-gallery-module__OnoMHG__zoomOverlay",
  "zoomSizeButton": "product-gallery-module__OnoMHG__zoomSizeButton",
  "zoomSizeGrid": "product-gallery-module__OnoMHG__zoomSizeGrid",
  "zoomSizeLabel": "product-gallery-module__OnoMHG__zoomSizeLabel",
  "zoomSizes": "product-gallery-module__OnoMHG__zoomSizes",
  "zoomTitle": "product-gallery-module__OnoMHG__zoomTitle",
});
}),
"[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGallery",
    ()=>ProductGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/keen-slider/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-gallery.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ProductGallery({ images, productName, sizes }) {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [zoomOpen, setZoomOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zoomIndex, setZoomIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const galleryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [sliderRef, instanceRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"])({
        loop: false,
        dragSpeed: 0.8,
        slideChanged (slider) {
            setCurrentSlide(slider.track.details.rel);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductGallery.useEffect": ()=>{
            const container = galleryRef.current;
            if (!container) return;
            const onWheel = {
                "ProductGallery.useEffect.onWheel": (event)=>{
                    const slider = instanceRef.current;
                    if (!slider) return;
                    const lastIndex = slider.track.details.slides.length - 1;
                    if (event.deltaY > 0 && currentSlide < lastIndex) {
                        event.preventDefault();
                        slider.next();
                    } else if (event.deltaY < 0 && currentSlide > 0) {
                        event.preventDefault();
                        slider.prev();
                    }
                }
            }["ProductGallery.useEffect.onWheel"];
            container.addEventListener('wheel', onWheel, {
                passive: false
            });
            return ({
                "ProductGallery.useEffect": ()=>container.removeEventListener('wheel', onWheel)
            })["ProductGallery.useEffect"];
        }
    }["ProductGallery.useEffect"], [
        currentSlide,
        instanceRef
    ]);
    const openZoom = (index)=>{
        setZoomIndex(index);
        setZoomOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: galleryRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gallery,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: sliderRef,
                        className: `keen-slider ${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider}`,
                        children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `keen-slider__slide ${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slide}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openZoom(index),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                        src: image.src,
                                        alt: image.alt,
                                        width: image.width,
                                        height: image.height,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideImage,
                                        priority: index === 0,
                                        sizes: "(max-width: 768px) 100vw, 70vw"
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                        lineNumber: 68,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                    lineNumber: 67,
                                    columnNumber: 8
                                }, this)
                            }, image.id, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                lineNumber: 66,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                        lineNumber: 64,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnails,
                        "aria-hidden": "true",
                        children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnailButton,
                                onClick: ()=>instanceRef.current?.moveToIdx(index),
                                "aria-pressed": currentSlide === index,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                    src: image.src,
                                    alt: "",
                                    width: 80,
                                    height: 80,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnailImage
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                    lineNumber: 91,
                                    columnNumber: 8
                                }, this)
                            }, `thumb-${image.id}`, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                lineNumber: 84,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                        lineNumber: 82,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                        lineNumber: 96,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dots,
                        "aria-hidden": "true",
                        children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${currentSlide === index ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotActive : ''}`
                            }, `dot-${index}`, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                lineNumber: 100,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                        lineNumber: 98,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                lineNumber: 63,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZoomDialog, {
                open: zoomOpen,
                onOpenChange: setZoomOpen,
                initialIndex: zoomIndex,
                images: images,
                productName: productName,
                sizes: sizes
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                lineNumber: 105,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_s(ProductGallery, "S2UzuQPVhKAGFac6/z7ejvyNx2I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"]
    ];
});
_c = ProductGallery;
function ZoomDialog({ open, onOpenChange, initialIndex, images, productName, sizes }) {
    _s1();
    const [zoomRef, zoomInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"])({
        loop: false
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ZoomDialog.useEffect": ()=>{
            if (open) {
                requestAnimationFrame({
                    "ZoomDialog.useEffect": ()=>{
                        zoomInstance.current?.moveToIdx(initialIndex, true);
                    }
                }["ZoomDialog.useEffect"]);
            }
        }
    }["ZoomDialog.useEffect"], [
        open,
        initialIndex,
        zoomInstance
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomOverlay
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                    lineNumber: 140,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomClose,
                            type: "button",
                            onClick: ()=>onOpenChange(false),
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                            lineNumber: 142,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomGallery,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: zoomRef,
                                className: "keen-slider",
                                children: images.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "keen-slider__slide",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                            src: image.src,
                                            alt: image.alt,
                                            width: image.width,
                                            height: image.height,
                                            sizes: "100vw"
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                            lineNumber: 149,
                                            columnNumber: 10
                                        }, this)
                                    }, `zoom-${image.id}`, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                        lineNumber: 148,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                lineNumber: 146,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                            lineNumber: 145,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomMeta,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomTitle,
                                    children: productName
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                    lineNumber: 155,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomSizes,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomSizeLabel,
                                            children: "Sizes"
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                            lineNumber: 157,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomSizeGrid,
                                            children: sizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomSizeButton,
                                                    children: [
                                                        "EU ",
                                                        size.eu,
                                                        " / ",
                                                        size.us
                                                    ]
                                                }, `zoom-size-${size.eu}`, true, {
                                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                            lineNumber: 158,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                                    lineNumber: 156,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                            lineNumber: 154,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
                    lineNumber: 141,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
            lineNumber: 139,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/nter/p4a/p448-poc/components/product/product-gallery.tsx",
        lineNumber: 138,
        columnNumber: 3
    }, this);
}
_s1(ZoomDialog, "u7MG3Yud18oFwW9gf+IVBb64wOE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"]
    ];
});
_c1 = ZoomDialog;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductGallery");
__turbopack_context__.k.register(_c1, "ZoomDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/lib/data/product-detail.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPrice",
    ()=>formatPrice,
    "getProductByHandle",
    ()=>getProductByHandle,
    "johnLilacProduct",
    ()=>johnLilacProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/data/products.ts [app-client] (ecmascript)");
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
    sizes: [
        {
            eu: '35',
            us: 'W 5'
        },
        {
            eu: '36',
            us: 'W 6'
        },
        {
            eu: '37',
            us: 'W 6.5'
        },
        {
            eu: '38',
            us: 'W 7.5'
        },
        {
            eu: '39',
            us: 'W 8.5'
        },
        {
            eu: '40',
            us: 'W 9.5'
        },
        {
            eu: '41',
            us: 'W 10'
        },
        {
            eu: '42',
            us: 'W 11'
        }
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
    taxMessage: 'Tax & import duties included',
    deliveryEstimate: 'Feb 23 – Feb 25',
    recommendations: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["womenProducts"].slice(0, 4),
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
    ],
    reviews: [
        {
            id: 'rev-1',
            author: 'Alessia R.',
            location: 'Milan, IT',
            title: 'Perfect pop of color',
            body: 'These broke in instantly and the lilac suede is such a subtle statement. I wore them straight out of the box on a city trip and they stayed comfy all day.',
            rating: 5,
            date: 'Feb 4, 2025'
        },
        {
            id: 'rev-2',
            author: 'Noelle P.',
            location: 'Paris, FR',
            title: 'Cloud-level comfort',
            body: 'Terry lining + memory foam equals a dream. They run true to size and the amber sole looks amazing with denims.',
            rating: 5,
            date: 'Jan 28, 2025'
        },
        {
            id: 'rev-3',
            author: 'Sophia L.',
            location: 'Lisbon, PT',
            title: 'Elevated neutral',
            body: 'Love how the lilac hits stay soft so they still behave like a neutral sneaker. Took off one star because I wish there was an extra set of laces.',
            rating: 4,
            date: 'Jan 10, 2025'
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/product/product-modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "product-modal-module__GH-uba__body",
  "close": "product-modal-module__GH-uba__close",
  "content": "product-modal-module__GH-uba__content",
  "overlay": "product-modal-module__GH-uba__overlay",
  "title": "product-modal-module__GH-uba__title",
  "trigger": "product-modal-module__GH-uba__trigger",
});
}),
"[project]/nter/p4a/p448-poc/components/product/product-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductModal",
    ()=>ProductModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-modal.module.css [app-client] (css module)");
"use client";
;
;
;
function ProductModal({ triggerLabel, title, children, triggerClassName }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: triggerClassName ?? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trigger,
                    type: "button",
                    children: triggerLabel
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                    lineNumber: 17,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                lineNumber: 16,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                        lineNumber: 22,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].close,
                                "aria-label": "Close dialog",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                                lineNumber: 24,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                                lineNumber: 27,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                                lineNumber: 28,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                        lineNumber: 23,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
                lineNumber: 21,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/product/product-modal.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
}
_c = ProductModal;
var _c;
__turbopack_context__.k.register(_c, "ProductModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductPurchasePanel",
    ()=>ProductPurchasePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$product$2d$detail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/lib/data/product-detail.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-modal.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './product-purchase-panel.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProductPurchasePanel({ product }) {
    _s();
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const priceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductPurchasePanel.useMemo[priceLabel]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$lib$2f$data$2f$product$2d$detail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(product.price, product.currency)
    }["ProductPurchasePanel.useMemo[priceLabel]"], [
        product.price,
        product.currency
    ]);
    const selectedEntry = product.sizes.find((size)=>size.eu === selectedSize);
    const formatSizeLabel = (size)=>size ? `EU ${size.eu} / ${size.us}` : 'Select';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: s.panel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: s.header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: s.titleRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: s.productName,
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 26,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: s.wishlist,
                                type: "button",
                                "aria-label": "Add to wishlist",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 17 17",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        stroke: "currentColor",
                                        d: "M13.78 2H3.22C3.0985 2 3 2.09934 3 2.22189V14.7777C3 14.9753 3.23697 15.0743 3.37556 14.9346L8.34444 9.92302C8.43035 9.83637 8.56965 9.83637 8.65556 9.92302L13.6244 14.9346C13.763 15.0743 14 14.9753 14 14.7777V2.22189C14 2.09934 13.9015 2 13.78 2Z"
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                        lineNumber: 29,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                    lineNumber: 28,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 27,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 25,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: s.price,
                        children: priceLabel
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 36,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: s.taxRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: product.taxMessage
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 38,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/pages/faq",
                                children: "View terms"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 39,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 37,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 24,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: s.description,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: product.description
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 44,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: s.readMore,
                        children: "Read more"
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 45,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 43,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: s.detailNav,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductModal"], {
                        title: "Details",
                        triggerLabel: "Details",
                        triggerClassName: s.detailLink,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: product.materials.map((material)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: material
                                }, material, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                    lineNumber: 54,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                            lineNumber: 52,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 51,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductModal"], {
                        title: "Product care",
                        triggerLabel: "Product care",
                        triggerClassName: s.detailLink,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: product.careNotes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: note
                                }, note, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                    lineNumber: 61,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                            lineNumber: 59,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 58,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductModal"], {
                        title: "Shipping & returns",
                        triggerLabel: "Shipping & returns",
                        triggerClassName: s.detailLink,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: product.shippingNotes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: note
                                }, note, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                    lineNumber: 68,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                            lineNumber: 66,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 65,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: s.detailRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Estimated delivery"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 73,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: product.deliveryEstimate
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 74,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 72,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 50,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: s.sizeCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: s.sizeHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Size"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 80,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: s.sizeGuide,
                                type: "button",
                                children: "Size Guide →"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 81,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 79,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: s.selector,
                        type: "button",
                        onClick: ()=>setSelectedSize(selectedEntry ? undefined : product.sizes[0].eu),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formatSizeLabel(selectedEntry)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 86,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 87,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 85,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: s.ctaButton,
                        type: "button",
                        children: [
                            "Add to bag",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M7.5 8V5h-1v3h1Zm4-3h-4v-1h4v1Zm.5.5V8h1V5h-1Zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 12 3.5v1Zm-4-.5a.5.5 0 0 1 .5-.5v-1A1.5 1.5 0 0 0 6.5 5h1Zm-3 2.5h10v-1H5v1Zm10.5.5v6h1V9h-1Zm-.5 6.5H5v1h10v-1Zm-10.5 0V9h-1v6h1Zm.5.5a.5.5 0 0 1-.5-.5h-1A1.5 1.5 0 0 0 5 16.5v-1Zm10.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1Zm0-8a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 15 7.5v1Zm-10-1A1.5 1.5 0 0 0 3.5 9h1a.5.5 0 0 1 .5-.5v-1Z"
                                }, void 0, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                    lineNumber: 92,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                                lineNumber: 91,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                        lineNumber: 89,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
                lineNumber: 78,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/product/product-purchase-panel.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this);
}
_s(ProductPurchasePanel, "ydr6/IGDnDLXFe5F+fiXtsSCN7w=");
_c = ProductPurchasePanel;
var _c;
__turbopack_context__.k.register(_c, "ProductPurchasePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/product/product-reviews.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "product-reviews-module__sdhgnq__card",
  "cardBody": "product-reviews-module__sdhgnq__cardBody",
  "cardMeta": "product-reviews-module__sdhgnq__cardMeta",
  "cardTitle": "product-reviews-module__sdhgnq__cardTitle",
  "cards": "product-reviews-module__sdhgnq__cards",
  "meta": "product-reviews-module__sdhgnq__meta",
  "score": "product-reviews-module__sdhgnq__score",
  "stars": "product-reviews-module__sdhgnq__stars",
  "summary": "product-reviews-module__sdhgnq__summary",
});
}),
"[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductReviews",
    ()=>ProductReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-reviews.module.css [app-client] (css module)");
;
;
function ProductReviews({ reviews }) {
    const average = reviews.reduce((sum, review)=>sum + review.rating, 0) / (reviews.length || 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].score,
                        children: average.toFixed(1)
                    }, void 0, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                        lineNumber: 15,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stars,
                                children: '★★★★★'.slice(0, 5)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                                lineNumber: 17,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                children: [
                                    reviews.length,
                                    " verified reviews"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                                lineNumber: 18,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                        lineNumber: 16,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                lineNumber: 14,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cards,
                children: reviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stars,
                                children: '★★★★★'.slice(0, review.rating)
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                                lineNumber: 24,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: review.title
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                                lineNumber: 25,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
                                children: review.body
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                                lineNumber: 26,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardMeta,
                                children: [
                                    review.author,
                                    " · ",
                                    review.location,
                                    " · ",
                                    review.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                                lineNumber: 27,
                                columnNumber: 7
                            }, this)
                        ]
                    }, review.id, true, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                        lineNumber: 23,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
                lineNumber: 21,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
}
_c = ProductReviews;
var _c;
__turbopack_context__.k.register(_c, "ProductReviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/product/product-tabs.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "panel": "product-tabs-module__5YHNnG__panel",
  "tab": "product-tabs-module__5YHNnG__tab",
  "tabActive": "product-tabs-module__5YHNnG__tabActive",
  "tabs": "product-tabs-module__5YHNnG__tabs",
  "wrapper": "product-tabs-module__5YHNnG__wrapper",
});
}),
"[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductTabs",
    ()=>ProductTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-reviews.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/nter/p4a/p448-poc/components/product/product-tabs.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProductTabs({ tabs, reviews }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tabs[0]?.id ?? '');
    const current = tabs.find((tab)=>tab.id === activeTab);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabs,
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab} ${tab.id === activeTab ? __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabActive : ''}`,
                        onClick: ()=>setActiveTab(tab.id),
                        children: tab.label
                    }, tab.id, false, {
                        fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                        lineNumber: 21,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                lineNumber: 19,
                columnNumber: 4
            }, this),
            current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                children: current.id === 'reviews' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$product$2f$product$2d$reviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductReviews"], {
                    reviews: reviews
                }, void 0, false, {
                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                    lineNumber: 34,
                    columnNumber: 7
                }, this) : current.content.map((block, index)=>{
                    if (block.type === 'paragraph') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: block.value
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                            lineNumber: 38,
                            columnNumber: 16
                        }, this);
                    }
                    if (block.type === 'list') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: block.value.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                                    lineNumber: 44,
                                    columnNumber: 12
                                }, this))
                        }, index, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                            lineNumber: 42,
                            columnNumber: 10
                        }, this);
                    }
                    return null;
                })
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nter/p4a/p448-poc/components/product/product-tabs.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this);
}
_s(ProductTabs, "1vFphNvSNSNaGhkv0K2cOUEwF9A=");
_c = ProductTabs;
var _c;
__turbopack_context__.k.register(_c, "ProductTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-carousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
function BookmarkIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "20",
        viewBox: "0 0 17 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = BookmarkIcon;
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
                    lineNumber: 48,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                lineNumber: 47,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardMediaContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 54,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                            lineNumber: 53,
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
            product.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTags,
                children: product.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTag,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitleRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                lineNumber: 86,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBookmark,
                                "aria-label": `Save ${product.name}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookmarkIcon, {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardPrice,
                                children: [
                                    formattedComparePrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$components$2f$sections$2f$product$2d$carousel$2f$product$2d$carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardComparePrice,
                                        children: formattedComparePrice
                                    }, void 0, false, {
                                        fileName: "[project]/nter/p4a/p448-poc/components/sections/product-carousel/product-card.tsx",
                                        lineNumber: 95,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nter$2f$p4a$2f$p448$2d$poc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(ProductCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c1 = ProductCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "BookmarkIcon");
__turbopack_context__.k.register(_c1, "ProductCard");
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
]);

//# sourceMappingURL=nter_p4a_p448-poc_accdb9df._.js.map