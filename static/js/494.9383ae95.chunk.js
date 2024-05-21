"use strict";(self.webpackChunkcounter_app_ts=self.webpackChunkcounter_app_ts||[]).push([[494],{8039:function(e,n,i){i.d(n,{W:function(){return C}});var t,o,r,l,d=i(168),a=i(9439),u=i(8095),s=i(6492),c=i(1413),f=i(4925),p=i(4109),h=i(2360),m=i(6522),v=i(3329),x=["extraFooter","isLoading","disabled","hasOnSubmit","hasOnReset"],b=h.ZP.footer(t||(t=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex-wrap: wrap;\n\n  //position: sticky;\n  //bottom: 0;\n  //left: 0;\n  //z-index: 10;\n\n  overflow: hidden;\n\n  width: 100%;\n\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n\n  //box-shadow: 0px -3px 32.70000076293945px 0px rgba(0, 0, 0, 0.2);\n\n  border-top: 1px solid ",";\n  //border-left: 1px solid ",";\n  //border-right: 1px solid ",";\n  color: ",";\n  fill: ",";\n  background-color: ",";\n"])),(function(e){return e.theme.modalBorderColor}),(function(e){return e.theme.modalBorderColor}),(function(e){return e.theme.modalBorderColor}),(function(e){return e.theme.fontColorHeader}),(function(e){return e.theme.fillColorHeader}),(function(e){return e.theme.modalBackgroundColor})),g=(0,h.ZP)(u.ZP)(o||(o=(0,d.Z)(["\n  color: ",";\n  fill: ",";\n  background-color: ",";\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.fontColorHeader}),(function(e){return e.theme.fillColorHeader}),(function(e){return e.theme.modalBackgroundColor}),(function(e){return e.theme.modalBorderColor})),Z=function(e){var n=e.extraFooter,i=e.isLoading,t=void 0!==i&&i,o=e.disabled,r=(e.hasOnSubmit,e.hasOnReset),l=(0,f.Z)(e,x);return(0,v.jsxs)(b,(0,c.Z)((0,c.Z)({},l),{},{className:"modalFooter",children:[n&&(0,v.jsx)(g,{fillWidth:!0,fxDirection:"row",children:n}),(0,v.jsxs)(u.ZP,{fillWidth:!0,gap:8,fxDirection:"row",justifyContent:"flex-end",padding:"8px 0",children:[r&&(0,v.jsx)(p.Z,{type:"reset",variant:"outlinedSmall",isLoading:t,disabled:o,children:t?(0,m.t)("Loading..."):(0,m.t)("Clear")}),(0,v.jsx)(p.Z,{type:"submit",variant:"filledSmall",isLoading:t,disabled:o,children:t?(0,m.t)("Loading..."):(0,m.t)("Save")})]})]}))},j=i(2791),S=i(763),C=function(e){var n=e.children,i=e.renderFooter,t=e.renderTitle,o=e.disabled,r=e.label,l=void 0===r?"Form area":r,d=e.onSubmit,c=e.isLoading,f=e.onReset,h=e.hideLabel,m=(e.expandable,e.isOpen),x=void 0===m||m,b=(0,j.useState)(null===x||void 0===x||x),g=(0,a.Z)(b,2),C=g[0],P=g[1];return(0,j.useEffect)((function(){(0,S.isUndefined)(x)||P(x)}),[x]),(0,v.jsxs)(u._0,{fillWidth:!0,onSubmit:d,onReset:f,style:{position:"relative"},children:[!h&&(0,v.jsxs)(w,{padding:"8px 6px",overflow:"hidden",fxDirection:"row",justifyContent:"space-between",alignItems:"center",children:[t||(0,v.jsx)(s.x,{$size:14,$weight:600,children:l}),(0,v.jsx)(p.Z,{variant:"onlyIconNoEffects",icon:C?"SmallArrowUp":"SmallArrowDown",onClick:function(){P((function(e){return!e}))}})]}),(0,v.jsxs)(y,{isActive:C,children:[n,i||(0,v.jsx)(Z,{hasOnSubmit:!!d,hasOnReset:!!f,isLoading:c,disabled:o})]})]})},w=(0,h.ZP)(u.ZP)(r||(r=(0,d.Z)(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 6;\n\n  background-color: ",";\n"])),(function(e){return e.theme.modalBackgroundColor})),y=(0,h.ZP)(u.ZP)(l||(l=(0,d.Z)(["\n  overflow: hidden;\n  max-height: ",";\n  padding: 0 8px;\n  //transition: all ",";\n"])),(function(e){return e.isActive?"100%":"0"}),(function(e){return e.theme.globals.timingFunctionMain}))},9701:function(e,n,i){i.d(n,{B:function(){return j}});var t=i(1413),o=i(4925),r=i(8039),l=i(163),d=i(4990),a=i(6522),u=i(6681),s=i(8095),c=(i(2791),i(6785)),f=i(870),p=i(4343),h=i(1185),m=i(2913),v=i(1494),x=i(4436),b=i(7348),g=i(3329),Z=["formState","register","registerSelect","formValues"],j=function(e){var n=e.defaultValues,i=e.edit,j=e.type,S=e.onSuccess,C=e._id,w=(0,v.useOfferLoadersProvider)(),y=w.isLoading,P=w.onLoading,L=(0,m.Z)(),_=(0,b.q$)(f.cA.BRANDS).directory,k=(0,l.hN)({defaultValues:(0,t.Z)((0,t.Z)({},n),{},{type:j})}),B=k.formState.errors,I=k.register,O=k.registerSelect,W=(k.formValues,(0,o.Z)(k,Z));return(0,g.jsxs)(r.W,{label:(0,a.t)("Base info"),isLoading:i?null===y||void 0===y?void 0:y.offer_update:null===y||void 0===y?void 0:y.offer_create,onSubmit:W.handleSubmit((function(e){var n=(0,h.vg)(e,{ignorePaths:["measurement"]});i?L.updateById({data:{data:n,_id:C},onSuccess:S,onLoading:P("offer_update")}):L.create({data:{data:n},onSuccess:S,onLoading:P("offer_create")})})),onReset:W.reset,children:[(0,g.jsx)(d.Z,{label:(0,a.t)("label"),error:B.label,required:!0,children:(0,g.jsx)(u.ZP,(0,t.Z)((0,t.Z)({placeholder:(0,a.t)("label")},I("label")),{},{required:!0,autoFocus:!0}))}),(0,g.jsxs)(s.ZP,{fxDirection:"row",gap:6,fillWidth:!0,children:[(0,g.jsx)(d.Z,{label:(0,a.t)("sku"),error:B.sku,children:(0,g.jsx)(u.ZP,(0,t.Z)({placeholder:(0,a.t)("sku")},I("sku")))}),(0,g.jsx)(d.Z,{label:"\u0428\u0442\u0440\u0438\u0445-\u043a\u043e\u0434",error:B.barCode,children:(0,g.jsx)(u.ZP,(0,t.Z)({placeholder:"\u0428\u0442\u0440\u0438\u0445-\u043a\u043e\u0434"},I("barCode")))})]}),(0,g.jsx)(c.Z,(0,t.Z)({},O("brand",{options:_,label:(0,a.t)("brand"),placeholder:(0,a.t)("selectBrand")}))),(0,g.jsx)(c.Z,(0,t.Z)({},O("approved",{options:x.SQ,label:(0,a.t)("status"),placeholder:(0,a.t)("status")}))),(0,g.jsx)(d.Z,{label:(0,a.t)("description"),error:B.description,children:(0,g.jsx)(p.Z,(0,t.Z)({placeholder:(0,a.t)("description")},I("description")))})]})}},6600:function(e,n,i){i.d(n,{A:function(){return C}});var t,o=i(1413),r=i(9439),l=i(4925),d=i(168),a=i(6522),u=i(2791),s=i(8095),c=i(4990),f=i(6681),p=i(2360),h=i(3329),m=[{name:"height",label:(0,a.t)("Height"),placeholder:(0,a.t)("Sm")},{name:"width",label:(0,a.t)("Width"),placeholder:(0,a.t)("Sm")},{name:"length",label:(0,a.t)("Length"),placeholder:(0,a.t)("Sm")},{name:"weight",label:(0,a.t)("Weight"),placeholder:(0,a.t)("Kg")}],v=(0,p.ZP)(s.ZP)(t||(t=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 8px;\n\n  @media screen and (min-width: 480px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]))),x=function(e){var n,i,t=e.form,r=e.disabled,l=null===t||void 0===t||null===(n=t.formState)||void 0===n||null===(i=n.errors)||void 0===i?void 0:i.dimensions;return(0,h.jsx)(v,{fillWidth:!0,children:m.map((function(e){return(0,h.jsx)(c.Z,{label:e.label,error:l&&l[e.name],children:(0,h.jsx)(f.ZP,(0,o.Z)((0,o.Z)({placeholder:e.placeholder,min:1,type:"number"},t.register("dimensions.".concat(e.name),{valueAsNumber:!0,min:1})),{},{disabled:r}))},e.name)}))})},b=i(163),g=i(8039),Z=i(2913),j=i(1383),S=["defaultValues","_id","disabled"],C=function(e){var n,i,t,d=e.defaultValues,s=e._id,c=e.disabled,f=(0,l.Z)(e,S),p=(0,Z.Z)(),m=(0,u.useState)(!1),v=(0,r.Z)(m,2),C=v[0],w=v[1],y=(0,b.hN)({defaultValues:{dimensions:null!==d&&void 0!==d?d:{}}}),P=!(null===(n=y.formState.touchedFields)||void 0===n||!n.dimensions)&&(null===(i=Object.values(null===(t=y.formState.touchedFields)||void 0===t?void 0:t.dimensions))||void 0===i?void 0:i.some((function(e){return e})));return(0,h.jsx)(g.W,(0,o.Z)((0,o.Z)({onSubmit:y.handleSubmit((function(e){p.updateById({data:{data:e,_id:s},onSuccess:function(e){j.kl.success("Product updated")},onError:function(e){console.error("Product update action",e)},onLoading:w})})),label:(0,a.t)("Package size"),isLoading:C},f),{},{disabled:!P||c,children:(0,h.jsx)(x,{form:y,disabled:c})}))}},3023:function(e,n,i){i.d(n,{A:function(){return w}});var t,o,r,l,d=i(168),a=i(3433),u=i(4942),s=i(1413),c=i(9439),f=i(2791),p=i(6492),h=i(8039),m=i(2360),v=i(8095),x=i(7348),b=i(1819),g=i(1494),Z=i(6522),j=i(870),S=i(3855),C=i(3329),w=function(e){var n,i=e.onSubmit,t=e.onSuccess,o=e.disabled,r=e.offer,l=e.defaultValues,d=(0,g.useOfferLoadersProvider)(),m=(0,x.q$)(j.cA.CATEGORIES_PROD).directory,w=(0,f.useState)({}),_=(0,c.Z)(w,2),B=_[0],I=_[1],O=(0,b.xc)()[b.EJ.products],W=(0,f.useMemo)((function(){return Object.keys(B).filter((function(e){var n;return null===B||void 0===B||null===(n=B[e])||void 0===n?void 0:n.selected}))}),[B]),V=(0,f.useCallback)((function(e,n){if(null!==n&&void 0!==n&&n.length){var i,t=(0,s.Z)((0,s.Z)({},B),{},(0,u.Z)({},e,{selected:!0,parentIds:(null===B||void 0===B||null===(i=B[e])||void 0===i?void 0:i.parentIds)||n}));null===n||void 0===n||n.forEach((function(e){null!==t&&void 0!==t&&t[e]?t[e]=(0,s.Z)((0,s.Z)({},t[e]),{},{selected:!0}):t[e]={parentIds:[],selected:!0}})),I(t)}else I((function(i){return(0,s.Z)((0,s.Z)({},i),{},(0,u.Z)({},e,{selected:!0,parentIds:null!==n&&void 0!==n?n:[]}))}))}),[B]),D=(0,f.useCallback)((function(e){var n=W.filter((function(n){var i,t;return null===B||void 0===B||null===(i=B[n])||void 0===i||null===(t=i.parentIds)||void 0===t?void 0:t.includes(e)}));if(null!==n&&void 0!==n&&n.length){var i,t=(0,s.Z)((0,s.Z)({},B),{},(0,u.Z)({},e,{selected:!1,parentIds:null===B||void 0===B||null===(i=B[e])||void 0===i?void 0:i.parentIds}));n.forEach((function(e){t[e]=(0,s.Z)((0,s.Z)({},t[e]),{},{selected:!1})})),I(t)}else I((function(n){var i;return(0,s.Z)((0,s.Z)({},n),{},(0,u.Z)({},e,{selected:!1,parentIds:null===n||void 0===n||null===(i=n[e])||void 0===i?void 0:i.parentIds}))}))}),[B,W]),A=(0,f.useMemo)((function(){var e,n;return!o&&(null!==r&&void 0!==r&&null!==(e=r.categories)&&void 0!==e&&e.length?(null===r||void 0===r||null===(n=r.categories)||void 0===n?void 0:n.map((function(e){return e._id})).sort((function(e,n){return e.localeCompare(n)})).join(","))!==W.sort((function(e,n){return e.localeCompare(n)})).join(","):!!W.length)}),[null===r||void 0===r?void 0:r.categories,o,W]);(0,f.useEffect)((function(){null!==l&&void 0!==l&&l.length&&I((function(e){return Object.assign.apply(Object,[e].concat((0,a.Z)(l.map((function(e){return(0,u.Z)({},e,{parentIds:[],selected:!0})})))))}))}),[]);var E=(0,f.useMemo)((function(){return m.map((function(e){var n,i,t=function(e,n){var i;return n&&W.some((function(n){var i,t,o;return(null===B||void 0===B||null===(i=B[n])||void 0===i||null===(t=i.parentIds)||void 0===t?void 0:t.includes(e))&&(null===B||void 0===B||null===(o=B[n])||void 0===o?void 0:o.selected)}))||(null===B||void 0===B||null===(i=B[e])||void 0===i?void 0:i.selected)};return(0,C.jsxs)(P,{gap:8,fillWidth:!0,padding:"8px 0 0",children:[(0,C.jsxs)(v.ZP,{fxDirection:"row",justifyContent:"space-between",alignItems:"center",gap:12,children:[(0,C.jsx)(S.Z,{checked:t(e._id,!(null===e||void 0===e||null===(n=e.childrenList)||void 0===n||!n.length)),onChange:function(n){n.checked?V(e._id):D(e._id)}}),(0,C.jsx)(p.x,{style:{flex:1,paddingLeft:12},$weight:500,children:e.label})]}),(0,C.jsx)(L,{fillWidth:!0,padding:"8px 0",children:null===e||void 0===e||null===(i=e.childrenList)||void 0===i?void 0:i.map((function(n){return(0,C.jsx)(k,{item:n,parentIds:[e._id],getIsSelected:t,onChange:function(e,n,i){e?V(n,null!==i&&void 0!==i?i:[]):D(n)}},n._id)}))})]},"property-".concat(e._id))}))}),[D,V,m,B,W]);return(0,C.jsx)(h.W,{label:(0,Z.t)("Categories"),onSubmit:function(e){e.preventDefault(),i?i(W):r&&O.updateById({data:{_id:null===r||void 0===r?void 0:r._id,updateCurrent:!0,data:{categories:W}},onLoading:d.onLoading("properties"),onSuccess:t})},onReset:function(){I({})},isLoading:null===(n=d.isLoading)||void 0===n?void 0:n.properties,disabled:!A,children:(0,C.jsx)(y,{flex:1,overflow:"auto",children:E})})},y=(0,m.ZP)(v.j6)(t||(t=(0,d.Z)(["\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  padding-bottom: 8px;\n"])),(function(e){return e.theme.sideBarBorderColor}),(function(e){return e.theme.sideBarBorderColor})),P=(0,m.ZP)(v.Ov)(o||(o=(0,d.Z)(["\n  &:not(:first-child) {\n    border-top: 1px solid ",";\n  }\n"])),(function(e){return e.theme.sideBarBorderColor})),L=(0,m.ZP)(v.j6)(r||(r=(0,d.Z)([""]))),_=(0,m.ZP)(v.Ov)(l||(l=(0,d.Z)([""]))),k=function e(n){var i,t,o=n.item,r=n.onChange,l=n.getIsSelected,d=n.parentIds,u=l&&l(o._id,!(null===o||void 0===o||null===(i=o.childrenList)||void 0===i||!i.length));return(0,C.jsxs)(_,{padding:"0 8px 0px 12px",gap:12,children:[(0,C.jsxs)(v.ZP,{fxDirection:"row",alignItems:"center",gap:12,children:[(0,C.jsx)(S.Z,{checked:u,onChange:function(e){r&&r(e.checked,o._id,d)}}),(0,C.jsx)(p.x,{$size:14,$weight:500,children:o.label})]}),(0,C.jsx)(L,{children:!(null===(t=o.childrenList)||void 0===t||!t.length)&&o.childrenList.map((function(n){return(0,C.jsx)(e,{item:n,onChange:r,getIsSelected:l,parentIds:[].concat((0,a.Z)(null!==d&&void 0!==d?d:[]),[o._id])},n._id)}))})]},"cate-value-".concat(o._id))}},2353:function(e,n,i){i.d(n,{A:function(){return p}});var t=i(1413),o=i(9439),r=i(1494),l=i(1819),d=i(2791),a=i(8039),u=i(8790),s=i(1185),c=i(6522),f=i(3329),p=function(e){var n,i,p=e.offer,h=e.onSubmit,m=e.onSuccess,v=e.disabled,x=e.defaultValues,b=(0,r.useOfferLoadersProvider)(),g=(0,d.useState)(x||(null===b||void 0===b||null===(n=b.state)||void 0===n?void 0:n.images)||[]),Z=(0,o.Z)(g,2),j=Z[0],S=Z[1],C=(0,l.xc)()[l.EJ.products],w=(0,d.useMemo)((function(){return!0}),[]);return(0,f.jsx)(a.W,{label:(0,c.t)("Images"),onSubmit:function(e){e.preventDefault(),h?h(j):p?C.updateById({data:(0,t.Z)((0,t.Z)({},(0,s.rE)(p)),{},{data:{images:j},refreshCurrent:!0}),onSuccess:m,onLoading:b.onLoading("images")}):console.warn("Offer not passed")},disabled:v||!w,isLoading:null===(i=b.isLoading)||void 0===i?void 0:i.images,children:(0,f.jsx)(u.Z,{hideLabel:!0,initialData:j,onChangeState:S,contentContainerStyle:{flex:1}})})}},7109:function(e,n,i){i.d(n,{R:function(){return S}});var t,o,r,l,d=i(168),a=i(3433),u=i(9439),s=i(2791),c=i(6492),f=i(8039),p=i(2360),h=i(8095),m=i(4109),v=i(7348),x=i(1819),b=i(6785),g=i(1494),Z=i(6522),j=i(3329),S=function(e){var n,i,t=e.onSubmit,o=e.onSuccess,r=e.disabled,l=e.offer,d=(0,g.useOfferLoadersProvider)(),p=(0,v.WS)(),h=(0,x.xc)()[x.EJ.products],m=(0,s.useState)([]),S=(0,u.Z)(m,2),L=S[0],_=S[1],k=(0,s.useState)(null===(n=p[0])||void 0===n?void 0:n._id),B=(0,u.Z)(k,2),I=B[0],O=B[1],W=(0,s.useMemo)((function(){return p.find((function(e){return e._id===I}))}),[I,p]),V=(0,s.useMemo)((function(){var e,n;return!r&&(null!==l&&void 0!==l&&null!==(e=l.properties)&&void 0!==e&&e.length?(null===l||void 0===l||null===(n=l.properties)||void 0===n?void 0:n.map((function(e){return e._id})).sort((function(e,n){return e.localeCompare(n)})).join(","))!==L.sort((function(e,n){return e.localeCompare(n)})).join(","):!!L.length)}),[null===l||void 0===l?void 0:l.properties,r,L]),D=(0,s.useCallback)((function(e,n){_((function(n){return n.includes(e)?n.filter((function(n){return n!==e})):[].concat((0,a.Z)(n),[e])}))}),[]),A=(0,s.useMemo)((function(){var e;return null===W||void 0===W||null===(e=W.childrenList)||void 0===e?void 0:e.filter((function(e){return!(null!==e&&void 0!==e&&e.isSelectable)})).map((function(e){var n;return(0,j.jsxs)(w,{gap:8,fillWidth:!0,padding:"8px 0 0",children:[(0,j.jsx)(c.x,{style:{flex:1,paddingLeft:12},$weight:500,children:e.label}),(0,j.jsx)(y,{fillWidth:!0,padding:"8px 0",gap:6,flexWrap:"wrap",fxDirection:"row",children:null===(n=e.childrenList)||void 0===n?void 0:n.map((function(n){var i=L.includes(n._id);return(0,j.jsx)(P,{variant:i?"filledSmall":"outlinedSmall",padding:"6px 8px",fontWeight:500,onClick:function(){return D(n._id,e._id)},children:n.label},"prop-value-".concat(n._id))}))})]},"property-".concat(e._id))}))}),[D,L,null===W||void 0===W?void 0:W.childrenList]);return(0,s.useEffect)((function(){null!==l&&void 0!==l&&l.properties&&_(null===l||void 0===l?void 0:l.properties.map((function(e){return e._id})))}),[null===l||void 0===l?void 0:l.properties]),(0,j.jsxs)(f.W,{label:(0,Z.t)("Properties"),onSubmit:function(e){e.preventDefault(),t?t(L):l&&h.updateById({data:{_id:null===l||void 0===l?void 0:l._id,updateCurrent:!0,data:{properties:L}},onLoading:d.onLoading("properties"),onSuccess:o})},isLoading:null===(i=d.isLoading)||void 0===i?void 0:i.properties,disabled:!V,children:[(0,j.jsx)(b.Z,{label:(0,Z.t)("Available templates"),options:p,selectedValue:I,onSelect:function(e){O(null===e||void 0===e?void 0:e._id)}}),(0,j.jsx)(C,{flex:1,overflow:"auto",children:A})]})},C=(0,p.ZP)(h.ZP)(t||(t=(0,d.Z)(["\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  padding-bottom: 8px;\n"])),(function(e){return e.theme.sideBarBorderColor}),(function(e){return e.theme.sideBarBorderColor})),w=(0,p.ZP)(h.ZP)(o||(o=(0,d.Z)(["\n  &:not(:first-child) {\n    border-top: 1px solid ",";\n  }\n"])),(function(e){return e.theme.sideBarBorderColor})),y=(0,p.ZP)(h.ZP)(r||(r=(0,d.Z)([""]))),P=(0,p.ZP)(m.Z)(l||(l=(0,d.Z)(["\n  flex-basis: 100px;\n  min-width: max-content;\n"])))},4826:function(e,n,i){i.d(n,{n:function(){return C}});var t=i(1413),o=i(9439),r=i(4925),l=i(3691),d=i(8553),a=i(6785),u=i(4990),s=i(6681),c=i(8095),f=i(2791),p=i(6522),h=i(3329),m=(0,d.H1)(l.qU),v=[{name:"measurement.unit",label:(0,p.t)("unit"),placeholder:(0,p.t)("unit"),options:m},{name:"measurement.min",label:(0,p.t)("min"),placeholder:(0,p.t)("min"),type:"number"},{name:"measurement.max",label:(0,p.t)("max"),placeholder:(0,p.t)("max"),type:"number"}],x=function(e){var n=e.appForm,i=e.disabled;return(0,h.jsx)(c.ZP,{fillWidth:!0,style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",columnGap:8},children:v.map((function(e){var o;return e.options?(0,h.jsx)(a.Z,(0,t.Z)((0,t.Z)({},n.registerSelect(null===e||void 0===e?void 0:e.name,{options:null===e||void 0===e?void 0:e.options,label:null===e||void 0===e?void 0:e.label,placeholder:null===e||void 0===e?void 0:e.label,dropDownIsAbsolute:!0,onlyValue:!0})),{},{disabled:i}),e.name):(0,h.jsx)(u.Z,{label:e.label,error:null===n||void 0===n||null===(o=n.formState)||void 0===o?void 0:o.errors[e.name],children:(0,h.jsx)(s.ZP,(0,t.Z)((0,t.Z)({placeholder:e.placeholder,min:"number"===(null===e||void 0===e?void 0:e.type)?1:void 0,type:null===e||void 0===e?void 0:e.type},n.register(e.name,{valueAsNumber:"number"===(null===e||void 0===e?void 0:e.type),min:"number"===(null===e||void 0===e?void 0:e.type)?1:void 0})),{},{disabled:i}))},e.name)}))})},b=i(163),g=i(8039),Z=i(2913),j=i(1383),S=["defaultValues","_id","disabled"],C=function(e){var n,i,l,d=e.defaultValues,a=e._id,u=e.disabled,s=(0,r.Z)(e,S),c=(0,Z.Z)(),m=(0,f.useState)(!1),v=(0,o.Z)(m,2),C=v[0],w=v[1],y=(0,b.hN)({defaultValues:{measurement:d}}),P=!(null===(n=y.formState.touchedFields)||void 0===n||!n.measurement)&&(null===(i=Object.values(null===(l=y.formState.touchedFields)||void 0===l?void 0:l.measurement))||void 0===i?void 0:i.some((function(e){return e})));return(0,h.jsx)(g.W,(0,t.Z)((0,t.Z)({onSubmit:y.handleSubmit((function(e){c.updateById({data:{data:e,_id:a},onSuccess:function(e){j.kl.success("Product updated")},onError:function(e){console.error("Product update action",e)},onLoading:w})})),label:(0,p.t)("Measurement info"),isLoading:C,disabled:!P||u},s),{},{children:(0,h.jsx)(x,{appForm:y,disabled:u})}))}},6105:function(e,n,i){i.d(n,{Z:function(){return y}});var t,o,r,l,d=i(168),a=i(1413),u=i(4925),s=i(2360),c=i(2791),f=i(8095),p=i(4109),h=i(6522),m=i(6492),v=i(3329),x=["onClose","onBackPress","title","showSubmitButton","canSubmit","renderTitle","children"],b=function(e){var n=e.onClose,i=e.onBackPress,t=e.title,o=e.showSubmitButton,r=e.canSubmit,l=e.renderTitle,d=e.children,s=(0,u.Z)(e,x);return(0,v.jsxs)(g,(0,a.Z)((0,a.Z)({},s),{},{padding:"4px 0",children:[(0,v.jsxs)(f.ZP,{fillWidth:!0,fxDirection:"row",justifyContent:"space-between",alignItems:"stretch",height:"32px",children:[i&&(0,v.jsx)(p.Z,{variant:"textExtraSmall",icon:"SmallArrowLeft",iconSize:"22px",padding:"0",style:{minWidth:"max-content",minHeight:"100%"},onClick:i,children:(0,h.t)("Back")}),l||(0,v.jsx)(f.ZP,{justifyContent:"center",overflow:"hidden",children:(0,v.jsx)(m.x,{$weight:600,$size:14,style:{textTransform:"uppercase",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:t})}),o&&(0,v.jsx)(p.Z,{variant:"textExtraSmall",gap:"6px",type:o?"submit":"button",padding:"0 6px",endIcon:"done",endIconSize:"22px",style:{minWidth:"max-content",minHeight:"100%"},disabled:!r,children:"Ok"}),n&&(0,v.jsx)(p.Z,{variant:"onlyIconNoEffects",icon:"close",iconSize:"95%",size:"24px",padding:"0",onClick:n})]}),d&&(0,v.jsx)(Z,{children:d})]}))},g=(0,s.ZP)(f.ZP)(t||(t=(0,d.Z)(["\n  min-height: 32px;\n"]))),Z=s.ZP.div(o||(o=(0,d.Z)(["\n  width: 100%;\n  height: min-content;\n  overflow: hidden;\n"]))),j=["title","footer","children","extraFooter","extraHeader","isLoading","onClose","onBackPress"],S=function(e){var n=e.title,i=void 0===n?"default modal title":n,t=(e.footer,e.children),o=(e.extraFooter,e.extraHeader),r=(e.isLoading,e.onClose),l=e.onBackPress,d=(0,u.Z)(e,j);return(0,v.jsxs)(C,(0,a.Z)((0,a.Z)({className:"modal_base"},d),{},{children:[(0,v.jsx)(b,{title:i,onClose:r,onBackPress:l,children:o}),(0,v.jsx)(w,{className:"main",children:t})]}))},C=s.ZP.div(r||(r=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: min-content 1fr max-content;\n\n  position: relative;\n  padding: 0 8px;\n\n  min-height: 200px;\n  max-height: 90vh;\n\n  color: ",";\n  width: ",";\n  height: ",";\n\n  min-width: 250px;\n  max-width: 100%;\n\n  //overflow: hidden;\n\n  box-shadow: ",";\n  fill: ",";\n  color: ",";\n  background-color: ",";\n\n  border-radius: 2px;\n  border-bottom: 1px solid ",";\n  /* resize: both; */\n\n  @media screen and (max-width: 480px) {\n    width: 98vw;\n  }\n\n  @media screen and (min-width: 480px) {\n    width: ",";\n  }\n"])),(function(e){return e.theme.fontColorSidebar}),(function(e){var n=e.width,i=void 0===n?"480px":n,t=e.fillWidth,o=e.fitContentH;return(t?"100vw":o&&"max-content")||i}),(function(e){var n=e.height,i=void 0===n?"":n,t=e.fillHeight,o=e.fitContentV;return(t?"90vh":o&&"max-content")||i}),(function(e){return e.theme.globals.shadowMain}),(function(e){return e.theme.fillColor}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.modalBackgroundColor}),(function(e){return e.theme.modalBorderColor}),(function(e){return e.fillWidth?"98vw":"450px"})),w=s.ZP.main(l||(l=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  overflow: auto;\n  position: relative;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n\n  background-color: ",";\n\n  ::-webkit-scrollbar {\n    width: 4px;\n    height: 4px;\n  }\n  //border-right: 1px solid ",";\n  //border-left: 1px solid ",";\n"])),(function(e){return e.theme.modalBackgroundColor}),(function(e){return e.theme.modalBorderColor}),(function(e){return e.theme.modalBorderColor})),y=(0,c.memo)(S)},1494:function(e,n,i){i.r(n),i.d(n,{useOfferLoadersProvider:function(){return S}});var t=i(1413),o=i(6600),r=i(6105),l=i(6522),d=i(1185),a=i(2791),u=i(3691),s=i(4826),c=i(9701),f=i(8095),p=i(9953),h=i(3383),m=i(7109),v=i(9541),x=i(7578),b=i(2353),g=i(163),Z=i(3023),j=i(3329),S=function(){return(0,x.un)()};n.default=function(e){var n,i,S=e.onClose,C=(e._id,(0,v.J)()),w=C.state.formData,y=C.setData,P=(0,g.xj)(),L=(0,g.G2)({id:null===(n=P.query)||void 0===n?void 0:n.offerId});return(0,a.useEffect)((function(){return P.push({query:{}}),function(){P.push({query:{}})}}),[]),(0,j.jsx)(r.Z,{title:(0,l.t)("Create offer"),onClose:S,extraHeader:(0,j.jsx)(p.Z,{defaultValue:null!==(i=null===w||void 0===w?void 0:w.type)&&void 0!==i?i:u.iv.GOODS,filterOptions:h.jI,onOptSelect:function(e){return y("formData",(function(n){return(0,t.Z)((0,t.Z)({},n),{},{type:e.value})}))}}),children:(0,j.jsx)(x.f4,{value:C,children:(0,j.jsxs)(f.ZP,{padding:"0 8px 16px",children:[(0,j.jsx)(c.B,{defaultValues:w,onSuccess:function(e){y("formData",(0,d.xT)(e)),P.push({query:{offerId:null===e||void 0===e?void 0:e._id}})},type:null===w||void 0===w?void 0:w.type}),L&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Z.A,{offer:L,defaultValues:null===w||void 0===w?void 0:w.categories,disabled:!w}),(0,j.jsx)(m.R,{offer:L,defaultValues:null===w||void 0===w?void 0:w.properties,disabled:!w}),(0,j.jsx)(o.A,{offer:L,defaultValues:null===w||void 0===w?void 0:w.dimensions,disabled:!w}),(0,j.jsx)(s.n,{offer:L,defaultValues:null===w||void 0===w?void 0:w.measurement,disabled:!w}),(0,j.jsx)(b.A,{offer:L,defaultValues:null===w||void 0===w?void 0:w.images,disabled:!w})]})]})})})}}}]);
//# sourceMappingURL=494.9383ae95.chunk.js.map