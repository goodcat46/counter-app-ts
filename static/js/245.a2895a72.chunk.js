"use strict";(self.webpackChunkmia_erp=self.webpackChunkmia_erp||[]).push([[245,495],{5245:function(t,a,e){e.r(a),e.d(a,{default:function(){return F}});var n,o=e(168),i=e(1413),r=e(9439),l=e(8968),c=e(8495),s=e(3350),u=e(2791),d=e(870),p=e(7348),h=function(){var t=(0,p.q$)(d.cA.CATEGORIES_TR),a=(0,p.q$)(d.cA.CATEGORIES_TR);return[{label:"\u0420\u0430\u0445\u0443\u043d\u043e\u043a OUT",data:a.directory,selectorName:"countOut",dirType:d.cA.COUNTS},{label:"\u0420\u0430\u0445\u0443\u043d\u043e\u043a IN",data:a.directory,selectorName:"countIn",dirType:d.cA.COUNTS},{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457",data:t.directory,selectorName:"category",dirType:d.cA.CATEGORIES_TR}]},f=e(4165),m=e(5861),v=e(3665),b=e(3544),y=e(2603),g=(0,e(7049).H1)(y.R),S=((0,b.t)("date"),(0,b.t)("time"),(0,b.t)("type"),(0,b.t)("status"),(0,b.t)("amount"),(0,b.t)("countIn"),(0,b.t)("subCountIn"),(0,b.t)("countOut"),(0,b.t)("subCountOut"),(0,b.t)("category"),(0,b.t)("subCategory"),[{top:{name:"\u0414\u0430\u0442\u0430",align:"center",path:"eventDate"},bottom:{name:"\u0427\u0430\u0441",align:"center"},width:"90px",action:"dateSimple"},{top:{name:"\u0422\u0438\u043f",align:"start",path:"type"},bottom:{name:"\u0421\u0442\u0430\u0442\u0443\u0441",align:"start",path:"status"},width:"100px",action:"status"},{top:{name:(0,b.t)("amount"),align:"end",path:"amount"},bottom:{name:"\u0412\u0430\u043b\u044e\u0442\u0430",align:"end",path:"currency"},width:"120px",action:"numberWithSpaces"},{top:{name:(0,b.t)("countOut"),align:"start",path:"countOut.label"},bottom:{name:(0,b.t)("subCountOut"),align:"start",path:"subCountOut.label"},width:"190px",action:"valueByPath"},{top:{name:(0,b.t)("countIn"),align:"start",path:"countIn.label"},bottom:{name:(0,b.t)("subCountIn"),align:"start",path:"subCountIn.label"},width:"190px",action:"valueByPath"},{top:{name:(0,b.t)("category"),align:"start",path:"category.label"},bottom:{name:(0,b.t)("subCategory"),align:"start",path:"subCategory.label"},width:"190px",action:"valueByPath"},{top:{name:"\u0406\u043d\u0432\u043e\u0439\u0441",align:"start",path:"invoice.label"},bottom:{name:"\u041d\u043e\u043c\u0435\u0440",align:"start",path:"invoice.number"},width:"150px",action:"valueByPath"},{top:{name:"\u041e\u043f\u043b\u0430\u0442\u0430",align:"start",path:"payment.label"},bottom:{name:"\u041d\u043e\u043c\u0435\u0440",align:"start",path:"payment.number"},width:"150px",action:"valueByPath"},{top:{name:"\u041a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442",align:"start",path:"contractor.name"},bottom:{name:"\u0422\u0438\u043f",align:"start",path:"contractor.type"},width:"150px",action:"valueByPath"},{top:{name:"\u0414\u0456\u044f\u043b\u044c\u043d\u0456\u0441\u0442\u044c",align:"start",path:"activity.label"},width:"150px",action:"valueByPath"},{top:{name:"\u041f\u0440\u043e\u0435\u043a\u0442",align:"start",path:"project.label"},width:"150px",action:"valueByPath"},{top:{name:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",align:"start",path:"comment"},width:"150px",action:"valueByPath"},{top:{name:"\u0421\u0442\u0432\u043e\u0440\u0438\u0432",align:"start",path:"author.email"},bottom:{name:"\u041e\u043d\u043e\u0432\u0438\u0432",align:"start",path:"editor.email"},width:"150px",action:"valueByPath"},{top:{name:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e",align:"center",path:"createdAt"},bottom:{name:"\u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043e",align:"center",path:"updatedAt"},width:"150px",action:"dateDbl"}]),C=[{label:"\u0414\u0430\u0442\u0430",dataPath:"eventDate",filter:!1,search:!1,sort:!0},{label:(0,b.t)("type"),dataPath:"type",filter:!1,search:!0,sort:!0},{label:(0,b.t)("amount"),dataPath:"amount",filter:!1,search:!0,sort:!0},{label:"\u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043e",dataPath:"createdAt",filter:!1,search:!1,sort:!0},{label:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e",dataPath:"updatedAt",filter:!1,search:!1,sort:!0},{label:(0,b.t)("countIn"),dataPath:"countIn.label",filter:!1,search:!0,sort:!0},{label:(0,b.t)("subCountIn"),dataPath:"subCountIn.label",filter:!1,search:!0,sort:!0},{label:(0,b.t)("countOut"),dataPath:"countOut.label",filter:!1,search:!0,sort:!0},{label:(0,b.t)("subCountOut"),dataPath:"subCountOut.label",filter:!1,search:!0,sort:!0},{label:(0,b.t)("category"),dataPath:"category.label",filter:!1,search:!0,sort:!0},{label:(0,b.t)("subCategory"),dataPath:"subCategory.label",filter:!1,search:!0,sort:!0},{label:"\u041a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442",dataPath:"contractor.name",filter:!1,search:!0,sort:!0},{label:(0,b.t)("project"),dataPath:"project.label",filter:!1,search:!0,sort:!0},{label:"\u041c\u0456\u0442\u043a\u0430",dataPath:"mark.label",filter:!1,search:!0,sort:!0},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",dataPath:"status",filter:!1,search:!0,sort:!0}],P=e(9085),x=e(3185),O=function(t){var a,e=t.ctx,n=t.service,o=t.modalService,i=t.state;return{name:"editTr",title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457",icon:"edit",disabled:!(null!==(a=e.selectedRow)&&void 0!==a&&a._id),type:"onlyIcon",onClick:function(){var t=(0,m.Z)((0,f.Z)().mark((function t(){var a,r;return(0,f.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=i.transactions.find((function(t){var a;return t._id===(null===(a=e.selectedRow)||void 0===a?void 0:a._id)})),r=o.openModal({Modal:x.n.FormCreateTransaction,props:{title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457",filterOptions:g,defaultOption:g.findIndex((function(t){return t.value===(null===a||void 0===a?void 0:a.type)})),defaultState:a,fillHeight:!0,onSubmit:function(t,a){n.updateById({data:t,onSuccess:function(t){(null===a||void 0===a?void 0:a.close)&&(null===r||void 0===r||r.onClose())}})}}});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}},w=function(t){var a,e=t.ctx,n=t.service,o=t.modalService,i=t.state;return{name:"copyTr",title:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457",icon:"copy",type:"onlyIcon",disabled:!(null!==(a=e.selectedRow)&&void 0!==a&&a._id),onClick:function(){var t=(0,m.Z)((0,f.Z)().mark((function t(){var a,r;return(0,f.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=i.transactions.find((function(t){var a;return t._id===(null===(a=e.selectedRow)||void 0===a?void 0:a._id)})),r=o.openModal({Modal:x.n.FormCreateTransaction,props:{title:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457",filterOptions:g,defaultOption:g.findIndex((function(t){return t.value===(null===a||void 0===a?void 0:a.type)})),defaultState:a,fillHeight:!0,onSubmit:function(t,a){n.create({data:t,onSuccess:function(t){P.Am.success("\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e"),(null===a||void 0===a?void 0:a.close)&&(null===r||void 0===r||r.onClose())}})}}});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}},I=function(t){var a,e=t.ctx,n=t.service;t.modalService,t.state;return{name:"deleteTr",title:"\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457",icon:"delete",iconSize:"90%",type:"onlyIcon",disabled:!(null!==(a=e.selectedRow)&&void 0!==a&&a._id),onClick:function(){var t;n.deleteById({data:null===(t=e.selectedRow)||void 0===t?void 0:t._id})}}},T=function(t){t.ctx;var a=t.service,e=t.modalService;t.state;return{name:"createIncomeTr",title:"\u0414\u043e\u0445\u0456\u0434",icon:"INCOME",iconSize:"90%",type:"onlyIconFilled",disabled:!1,onClick:function(){var t=e.openModal({Modal:x.n.FormCreateTransaction,props:{title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438",filterOptions:g,defaultOption:0,fillHeight:!0,defaultState:{type:"INCOME"},onSubmit:function(e,n){a.create({data:e,onSuccess:function(a){(null===n||void 0===n?void 0:n.close)&&(null===t||void 0===t||t.onClose())}})}}})}}},E=function(t){t.ctx;var a=t.service,e=t.modalService;t.state;return{name:"createTransferTr",title:"\u041f\u0435\u0440\u0435\u043a\u0430\u0437 \u043c\u0456\u0436 \u0440\u0430\u0445\u0443\u043d\u043a\u0430\u043c\u0438",icon:"TRANSFER",iconSize:"90%",type:"onlyIconFilled",disabled:!1,onClick:function(){var t=e.openModal({Modal:x.n.FormCreateTransaction,props:{title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u0443",filterOptions:g,defaultOption:1,fillHeight:!0,defaultState:{type:"TRANSFER"},onSubmit:function(e,n){a.create({data:e,onSuccess:function(a){(null===n||void 0===n?void 0:n.close)&&(null===t||void 0===t||t.onClose())}})}}})}}},R=function(t){t.ctx;var a=t.service,e=t.modalService;t.state;return{name:"createExpenseTr",title:"\u0412\u0438\u0442\u0440\u0430\u0442\u0430",icon:"EXPENSE",iconSize:"90%",type:"onlyIconFilled",disabled:!1,onClick:function(){var t=e.openModal({Modal:x.n.FormCreateTransaction,props:{title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438",filterOptions:g,defaultOption:2,defaultState:{type:"EXPENSE"},onSubmit:function(e,n){a.create({data:e,onSuccess:function(a){(null===n||void 0===n?void 0:n.close)&&(null===t||void 0===t||t.onClose())}})},fillHeight:!0}})}}},Z=e(6931),A=e(1819),M=e(7824),k=e(3329),B=s.ZP.div(n||(n=(0,o.Z)(["\n  ","\n"])),c.VU),F=function(t){var a=(0,A.xc)()[M.d.finances],e=(0,p.cM)(),n=a.getAll,o=h(),c=function(t){var a=(0,p.cM)(),e=(0,v.f9)();return function(n){var o={state:a,service:t,modalService:e,ctx:n};return[O(o),w(o),I(o),{separator:!0},T(o),E(o),R(o)]}}(a),s=(0,u.useState)(!1),d=(0,r.Z)(s,2),f=d[0],m=d[1],b=(0,u.useState)(),y=(0,r.Z)(b,2),g=y[0],P=y[1],x=(0,u.useState)(),F=(0,r.Z)(x,2),_=F[0],N=F[1],j=(0,u.useMemo)((function(){return{tableData:e.transactions,tableTitles:S,sortParams:C.filter((function(t){return t.sort})),filterSelectors:o,hasFilter:!0,hasSearch:!0,showFooter:!0,checkBoxes:!0,actionsCreator:c,onFilterSubmit:function(t){N(t),n({data:{refresh:!0,query:{filterParams:t,sortParams:g}},onLoading:m})},onTableSortChange:function(t,a){P({sortPath:t.dataPath,sortOrder:a}),n({data:{refresh:!0,query:{sortParams:{sortPath:t.dataPath,sortOrder:a},filterParams:_}},onLoading:m})}}}),[c,_,o,n,g,e.transactions]);return(0,u.useEffect)((function(){g||_||g||_||0===e.transactions.length&&n({data:{refresh:!0},onLoading:m})}),[_,n,g,e.transactions.length]),(0,k.jsx)(Z.default,{path:t.path,children:(0,k.jsx)(B,{children:(0,k.jsx)(l.ZP,(0,i.Z)((0,i.Z)({},j),{},{isLoading:f}))})})}},8495:function(t,a,e){e.d(a,{SI:function(){return s},VU:function(){return c}});var n,o,i,r=e(168),l=e(3350),c=(0,l.iv)(n||(n=(0,r.Z)(["\n  grid-column: 1/13;\n  grid-row: 1/13;\n"]))),s=(0,l.iv)(o||(o=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n"])));(0,l.iv)(i||(i=(0,r.Z)(["\n  outline: 1px solid tomato;\n"])))}}]);
//# sourceMappingURL=245.a2895a72.chunk.js.map