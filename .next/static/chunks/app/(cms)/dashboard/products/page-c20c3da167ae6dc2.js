(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{8184:(e,r,t)=>{Promise.resolve().then(t.bind(t,191)),Promise.resolve().then(t.bind(t,8444))},6463:(e,r,t)=>{"use strict";var s=t(1169);t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}}),t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}})},191:(e,r,t)=>{"use strict";t.d(r,{ProductColumn:()=>a});var s=t(7437);let a=[{accessorKey:"title",header:"Название"},{accessorKey:"sku",header:"Артикул"},{accessorKey:"price",header:()=>(0,s.jsx)("div",{className:"text-right",children:"Цена"}),cell:e=>{let{row:r}=e,t=parseFloat(r.getValue("price")),a=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(t);return(0,s.jsx)("div",{className:"text-right font-medium",children:a})}},{accessorKey:"discount",header:()=>(0,s.jsx)("div",{className:"text-right",children:"Скидка"}),cell:e=>{let{row:r}=e,t=parseFloat(r.getValue("discount")),a=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(t);return(0,s.jsx)("div",{className:"text-right font-medium",children:a})}}]},8444:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});var s=t(7437),a=t(3514),l=t(4175),d=t(7527),o=t(6463);function n(e){var r;let{columns:t,data:n}=e,i=(0,a.b7)({data:n,columns:t,getCoreRowModel:(0,l.sC)(),getPaginationRowModel:(0,l.G_)()}),c=(0,o.useRouter)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"rounded-md border",children:(0,s.jsxs)(d.iA,{children:[(0,s.jsx)(d.xD,{children:i.getHeaderGroups().map(e=>(0,s.jsx)(d.SC,{children:e.headers.map(e=>(0,s.jsx)(d.ss,{children:e.isPlaceholder?null:(0,a.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(d.RM,{children:(null===(r=i.getRowModel().rows)||void 0===r?void 0:r.length)?i.getRowModel().rows.map(e=>(0,s.jsx)(d.SC,{onClick:()=>c.push("/dashboard/products/".concat(e.original.id)),"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,s.jsx)(d.pj,{className:"cursor-pointer",children:(0,a.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,s.jsx)(d.SC,{children:(0,s.jsx)(d.pj,{colSpan:t.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,s.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[(0,s.jsx)("button",{onClick:()=>i.previousPage(),disabled:!i.getCanPreviousPage(),children:"Previous"}),(0,s.jsx)("button",{onClick:()=>i.nextPage(),disabled:!i.getCanNextPage(),children:"Next"})]})]})}},7527:(e,r,t)=>{"use strict";t.d(r,{iA:()=>n,RM:()=>c,pj:()=>h,ss:()=>m,xD:()=>i,SC:()=>u});var s=t(7437),a=t(2265),l=t(4839),d=t(6164);function o(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,d.m6)((0,l.W)(r))}t(357);let n=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:r,className:o("w-full caption-bottom text-sm",t),...a})})});n.displayName="Table";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("thead",{ref:r,className:o("[&_tr]:border-b",t),...a})});i.displayName="TableHeader";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("tbody",{ref:r,className:o("[&_tr:last-child]:border-0",t),...a})});c.displayName="TableBody",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("tfoot",{ref:r,className:o("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...a})}).displayName="TableFooter";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("tr",{ref:r,className:o("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...a})});u.displayName="TableRow";let m=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("th",{ref:r,className:o("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...a})});m.displayName="TableHead";let h=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("td",{ref:r,className:o("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...a})});h.displayName="TableCell",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("caption",{ref:r,className:o("mt-4 text-sm text-muted-foreground",t),...a})}).displayName="TableCaption"}},e=>{var r=r=>e(e.s=r);e.O(0,[667,130,215,744],()=>r(8184)),_N_E=e.O()}]);