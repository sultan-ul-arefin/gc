(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{vhqn:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),i=n("tyNb"),r=n("fXoL"),a=n("H+bZ"),c=n("2Rin"),d=n("xJkR");const s=function(){return{"border-radius":"5px",height:"10px",width:"100%"}};function p(t,e){1&t&&r["\u0275\u0275element"](0,"ngx-skeleton-loader",4),2&t&&r["\u0275\u0275property"]("theme",r["\u0275\u0275pureFunction0"](1,s))}const l=function(){return[1,2,3,4,5,6,7,8,9]};function g(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275template"](1,p,1,2,"ngx-skeleton-loader",3),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",r["\u0275\u0275pureFunction0"](1,l)))}function u(t,e){if(1&t&&r["\u0275\u0275element"](0,"p",5),2&t){const t=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("innerHTML",t.getContent(),r["\u0275\u0275sanitizeHtml"])}}const f=[{path:"",component:(()=>{class t{constructor(t,e){this.api=t,this.util=e,this.loaded=!1,this.api.post("pages/getById",{id:4}).then(t=>{console.log(t),this.loaded=!0,t&&200===t.status&&t.data.length>0&&(this.content=t.data[0].content)},t=>{console.log(t),this.loaded=!0,this.util.errorMessage(this.util.translate("Something went wrong"))})}ngOnInit(){}getContent(){return this.content}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](c.a))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-refund-policy"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"theme",4,"ngFor","ngForOf"],[3,"theme"],[3,"innerHTML"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275template"](1,g,2,2,"div",1),r["\u0275\u0275template"](2,u,1,1,"p",2),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!e.loaded),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.loaded))},directives:[o.NgIf,o.NgForOf,d.a],styles:[".back_image[_ngcontent-%COMP%]{width:100%;height:500px;background-repeat:no-repeat;background-size:cover;background-position:50%}.head_title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #d3d3d3;margin-bottom:15px}.head_title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;font-size:26px;text-transform:capitalize}.content[_ngcontent-%COMP%]{font-weight:400;margin-top:30px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:23px;margin-bottom:10px;font-size:15px}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.h.forChild(f)],i.h]}),t})();var m=n("dbUT"),x=n("PCNd");n.d(e,"RefundPolicyModule",(function(){return y}));let y=(()=>{class t{}return t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.CommonModule,h,m.m.forRoot(),x.a]]}),t})()}}]);