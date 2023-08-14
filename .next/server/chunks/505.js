exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 5433:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23))

/***/ }),

/***/ 3447:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7506))

/***/ }),

/***/ 7506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(7226);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(3824);
// EXTERNAL MODULE: ../node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(1066);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../node_modules/react-bootstrap/cjs/Button.js
var Button = __webpack_require__(7716);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ../node_modules/react-bootstrap/cjs/Container.js
var Container = __webpack_require__(7146);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ../node_modules/react-bootstrap/cjs/Form.js
var Form = __webpack_require__(3449);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form);
// EXTERNAL MODULE: ../node_modules/react-bootstrap/cjs/Nav.js
var Nav = __webpack_require__(3702);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav);
// EXTERNAL MODULE: ../node_modules/react-bootstrap/cjs/Navbar.js
var Navbar = __webpack_require__(4450);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar);
// EXTERNAL MODULE: ./src/components/header.css
var header = __webpack_require__(6934);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./src/components/app.header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function Header() {
    const router = (0,navigation.useRouter)();
    const aboutBtn = ()=>{
        router.push("/about");
    };
    const contactBtn = ()=>{
        router.push("/contact");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        expand: "lg",
        className: "bg-body-tertiary",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    style: {
                        fontSize: 36,
                        fontWeight: 700,
                        marginRight: 100,
                        textDecoration: 0,
                        color: "black"
                    },
                    children: "2P-Fashion"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "navbarScroll"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Collapse, {
                    id: "navbarScroll",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                            className: "me-auto my-2 my-lg-0 gap-4",
                            style: {
                                maxHeight: "100px"
                            },
                            navbarScroll: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "a",
                                    href: "/",
                                    style: {
                                        fontWeight: 700,
                                        textDecoration: 0
                                    },
                                    children: "Home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "a",
                                    href: "/about",
                                    style: {
                                        fontWeight: 700,
                                        textDecoration: 0
                                    },
                                    children: "About"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "a",
                                    href: "/contact",
                                    style: {
                                        fontWeight: 700,
                                        textDecoration: 0
                                    },
                                    children: "Contact Us"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                    type: "search",
                                    placeholder: "Search",
                                    className: "me-2",
                                    "aria-label": "Search"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "outline-success",
                                    children: "Search"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const app_header = (Header);

;// CONCATENATED MODULE: ./src/components/app.footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "FOOTER"
    });
}
/* harmony default export */ const app_footer = (Footer);

;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(app_header, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(app_footer, {})
                })
            ]
        })
    });
}


/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`F:\1.DoAN\Test3\testting3\src\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 3824:
/***/ (() => {



/***/ }),

/***/ 6934:
/***/ (() => {



/***/ })

};
;