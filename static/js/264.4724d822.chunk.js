"use strict";(self.webpackChunkcounter_app_ts=self.webpackChunkcounter_app_ts||[]).push([[264],{7264:function(e,o,a){a.r(o);var i=a(1413),d=a(6600),t=a(6105),f=a(6522),l=a(1185),n=a(2791),r=a(3691),u=a(4826),s=a(9701),v=a(8095),c=a(6653),p=a(6492),m=a(9953),x=a(3383),D=a(9541),_=a(7578),h=a(7109),j=a(2913),g=a(2353),Z=a(163),b=a(3023),y=a(3329);o.default=function(e){var o,a,V,C,S,k,I,L,O,T,A,P,w,F=e.onClose,G=e._id,H=e.copy,R=(0,Z.G2)({id:G}),U=(0,j.Z)(),q=(0,D.J)({offer_refresh:{content:"Refreshing..."},offer_update:{content:"Updating..."}},{formData:R?(0,l.xT)(R):{type:r.iv.GOODS}}),z=q.setData,B=q.state,E=H?null===(o=B.formData)||void 0===o?void 0:o._id:G,J=(0,Z.xj)();return(0,n.useEffect)((function(){U.getProductFullInfo({data:{_id:G},onSuccess:q.onSuccess("offer_refresh",(function(e){H&&(e._id=""),z("formData",(0,l.xT)(e)),J.push({query:{offerId:G}})})),onLoading:q.onLoading("offer_refresh")})}),[G,H]),(0,y.jsx)(t.Z,{fillHeight:!0,title:H?(0,f.t)("Copy offer"):(0,f.t)("Update offer"),onClose:F,extraHeader:(0,y.jsx)(m.Z,{filterOptions:x.jI,defaultValue:null!==(a=null===B||void 0===B||null===(V=B.formData)||void 0===V?void 0:V.type)&&void 0!==a?a:void 0,preventFilter:!0,onOptSelect:function(e){z("formData",(function(o){return(0,i.Z)((0,i.Z)({},o),{},{type:e.value})}))}}),children:(0,y.jsx)(_.f4,{value:q,children:null!==(C=q.isLoading)&&void 0!==C&&C.offer?(0,y.jsxs)(v.ZP,{fillWidth:!0,padding:"24px",alignItems:"center",gap:16,children:[(0,y.jsx)(c.$,{size:52}),(0,y.jsx)(p.x,{children:(0,f.t)("Loading info about offer...")})]}):(0,y.jsxs)(v.ZP,{padding:"0 8px 16px",children:[(0,y.jsx)(s.B,{_id:E,edit:!H,type:null===(S=B.formData)||void 0===S?void 0:S.type,defaultValues:null===B||void 0===B?void 0:B.formData,onSuccess:function(e){z("formData",H?(0,i.Z)((0,i.Z)({},(0,l.xT)(e)),{},{_id:e._id}):(0,l.xT)(e))}}),(0,y.jsx)(b.A,{_id:E,offer:R,defaultValues:null===(k=B.formData)||void 0===k?void 0:k.categories,disabled:!B.formData}),(0,y.jsx)(h.R,{_id:E,offer:R,defaultValues:null===(I=B.formData)||void 0===I?void 0:I.properties,disabled:!B.formData}),(0,y.jsx)(d.A,{offer:R,defaultValues:null===(L=B.formData)||void 0===L?void 0:L.dimensions,disabled:H?!(null!==(O=B.formData)&&void 0!==O&&O._id&&B.formData):!G,_id:E}),(0,y.jsx)(u.n,{offer:R,defaultValues:null===(T=B.formData)||void 0===T?void 0:T.measurement,disabled:H?!(null!==(A=B.formData)&&void 0!==A&&A._id&&B.formData):!G,_id:E}),(0,y.jsx)(g.A,{offer:R,defaultValues:null===B||void 0===B||null===(P=B.formData)||void 0===P?void 0:P.images,disabled:!(null!==B&&void 0!==B&&B.formData),_id:H?null===B||void 0===B||null===(w=B.formData)||void 0===w?void 0:w._id:G})]})})})}}}]);
//# sourceMappingURL=264.4724d822.chunk.js.map