(()=>{var e={};e.id=340,e.ids=[340],e.modules={85890:e=>{"use strict";e.exports=require("better-sqlite3")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},46525:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>d.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var a=r(49442),s=r(10042),o=r(48190),d=r.n(o),i=r(63289),n={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);r.d(t,n);let l=["",{children:["dashboard",{children:["products",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,52481)),"/Users/jojo/Documents/Projects/money-tree-next/app/dashboard/products/[id]/page.tsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,98158)),"/Users/jojo/Documents/Projects/money-tree-next/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/jojo/Documents/Projects/money-tree-next/app/dashboard/products/[id]/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/dashboard/products/[id]/page",pathname:"/dashboard/products/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},26362:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"601c3b6cabacb089601161c017e9ed2c8437bca412":()=>l,"60b88aa314fa41865be9f70414e18b1d8e630abef9":()=>c,"60ca856536e6a1acea9b3018c1ea677a5d9a078c6d":()=>u,"7f47281be2130e284a4e1fb47ff5de92ad66e1c68d":()=>p});var a=r(63722);r(20453);var s=r(20754),o=r(24800),d=r(23369),i=r(82557),n=r(46309);async function l(e,t){let r=d.insertProductSchema.safeParse({title:t.get("title"),description:t.get("description"),sku:t.get("sku"),price:Number(t.get("price"))||void 0,discount:Number(t.get("discount"))||void 0,stock:Number(t.get("stock"))||void 0,previewImage:t.get("previewImage"),images:t.get("images"),categoryId:Number(t.get("categoryId"))||void 0,keywordsSearch:t.get("keywordsSearch"),isFeatured:"on"===t.get("isFeatured"),isActive:"on"===t.get("isActive")});if(!r.success)return{error:r.error.flatten().fieldErrors};try{let e=await o.Z.insert(d.$Products).values(r.data);return{error:null,data:e}}catch(e){if(e instanceof Error)return{error:e.message};return{error:"Something went wrong"}}}async function c(e,t){let r=d.insertProductSchema.safeParse({id:Number(t.get("id")),title:t.get("title"),description:t.get("description"),sku:t.get("sku"),price:Number(t.get("price"))||void 0,discount:Number(t.get("discount"))||void 0,stock:Number(t.get("stock"))||void 0,previewImage:t.get("previewImage"),images:t.get("images"),categoryId:Number(t.get("categoryId"))||void 0,keywordsSearch:t.get("keywordsSearch"),isFeatured:"on"===t.get("isFeatured"),isActive:"on"===t.get("isActive")});if(!r.success)return{error:r.error.flatten().fieldErrors};if(!r.data.id)return{error:"Something went wrong"};try{let e=await o.Z.update(d.$Products).set({...r.data,updatedAt:new Date().toISOString()}).where((0,s.eq)(d.$Products.id,r.data.id));return{error:null,data:e}}catch(e){if(e instanceof Error)return{error:e.message};return{error:"Something went wrong"}}}async function u(e,t){let r=t.get("id");if(!r)return{error:"Something went wrong"};try{let e=await o.Z.delete(d.$Products).where((0,s.eq)(d.$Products.id,Number(r)));return{error:null,data:e}}catch(e){if(e instanceof Error)return{error:e.message};return{error:"Something went wrong"}}(0,i.redirect)("/dashboard")}let p=async()=>{try{return await o.Z.query.$Products.findMany()}catch(e){return console.log(e),[]}};(0,n.h)([l,c,u,p]),(0,a.j)(l,"601c3b6cabacb089601161c017e9ed2c8437bca412",null),(0,a.j)(c,"60b88aa314fa41865be9f70414e18b1d8e630abef9",null),(0,a.j)(u,"60ca856536e6a1acea9b3018c1ea677a5d9a078c6d",null),(0,a.j)(p,"7f47281be2130e284a4e1fb47ff5de92ad66e1c68d",null)},28045:(e,t,r)=>{Promise.resolve().then(r.bind(r,3847)),Promise.resolve().then(r.bind(r,34904)),Promise.resolve().then(r.t.bind(r,60903,23)),Promise.resolve().then(r.t.bind(r,90821,23))},69092:(e,t,r)=>{Promise.resolve().then(r.bind(r,54847)),Promise.resolve().then(r.bind(r,66788)),Promise.resolve().then(r.t.bind(r,62704,23)),Promise.resolve().then(r.t.bind(r,73510,23))},79252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(20149);function s({showRequired:e=!0,label:t,hidden:r,...s}){let o="checkbox"===s.type,d=t&&t.length>0;return o?(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("input",{...s}),(0,a.jsx)("label",{htmlFor:s.id,className:"ml-2 text-sm",children:t})]}):(0,a.jsxs)("div",{className:"flex flex-col"+(r?" hidden":""),children:[d&&(0,a.jsx)("label",{htmlFor:s.id,className:"ml-2 mb-3",children:t}),(0,a.jsxs)("div",{className:"relative flex max-w-[400px]",children:[(0,a.jsx)("input",{...s,className:"bg-white-100 flex-1 rounded-2xl py-4 px-6 text-base border-none mb-3 "+s.className}),s.required&&e&&(0,a.jsx)("span",{className:"text-red-500 absolute right-4 "+(d?"top-[calc(50%+2px)]":"top-[calc(50%-16px)]"),children:"*"})]})]})}},2015:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(20149);function s({label:e,...t}){return e&&e.length>0?(0,a.jsxs)("div",{className:"flex flex-col relative",children:[(0,a.jsx)("label",{htmlFor:t.id,className:"ml-2 mb-3",children:e}),(0,a.jsx)("textarea",{id:t.id,className:"bg-white-100 rounded-2xl py-4 px-6 text-base border-none mb-3 resize-y",...t})]}):(0,a.jsx)("textarea",{className:"bg-white-100 flex w-full max-w-[400px] rounded-2xl py-4 px-6 text-base border-none mb-3 resize-y",...t})}r(63606)},54847:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var a=r(20149),s=r(8412);let o=(0,s.createServerReference)("60ca856536e6a1acea9b3018c1ea677a5d9a078c6d",s.callServer,void 0,s.findSourceMapURL,"deleteProductActon");var d=r(79252),i=r(63606);function n({product:e}){let[t,r,s]=(0,i.useActionState)(o,{error:null,data:{}});return void 0===e?(0,a.jsx)("div",{children:"Product not found"}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{className:"flex flex-col max-w-[400px] flex-1 mb-4",action:r,children:[(0,a.jsx)(d.Z,{hidden:!0,label:"id",defaultValue:e.id,type:"number",name:"id",id:"id",placeholder:"id",required:!0}),t.error&&(0,a.jsx)("pre",{children:JSON.stringify(t)}),(0,a.jsx)("button",{disabled:s,className:"bg-red-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-red-500 disabled:bg-gray-400",type:"submit",children:"Удалить"})]})})}},66788:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(20149),s=r(8412);let o=(0,s.createServerReference)("60b88aa314fa41865be9f70414e18b1d8e630abef9",s.callServer,void 0,s.findSourceMapURL,"updateProductActon");var d=r(79252),i=r(2015),n=r(63606);function l({product:e}){let[t,r,s]=(0,n.useActionState)(o,{error:null,data:{}});return void 0===e?(0,a.jsx)("div",{children:"Product not found"}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{className:"flex flex-col mb-4",action:r,children:[(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsxs)("div",{className:"flex-1 max-w-[400px] mr-4",children:[(0,a.jsx)(d.Z,{label:"Название",defaultValue:e.title,type:"text",name:"title",id:"title",placeholder:"Название",required:!0}),(0,a.jsx)(i.Z,{label:"Описание",defaultValue:e.description||"",name:"description",id:"description",placeholder:"Описание"}),(0,a.jsx)(d.Z,{label:"Артикул",defaultValue:e.sku,type:"text",name:"sku",id:"sku",placeholder:"Артикул",required:!0}),(0,a.jsx)(d.Z,{label:"Цена",defaultValue:e.price,type:"number",name:"price",id:"price",placeholder:"Цена",required:!0})]}),(0,a.jsxs)("div",{className:"flex-1 mr-4",children:[(0,a.jsx)(d.Z,{label:"Скидка",defaultValue:e.discount||0,type:"number",name:"discount",id:"discount",placeholder:"Скидка"}),(0,a.jsx)(d.Z,{label:"Наличие",defaultValue:e.stock,type:"number",name:"stock",id:"stock",placeholder:"Наличие",required:!0}),(0,a.jsx)(d.Z,{label:"Категория",defaultValue:e.categoryId||"",type:"text",name:"categoryId",id:"categoryId",placeholder:"Категория [id]"}),(0,a.jsx)(d.Z,{label:"Ключевые слова",defaultValue:e.keywordsSearch||"",type:"text",name:"keywordsSearch",id:"keywordsSearch",placeholder:"Ключевые слова"})]})]}),(0,a.jsx)(d.Z,{hidden:!0,label:"id",defaultValue:e.id,type:"number",name:"id",id:"id",placeholder:"id",required:!0}),(0,a.jsx)(d.Z,{defaultChecked:e.isFeatured||void 0,label:"Добавить на главный экран",type:"checkbox",name:"isFeatured",id:"isFeatured"}),(0,a.jsx)(d.Z,{defaultChecked:e.isActive||void 0,label:"Активировать",type:"checkbox",name:"isActive",id:"isActive"}),t.error&&(0,a.jsx)("pre",{children:JSON.stringify(t)}),(0,a.jsx)("button",{disabled:s,className:"bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400",type:"submit",children:"Обновить"})]})})}},52481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>c});var a=r(47705),s=r(41037),o=r(18201),d=r(3847),i=r(34904),n=r(39145),l=r(99069);let c={title:"Product Dashboard",description:""};async function u({params:e}){let t;let{id:r}=await e;try{t=await s.Z.query.$Products.findFirst({where:(0,l.eq)(o.$Products.id,r)})}catch(e){return console.log(e),null}return t?(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)(n.Z,{cost:t.price||0,discount:t.discount||0,id:t.id?.toString()||"",image:t.previewImage||"/products/product-1.jpg",title:t.title}),(0,a.jsx)(i.default,{product:t}),(0,a.jsx)(d.default,{product:t})]})}):(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("h1",{children:"Product not found"})})}},24800:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(46223),s=r(85890),o=r.n(s),d=r(23369);let i=new(o())(process.env.DB_FILE_NAME),n=(0,a.t)({client:i,schema:d})},41037:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(54797),s=r(85890),o=r.n(s),d=r(18201);let i=new(o())(process.env.DB_FILE_NAME),n=(0,a.t)({client:i,schema:d})},23369:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$Categories:()=>n,$Products:()=>u,$Users:()=>i,insertCategorySchema:()=>l,insertProductSchema:()=>p,selectCategorySchema:()=>c,selectProductSchema:()=>m});var a=r(43642),s=r(78657),o=r(81867),d=r(86566);let i=(0,a.Px)("users",{id:(0,s.e$)().primaryKey({autoIncrement:!0}),email:(0,o.fL)().notNull().unique(),password_hash:(0,o.fL)().notNull(),salt:(0,o.fL)().notNull()}),n=(0,a.Px)("categories",{id:(0,s.e$)().primaryKey({autoIncrement:!0}),name:(0,o.fL)("name").notNull(),parentId:(0,s._L)("parent_id").references(()=>n.id,{onDelete:"cascade"})}),l=(0,d.fC)(n),c=(0,d.IO)(n),u=(0,a.Px)("products",{id:(0,s._L)("id").primaryKey({autoIncrement:!0}),sku:(0,o.fL)("sku").notNull().unique(),title:(0,o.fL)("title").notNull(),description:(0,o.fL)("description"),price:(0,s._L)("price").notNull().default(0),discount:(0,s._L)("discount").default(0),stock:(0,s._L)("stock").notNull().default(0),previewImage:(0,o.fL)("previewImage"),images:(0,o.fL)("images"),categoryId:(0,s._L)("category_id").references(()=>n.id,{onDelete:"set null"}),keywordsSearch:(0,o.fL)("keywordsSearch"),isFeatured:(0,s._L)("isFeatured",{mode:"boolean"}).default(!1),isActive:(0,s._L)("isActive",{mode:"boolean"}).default(!0),createdAt:(0,o.fL)("createdAt").default(new Date().toISOString()),updatedAt:(0,o.fL)("updatedAt").default(new Date().toISOString())}),p=(0,d.fC)(u),m=(0,d.IO)(u)},18201:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$Categories:()=>n,$Products:()=>u,$Users:()=>i,insertCategorySchema:()=>l,insertProductSchema:()=>p,selectCategorySchema:()=>c,selectProductSchema:()=>m});var a=r(89155),s=r(76718),o=r(20971),d=r(57670);let i=(0,a.Px)("users",{id:(0,s.e$)().primaryKey({autoIncrement:!0}),email:(0,o.fL)().notNull().unique(),password_hash:(0,o.fL)().notNull(),salt:(0,o.fL)().notNull()}),n=(0,a.Px)("categories",{id:(0,s.e$)().primaryKey({autoIncrement:!0}),name:(0,o.fL)("name").notNull(),parentId:(0,s._L)("parent_id").references(()=>n.id,{onDelete:"cascade"})}),l=(0,d.fC)(n),c=(0,d.IO)(n),u=(0,a.Px)("products",{id:(0,s._L)("id").primaryKey({autoIncrement:!0}),sku:(0,o.fL)("sku").notNull().unique(),title:(0,o.fL)("title").notNull(),description:(0,o.fL)("description"),price:(0,s._L)("price").notNull().default(0),discount:(0,s._L)("discount").default(0),stock:(0,s._L)("stock").notNull().default(0),previewImage:(0,o.fL)("previewImage"),images:(0,o.fL)("images"),categoryId:(0,s._L)("category_id").references(()=>n.id,{onDelete:"set null"}),keywordsSearch:(0,o.fL)("keywordsSearch"),isFeatured:(0,s._L)("isFeatured",{mode:"boolean"}).default(!1),isActive:(0,s._L)("isActive",{mode:"boolean"}).default(!0),createdAt:(0,o.fL)("createdAt").default(new Date().toISOString()),updatedAt:(0,o.fL)("updatedAt").default(new Date().toISOString())}),p=(0,d.fC)(u),m=(0,d.IO)(u)},3847:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jojo/Documents/Projects/money-tree-next/app/ui/layout/dashboard/products/forms/DeleteForm.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jojo/Documents/Projects/money-tree-next/app/ui/layout/dashboard/products/forms/DeleteForm.tsx","default")},34904:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jojo/Documents/Projects/money-tree-next/app/ui/layout/dashboard/products/forms/UpdateProductForm.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jojo/Documents/Projects/money-tree-next/app/ui/layout/dashboard/products/forms/UpdateProductForm.tsx","default")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[492,563,394,468,738,798],()=>r(46525));module.exports=a})();