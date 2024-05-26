"use strict";(self.webpackChunkcounter_app_ts=self.webpackChunkcounter_app_ts||[]).push([[751,156],{8495:function(e,t,i){i.d(t,{SI:function(){return d},VU:function(){return c}});var n,o,r,l=i(168),a=i(2360),c=(0,a.iv)(n||(n=(0,l.Z)(["\n  grid-column: 1/13;\n  grid-row: 1/13;\n"]))),d=(0,a.iv)(o||(o=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n"])));(0,a.iv)(r||(r=(0,l.Z)(["\n  outline: 1px solid tomato;\n"])))},6751:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var n,o=i(168),r=i(1413),l=i(9439),a=i(400),c=i(8495),d=i(2360),s=i(2791),u=i(6931),f=i(7348),p=i(8314),h=i(5188),m=i(7330),v=i(2156),Z=(i(763),i(387),i(1819)),b=i(7689),P=i(8553),S=i(1383),x=(0,P.H1)(m.y),y=function(){var e=(0,h.f9)(),t=(0,Z.xc)()[Z.EJ.priceManagement],i=(0,b.s0)();return(0,s.useCallback)((function(n){var o=n.selectedRow;return[{name:"openPriceList",title:"\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438",icon:"openInNew",iconSize:"90%",type:"onlyIcon",disabled:!(null!==o&&void 0!==o&&o._id),onClick:function(){(null===o||void 0===o?void 0:o._id)&&i("".concat(null===o||void 0===o?void 0:o._id))}},{name:"editPriceList",title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",icon:"edit",iconSize:"90%",type:"onlyIcon",disabled:!0},{name:"copyPriceList",title:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438",icon:"copy",iconSize:"90%",type:"onlyIcon",disabled:!0},{name:"archivePriceList",title:"\u0410\u0440\u0445\u0456\u0432",icon:"archive",iconSize:"90%",type:"onlyIcon",disabled:!0},{separator:!0},{name:"createPriceList",title:"\u041d\u043e\u0432\u0438\u0439",icon:"plus",iconSize:"90%",type:"onlyIconFilled",disabled:!1,onClick:function(){var i=e.openModal({ModalChildren:v.default,modalChildrenProps:{filterOptions:x,defaultData:{type:"purchases"},onSubmit:function(e,n){t.createList({data:e,onSuccess:function(e){(null===n||void 0===n?void 0:n.onSuccess)&&(null===n||void 0===n||n.onSuccess(e)),(null===n||void 0===n?void 0:n.close)&&(null===i||void 0===i||i.onClose()),S.kl.success("Created price list: ".concat(e.label))}})}}})}}]}),[e,i,t])},g=i(6981),j=i(3329),C=d.ZP.div(n||(n=(0,o.Z)(["\n  ","\n"])),c.VU),_=function(e){var t=(0,p.Z)(),i=(0,f.Pm)(),n=(0,b.s0)(),o=t.getAll,c=y(),d=(0,s.useState)(!1),h=(0,l.Z)(d,2),m=h[0],v=h[1],Z=(0,s.useState)(),P=(0,l.Z)(Z,2),S=P[0],x=P[1],_=(0,s.useState)(),k=(0,l.Z)(_,2),L=k[0],F=k[1],w=(0,s.useMemo)((function(){return{tableData:i.lists,tableTitles:g.QJ,isFilter:!1,isSearch:!0,footer:!1,checkBoxes:!0,actionsCreator:c,onRowDoubleClick:function(e){(null===e||void 0===e?void 0:e._id)&&n("".concat(null===e||void 0===e?void 0:e._id))},onFilterSubmit:function(e){F(e),o({data:{refresh:!0,query:{filterParams:e,sortParams:S}},onLoading:v}).then()},handleTableSort:function(e,t){x({dataPath:e.dataPath,sortOrder:t}),o({data:{refresh:!0,query:{sortParams:{dataPath:e.dataPath,sortOrder:t},filterParams:L}},onLoading:v}).then()}}}),[c,L,o,n,S,i.lists]);return(0,s.useEffect)((function(){S||L||S||L||0===i.lists.length&&o({data:{refresh:!0},onLoading:v,onSuccess:function(e){console.log("PagePriceManagement onSuccess getAll")}})}),[L,o,S,i.lists.length]),(0,j.jsx)(u.default,{path:e.path,children:(0,j.jsx)(C,{children:(0,j.jsx)(a.ZP,(0,r.Z)((0,r.Z)({},w),{},{isLoading:m}))})})}},2156:function(e,t,i){i.r(t);var n=i(1413),o=i(4925),r=i(9656),l=i(4716),a=i(763),c=i(8095),d=i(4990),s=i(6681),u=i(6522),f=i(6757),p=i(4343),h=i(3329),m=["filterOptions","onSubmit","defaultData","edit"];t.default=function(e){e.filterOptions;var t=e.onSubmit,i=e.defaultData,v=(e.edit,(0,o.Z)(e,m)),Z=(0,f.d)(),b=(0,l.hN)({defaultValues:(0,a.omit)(i,["createdAt","updatedAt","_id"])}),P=b.formState,S=P.errors,x=P.isValid,y=b.register,g=b.setValue,j=b.handleSubmit;return(0,h.jsx)(r.Z,(0,n.Z)((0,n.Z)({isValid:x,onSubmit:j((function(e){return t&&t({data:e,_id:null===i||void 0===i?void 0:i._id},(0,n.Z)({},Z.state))})),title:"Create price list"},v),{},{fitContentV:!0,onOptSelect:function(e,t){g("type",t)},extraFooter:(0,h.jsx)(f.Z,(0,n.Z)({},Z)),children:(0,h.jsxs)(c.ZP,{fxDirection:"column",padding:"0 2px 12px",children:[(0,h.jsx)(d.Z,{label:(0,u.t)("label"),direction:"vertical",error:S.label,required:!0,children:(0,h.jsx)(s.ZP,(0,n.Z)((0,n.Z)({placeholder:(0,u.t)("label")},y("label")),{},{required:!0,autoFocus:!0}))}),(0,h.jsxs)(c.ZP,{fxDirection:"row",gap:8,children:[(0,h.jsx)(d.Z,{label:(0,u.t)("timeFrom"),direction:"vertical",error:S.timeFrom,required:!0,children:(0,h.jsx)(s.ZP,(0,n.Z)({placeholder:(0,u.t)("timeFrom"),type:"datetime-local"},y("timeFrom")))}),(0,h.jsx)(d.Z,{label:(0,u.t)("timeTo"),direction:"vertical",error:S.timeTo,required:!0,children:(0,h.jsx)(s.ZP,(0,n.Z)({placeholder:(0,u.t)("timeTo"),type:"datetime-local"},y("timeTo")))})]}),(0,h.jsx)(d.Z,{label:(0,u.t)("description"),direction:"vertical",error:S.description,children:(0,h.jsx)(p.Z,(0,n.Z)({placeholder:(0,u.t)("description")},y("description")))})]})}))}}}]);
//# sourceMappingURL=751.9911ca93.chunk.js.map