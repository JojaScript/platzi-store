(()=>{"use strict";var e,t={7876:(e,t,o)=>{var r;o.d(t,{Z:()=>c}),e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a=function(e){return{type:"ADD_TO_CART",payload:e}},l=function(e){return{type:"REMOVE_FROM_CART",payload:e}},d={addToCart:a,removeFromCart:l},n=d;const c=n;var s,i;(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(a,"addToCart","/home/gndx/develop/courses/platzi-store/src/actions/index.js"),s.register(l,"removeFromCart","/home/gndx/develop/courses/platzi-store/src/actions/index.js"),s.register(d,"actions","/home/gndx/develop/courses/platzi-store/src/actions/index.js"),s.register(n,"default","/home/gndx/develop/courses/platzi-store/src/actions/index.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},5386:(e,t,o)=>{o.d(t,{Z:()=>n});var r,a=o(7294);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(){return a.createElement("div",{className:"Footer"},a.createElement("p",{className:"Footer-title"},"Platzi Store"),a.createElement("p",{className:"Footer-copy"},"Todos los Izquierdos Reservados"))},d=l;const n=d;var c,s;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(l,"Footer","/home/gndx/develop/courses/platzi-store/src/components/Footer.jsx"),c.register(d,"default","/home/gndx/develop/courses/platzi-store/src/components/Footer.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},4627:(e,t,o)=>{o.d(t,{Z:()=>p});var r,a=o(7294),l=o(3727),d=o(4308),n=o(1286),c=o(9794);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s=function(e){return a.createElement("div",{className:"Header"},a.createElement("h1",{className:"Header-title"},a.createElement(l.rU,{to:"/"},a.createElement("img",{src:n,alt:"logo",width:"32"}),a.createElement(c.Z,null))),a.createElement("div",{className:"Header-checkout"},a.createElement(l.rU,{to:"/checkout"},a.createElement("i",{className:"fas fa-shopping-basket"})),e.cart.length>0&&a.createElement("div",{className:"Header-alert"},e.cart.length)))},i=function(e){return{cart:e.cart}},u=(0,d.$j)(i,null)(s);const p=u;var f,m;(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(s,"Header","/home/gndx/develop/courses/platzi-store/src/components/Header.jsx"),f.register(i,"mapStateToProps","/home/gndx/develop/courses/platzi-store/src/components/Header.jsx"),f.register(u,"default","/home/gndx/develop/courses/platzi-store/src/components/Header.jsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)},2230:(e,t,o)=>{o.d(t,{Z:()=>s});var r,a=o(7294),l=o(4627),d=o(5386);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n=function(e){var t=e.children;return a.createElement("div",{className:"Main"},a.createElement(l.Z,null),t,a.createElement(d.Z,null))},c=n;const s=c;var i,u;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(n,"Layout","/home/gndx/develop/courses/platzi-store/src/components/Layout.jsx"),i.register(c,"default","/home/gndx/develop/courses/platzi-store/src/components/Layout.jsx")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},9794:(e,t,o)=>{o.d(t,{Z:()=>n});var r,a=o(7294);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(){return a.createElement("span",null,"Platzi Stores")},d=l;const n=d;var c,s;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(l,"Logo","/home/gndx/develop/courses/platzi-store/src/components/Logo.jsx"),c.register(d,"default","/home/gndx/develop/courses/platzi-store/src/components/Logo.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},3217:(e,t,o)=>{o.d(t,{Z:()=>n});var r,a=o(7294);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(e){var t=e.product,o=e.handleAddToCart;return a.createElement("div",{className:"Products-item"},a.createElement("img",{src:t.image,alt:t.title}),a.createElement("div",{className:"Products-item-info"},a.createElement("h2",null,t.title,a.createElement("span",null,"$",t.price)),a.createElement("p",null,t.description)),a.createElement("button",{type:"button",onClick:o(t)},"Comprar"))},d=l;const n=d;var c,s;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(l,"Product","/home/gndx/develop/courses/platzi-store/src/components/Product.jsx"),c.register(d,"default","/home/gndx/develop/courses/platzi-store/src/components/Product.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},219:(e,t,o)=>{o.d(t,{Z:()=>i});var r,a=o(7294),l=o(744),d=o(3217);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},c=function(){var e=(0,a.useContext)(l.Z).products,t=function(e){return function(){console.log(e)}};return a.createElement("div",{className:"Products"},a.createElement("div",{className:"Products-items"},e.map((function(e){return a.createElement(d.Z,{key:e.id,product:e,handleAddToCart:t})}))))};n(c,"useContext{{ products }}");var s=c;const i=s;var u,p;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(c,"Products","/home/gndx/develop/courses/platzi-store/src/components/Products.jsx"),u.register(s,"default","/home/gndx/develop/courses/platzi-store/src/components/Products.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},9982:(e,t,o)=>{o.d(t,{Z:()=>u});var r,a=o(7294),l=o(4308),d=o(7876);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n=function(e){var t=e.cart;return a.createElement("div",{className:"Checkout"},a.createElement("div",{className:"Checkout-content"},t.length>0?a.createElement("h3",null,"Lista de Pedidos:"):a.createElement("h2",null,"Sin Pedidos"),t.map((function(t){return a.createElement("div",{className:"Checkout-item",key:t.title},a.createElement("div",{className:"Checkout-element"},a.createElement("h4",null,t.title),a.createElement("span",null,"$",t.price)),a.createElement("button",{type:"button",onClick:(o=t,function(){e.removeFromCart(o)})},a.createElement("i",{className:"fas fa-trash-alt"})));var o}))),t.length>0&&a.createElement("div",{className:"Checkout-sidebar"},a.createElement("h3",null,"Precio Total: $ ".concat(t.reduce((function(e,t){return e+t.price}),0)))))},c=function(e){return{cart:e.cart}},s={removeFromCart:d.Z.removeFromCart},i=(0,l.$j)(c,s)(n);const u=i;var p,f;(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(n,"Checkout","/home/gndx/develop/courses/platzi-store/src/containers/Checkout.jsx"),p.register(c,"mapStateToProps","/home/gndx/develop/courses/platzi-store/src/containers/Checkout.jsx"),p.register(s,"mapDispatchToProps","/home/gndx/develop/courses/platzi-store/src/containers/Checkout.jsx"),p.register(i,"default","/home/gndx/develop/courses/platzi-store/src/containers/Checkout.jsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},8255:(e,t,o)=>{o.d(t,{Z:()=>c});var r,a=o(7294),l=o(219);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d=function(){return a.createElement(l.Z,null)},n=d;const c=n;var s,i;(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(d,"Home","/home/gndx/develop/courses/platzi-store/src/containers/Home.jsx"),s.register(n,"default","/home/gndx/develop/courses/platzi-store/src/containers/Home.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},4341:(e,t,o)=>{o.d(t,{Z:()=>n});var r,a=o(7294);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(){return a.createElement("h1",null,"NotFound")},d=l;const n=d;var c,s;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(l,"NotFound","/home/gndx/develop/courses/platzi-store/src/containers/NotFound.jsx"),c.register(d,"default","/home/gndx/develop/courses/platzi-store/src/containers/NotFound.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},744:(e,t,o)=>{o.d(t,{Z:()=>n});var r,a=o(7294);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=a.createContext({}),d=l;const n=d;var c,s;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(l,"AppContext","/home/gndx/develop/courses/platzi-store/src/context/AppContext.js"),c.register(d,"default","/home/gndx/develop/courses/platzi-store/src/context/AppContext.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},2151:(e,t,o)=>{o.d(t,{Z:()=>v});var r,a=o(2137),l=o(4738),d=o(7757),n=o.n(d),c=o(7294),s=o(9669),i=o.n(s);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p="https://us-central1-gndx-fake-api.cloudfunctions.net/api",f=function(){var e=(0,c.useState)([]),t=(0,l.Z)(e,2),o=t[0],r=t[1];return(0,c.useEffect)((0,a.Z)(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()(p);case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)}))),[]),{products:o}};u(f,"useState{[products, setProducts]([])}\nuseEffect{}");var m=f;const v=m;var b,g;(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(p,"API","/home/gndx/develop/courses/platzi-store/src/hooks/useInitialState.js"),b.register(f,"useInitialState","/home/gndx/develop/courses/platzi-store/src/hooks/useInitialState.js"),b.register(m,"default","/home/gndx/develop/courses/platzi-store/src/hooks/useInitialState.js")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)},5579:(e,t,o)=>{var r,a=o(7294),l=o(3935),d=o(4308),n=o(4890),c=o(6498),s=o(4322),i=o(4118);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,p,f=(0,n.MT)(s.Z,i.Z);l.render(a.createElement(d.zt,{store:f},a.createElement(c.Z,null)),document.getElementById("app")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(f,"store","/home/gndx/develop/courses/platzi-store/src/index.js"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},4118:(e,t,o)=>{var r;o.d(t,{Z:()=>l}),e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a={cart:[],products:[{id:"1",image:"https://arepa.s3.amazonaws.com/camiseta.png",title:"Camiseta",price:25,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"3",image:"https://arepa.s3.amazonaws.com/mug.png",title:"Mug",price:10,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"4",image:"https://arepa.s3.amazonaws.com/pin.png",title:"Pin",price:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"5",image:"https://arepa.s3.amazonaws.com/stickers1.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"6",image:"https://arepa.s3.amazonaws.com/stickers2.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"7",image:"https://arepa.s3.amazonaws.com/hoodie.png",title:"Hoodie",price:35,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]};const l=a;var d,n;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(a,"default","/home/gndx/develop/courses/platzi-store/src/initialState.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)},4322:(e,t,o)=>{o.d(t,{Z:()=>i});var r,a=o(8927),l=o(6156);function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){(0,l.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c=function(e,t){switch(t.type){case"ADD_TO_CART":return n(n({},e),{},{cart:[].concat((0,a.Z)(e.cart),[t.payload])});case"REMOVE_FROM_CART":return n(n({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});default:return e}},s=c;const i=s;var u,p;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(c,"reducer","/home/gndx/develop/courses/platzi-store/src/reducers/index.js"),u.register(s,"default","/home/gndx/develop/courses/platzi-store/src/reducers/index.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},6498:(e,t,o)=>{o.d(t,{Z:()=>g});var r,a=o(7294),l=o(3727),d=o(5977),n=o(8255),c=o(9982),s=o(2230),i=o(4341),u=o(744),p=o(2151),f=o(1570);e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=function(){var e=(0,p.Z)(),t=Object.keys(e.products).length;return a.createElement(a.Fragment,null,t>0?a.createElement(u.Z.Provider,{value:e},a.createElement(l.VK,null,a.createElement(s.Z,null,a.createElement(d.rs,null,a.createElement(d.AW,{exact:!0,path:"/",component:n.Z}),a.createElement(d.AW,{exact:!0,path:"/checkout",component:c.Z}),a.createElement(d.AW,{component:i.Z}))))):a.createElement("h1",null,"Cargando..."))};m(v,"useInitialState{initialState}",(function(){return[p.Z]}));var b=(0,f.w)(v);const g=b;var L,H;(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(L.register(v,"App","/home/gndx/develop/courses/platzi-store/src/routes/App.jsx"),L.register(b,"default","/home/gndx/develop/courses/platzi-store/src/routes/App.jsx")),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&H(e)},1286:(e,t,o)=>{e.exports=o.p+"2919f2487ede6b463f58.png"}},o={};function r(e){var a=o[e];if(void 0!==a)return a.exports;var l=o[e]={id:e,loaded:!1,exports:{}};return t[e](l,l.exports,r),l.loaded=!0,l.exports}r.m=t,e=[],r.O=(t,o,a,l)=>{if(!o){var d=1/0;for(s=0;s<e.length;s++){for(var[o,a,l]=e[s],n=!0,c=0;c<o.length;c++)(!1&l||d>=l)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(n=!1,l<d&&(d=l));n&&(e.splice(s--,1),t=a())}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[o,a,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.j=177,(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={177:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var a,l,[d,n,c]=o,s=0;for(a in n)r.o(n,a)&&(r.m[a]=n[a]);for(c&&c(r),t&&t(o);s<d.length;s++)l=d[s],r.o(e,l)&&e[l]&&e[l][0](),e[d[s]]=0;r.O()},o=self.webpackChunkplatzi_store=self.webpackChunkplatzi_store||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=r.O(void 0,[351,216],(()=>r(5579)));a=r.O(a)})();