(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{5510:function(e,t,s){Promise.resolve().then(s.t.bind(s,413,23)),Promise.resolve().then(s.t.bind(s,8326,23)),Promise.resolve().then(s.bind(s,9491)),Promise.resolve().then(s.bind(s,1313))},9491:function(e,t,s){"use strict";s.r(t);var n=s(7437),a=s(2265),r=s(7486),l=s(4033),o=s(6348),i=s(1396),c=s.n(i),u=s(2646);let d=e=>{let{lang:t,currentCategory:s}=e,i=(0,l.useRouter)(),c=(0,l.usePathname)(),u=(0,l.useSearchParams)(),d=(0,a.useMemo)(()=>[{category:"specifications",name:"Specifikacija"},{category:"colors",name:"Spalvos"},{category:"decorations",name:"Dekoratyvus skirtukai"},{category:"glass",name:"Stiklas"},{category:"accessories",name:"Aksesuarai"},{category:"drawings",name:"Brėžiniai"}],[t]),m=(0,a.useCallback)((e,t)=>{let s=new URLSearchParams(u.toString());return s.set(e,t),s.toString()},[u]),f=d.map(e=>(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)("li",{onClick:()=>{i.push("".concat(c,"?").concat(m("category",e.category)),{scroll:!1})},onKeyDown:()=>{i.push("".concat(c,"?").concat(m("category",e.category)),{scroll:!1})},className:(0,o.cn)("cursor-pointer",e.category===s?"font-semibold text-neutral-900":""),children:e.name}),(0,n.jsx)(r.Z,{variant:"vertical",className:"h-16 basis-0.5 "})]},e.category));return(0,n.jsx)(n.Fragment,{children:f})};t.default=e=>{let{specs:t,accs:s,lang:o}=e,i=(0,l.useSearchParams)(),m=(0,a.useMemo)(()=>{let e=i.get("category");return null!=e?e:"specifications"},[i]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("nav",{id:"details",children:[(0,n.jsx)(r.Z,{className:"mt-8 sm:mt-4"}),(0,n.jsx)("ul",{className:"flex flex-row flex-wrap items-center gap-x-2 text-sm text-neutral-500",children:(0,n.jsx)(d,{lang:o,currentCategory:m})})]}),(0,n.jsxs)("section",{className:"mb-6  w-full gap-4 px-4",children:["specifications"===m&&(0,n.jsx)("div",{className:"lg:basis-1/2",dangerouslySetInnerHTML:{__html:t}}),"accessories"===m&&(0,n.jsx)("div",{className:"lg:basis-1/2",dangerouslySetInnerHTML:{__html:s}}),"colors"===m&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("p",{children:["See our websites for more information and available colors: ",(0,n.jsx)("br",{}),(0,n.jsx)(c(),{href:"https://www.hfasader.no/byggevarer/fargevalg/fargevalg-pvc/",children:(0,n.jsx)(u.z,{className:"p-0",variant:"link",children:"https://www.hfasader.no/byggevarer/fargevalg/fargevalg-pvc/"})})]})})]})]})}},1313:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(7437),a=s(6691),r=s.n(a),l=s(2265),o=s(2646),i=s(9370),c=s(6348);let u=e=>{let{selected:t,src:s,index:a,onClick:l}=e;return(0,n.jsx)("div",{className:(0,c.cn)(t?"opacity-100":""),children:(0,n.jsxs)("button",{onClick:l,className:(0,c.cn)("h-32 w-32 rounded-sm overflow-hidden  relative  cursor-pointer touch-manipulation bg-transparent  duration-300"),type:"button",children:[(0,n.jsx)(r(),{className:"block object-contain bg-white",src:s,fill:!0,sizes:"10w",alt:"slide ".concat(a)}),(0,n.jsx)("div",{className:(0,c.cn)("absolute inset-0 bg-black duration-300",t?"opacity-0":"opacity-30")})]})})};var d={src:"/_next/static/media/longChevron.c2b58e7b.svg",height:128,width:25,blurWidth:0,blurHeight:0},m=e=>{let{images:t,options:s}=e,[a,o]=(0,l.useState)(0),[m,f]=(0,i.Z)(s),[h,g]=(0,i.Z)({}),x=(0,l.useCallback)(e=>{f&&g&&f.scrollTo(e)},[f,g]),v=(0,l.useCallback)(()=>{f&&g&&t.length!==f.selectedScrollSnap()&&(o(f.selectedScrollSnap()),g.scrollTo(f.selectedScrollSnap()))},[f,g,t.length]);return(0,l.useEffect)(()=>{f&&(v(),f.on("select",v),f.on("reInit",v))},[f,v]),(0,n.jsxs)("section",{className:"w-full px-4 overflow-hidden",children:[(0,n.jsxs)("div",{className:"relative w-full mx-auto sm:w-fit",ref:m,children:[(0,n.jsx)("div",{className:"w-full mx-auto sm:max-w-sm lg:max-w-[36rem] flex touch-pan-y gap-4",children:t.map((e,t)=>(0,n.jsxs)("div",{className:"relative overflow-hidden rounded-lg sm:h-96 h-80 lg:h-[36rem] w-full sm:aspect-square flex-none",children:[(0,n.jsx)(r(),{className:"object-contain bg-white",src:e,alt:e,sizes:"10w 100vw",fill:!0}),(0,n.jsx)("div",{className:(0,c.cn)("absolute inset-0 bg-black duration-300",a===t?"opacity-0":"opacity-60")})]},e))}),(0,n.jsxs)("div",{className:"hidden sm:max-w-sm lg:max-w-[36rem] mx-auto  justify-between lg:flex absolute inset-0 w-full h-full",children:[(0,n.jsx)(r(),{src:d,alt:"Arrow left",onClick:()=>{a>0&&x(a-1)},className:(0,c.cn)("select-none opacity-70 hover:opacity-100 duration-300 -ml-16 cursor-pointer",0===a&&"opacity-0 hover:opacity-0 cursor-auto w-0")}),(0,n.jsx)(r(),{src:d,alt:"Arrow left",onClick:()=>{a+1<t.length&&x(a+1)},className:(0,c.cn)("select-none opacity-70 hover:opacity-100 duration-300 -mr-16 rotate-180 cursor-pointer",a+1===t.length&&"opacity-0 hover:opacity-0 cursor-auto w-0")})]})]}),(0,n.jsx)("div",{className:"w-full max-w-5xl mx-auto mt-4 touch-pan-y",ref:h,children:(0,n.jsx)("div",{className:"flex flex-row gap-2",children:t.map((e,t)=>(0,n.jsx)(u,{onClick:()=>x(t),selected:t===a,index:t,src:e||""},e))})})]})};function f(e){let{isOpen:t,setIsOpen:s,children:a}=e;return(0,l.useEffect)(()=>{t?document.body.classList.add("overflow-y-hidden"):document.body.classList.remove("overflow-y-hidden")},[t]),(0,n.jsxs)("div",{className:(0,c.cn)("pointer-events-none fixed inset-0 z-50 flex items-center justify-center",t?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"),children:[(0,n.jsx)("div",{className:(0,c.cn)("fixed inset-0 bg-black duration-200",t?"pointer-events-auto bg-opacity-70":"pointer-events-none opacity-0"),onClick:()=>{s(!1)},onKeyDown:()=>{s(!1)}}),a]})}s(9095);var h=s(8623);function g(e){let{src:t,setPeekImage:s,setFocusImage:a}=e;return(0,n.jsx)("li",{onClick:()=>{a(t)},onKeyDown:()=>{a(t)},onMouseEnter:()=>{s(t)},onMouseLeave:()=>{s(null)},children:(0,n.jsx)(o.z,{variant:"outline",className:"relative w-12 h-12 overflow-hidden border-0",children:(0,n.jsx)(r(),{src:t,alt:"window image",sizes:"vw-100",className:"object-contain mix-blend-normal hover:mix-blend-darken",fill:!0})})})}function x(e){let{images:t,defaultImage:s}=e,[a,i]=(0,l.useState)(!1),[c,u]=(0,l.useState)(s),[d,x]=(0,l.useState)(null);return(0,n.jsxs)("figure",{className:"relative w-full h-full flex-basis ",children:[(0,n.jsx)(r(),{src:d||c||"",alt:"window image",sizes:"vw-100",fill:!0,className:"object-contain px-8 max-h-96"}),(0,n.jsx)("div",{className:"absolute left-0 flex items-center h-full",children:(0,n.jsxs)("ul",{className:"flex flex-col items-center justify-center gap-2 overflow-y-scroll max-h-72",children:[t.slice(0,4).map(e=>(0,n.jsx)(g,{src:e,setFocusImage:u,setPeekImage:x},e)),t.length>4?(0,n.jsx)(o.z,{variant:"ghost",size:"icon",onClick:()=>i(!0),children:(0,n.jsx)("span",{className:"font-semibold text-center",children:"..."})}):null]})}),(0,n.jsx)(o.z,{variant:"ghost",size:"icon",className:"absolute bottom-0 right-0 my-4 sm:mx-4",onClick:()=>{i(!0)},children:(0,n.jsx)(h.Z,{className:"text-neutral-900"})}),(0,n.jsx)(f,{isOpen:a,setIsOpen:i,children:(0,n.jsx)(m,{images:t})})]})}x.Item=g;var v=x},2646:function(e,t,s){"use strict";s.d(t,{z:function(){return c}});var n=s(7437),a=s(2265),r=s(7256),l=s(9213),o=s(6348);let i=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:s,variant:a,size:l,asChild:c=!1,...u}=e,d=c?r.g7:"button";return(0,n.jsx)(d,{className:(0,o.cn)(i({variant:a,size:l,className:s})),ref:t,...u})});c.displayName="Button"},7486:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(7437),a=s(6348);let r={vertical:"h-full w-0.5 bg-gradient-to-t",horizontal:"h-0.5 w-full bg-gradient-to-l"};function l(e){let{variant:t="horizontal",className:s}=e;return(0,n.jsx)("div",{className:"".concat((0,a.cn)("from-transparent from-0% via-neutral-100 to-transparent to-90%",r[t],s))})}},6348:function(e,t,s){"use strict";s.d(t,{cn:function(){return r}});var n=s(7042),a=s(4769);function r(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[375,325,879,971,472,744],function(){return e(e.s=5510)}),_N_E=e.O()}]);