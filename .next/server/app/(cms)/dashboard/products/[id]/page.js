(()=>{var e={};e.id=322,e.ids=[322],e.modules={85890:e=>{"use strict";e.exports=require("better-sqlite3")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78893:e=>{"use strict";e.exports=require("buffer")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},98216:e=>{"use strict";e.exports=require("net")},55315:e=>{"use strict";e.exports=require("path")},68621:e=>{"use strict";e.exports=require("punycode")},76162:e=>{"use strict";e.exports=require("stream")},82452:e=>{"use strict";e.exports=require("tls")},17360:e=>{"use strict";e.exports=require("url")},71568:e=>{"use strict";e.exports=require("zlib")},6005:e=>{"use strict";e.exports=require("node:crypto")},93977:e=>{"use strict";e.exports=require("node:fs/promises")},49411:e=>{"use strict";e.exports=require("node:path")},5197:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(49442),a=r(10042),o=r(48190),i=r.n(o),n=r(63289),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["(cms)",{children:["dashboard",{children:["products",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,65332)),"/Users/jojo/Documents/Projects/money-tree-next/src/app/(cms)/dashboard/products/[id]/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,17004)),"/Users/jojo/Documents/Projects/money-tree-next/src/app/(cms)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/jojo/Documents/Projects/money-tree-next/src/app/(cms)/dashboard/products/[id]/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(cms)/dashboard/products/[id]/page",pathname:"/dashboard/products/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},34515:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"602386b55223fcc338d2106e0bdfff44d7a3f3f3ee":()=>p,"60a5b869ca4645c8d08ae632fe74b8d531c5a58bbe":()=>c});var s=r(63722);r(20453);var a=r(32169),o=r(95553);r(93977),r(49411);var i=r(80186);async function n(e){let t=e.replace(`${process.env.PROJECT_SUPABASE_URL}/storage/v1/object/public/products/`,""),{data:r}=await i.Z.storage.from("products").remove([t]);return r}var l=r(20754),d=r(46309);async function c(e,t){let r=t.get("id");if(!r)return{error:"Something went wrong",ok:!1,data:{}};try{let e=await a.Z.query.$Products.findFirst({where:(0,l.eq)(o.$Products.id,Number(r))});if(e&&(e.previewImage&&await n(e.previewImage),e.images))for(let t of JSON.parse(e.images))t&&await n(t);let t=await a.Z.delete(o.$Products).where((0,l.eq)(o.$Products.id,Number(r)));return{error:null,data:t,ok:!1}}catch(e){if(e instanceof Error)return{error:e.message,data:{},ok:!1};return{error:"Something went wrong",data:{},ok:!1}}}(0,d.h)([c]),(0,s.j)(c,"60a5b869ca4645c8d08ae632fe74b8d531c5a58bbe",null);var u=r(28893);async function p(e,t){let r;let s=o.insertProductSchema.safeParse({id:Number(t.get("id")),title:t.get("title"),description:t.get("description"),sku:t.get("sku"),price:Number(t.get("price"))||void 0,discount:Number(t.get("discount"))||void 0,stock:Number(t.get("stock"))||void 0,categoryId:Number(t.get("categoryId"))||void 0,keywordsSearch:t.get("keywordsSearch"),isFeatured:"on"===t.get("isFeatured"),isActive:"on"===t.get("isActive")});if(!s.success)return{error:s.error.flatten().fieldErrors,ok:!1,data:{}};if(!s.data.id)return{error:"Something went wrong",ok:!1,data:{}};let i=[t.get("image1"),t.get("image2"),t.get("image3"),t.get("image4"),t.get("image5")],d=[];try{r=await a.Z.query.$Products.findFirst({where:(0,l.eq)(o.$Products.id,s.data.id)});let e=r?.images?JSON.parse(r.images):[null,null,null,null,null];if(!r)throw Error("Product not found");d=i.map(async(t,r)=>{if(!t||!(t instanceof Blob))throw Error("Файл не найден или неправильный формат");if(0===t.size)return e[r];let s=await (0,u.Z)(t,`${r}`);if(e[r]&&await n(e[r]),!s.ok)throw Error(s.error||"Не удалось сохранить изображение");return"string"==typeof s.data?s.data:null})}catch(e){if(console.log(e),e instanceof Error)return{ok:!1,error:e.message,data:{}};return{ok:!1,error:"Unknown error",data:{}}}let c=t.get("preview");if(!c||!(c instanceof Blob))return{error:"Файл не найден или неправильный формат",ok:!1,data:{}};let p=null;if(c&&c.size>0){let e=await (0,u.Z)(c,"preview");if("string"==typeof e.data&&(p=e.data,r?.previewImage&&await n(r.previewImage)),e.error)return{error:e.error,ok:!1,data:{}}}try{p&&(s.data.previewImage=p);let e=JSON.stringify(await Promise.all(d)),t={...s.data,updatedAt:new Date().toISOString(),images:e},r=await a.Z.update(o.$Products).set(t).where((0,l.eq)(o.$Products.id,s.data.id)).returning();return{error:null,data:r,ok:!0}}catch(e){if(e instanceof Error)return{error:e.message,ok:!1,data:{}};return{error:"Something went wrong",ok:!1,data:{}}}}(0,d.h)([p]),(0,s.j)(p,"602386b55223fcc338d2106e0bdfff44d7a3f3f3ee",null)},56994:()=>{},13184:()=>{},12975:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,46472,23)),Promise.resolve().then(r.t.bind(r,42461,23)),Promise.resolve().then(r.t.bind(r,48190,23)),Promise.resolve().then(r.t.bind(r,15282,23)),Promise.resolve().then(r.t.bind(r,56613,23)),Promise.resolve().then(r.t.bind(r,5486,23)),Promise.resolve().then(r.t.bind(r,58825,23))},750:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,52144,23)),Promise.resolve().then(r.t.bind(r,62302,23)),Promise.resolve().then(r.t.bind(r,63582,23)),Promise.resolve().then(r.t.bind(r,9587,23)),Promise.resolve().then(r.t.bind(r,65329,23)),Promise.resolve().then(r.t.bind(r,50599,23)),Promise.resolve().then(r.t.bind(r,62118,23))},55877:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,60903,23)),Promise.resolve().then(r.t.bind(r,90821,23)),Promise.resolve().then(r.bind(r,22477)),Promise.resolve().then(r.bind(r,60592))},60306:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,62704,23)),Promise.resolve().then(r.t.bind(r,73510,23)),Promise.resolve().then(r.bind(r,21929)),Promise.resolve().then(r.bind(r,98594))},42347:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(20149),a=r(14971),o=r(63606);function i({initialValue:e=null,keyName:t,label:r}){let[i,n]=(0,o.useState)(e);return(0,s.jsxs)("div",{className:"flex flex-col",children:[r&&(0,s.jsx)("label",{htmlFor:t,children:r}),(0,s.jsx)("input",{onChange:e=>{let t=e.target.files?.[0];t&&n(URL.createObjectURL(t))},type:"file",name:t,id:t,accept:"image/*"}),i&&(0,s.jsx)(a.default,{src:i,alt:t,width:200,height:200,className:"w-[200px] h-[200px] object-cover"})]})}},61307:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(20149);function a({showRequired:e=!0,label:t,hidden:r,...a}){let o="checkbox"===a.type,i=t&&t.length>0;return o?(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("input",{...a}),(0,s.jsx)("label",{htmlFor:a.id,className:"ml-2 text-sm",children:t})]}):(0,s.jsx)("div",{className:"flex flex-col"+(r?" hidden":""),children:i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("label",{htmlFor:a.id,className:"ml-2 mb-3",children:t}),(0,s.jsxs)("div",{className:"relative flex max-w-[400px]",children:[(0,s.jsx)("input",{...a,className:"bg-white-100 flex-1 rounded-2xl py-4 px-6 text-base border-none mb-3 "+a.className}),a.required&&e&&(0,s.jsx)("span",{className:"text-red-500 absolute right-4 top-[calc(50%-16px)]",children:"*"})]})]}):(0,s.jsxs)("div",{className:"relative flex max-w-[400px]",children:[(0,s.jsx)("input",{...a,className:"bg-white-100 flex-1 rounded-2xl py-4 px-6 text-base border-none mb-3 "+a.className}),a.required&&e&&(0,s.jsx)("span",{className:"text-red-500 absolute right-4 "+(i?"top-[calc(50%+2px)]":"top-[calc(50%-16px)]"),children:"*"})]})})}},81775:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(20149);function a({label:e,...t}){return e&&e.length>0?(0,s.jsxs)("div",{className:"flex flex-col relative",children:[(0,s.jsx)("label",{htmlFor:t.id,className:"ml-2 mb-3",children:e}),(0,s.jsx)("textarea",{id:t.id,className:"bg-white-100 rounded-2xl py-4 px-6 text-base border-none mb-3 resize-y",...t})]}):(0,s.jsx)("textarea",{className:"bg-white-100 flex w-full max-w-[400px] rounded-2xl py-4 px-6 text-base border-none mb-3 resize-y",...t})}r(63606)},21929:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(20149),a=r(63606),o=r(61307),i=r(8412);let n=(0,i.createServerReference)("60a5b869ca4645c8d08ae632fe74b8d531c5a58bbe",i.callServer,void 0,i.findSourceMapURL,"deleteProductActon");function l({product:e}){let[t,r,i]=(0,a.useActionState)(n,{data:{},ok:!1,error:null});return void 0===e?(0,s.jsx)("div",{children:"Product not found"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{className:"flex flex-col max-w-[400px] flex-1 mb-4",action:r,children:[(0,s.jsx)(o.Z,{hidden:!0,label:"id",defaultValue:e.id,type:"number",name:"id",id:"id",placeholder:"id",required:!0}),t.error&&(0,s.jsx)("pre",{children:JSON.stringify(t)}),(0,s.jsx)("button",{disabled:i,className:"bg-red-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-red-500 disabled:bg-gray-400",type:"submit",children:"Удалить"})]})})}},98594:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(20149),a=r(63606),o=r(61307),i=r(81775),n=r(42347),l=r(8412);let d=(0,l.createServerReference)("602386b55223fcc338d2106e0bdfff44d7a3f3f3ee",l.callServer,void 0,l.findSourceMapURL,"default");function c({product:e}){let[t,r,l]=(0,a.useActionState)(d,{error:null,data:{}}),c=JSON.parse(e.images||"[]");if(c.length<5)for(let e=c.length;e<5;e++)c.push(null);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{className:"flex flex-col mb-4",action:r,children:[(0,s.jsxs)("div",{className:"flex w-full justify-between",children:[(0,s.jsxs)("div",{className:"flex-1 max-w-[400px] mr-4",children:[(0,s.jsx)(o.Z,{label:"Название",defaultValue:e.title,type:"text",name:"title",id:"title",placeholder:"Название",required:!0}),(0,s.jsx)(i.Z,{label:"Описание",defaultValue:e.description||"",name:"description",id:"description",placeholder:"Описание"}),(0,s.jsx)(o.Z,{label:"Артикул",defaultValue:e.sku,type:"text",name:"sku",id:"sku",placeholder:"Артикул",required:!0}),(0,s.jsx)(o.Z,{label:"Цена",defaultValue:e.price,type:"number",name:"price",id:"price",placeholder:"Цена",required:!0})]}),(0,s.jsxs)("div",{className:"flex-1 mr-4",children:[(0,s.jsx)(o.Z,{label:"Скидка",defaultValue:e.discount||0,type:"number",name:"discount",id:"discount",placeholder:"Скидка"}),(0,s.jsx)(o.Z,{label:"Наличие",defaultValue:e.stock,type:"number",name:"stock",id:"stock",placeholder:"Наличие",required:!0}),(0,s.jsx)(o.Z,{label:"Категория",defaultValue:e.categoryId||"",type:"text",name:"categoryId",id:"categoryId",placeholder:"Категория [id]"}),(0,s.jsx)(o.Z,{label:"Ключевые слова",defaultValue:e.keywordsSearch||"",type:"text",name:"keywordsSearch",id:"keywordsSearch",placeholder:"Ключевые слова"})]})]}),(0,s.jsx)(o.Z,{hidden:!0,label:"id",defaultValue:e.id,type:"number",name:"id",id:"id",placeholder:"id",required:!0}),(0,s.jsx)(o.Z,{defaultChecked:e.isFeatured||void 0,label:"Добавить на главный экран",type:"checkbox",name:"isFeatured",id:"isFeatured"}),(0,s.jsx)(o.Z,{defaultChecked:e.isActive||void 0,label:"Активировать",type:"checkbox",name:"isActive",id:"isActive"}),(0,s.jsx)(n.Z,{label:"Превью",keyName:"preview",initialValue:e.previewImage}),(0,s.jsx)("h2",{className:"text-2xl mb-1",children:"Галерея"}),(0,s.jsx)("div",{className:"flex flex-wrap",children:c.map((e,t)=>(0,s.jsx)(n.Z,{label:`Изображение ${t+1}`,keyName:`image${t+1}`,initialValue:e},e+`${t+1}`))}),t.error&&(0,s.jsx)("pre",{children:JSON.stringify(t)}),(0,s.jsx)("button",{disabled:l,className:"bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400",type:"submit",children:"Обновить"})]})})}},65332:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,metadata:()=>u});var s=r(47705),a=r(22477),o=r(60592),i=r(38176),n=r(93726),l=r(84160),d=r(99069),c=r(71623);let u={title:"Product Dashboard",description:""};async function p({params:e}){let t;let{id:r}=await e;try{t=await n.Z.query.$Products.findFirst({where:(0,d.eq)(l.$Products.id,r)})}catch(e){console.log(e)}return t||(0,c.redirect)("/dashboard"),(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{className:"my-6",cost:t.price,discount:t.discount,id:t.id?.toString()||"",image:t.previewImage,title:t.title}),(0,s.jsx)(o.default,{product:t}),(0,s.jsx)(a.default,{product:t})]})})}},17004:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>a,viewport:()=>o});var s=r(47705);r(47453),r(32528);let a={title:"dashboard",description:""},o={width:"device-width",initialScale:1};function i({children:e}){return(0,s.jsx)("html",{lang:"ru",children:(0,s.jsx)("body",{children:e})})}},22477:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jojo/Documents/Projects/money-tree-next/src/components/app/ui/layout/dashboard/products/forms/DeleteForm.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jojo/Documents/Projects/money-tree-next/src/components/app/ui/layout/dashboard/products/forms/DeleteForm.tsx","default")},60592:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jojo/Documents/Projects/money-tree-next/src/components/app/ui/layout/dashboard/products/forms/UpdateProductForm.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jojo/Documents/Projects/money-tree-next/src/components/app/ui/layout/dashboard/products/forms/UpdateProductForm.tsx","default")},38176:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(47705);let a=function(){for(var e,t,r=0,s="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=function e(t){var r,s,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(s=e(t[r]))&&(a&&(a+=" "),a+=s)}else for(s in t)t[s]&&(a&&(a+=" "),a+=s)}return a}(e))&&(s&&(s+=" "),s+=t);return s};var o=r(76217),i=r(23496);r(66833);let n=function({cost:e=0,discount:t,id:r,image:n,title:l,className:d}){return(0,s.jsxs)(i.default,{className:a("relative flex flex-col overflow-hidden max-w-[266px] rounded-3xl shadow-[0px_0px_16px_0_rgba(51,37,87,0.15)]",d),href:`/product/${r}`,children:[t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"absolute top-4 right-4 bg-red-500 text-white-100  text-sm font-medium p-[6px] rounded-full",children:"Распродажа"}),(0,s.jsxs)("span",{className:"absolute top-4 left-4  bg-red-500 text-white-100 text-sm font-medium p-[6px] rounded-full",children:[Math.floor(100-(e-t)/e*100),"%"]})]}):null,(0,s.jsx)(o.default,{alt:l,width:266,height:235,src:n||"https://placehold.co/266x235/000000/FFFFFF/png"}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("h3",{className:"text-base text-foreground mb-4",children:l}),t?(0,s.jsxs)("p",{className:"text-green-400 flex items-center text-xl w-fit rounded-xl py-3 px-6 bg-gray-100 ",children:[e-t,"₽ ",(0,s.jsxs)("span",{className:"line-through ml-1 text-gray-400 text-xs",children:[e,"₽"]})]}):(0,s.jsxs)("p",{className:"text-foreground flex text-xl w-fit rounded-xl py-3 px-6 bg-gray-100",children:[e,"₽"]})]})]},r)}},32169:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(46223),a=r(85890),o=r.n(a),i=r(95553);let n=new(o())(process.env.DB_FILE_NAME),l=(0,s.t)({client:n,schema:i})},93726:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(54797),a=r(85890),o=r.n(a),i=r(84160);let n=new(o())(process.env.DB_FILE_NAME),l=(0,s.t)({client:n,schema:i})},95553:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$Categories:()=>l,$Products:()=>u,$Users:()=>n,insertCategorySchema:()=>d,insertProductSchema:()=>p,selectCategorySchema:()=>c,selectProductSchema:()=>m});var s=r(43642),a=r(78657),o=r(81867),i=r(43951);let n=(0,s.Px)("users",{id:(0,a.e$)().primaryKey({autoIncrement:!0}),email:(0,o.fL)().notNull().unique(),password_hash:(0,o.fL)().notNull(),salt:(0,o.fL)().notNull()}),l=(0,s.Px)("categories",{id:(0,a.e$)().primaryKey({autoIncrement:!0}),name:(0,o.fL)("name").notNull(),parentId:(0,a._L)("parent_id").references(()=>l.id,{onDelete:"cascade"})}),d=(0,i.fC)(l),c=(0,i.IO)(l),u=(0,s.Px)("products",{id:(0,a._L)("id").primaryKey({autoIncrement:!0}),sku:(0,o.fL)("sku").notNull().unique(),title:(0,o.fL)("title").notNull(),description:(0,o.fL)("description"),price:(0,a._L)("price").notNull().default(0),discount:(0,a._L)("discount").default(0),stock:(0,a._L)("stock").notNull().default(0),previewImage:(0,o.fL)("previewImage"),images:(0,o.fL)("images").notNull().$default(()=>JSON.stringify([null,null,null,null,null])),categoryId:(0,a._L)("category_id").references(()=>l.id,{onDelete:"set null"}),keywordsSearch:(0,o.fL)("keywordsSearch"),isFeatured:(0,a._L)("isFeatured",{mode:"boolean"}).default(!1),isActive:(0,a._L)("isActive",{mode:"boolean"}).default(!0),createdAt:(0,o.fL)("createdAt").default(new Date().toISOString()).notNull(),updatedAt:(0,o.fL)("updatedAt").default(new Date().toISOString()).notNull()}),p=(0,i.fC)(u),m=(0,i.IO)(u)},84160:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$Categories:()=>l,$Products:()=>u,$Users:()=>n,insertCategorySchema:()=>d,insertProductSchema:()=>p,selectCategorySchema:()=>c,selectProductSchema:()=>m});var s=r(89155),a=r(76718),o=r(20971),i=r(40745);let n=(0,s.Px)("users",{id:(0,a.e$)().primaryKey({autoIncrement:!0}),email:(0,o.fL)().notNull().unique(),password_hash:(0,o.fL)().notNull(),salt:(0,o.fL)().notNull()}),l=(0,s.Px)("categories",{id:(0,a.e$)().primaryKey({autoIncrement:!0}),name:(0,o.fL)("name").notNull(),parentId:(0,a._L)("parent_id").references(()=>l.id,{onDelete:"cascade"})}),d=(0,i.fC)(l),c=(0,i.IO)(l),u=(0,s.Px)("products",{id:(0,a._L)("id").primaryKey({autoIncrement:!0}),sku:(0,o.fL)("sku").notNull().unique(),title:(0,o.fL)("title").notNull(),description:(0,o.fL)("description"),price:(0,a._L)("price").notNull().default(0),discount:(0,a._L)("discount").default(0),stock:(0,a._L)("stock").notNull().default(0),previewImage:(0,o.fL)("previewImage"),images:(0,o.fL)("images").notNull().$default(()=>JSON.stringify([null,null,null,null,null])),categoryId:(0,a._L)("category_id").references(()=>l.id,{onDelete:"set null"}),keywordsSearch:(0,o.fL)("keywordsSearch"),isFeatured:(0,a._L)("isFeatured",{mode:"boolean"}).default(!1),isActive:(0,a._L)("isActive",{mode:"boolean"}).default(!0),createdAt:(0,o.fL)("createdAt").default(new Date().toISOString()).notNull(),updatedAt:(0,o.fL)("updatedAt").default(new Date().toISOString()).notNull()}),p=(0,i.fC)(u),m=(0,i.IO)(u)},28893:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(6005);r(93977),r(49411);var a=r(80186);async function o(e,t=""){let{data:r,error:i}=await a.Z.storage.from("products").upload(`${t?t+"_":""}${(0,s.randomUUID)()}`,e);return i?(console.log(i),{ok:!1,error:i.message,data:{}}):{ok:!0,error:null,data:`${process.env.PROJECT_SUPABASE_URL}/storage/v1/object/public/${r.fullPath}`}}},80186:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(62132).eI)(process.env.PROJECT_SUPABASE_URL||"",process.env.PROJECT_SUPABASE_KEY||"")},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(15394);let a=async e=>[{type:"image/x-icon",sizes:"32x31",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},32528:()=>{}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[492,146,394,704,710,805,816,70],()=>r(5197));module.exports=s})();