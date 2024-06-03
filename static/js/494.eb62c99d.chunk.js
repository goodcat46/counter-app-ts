"use strict";(self.webpackChunkcounter_app_ts=self.webpackChunkcounter_app_ts||[]).push([[494],{3007:function(e,n,i){i.d(n,{B:function(){return _}});var o=i(1413),t=i(4925),l=i(9006),d=i(3691),a=i(2989),r=i(4990),s=i(6522),u=i(6681),c=i(8095),f=(i(2791),i(3423)),v=i(870),p=i(4343),m=i(959),b=i(9994),h=i(1494),g=i(4897),x=i(7348),Z=i(9953),S=i(3383),j=i(389),y=i(3329),L=["formState","register","registerSelect","formValues","setValue","handleSubmit"],_=function(e){var n,i=e.defaultValues,_=e.edit,P=e.type,V=e.onSuccess,O=e._id,C=(0,h.useOfferLoadersProvider)(),D=C.isLoading,w=C.onLoading,I=(0,b.Z)(),A=(0,x.eO)(),B=(0,x.q$)(v.cA.COUNTERPARTIES).directory,k=(0,x.q$)(v.cA.BRANDS).directory,E=(0,a.hN)({defaultValues:(0,o.Z)((0,o.Z)({},i),{},{type:P,visible:!0})}),M=E.formState.errors,F=E.register,K=E.registerSelect,q=E.formValues,N=E.setValue,R=E.handleSubmit,G=(0,t.Z)(E,L);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Z.Z,{defaultValue:null!==(n=null===q||void 0===q?void 0:q.type)&&void 0!==n?n:d.iv.GOODS,options:S.LC,onOptSelect:function(e){return N("type",e.value)}}),(0,y.jsxs)(l.h,{label:(0,s.t)("Base info"),isLoading:_?null===D||void 0===D?void 0:D.offer_update:null===D||void 0===D?void 0:D.offer_create,onSubmit:R((function(e){var n=(0,m.vg)(e,{ignorePaths:["measurement"]});_?I.updateById({data:{data:{data:n,_id:O}},onSuccess:V,onLoading:w("offer_update")}):I.create({data:{data:{data:n}},onSuccess:V,onLoading:w("offer_create")})})),onReset:G.reset,canSubmit:!0,expandable:!1,children:[(0,y.jsx)(r.Z,{label:(0,s.t)("label"),error:M.label,required:!0,children:(0,y.jsx)(u.ZP,(0,o.Z)((0,o.Z)({placeholder:(0,s.t)("label")},F("label")),{},{required:!0,autoFocus:!0}))}),(0,y.jsxs)(c.ZP,{fxDirection:"row",gap:6,fillWidth:!0,children:[(0,y.jsx)(r.Z,{label:(0,s.t)("sku"),error:M.sku,children:(0,y.jsx)(u.ZP,(0,o.Z)({placeholder:(0,s.t)("sku")},F("sku")))}),(0,y.jsx)(r.Z,{label:(0,s.t)("Bar-code"),error:M.barCode,children:(0,y.jsx)(u.ZP,(0,o.Z)({placeholder:(0,s.t)("Bar-code")},F("barCode")))})]}),(0,y.jsx)(f.Z,(0,o.Z)({},K("brand",{options:k,label:(0,s.t)("brand"),placeholder:(0,s.t)("selectBrand")}))),(0,y.jsx)(f.Z,(0,o.Z)({},K("warehouse",{options:A.warehouses,label:(0,s.t)("Select warehouse"),placeholder:(0,s.t)("Select warehouse")}))),(0,y.jsx)(f.Z,(0,o.Z)({},K("supplier",{options:B,label:(0,s.t)("Select supplier"),placeholder:(0,s.t)("Select supplier")}))),(0,y.jsx)(f.Z,(0,o.Z)({},K("approved",{options:g.SQ,label:(0,s.t)("status"),placeholder:(0,s.t)("status"),value:q.approved,selectedValue:q.approved}))),(0,y.jsx)(r.Z,{label:(0,s.t)("description"),error:M.description,children:(0,y.jsx)(p.Z,(0,o.Z)({placeholder:(0,s.t)("description")},F("description")))}),(0,y.jsx)(r.Z,{label:(0,s.t)("Visibility"),error:M.description,children:(0,y.jsx)(j.Z,{value:q.visible,onChange:function(e){N("visible",e,{shouldTouch:!0,shouldDirty:!0})}})})]})]})}},7608:function(e,n,i){i.d(n,{A:function(){return h}});var o,t=i(168),l=i(9439),d=i(2791),a=i(9006),r=i(2360),s=i(8095),u=i(1819),c=i(1494),f=i(6522),v=i(959),p=i(9184),m=i(2989),b=i(3329),h=function(e){var n,i,o=e.offer,t=e.disabled,r=(0,m.G2)(o),s=(0,c.useOfferLoadersProvider)(),h=(0,v.sK)(null===r||void 0===r||null===(n=r.categories)||void 0===n?void 0:n.map((function(e){return e._id}))),x=(0,u.xc)()[u.EJ.offers],Z=(0,d.useState)(h),S=(0,l.Z)(Z,2),j=S[0],y=S[1],L=(0,d.useMemo)((function(){return!(null===j||void 0===j||!j.length)&&(null===h||void 0===h?void 0:h.join(","))!==(0,v.sK)(j).join(",")}),[h,j]);return(0,d.useEffect)((function(){null!==r&&void 0!==r&&r.categories&&y((0,v.SJ)(null===r||void 0===r?void 0:r.categories))}),[]),(0,b.jsx)(a.h,{label:(0,f.t)("Categories"),onSubmit:function(e){e.preventDefault(),r&&x.updateById({onLoading:s.onLoading("categories"),data:{data:{_id:r._id,data:{categories:j}}},onSuccess:function(e,n){}})},disabled:t,isLoading:null===(i=s.isLoading)||void 0===i?void 0:i.categories,canSubmit:L,maxHeight:"300px",isOpen:!1,children:(0,b.jsx)(g,{flex:1,overflow:"auto",children:(0,b.jsx)(p.Z,{onChangeIds:y,offer:r})})})},g=(0,r.ZP)(s.j6)(o||(o=(0,t.Z)(["\n  padding-bottom: 8px;\n"])))},9420:function(e,n,i){i.d(n,{A:function(){return y}});var o,t=i(1413),l=i(9439),d=i(4925),a=i(168),r=i(6522),s=i(2791),u=i(8095),c=i(4990),f=i(6681),v=i(2360),p=i(3329),m=[{name:"height",label:(0,r.t)("Height"),placeholder:(0,r.t)("Sm")},{name:"width",label:(0,r.t)("Width"),placeholder:(0,r.t)("Sm")},{name:"length",label:(0,r.t)("Length"),placeholder:(0,r.t)("Sm")},{name:"weight",label:(0,r.t)("Weight"),placeholder:(0,r.t)("Kg")}],b=(0,v.ZP)(u.ZP)(o||(o=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 8px;\n\n  @media screen and (min-width: 480px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]))),h=function(e){var n,i,o=e.form,l=e.disabled,d=null===o||void 0===o||null===(n=o.formState)||void 0===n||null===(i=n.errors)||void 0===i?void 0:i.dimensions;return(0,p.jsx)(b,{fillWidth:!0,children:m.map((function(e){return(0,p.jsx)(c.Z,{label:e.label,error:d&&d[e.name],children:(0,p.jsx)(f.ZP,(0,t.Z)((0,t.Z)({placeholder:e.placeholder,min:1,type:"number"},o.register("dimensions.".concat(e.name),{valueAsNumber:!0,min:1})),{},{disabled:l}))},e.name)}))})},g=i(2989),x=i(9006),Z=i(9994),S=i(1383),j=["defaultValues","_id","disabled"],y=function(e){var n,i,o,a=e.defaultValues,u=e._id,c=e.disabled,f=(0,d.Z)(e,j),v=(0,Z.Z)(),m=(0,s.useState)(!1),b=(0,l.Z)(m,2),y=b[0],L=b[1],_=(0,g.hN)({defaultValues:{dimensions:null!==a&&void 0!==a?a:{}}}),P=!(null===(n=_.formState.dirtyFields)||void 0===n||!n.dimensions)&&(null===(i=Object.values(null===(o=_.formState.dirtyFields)||void 0===o?void 0:o.dimensions))||void 0===i?void 0:i.some((function(e){return e})));return(0,p.jsx)(x.h,(0,t.Z)((0,t.Z)({onSubmit:_.handleSubmit((function(e){v.updateById({data:{data:{data:e,_id:u}},onSuccess:function(e){S.kl.success("Product updated")},onError:function(e){console.error("Product update action",e)},onLoading:L})})),label:(0,r.t)("Package size"),isLoading:y,isOpen:!1},f),{},{disabled:!P||c,children:(0,p.jsx)(h,{form:_,disabled:c})}))}},5888:function(e,n,i){i.d(n,{A:function(){return v}});var o=i(1413),t=i(9439),l=i(1494),d=i(1819),a=i(2791),r=i(9006),s=i(713),u=i(959),c=i(6522),f=i(3329),v=function(e){var n,i,v=e.offer,p=e.onSubmit,m=e.onSuccess,b=e.disabled,h=e.defaultValues,g=(0,l.useOfferLoadersProvider)(),x=(0,a.useState)(h||(null===g||void 0===g||null===(n=g.state)||void 0===n?void 0:n.images)||[]),Z=(0,t.Z)(x,2),S=Z[0],j=Z[1],y=(0,d.xc)()[d.EJ.offers],L=(0,a.useMemo)((function(){return!(null===S||void 0===S||!S.length)}),[null===S||void 0===S?void 0:S.length]);return(0,f.jsx)(r.h,{label:(0,c.t)("Images"),onSubmit:function(e){e.preventDefault(),p?p(S):v?y.updateById({data:{refresh:!0,data:(0,o.Z)((0,o.Z)({},(0,u.rE)(v)),{},{data:{images:S}})},onSuccess:m,onLoading:g.onLoading("images")}):console.warn("Offer not passed")},canSubmit:L,disabled:b,isLoading:null===(i=g.isLoading)||void 0===i?void 0:i.images,isOpen:!1,maxHeight:"400px",children:(0,f.jsx)(s.Z,{hideLabel:!0,initialData:S,onChangeState:j,contentContainerStyle:{flex:1}})})}},9306:function(e,n,i){i.d(n,{n:function(){return y}});var o=i(1413),t=i(9439),l=i(4925),d=i(3691),a=i(8553),r=i(3423),s=i(4990),u=i(6681),c=i(8095),f=i(2791),v=i(6522),p=i(3329),m=(0,a.H1)(d.qU),b=[{name:"measurement.unit",label:(0,v.t)("unit"),placeholder:(0,v.t)("unit"),options:m},{name:"measurement.min",label:(0,v.t)("min"),placeholder:(0,v.t)("min"),type:"number"},{name:"measurement.max",label:(0,v.t)("max"),placeholder:(0,v.t)("max"),type:"number"}],h=function(e){var n=e.appForm,i=e.disabled;return(0,p.jsx)(c.ZP,{fillWidth:!0,style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",columnGap:8},children:b.map((function(e){var t;return e.options?(0,p.jsx)(r.Z,(0,o.Z)((0,o.Z)({},n.registerSelect(null===e||void 0===e?void 0:e.name,{options:null===e||void 0===e?void 0:e.options,label:null===e||void 0===e?void 0:e.label,placeholder:null===e||void 0===e?void 0:e.label,dropDownIsAbsolute:!0,onlyValue:!0})),{},{disabled:i}),e.name):(0,p.jsx)(s.Z,{label:e.label,error:null===n||void 0===n||null===(t=n.formState)||void 0===t?void 0:t.errors[e.name],children:(0,p.jsx)(u.ZP,(0,o.Z)((0,o.Z)({placeholder:e.placeholder,min:"number"===(null===e||void 0===e?void 0:e.type)?1:void 0,type:null===e||void 0===e?void 0:e.type},n.register(e.name,{valueAsNumber:"number"===(null===e||void 0===e?void 0:e.type),min:"number"===(null===e||void 0===e?void 0:e.type)?1:void 0})),{},{disabled:i}))},e.name)}))})},g=i(2989),x=i(9006),Z=i(9994),S=i(1383),j=["defaultValues","_id","disabled"],y=function(e){var n,i,d,a=e.defaultValues,r=e._id,s=e.disabled,u=(0,l.Z)(e,j),c=(0,Z.Z)(),m=(0,f.useState)(!1),b=(0,t.Z)(m,2),y=b[0],L=b[1],_=(0,g.hN)({defaultValues:{measurement:a}}),P=!(null===(n=_.formState.dirtyFields)||void 0===n||!n.measurement)&&(null===(i=Object.values(null===(d=_.formState.dirtyFields)||void 0===d?void 0:d.measurement))||void 0===i?void 0:i.some((function(e){return e})));return(0,p.jsx)(x.h,(0,o.Z)((0,o.Z)({onSubmit:_.handleSubmit((function(e){c.updateById({data:{data:{data:e,_id:r}},update:!0,onSuccess:function(e){S.kl.success("Product updated")},onError:function(e){console.error("Product update action",e)},onLoading:L})})),label:(0,v.t)("Measurement info"),isLoading:y,disabled:!P||s,isOpen:!1},u),{},{children:(0,p.jsx)(h,{appForm:_,disabled:s})}))}},8782:function(e,n,i){i.d(n,{R:function(){return S}});var o,t=i(168),l=i(7762),d=i(9439),a=i(2791),r=i(9006),s=i(2360),u=i(8095),c=i(7348),f=i(1819),v=i(1494),p=i(6522),m=i(5998),b=i(98),h=i(6492),g=i(2989),x=i(959),Z=i(3329),S=function(e){var n,i,o=e.onSuccess,t=e.disabled,s=e.offer,S=(0,v.useOfferLoadersProvider)(),y=(0,c.i7)(),L=(0,g.G2)(s),_=(0,f.xc)().get(f.EJ.offers),P=(0,x.sK)(null===L||void 0===L||null===(n=L.properties)||void 0===n?void 0:n.map((function(e){return e._id}))),V=(0,a.useState)(P),O=(0,d.Z)(V,2),C=O[0],D=O[1],w=(0,a.useState)(),I=(0,d.Z)(w,2),A=I[0],B=I[1],k=(0,a.useMemo)((function(){var e;return!(null===C||void 0===C||!C.length)&&(null===P||void 0===P?void 0:P.join(","))!==(null===(e=(0,x.sK)(C))||void 0===e?void 0:e.join(","))}),[C,P]),E=(0,a.useMemo)((function(){var e,n,i,o=null===A||void 0===A?void 0:A._id,t=[],d=null!==(e=null===(n=y.propertiesKeysMap)||void 0===n?void 0:n[null!==o&&void 0!==o?o:"def"])&&void 0!==e?e:[],a=(0,l.Z)(d);try{for(a.s();!(i=a.n()).done;){var r,s=i.value,u=null===(r=y.propertiesDataMap)||void 0===r?void 0:r[s];if(u&&(null===u||void 0===u||!u.isSelectable)){var c=y.propertiesKeysMap[null===u||void 0===u?void 0:u._id];null!==c&&void 0!==c&&c.length&&t.push(u)}}}catch(f){a.e(f)}finally{a.f()}return t}),[A,y.propertiesDataMap,y.propertiesKeysMap]),M=(0,a.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";D((function(e){return(0,x.ES)({arr:e,id:n,toggle:!0})}))}),[]),F=(0,a.useMemo)((function(){return null===E||void 0===E?void 0:E.map((function(e){return(0,Z.jsx)(b.Z,{item:e,selectedIds:C,onSelect:M},"prop_".concat(e._id))}))}),[E,C,M]);return(0,Z.jsxs)(r.h,{label:(0,p.t)("Properties"),canSubmit:k,onSubmit:function(e){e.preventDefault(),L&&_.updateById({data:{data:{_id:null===L||void 0===L?void 0:L._id,data:{properties:C}}},update:!0,onLoading:S.onLoading("properties"),onSuccess:o})},isLoading:null===(i=S.isLoading)||void 0===i?void 0:i.properties,isOpen:!1,disabled:!L||t,children:[(0,Z.jsx)(m.U,{selected:A,onSelect:B}),(0,Z.jsx)(j,{flex:1,overflow:"auto",children:null!==F&&void 0!==F&&F.length?F:(0,Z.jsx)(u.ZP,{padding:"24px",alignItems:"center",justifyContent:"center",children:(0,Z.jsx)(h.x,{$size:16,children:(0,p.t)("Data not found")})})})]})},j=(0,s.ZP)(u.ZP)(o||(o=(0,t.Z)(["\n  padding-bottom: 8px;\n"])))},1494:function(e,n,i){i.r(n),i.d(n,{useOfferLoadersProvider:function(){return x}});var o=i(9420),t=i(8050),l=i(6522),d=i(959),a=i(2791),r=i(9306),s=i(3007),u=i(8095),c=i(8782),f=i(9541),v=i(7578),p=i(5888),m=i(2989),b=i(7608),h=i(5248),g=i(3329),x=function(){return(0,v.un)()};n.default=function(e){var n,i=e.onClose,x=(e._id,(0,f.J)()),Z=x.state.formData,S=x.setData,j=(0,m.xj)(),y=(0,m.G2)({_id:null===(n=j.query)||void 0===n?void 0:n.offerId});return(0,a.useEffect)((function(){}),[]),(0,g.jsx)(t.Z,{title:(0,l.t)("Create offer"),onClose:i,children:(0,g.jsx)(v.f4,{value:x,children:(0,g.jsxs)(u.ZP,{padding:"0 8px 16px",children:[(0,g.jsx)(s.B,{defaultValues:Z,onSuccess:function(e){var n=e.data;S("formData",(0,d.xT)(n)),j.push({query:{offerId:null===n||void 0===n?void 0:n._id}})},type:null===Z||void 0===Z?void 0:Z.type}),y&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b.A,{offer:y,defaultValues:null===Z||void 0===Z?void 0:Z.categories,disabled:!Z}),(0,g.jsx)(c.R,{offer:y,defaultValues:null===Z||void 0===Z?void 0:Z.properties,disabled:!Z}),(0,g.jsx)(h.L,{expandable:!0,isOpen:!1,offer:y,defaultState:null===y||void 0===y?void 0:y.price,price:null===y||void 0===y?void 0:y.price,title:(0,l.t)("Price")}),(0,g.jsx)(p.A,{offer:y,defaultValues:null===Z||void 0===Z?void 0:Z.images,disabled:!Z}),(0,g.jsx)(o.A,{offer:y,defaultValues:null===Z||void 0===Z?void 0:Z.dimensions,disabled:!Z}),(0,g.jsx)(r.n,{offer:y,defaultValues:null===Z||void 0===Z?void 0:Z.measurement,disabled:!Z})]})]})})})}}}]);
//# sourceMappingURL=494.eb62c99d.chunk.js.map